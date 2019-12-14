const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');


// my middleware
// function logger(req, res, next) {
//     console.log({
//         request_method: req.method,
//         request_url: req.url,
//         timestamp: Date().toString()
//     });
//     next();
// };



module.exports = server => {
    server.use(helmet());
    server.use(express.json());
    server.use(cors());
    server.use(morgan('short'));
}