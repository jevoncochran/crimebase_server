import * as authService from "../services/authService.js";

// @desc Register contributor
// @route POST /api/auth
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

export { registerContributor };
