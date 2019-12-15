const router = require('express').Router();
const Users = require('../users/users-model.js');
const checkAuth = require('./checkAuth.js');

const db = require('../data/dbConfig.js');


// /api/users
router.post('/', (req, res) => {
    const user = req.body;

    Users.addUser(user)
        .then(newUser => {
            res.status(201).json(newUser);
        })
        .catch(err => {
            res.status(500).json({ message: 'An error occured while trying to register the user.', error: err })
        })
})


module.exports = router;