import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import Contact from "../models/contactModel";
import { ContactSchema } from "../validations/contact";

//@desc Get all contacts
//@route GET api/contacts
//@access Private
const getAllContacts = asyncHandler(async (req: Request, res: Response) => {
  const contacts = await Contact.find({});
  res.status(200).json(contacts);
});

//@desc Create new contact
//@route POST api/contacts
//@access Private
const createNewContact = asyncHandler(async (req: Request, res: Response) => {
  const { success, error, data } = ContactSchema.safeParse(req.body);
  if (!success) {
    res.status(400).json({ error });
    throw new Error("Missing required fields");
  }
  const contact = await Contact.create({
    ...data,
    //@ts-expect-error user is added to req
    user_id: req.user._id,
  });
  res.status(201).json(contact);
});

//@desc Get contact by id
//@route GET api/contacts/:id
//@access Private
const getContactById = asyncHandler(async (req: Request, res: Response) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  //@ts-expect-error user is added to req
  if (contact.user_id.toString() !== req.user._id.toString()) {
    res.status(403);
    throw new Error("You are not authorized to access this contact");
  }

  res.status(200).json(contact);
});

//@desc Update contact by id
//@route PUT api/contacts/:id
//@access Private
const updateContactById = asyncHandler(async (req: Request, res: Response) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  //@ts-expect-error user is added to req
  if (contact.user_id.toString() !== req.user._id.toString()) {
    res.status(403);
    throw new Error("You are not authorized to access this contact");
  }

  await Contact.deleteOne({ _id: req.params.id });

  res.status(200).json(contact);
});

//@desc Delete contact by id
//@route DELETE api/contacts/:id
//@access Public
const deleteContactById = asyncHandler(async (req: Request, res: Response) => {
  const contact = await Contact.findByIdAndDelete(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

export {
  getAllContacts,
  createNewContact,
  getContactById,
  updateContactById,
  deleteContactById,
};
