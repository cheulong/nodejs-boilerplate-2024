import { Router } from "express";
import {
  currentUser,
  loginUser,
  registerUser,
} from "../controllers/userController";
import validateTokenHandler from "../middlewares/validateTokenHandler";

const router = Router();

/**
 * @openapi
 * /api/register:
 *  post:
 *    summary: Register a new user
 *    tags:
 *      - Auth
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              username:
 *                type: string
 *                example: "doggie"
 *              email:
 *                type: string
 *                example: "name"
 *              password:
 *                type: string
 *                example: "1234"
 *    responses:
 *      200:
 *        description: Successfully fetched all contacts
 *      401:
 *        description: Unauthorized
 *      500:
 *        description: Internal server error
 *      400:
 *        description: Bad request
 *      403:
 *        description: Forbidden
 *      404:
 *        description: Not found
 */

router.route("/register").post(registerUser);

/**
 * @openapi
 * /api/login:
 *  post:
 *    summary: Login a user
 *    tags:
 *      - Auth
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                example: "name"
 *              password:
 *                type: string
 *                example: "1234"
 *    responses:
 *      200:
 *        description: Successfully fetched all contacts
 *      401:
 *        description: Unauthorized
 *      500:
 *        description: Internal server error
 *      400:
 *        description: Bad request
 *      403:
 *        description: Forbidden
 *      404:
 *        description: Not found
 */

router.route("/login").post(loginUser);

/**
 * @openapi
 * /api/current:
 *  get:
 *    summary: Get current user
 *    tags:
 *      - Auth
 *    responses:
 *      200:
 *        description: Successfully fetched all contacts
 *      401:
 *        description: Unauthorized
 *      500:
 *        description: Internal server error
 *      400:
 *        description: Bad request
 *      403:
 *        description: Forbidden
 *      404:
 *        description: Not found
 */

router.route("/current").get(validateTokenHandler, currentUser);

export default router;
