exports.up = function(knex) {
    return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('tel').notNullable();
        table.string('city').notNullable();
        table.string('district').notNullable();
        table.string('country').notNullable();
    });
  };
  exports.down = function(knex) {
   return knex.schema.dropTable('ongs');
  };