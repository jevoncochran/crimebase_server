/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function seed(knex) {
  return knex("typeAssignments").insert([
    { typeId: 1, caseId: 1 },
    { typeId: 1, caseId: 2 },
    { typeId: 1, caseId: 3 },
    { typeId: 1, caseId: 4 },
    { typeId: 1, caseId: 5 },
    { typeId: 1, caseId: 6 },
    { typeId: 1, caseId: 7 },
  ]);
}
