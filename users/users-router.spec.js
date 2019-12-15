const request = require('supertest');
const server = require('../api/server.js');

const genToken = require('../auth/generateToken-helper.js');

describe('users-router.js tests', () => {

    describe('GET users at endpoint /api/users', () => {
        it('should return 200 OK', () => {
            return request(server).get('/api/users')
                    .then(res => {
                        expect(res.status).toBe(200);
                    })
        });

        it('should return a json object', () => {
            return request(server).get('/api/users')
                    .then(res => {
                        expect(res.type).toBe('application/json');
                    })
        });
    });

    // describe('Get restricted users at endpoint /api/users/restricted', () => {
    //     it('should return 200 OK', () => {
    //         const token = genToken({id: 1, username: 'Micah'});
    //         return request(server).get('/api/users/restricted').set('Authorization', 'Bearer ' + token)
    //                 .then(res => {
    //                     expect(res.status).toBe(200);
    //                 })
    //     });
    // })
});
