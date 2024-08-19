import { Router } from "express";
import {
  currentUser,
  loginUser,
  registerUser,
} from "../controllers/userController";
import validateTokenHandler from "../middlewares/validateTokenHandler";

const router = Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/current").get(validateTokenHandler, currentUser);

export default router;
