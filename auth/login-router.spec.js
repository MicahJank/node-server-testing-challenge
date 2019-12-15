const request = require('supertest');
const server = require('../api/server.js');


describe('login router testing', () => {
    describe('POST login at endpoint /api/login', () => {
        it('should return 200 OK', () => {
            const user = {
                username: "Micah",
                password: "myamazingpassword"
            }
            return request(server).post('/api/login').send(user)
                    .then(res => {
                        expect(res.status).toBe(200);
                    })
        });

        it('should return a json object', async () => {
            const user = {
                username: "Micah",
                password: "myamazingpassword"
            }
            const res = await request(server).post('/api/login').send(user)
            expect(res.type).toBe('application/json');
        })
    })
})