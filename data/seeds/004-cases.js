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
    {
      threadId: 2,
      title: "The Gilgo Beach Murders",
      summary:
        "A series of murders between 1996 and 2011 in which the remains of 11 people were found on the South Shore of Long Island, New York",
      location: "Gilgo Beach, NY, U.S.",
      mainImageUrl:
        "https://res.cloudinary.com/dqhfx5f07/image/upload/v1694030501/long-island-serial-killer_vyc6w0.jpg",
      status: "open",
      buzzing: true,
    },
    {
      threadId: 3,
      title: "The Delphi Murders",
      summary:
        "On February 14, 2017, the bodies of Abigail Williams and Liberty German were discovered near the Monon High Bridge Trail, part of the Delphi Historic Trails in Delphi, Indiana, U.S., after the girls had disappeared from that trail the previous day. ",
      location: "Delphi, IN, U.S.",
      mainImageUrl:
        "https://res.cloudinary.com/dqhfx5f07/image/upload/v1694031425/afcf5ffb68f24e97a5fe3c51d23c1468_md_hnlwfm.jpg",
      status: "solved",
      buzzing: true,
    },
    {
      threadId: 4,
      title: "The Murder of Rebecca Jenkins and Desiree",
      summary:
        "Authorities allege that Antonio Lamont Powell killed his girlfriend Rebecca Jenkins while her one-year-old baby was with her in bed. Miraculously, the baby survived. He then reportedly shot and killed Jenkins’ 13-year-old daughter Desiree, according to the DA’s office. Another child visiting for a sleepover was also shot during Powell’s “violent spree,” the DA said.",
      location: "Oakland, CA, U.S.",
      mainImageUrl:
        "https://res.cloudinary.com/dqhfx5f07/image/upload/v1694033585/Screen-Shot-2023-04-24-at-3.02.15-PM_xjrzre.webp",
      status: "solved",
      buzzing: false,
    },
  ]);
}
