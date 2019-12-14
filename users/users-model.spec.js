const Users = require('./users-model.js');
const db = require('../data/dbConfig.js');

describe('users model testing', () => {
    
    describe('addUser', () => {
        it('should add the user to the database and return that added user', async () => {
            await db('users').truncate(); // <- refresh the users before adding them otherwise SQL unique constraint will fail
            const newUser = await Users.addUser({username: 'Micah', password: 'CoolNewPassword'});
            const newUser2 = await Users.addUser({username: 'John', password: 'ImaNewPasswordMan'});
            
            const users = await db('users');

            expect(users).toHaveLength(2);
            expect(newUser.username).toBe('Micah');
            expect(newUser2.username).toBe('John');

            
        })
    })

    describe('find', () => {
        it('should find and return all the users in the database', async () => {
            const users = await Users.find();

            expect(users).toHaveLength(2);
        });
        
    });

    describe('findById', () => {
        it('should find the user by the passed in id and return that user', async () => {
            const user = await Users.findById(2);

            expect(user.username).toBe('John');
        });
    });

    describe('removeUser', () => {
        it('should remove the user with the specified id from the database and return the array of users with the user removed', async () => {
            const userList = await Users.removeUser(2);

            expect(userList).toHaveLength(1);
        })
    })
})