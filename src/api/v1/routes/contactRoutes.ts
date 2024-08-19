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

router.use(validateTokenHandler);
router.route("/").get(getAllContacts).post(createNewContact);

router
  .route("/:id")
  .get(getContactById)
  .put(updateContactById)
  .delete(deleteContactById);

export default router;
