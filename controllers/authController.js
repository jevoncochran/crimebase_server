import * as authService from "../services/authService.js";

// @desc Register user
// @route POST /api/auth
// @access Public
const registerUser = async (req, res) => {
  let { firstName, middleName, lastName, email, username, password } = req.body;

  // Validate that required fields are not empty
  const isRequiredFieldEmpty =
    !firstName || !lastName || !email || !username || !password;

  if (isRequiredFieldEmpty) {
    res.status(400).json({ errMsg: "Please add all fieds" });
  }

  // Validate that user does not already exist
  const userExists = await authService.findUser(email);

  if (userExists) {
    res.status(400).json({ errMsg: "User already exists" });
  }

  try {
    const newUser = await authService.registerUser({
      firstName,
      middleName,
      lastName,
      email,
      username,
      password,
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.log(err);
    res.status(500).json({ errMsg: "Unable to create user" });
  }
};



export { registerUser };
