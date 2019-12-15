const router = require('express').Router();
const Users = require('../users/users-model.js');

const bcrypt = require('bcryptjs');

const genToken = require('./generateToken-helper.js');


// /api/users
router.post('/', (req, res) => {
    let user = req.body;

    const hash = bcrypt.hashSync(user.password, 4);
    user.password = hash;

    Users.addUser(user)
        .then(newUser => {
            const token = genToken(newUser);
            res.status(201).json({ created_user: newUser, token: token });
        })
        .catch(err => {
            res.status(500).json({ message: 'An error occured while trying to register the user.', error: err })
        })
})


module.exports = router;