/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", (tbl) => {
    tbl.increments();

    tbl.string("firstName", 50).notNullable();

    tbl.string("middleName", 50);

    tbl.string("lastName", 50).notNullable();

    tbl.string("email", 50).notNullable();

    tbl.string("username", 50).notNullable();

    tbl.string("password", 50).notNullable();

    tbl.boolean("restricted");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
