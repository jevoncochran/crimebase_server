/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function seed(knex) {
  return knex("threads").insert([{ id: 1 }, { id: 2 }, { id: 3 }]);
}
