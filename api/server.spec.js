// when we try to test our server - our tests will error out if we dont use supertest. This is because each test will try to run the server on the same port which is not allowed
// this is why we use supertest - it allows us to have each test run on a different port simultaneously

const server = require('./server.js');
const request = require('supertest');


describe('server.js', () => {
    //------------------------------------------------------------------------//
    //
    // simple test to verify if we are in the right environment... our expected
    // results would be wrong if we are in the wrong environment.
    //
    // read up on the jest "--bail" flag about how you could prevent any other
    // tests from running (and potentially truncate()'ing the wrong DB, etc.) if
    // a test fails...
    //
    // it's not perfect, as it stops ALL test suites upon a failure of ANY test,
    // but it's a start...
    //
    // from what I have read, adding an ability for a failed test to stop the
    // current suite, or all suites, configurably, is something that is often
    // requested from jest... maybe it will be there some day.

    test('should be the testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing');
    })

    describe('GET /', () => {
        // async await
        // it('should return 200 OK', async () => {
        //     const res = await request(server).get('/');
        //     expect(res.status).toBe(200);
        // })

        it('should return 200 OK', () => {
            return request(server).get('/')
                    .then(res => {
                        expect(res.status).toBe(200);
                    });
        });

        it('should be a string', () => {
            return request(server).get('/')
                    .then(res => {
                        expect(res.type).toBe('text/html');
                    });
        });

        it('should return the right string', () => {
            return request(server).get('/')
                    .then(res => {
                        expect(res.text).toMatch(/Welcome to my backend server for testing!/);
                    });
        }); 
    })
})