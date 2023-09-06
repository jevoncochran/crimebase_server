/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function seed(knex) {
  return knex("victims").insert([
    { name: "Madison Mogen", fate: "murdered", caseId: 1 },
    { name: "Xana Kernodle", fate: "murdered", caseId: 1 },
    { name: "Kaylee Goncalves", fate: "murdered", caseId: 1 },
    { name: "Ethan Chapin", fate: "murdered", caseId: 1 },
  ]);
}
