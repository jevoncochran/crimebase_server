import bcrypt from "bcryptjs";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function seed(knex) {
  return knex("users").insert([
    {
      firstName: "Jevon",
      lastName: "Cochran",
      email: "jevon.cochran@gmail.com",
      username: "jevonc",
      password: bcrypt.hashSync("cochran", 8),
    },
    {
      firstName: "Kianna",
      lastName: "Pinkney",
      email: "kianna.pinkney@gmail.com",
      username: "kiannap",
      password: bcrypt.hashSync("pinkney", 8),
    },
    {
      firstName: "Leroy",
      lastName: "Gatlin",
      email: "leroy.gatlin@gmail.com",
      username: "leroyg",
      password: bcrypt.hashSync("gatlin", 8),
    },
  ]);
}
