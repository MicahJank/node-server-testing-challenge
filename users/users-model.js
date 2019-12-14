const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findById,
    addUser,
    removeUser,
}


function find() {
    return db('users');
}

function findById(id) {
    return db('users').where({id}).first();
}

function addUser(user) {
    return db('users').insert(user)
           .then(ids => {
               const [id] = ids;
               return findById(id)
           }) 
}

function removeUser(id) {
    return db('users').where('id', id).del()
            .then(count => {
                return db('users');
            })
            .then(users => {
                return users
            })
}