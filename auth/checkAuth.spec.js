const server = require('../api/server.js');
const request = require('supertest');

const checkAuth = require('./checkAuth.js');

describe('checkAuth middlware', () => {

    const token = 'Bearer asdfalkjsdfl;jaslkfjasfjkhasdfkjhasdkfhasdkfashd';

    it('should have a token in the req.headers.authorization', () => {
        // return request(server).get('/api/users/restricted', checkAuth).set('Authorization', token)
        //         .then(res => {
        //         console.log("TCL: res", res.body)
        //             expect(res.headers.token).toBeDefined();
        //         })
    })
})