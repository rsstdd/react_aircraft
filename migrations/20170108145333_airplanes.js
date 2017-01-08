'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('airplanes', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('');
    table.text('description').notNullable().defaultTo('');
    table.integer('year_in_service').notNullable();
    table.string('country_of_origin').notNullable();
    table.text('operators').notNullable().defaultTo('');
    table.integer('max_speed').notNullable();
    table.integer('max_range').notNullable();
    table.integer('ceiling').notNullable();
    table.text('engines').notNullable().defaultTo('');
    table.text('img_url').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('airplanes');
};
