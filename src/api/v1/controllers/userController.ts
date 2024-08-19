import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//@desc Register user
//@route POST api/users/register
//@access Public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Username, email and password are required");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ username, email, password: hashedPassword });
  if (user) {
    res
      .status(201)
      .json({ _id: user._id, username, email, password: hashedPassword });
  } else {
    res.status(400);
    throw new Error("User registration failed");
  }
  res.status(200).json({ message: "User registered successfully" });
});

//@desc Login user
//@route POST api/users/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Email and password are required");
  }
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    console.log({ user });
    const accessToken = await jwt.sign(
      {
        user: {
          _id: user._id,
          username: user.username,
          email: user.email,
        },
      },
      process.env.JWT_SECRET ?? "",
      {
        expiresIn: "1m",
      },
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(400);
    throw new Error("Invalid email or password");
  }
});

//@desc Current user info
//@route POST api/users/current
//@access Private
const currentUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Current user" });
});

export { registerUser, loginUser, currentUser };
