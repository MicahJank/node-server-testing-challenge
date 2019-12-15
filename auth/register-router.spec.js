const request = require('supertest');
const server = require('../api/server.js');

const db = require('../data/dbConfig.js');

describe('register router', () => {

    describe('GET users at endpoint /api/users', () => {
        it('should return 201 OK', () => {
            return db('users').truncate() // <- truncate first so this test doesnt mess up and keep trying to register the same user over and over
                    .then(() => {
                       return request(server).post('/api/register').send({username: 'Laryna', password: 'mysecretpassword'})
                    })
                    .then(res => {
                        expect(res.status).toBe(201);
                        expect(res.type).toBe('application/json');
                    })
           
        });

    });
});