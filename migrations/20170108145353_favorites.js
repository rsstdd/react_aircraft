
exports.up = function(knex) {
  return knex.schema.createTable('favorites', (table) => {
    table.increments();
    table.integer('airplane_id')
      .notNullable()
      .references('id')
      .inTable('airplanes')
      .onDelete('CASCADE')
      .index();
    table.string('user_id')
      .notNullable()
      .references('auth_id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('favorites');
};
