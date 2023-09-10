import * as authService from "../services/authService.js";
import bcrypt from "bcryptjs";

// @desc Register contributor
// @route POST /api/auth/register
// @access Public
const registerContributor = async (req, res) => {
  let { firstName, middleName, lastName, email, username, password } = req.body;

  // Validate that required fields are not empty
  const isRequiredFieldEmpty =
    !firstName || !lastName || !email || !username || !password;

  if (isRequiredFieldEmpty) {
    res.status(400).json({ errMsg: "Please add all fieds" });
  }

  // Validate that contributor does not already exist
  const contributorExists = await authService.findContributor(email);

  if (contributorExists) {
    res.status(400).json({ errMsg: "User already exists" });
  }

  try {
    const newContributor = await authService.registerContributor({
      firstName,
      middleName,
      lastName,
      email,
      username,
      password,
    });

    res.status(201).json(newContributor);
  } catch (error) {
    console.log(err);
    res.status(500).json({ errMsg: "Unable to create user" });
  }
};

// @desc Login contributor
// @route POST /api/auth/login
// @access Public
const loginContributor = async (req, res) => {
  const { email, password } = req.body;

  // Validate that required fields are not empty
  const isRequiredFieldEmpty = !email || !password;
  if (isRequiredFieldEmpty) {
    res.status(400).json({ errMsg: "Missing email or password" });
  }

  // Check to see if contributor exists
  const contributor = await authService.findContributor(email);
  if (!contributor) {
    res.status(401).json({ errMsg: "Incorrect email or password" });
  }

  // Validate password
  const correctPassword = await bcrypt.compare(password, contributor.password);
  if (!correctPassword) {
    res.status(401).json({ errMsg: "Incorrect email or password" });
  }
  // console.log(contributor);

  // Remove password from contributor object
  delete contributor.password;
  console.log("SUCCESSFULLY SIGNED IN");
  res.status(200).json(contributor);
};

export { registerContributor, loginContributor };
