/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function seed(knex) {
  return knex("victims").insert([
    {
      name: "Madison Mogen",
      mainImageUrl:
        "https://res.cloudinary.com/dqhfx5f07/image/upload/v1693979537/221117120340-04-university-of-idaho-killings-victims-mogen_a0kk43.jpg",
      fate: "murdered",
      caseId: 1,
    },
    {
      name: "Xana Kernodle",
      mainImageUrl:
        "https://res.cloudinary.com/dqhfx5f07/image/upload/v1693979628/xana-kernodle-4_dle74f.webp",
      fate: "murdered",
      caseId: 1,
    },
    {
      name: "Kaylee Goncalves",
      mainImageUrl:
        "https://res.cloudinary.com/dqhfx5f07/image/upload/v1693979703/b7d4611c-3552-4f1a-9a7a-105e55deff4b_1140x641_znwhax.jpg",
      fate: "murdered",
      caseId: 1,
    },
    {
      name: "Ethan Chapin",
      mainImageUrl:
        "https://res.cloudinary.com/dqhfx5f07/image/upload/v1693979772/221116-Ethan-Chapin-al-1307-b33d5f_zcvuym.webp",
      fate: "murdered",
      caseId: 1,
    },
  ]);
}
