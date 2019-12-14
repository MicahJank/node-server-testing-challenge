
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments(); // <- gives us the id
    tbl.string('username', 255).notNullable().unique(); // <- users may have the same NAME - but a username should be unique to each person registering
    tbl.string('password', 255).notNullable(); // <- users can have the same password
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users'); // <- run knex migrate:rollback to undo the up function
};
