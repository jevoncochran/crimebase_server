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
    {
      name: "Ivory Bivens",
      mainImageUrl:
        "https://res.cloudinary.com/dqhfx5f07/image/upload/v1694035151/FuhHvBzaIAIWrSZ_hvz4yl.jpg",
      status: "incarcerated",
    },
    {
      name: "Trevor Green",
      mainImageUrl:
        "https://res.cloudinary.com/dqhfx5f07/image/upload/v1694035206/FyCEINUaYAE0myc_nkfkk1.jpg",
      status: "incarcerated",
    },
    {
      name: "Samantha Johson",
      mainImageUrl:
        "https://res.cloudinary.com/dqhfx5f07/image/upload/v1694035860/samantha-MUG2_koy0av.webp",
      status: "incarcerated",
    },
    {
      name: "Dhante Jackson",
      mainImageUrl:
        "https://res.cloudinary.com/dqhfx5f07/image/upload/v1694035957/california-8-yo-killer-arrested-005_a2o1km.webp",
      status: "incarcerated",
    },
    {
      name: "Test Suspect",
      mainImageUrl:
        "https://res.cloudinary.com/dqhfx5f07/image/upload/v1694035957/california-8-yo-killer-arrested-005_a2o1km.webp",
      status: "incarcerated",
    },
  ]);
}
