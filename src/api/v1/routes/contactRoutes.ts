import { Router } from "express";
import {
  getAllContacts,
  createNewContact,
  getContactById,
  updateContactById,
  deleteContactById,
} from "../controllers/contactControllers";

const router = Router();

router.route("/").get(getAllContacts).post(createNewContact);

router
  .route("/:id")
  .get(getContactById)
  .put(updateContactById)
  .delete(deleteContactById);

export default router;
