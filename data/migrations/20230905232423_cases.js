/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema

    .createTable("threads", (tbl) => {
      tbl.increments();
    })

    .createTable("caseTypes", (tbl) => {
      tbl.increments();

      tbl.string("type").notNullable();
    })

    .createTable("cases", (tbl) => {
      tbl.increments();

      // This is how cases get connected to other cases
      tbl
        .integer("threadId")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("threads")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      tbl.string("title").notNullable();

      tbl.text("summary");

      // TODO: Figure out a more precise way to do this
      tbl.string("location").notNullable();

      tbl.string("mainImageUrl");

      tbl.enu("status", ["open", "solved"]).notNullable();

      tbl.boolean("buzzing");
    })

    .createTable("typeAssignments", (tbl) => {
      tbl.increments();

      tbl
        .integer("typeId")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("caseTypes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

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
  return knex.schema
    .dropTableIfExists("typeAssignments")
    .dropTableIfExists("cases")
    .dropTableIfExists("caseTypes")
    .dropTableIfExists("threads");
}
