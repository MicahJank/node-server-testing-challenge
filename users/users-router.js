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
router.delete('/:id', (req, res) => {
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

module.exports = router;