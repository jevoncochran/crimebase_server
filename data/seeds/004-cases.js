/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function seed(knex) {
  return knex("cases").insert([
    {
      threadId: 1,
      title: "The Idaho College Murders",
      summary:
        "In the early morning hours of November 13, 2022, four University of Idaho college students were stabbed to death in a shared rental home close to campus. Two female victims—Madison Mogen and Xana Kernodle—lived at the house, while Kaylee Goncalves recently moved out of the house but returned to the house to attend a nearby party. The fourth victim, Ethan Chapin, was Kernodle's boyfriend who was sleeping over on the night of the attacks. Two other female roommates also lived at the house; they were not attacked.",
      location: "Moscow, Idaho, U.S.",
      mainImageUrl:
        "https://res.cloudinary.com/dqhfx5f07/image/upload/v1693971054/6372dbb63f7b8.image_ibgxhf.webp",
      status: "solved",
      buzzing: true,
    },
  ]);
}
