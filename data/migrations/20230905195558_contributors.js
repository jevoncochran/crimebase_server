/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("contributors", (tbl) => {
    tbl.increments();

    tbl.string("firstName", 50).notNullable();

    tbl.string("middleName", 50);

    tbl.string("lastName", 50).notNullable();

    tbl.string("email", 50).notNullable();

    tbl.string("username", 50).notNullable();

    tbl.string("password", 50).notNullable();

    tbl.boolean("restricted");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTableIfExists("contributors");
}
