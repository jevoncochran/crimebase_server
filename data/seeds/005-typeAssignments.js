/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function seed(knex) {
  return knex("typeAssignments").insert([{ typeId: 1, caseId: 1 }]);
}
