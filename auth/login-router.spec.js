const request = require('supertest');
const server = require('../api/server.js');

const db = require('../data/dbConfig.js');


describe('login router testing', () => {
    describe('POST login at endpoint /api/login', () => {
        // register a new user before logging in
        const user = {
            username: "Ryan",
            password: "myamazingpassword"
        }
        registerUser(user);

        // login the newly registered user
        it('should return 200 OK', () => {
            return request(server).post('/api/login').send(user)
                    .then(res => {
                        expect(res.status).toBe(200);
                    })
        });

        it('should return a json object', async () => {
            const res = await request(server).post('/api/login').send(user)
            expect(res.type).toBe('application/json');
        })

    });



})


function registerUser(user) {
    clearDB(); // <-- clears the database before registering a new user to prevent errors
    return request(server).post('/api/register').send(user)
            .then(res => {
                return res;
            })
};

async function clearDB() {
    await db('users').truncate();
}