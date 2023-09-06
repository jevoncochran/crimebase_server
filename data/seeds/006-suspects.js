/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function seed(knex) {
  return knex("suspects").insert([
    {
      name: "Bryan Christopher Kohberger",
      mainImageUrl:
        "https://res.cloudinary.com/dqhfx5f07/image/upload/v1693979407/cd0f845a878a43c8b1d22fe70ec64061_xl_fvmdca.webp",
      status: "incarcerated",
    },
  ]);
}
