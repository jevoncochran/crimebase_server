/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function seed(knex) {
  return knex("suspects").insert([
    { name: "Bryan Christopher Kohberger", status: "incarcerated" },
  ]);
}
