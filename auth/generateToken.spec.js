const genToken = require('./generateToken-helper.js');

describe('generate token helper function', () => {
    
    it('should generate the token', () => {
        const token = genToken({id: 1, username: 'Micah'});

        expect(token).toBeDefined();
        expect(token).toBeTruthy();
        expect(token).not.toBeNull();
        expect(typeof token).toBe('string');
    })
})