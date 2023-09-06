/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return (
    knex.schema

      .createTable("suspects", (tbl) => {
        tbl.increments();

        tbl.string("name").notNullable();

        tbl.string("mainImageUrl");

        tbl.enum("status", ["dead", "incarcerated", "wanted"]);
      })

      // This is how suspects get connected to cases
      .createTable("suspectAssignments", (tbl) => {
        tbl.increments();

        tbl
          .integer("caseId")
          .notNullable()
          .unsigned()
          .references("id")
          .inTable("cases")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");

        tbl
          .integer("suspectId")
          .notNullable()
          .unsigned()
          .references("id")
          .inTable("suspects")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");

        tbl.enu("status", ["confirmedAsPerp", "cleared"]);
      })
  );
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema
    .dropTableIfExists("suspectAssignments")
    .dropTableIfExists("suspects");
}
