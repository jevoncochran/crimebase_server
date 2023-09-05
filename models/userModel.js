import db from "../data/dbConfig.js";

const createUser = async (user) => {
  return db("users")
    .insert(user, "id")
    .then((ids) => {
      const [id] = ids;
      return findUserBy(id);
    });
};

const findUserBy = async (filter) => {
  return db("users").where(filter).first();
};

export default { createUser, findUserBy };
