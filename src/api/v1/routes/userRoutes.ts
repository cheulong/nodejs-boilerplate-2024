import { Router } from "express";
import {
  currentUser,
  loginUser,
  registerUser,
} from "../controllers/userController";

const router = Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/current").post(currentUser);

export default router;
