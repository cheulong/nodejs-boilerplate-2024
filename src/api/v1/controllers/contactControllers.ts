import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import Contact from "../models/contactModel";

//@desc Get all contacts
//@route GET api/contacts
//@access Public
const getAllContacts = asyncHandler(async (req: Request, res: Response) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

//@desc Create new contact
//@route POST api/contacts
//@access Public
const createNewContact = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("Missing required fields");
  }
  const contact = await Contact.create({ name, email, phone });
  res.status(201).json(contact);
});

//@desc Get contact by id
//@route GET api/contacts/:id
//@access Public
const getContactById = asyncHandler(async (req: Request, res: Response) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

//@desc Update contact by id
//@route PUT api/contacts/:id
//@access Public
const updateContactById = asyncHandler(async (req: Request, res: Response) => {
  const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
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
