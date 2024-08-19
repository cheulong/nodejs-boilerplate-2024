import { Router } from "express";

const router = Router();

router.route("/register").post((req, res) => {
  res.status(200).json({ message: "User registered successfully" });
});

router.route("/login").post((req, res) => {
  res.status(200).json({ message: "User logged in successfully" });
});

router.route("/current").post((req, res) => {
  res.status(200).json({ message: "Current user" });
});

export default router;
