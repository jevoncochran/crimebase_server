/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function seed(knex) {
  return knex("suspectAssignments").insert([
    { caseId: 1, suspectId: 1, status: "confirmedAsPerp" },
    { caseId: 2, suspectId: 2, status: "confirmedAsPerp" },
    { caseId: 3, suspectId: 3, status: "confirmedAsPerp" },
    { caseId: 4, suspectId: 4, status: "confirmedAsPerp" },
    { caseId: 5, suspectId: 5, status: "confirmedAsPerp" },
    { caseId: 5, suspectId: 6, status: "confirmedAsPerp" },
    { caseId: 6, suspectId: 7, status: "confirmedAsPerp" },
    { caseId: 6, suspectId: 8, status: "confirmedAsPerp" },
    { caseId: 7, suspectId: 9, status: "confirmedAsPerp" },
  ]);
}
