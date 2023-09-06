/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  return knex("caseTypes").insert([
    { type: "murder" },
    { type: "disappearance" },
    { type: "mysteriousDeath" },
    { type: "terrorism" },
    { type: "rape" },
    { type: "assassination" },
    { type: "attemptedMurder" },
    { type: "massShooting" },
  ]);
}
