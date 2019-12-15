const router = require('express').Router();

const Users = require('./users-model.js');

const checkAuth = require('../auth/checkAuth.js');

// /api/users
router.get('/', (req, res) => {

    Users.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.status(500).json({ message: 'Unable to retrieve the users from the database.', error: err });
        })
})


// /api/users/:id <-- endpoint to delete or get a user by id
router.delete('/:id', verifyId, (req, res) => {
    const { id } = req.params;
    Users.removeUser(id)
         .then(users => {
             res.json(users);
         })
         .catch(err => {
             res.status(500).json({ message: 'There was an error while trying to remove the user from the database', error: err });
         })
})


// /api/users/restricted
// right now these two endpoints are retrieving the same data. Ideally in a real app
// this data would be filtered somehow to show only specific users to those who are authenticated
router.get('/restricted', checkAuth, (req, res) => {

    Users.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.status(500).json({ message: 'Unable to retrieve the users from the database.', error: err });
        })
})

function verifyId(req, res, next) {
    const { id } = req.params;
    if(id) {
        Users.findById(id)
            .then(user => {
                user ? next() : res.status(404).json({ message: 'Couldnt find the provided id in the database.' });
            })
            .catch(err => {
                res.status(500).json({ message: 'Error finding id', error: err });
            });

    } else {
        res.status(400).json({ message: 'No id found the request URL, please check that you are providing an id.' })
    }
}

module.exports = router;