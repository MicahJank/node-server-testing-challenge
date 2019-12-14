const express = require('express');

const configureMiddleware = require('./configureMiddleware.js');


const apiRouter = require('./apiRouter.js');

const server = express();

// if you look at the configureMiddleware file you will see that what is being exported out of that is a function that takes in a server object. What do we do with that server
// object? We call server.use on each piece of middleware. This code below is essentially taking all the middleware from the configureMiddleware file and calling server.use with each
// one.
configureMiddleware(server);

server.use('/api', apiRouter);

server.get('/', (req, res) => {
    res.send('<h1>Welcome to my backend server for testing!</h1>');
});


module.exports = server;