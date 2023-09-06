/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function seed(knex) {
  return knex("suspectAssignments").insert([
    { caseId: 1, suspectId: 1, status: "confirmedAsPerp" },
  ]);
}
