import { Router } from "express";
import {
  getAllContacts,
  createNewContact,
  getContactById,
  updateContactById,
  deleteContactById,
} from "../controllers/contactControllers";
import validateTokenHandler from "../middlewares/validateTokenHandler";

const router = Router();

// router.use(validateTokenHandler);

/**
 * @openapi
 * /api/contacts:
 *  get:
 *    summary: Get all contacts
 *    tags:
 *      - Contact
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
 *  post:
 *    summary: Create new contact
 *    tags:
 *      - Contact
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: "doggie"
 *              email:
 *                type: string
 *                example: "name"
 *              phone:
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

router.route("/").get(getAllContacts).post(createNewContact);

/**
 * @openapi
 * /api/contacts/{id}:
 *  get:
 *    summary: Get a contact
 *    tags:
 *      - Contact
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
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
 *  put:
 *    summary: update a contact
 *    tags:
 *      - Contact
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: "doggie"
 *              email:
 *                type: string
 *                example: "name"
 *              phone:
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
 *  delete:
 *    summary: delete a contact
 *    tags:
 *      - Contact
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
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

router
  .route("/:id")
  .get(getContactById)
  .put(updateContactById)
  .delete(deleteContactById);

export default router;
