const request = require('supertest');
const server = require('../api/server.js');

const db = require('../data/dbConfig.js');

const checkAuth = require('../auth/checkAuth.js');

const genToken = require('../auth/generateToken-helper.js');


// here i will make a request to the register endpoint so that we can get a token
// and store it in a variable - from there we can use that token any any
// restricted route that requires authentication

let token;
let id;

beforeAll(done => {
    request(server).post('/api/register').send({ username: 'Jenny', password: 'jennyiscool' })
    .end((err, response) => {
    console.log("TCL: response", response.body)
        token = response.body.token;
        id = response.body.created_user.id;
        done();
    });
});

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

    describe('Get restricted users at endpoint /api/users/restricted', () => {
        // first we need to register a new user and log them in
        it('should require authentication', () => {
            return request(server).get('/api/users/restricted')
                    .then(res => {
                        expect(res.status).toBe(400);
                    })
        });

        it('should respond with JSON', () => {
            // return request(server)
            //         .get('/api/users/restricted')
            //         .set('Authorization', `Bearer ${token}`)
            //         .then(res => {
            //             console.log(token)
            //             expect(res.status).toBe(200);
            //         })
        })
    })

    describe('DELETE the user at the specified endpoint /api/users/:id', () => {
        it('should should return 200 OK', () => {
            return request(server)
                        .delete(`/api/users/${id}`)
                        .then(res => {
                            expect(res.status).toBe(200);
                        })
        })
    })
});


async function clearDB() {
    await db('users').truncate();
}
