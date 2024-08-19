import asyncHandler from "express-async-handler";
import { Request, Response } from "express";

//@desc Get all contacts
//@route GET api/contacts
//@access Public
const getAllContacts = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({
    message: "Get all contacts",
  });
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
  res.status(201).json({
    message: "Create new contact",
  });
});

//@desc Get contact by id
//@route GET api/contacts/:id
//@access Public
const getContactById = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({
    message: `Get contact for ${req.params.id}`,
  });
});

//@desc Update contact by id
//@route PUT api/contacts/:id
//@access Public
const updateContactById = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({
    message: `Update contact for ${req.params.id}`,
  });
});

//@desc Delete contact by id
//@route DELETE api/contacts/:id
//@access Public
const deleteContactById = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({
    message: `Delete contact for ${req.params.id}`,
  });
});

export {
  getAllContacts,
  createNewContact,
  getContactById,
  updateContactById,
  deleteContactById,
};
