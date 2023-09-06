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
    {
      name: "Rex Andrew Heuermann",
      mainImageUrl:
        "https://res.cloudinary.com/dqhfx5f07/image/upload/v1694030845/skynews-rex-heuermann-court-gilgo-beach_6237628_eia7ee.jpg",
      status: "incarcerated",
    },
    {
      name: "Richard Allen",
      mainImageUrl:
        "https://res.cloudinary.com/dqhfx5f07/image/upload/v1694031747/Collage_Maker-15-Jun-2023-06-23-PM-6901_w63ocw_u8dgtz_rhyyqm.jpg",
      status: "incarcerated",
    },
    {
      name: "Antonio Lamont Powell",
      mainImageUrl:
        "https://res.cloudinary.com/dqhfx5f07/image/upload/v1694033738/FumfQJOaEAAOSi9_opjtzk.jpg",
      status: "incarcerated",
    },
  ]);
}
