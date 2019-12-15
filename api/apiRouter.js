const router = require('express').Router();

const registerRouter = require('../auth/register-router.js');
const loginRouter = require('../auth/login-router.js');
const usersRouter = require('../users/users-router.js');

router.use('/register', registerRouter);
router.use('/login', loginRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => {
    res.send('<h1>This is the api</h1>');

})


module.exports = router;