import bcrypt from "bcryptjs";
import Contributors from "../models/contributorModel.js";

const registerContributor = async (contributor) => {
  let { password } = contributor;
  const hash = bcrypt.hashSync(password, 8);
  password = hash;

  return Contributors.createContributor({ ...contributor, password });
};

const findContributor = async (email) => {
  return Contributors.findContributorBy({ email });
};

export { registerContributor, findContributor };
