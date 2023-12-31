/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("victims", (tbl) => {
    tbl.increments();

    tbl.string("name").notNullable();

    tbl
      .enu("fate", ["murdered", "attemptedMurder", "missing", "injured"])
      .notNullable();

    tbl.string("mainImageUrl");

    tbl
      .integer("caseId")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("cases")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTableIfExists("victims");
}
