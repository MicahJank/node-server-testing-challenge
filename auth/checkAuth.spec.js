// i will use the server get request as a test for this
// check auth middleware in production this endpoint wont actually
// need authentication but for testing purposes here i will use it
// like it does

const server = require('../api/server.js');
const request = require('supertest');

const checkAuth = require('./checkAuth.js');

describe('GET / with checkAuth', () => {

    it('should return 200 OK', () => {
        // return request(server).get('/', checkAuth, (req, res) => {

        // })
    })
})