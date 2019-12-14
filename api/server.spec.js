// when we try to test our server - our tests will error out if we dont use supertest. This is because each test will try to run the server on the same port which is not allowed
// this is why we use supertest - it allows us to have each test run on a different port simultaneously

const server = require('./server.js');
const request = require('supertest');

