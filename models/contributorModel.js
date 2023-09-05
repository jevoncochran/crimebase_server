import db from "../data/dbConfig.js";

const createContributor = async (contributor) => {
  return db("contributors")
    .insert(contributor, "id")
    .then((ids) => {
      const [id] = ids;
      return findContributorBy(id);
    });
};

const findContributorBy = async (filter) => {
  return db("contributors").where(filter).first();
};

export default { createContributor, findContributorBy };
