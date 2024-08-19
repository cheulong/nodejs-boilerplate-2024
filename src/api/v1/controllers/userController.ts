import asyncHandler from "express-async-handler";

//@desc Register user
//@route POST api/users/register
//@access Public
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User registered successfully" });
});

//@desc Login user
//@route POST api/users/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User logged in successfully" });
});

//@desc Current user info
//@route POST api/users/current
//@access Private
const currentUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Current user" });
});

export { registerUser, loginUser, currentUser };
