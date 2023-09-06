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
    {
      threadId: 5,
      title: "The Killing of Jasper Wu",
      summary:
        "Jasper Wu, a 23-month-old boy, was shot and killed on an Oakland freeway in November 2021 amid alleged gang activities. In December 2022, three suspects—Johnny Jackson, Trevor Green and Ivory Bivins—were arrested in connection with Wu’s death.",
      location: "Oakland, CA, U.S.",
      mainImageUrl:
        "https://res.cloudinary.com/dqhfx5f07/image/upload/v1694034919/jasper-wu-2000-b4978518d5684604be67973633f251c1_zl5l3r.jpg",
      status: "solved",
      buzzing: false,
    },
    {
      threadId: 6,
      title: "The Murder of Sophia Mason",
      summary:
        "Sophia, who was last seen by extended family in December, was found dead March 11. A missing persons report filed by the girl’s aunt and grandmother a month earlier eventually led police to the Merced home her mother shared with her boyfriend. While searching the house, officers kicked open a locked bathroom door. Inside, an exhaust fan whirred and dead flies littered the floor. Sticks of incense could not mask the smell of the child’s decomposing body.",
      location: "Oakland, CA, U.S.",
      mainImageUrl:
        "https://res.cloudinary.com/dqhfx5f07/image/upload/v1694035515/EBT-L-EDIT-SOPHIA-0703-1_lgixhm.webp",
      status: "solved",
      buzzing: false,
    },
  ]);
}
