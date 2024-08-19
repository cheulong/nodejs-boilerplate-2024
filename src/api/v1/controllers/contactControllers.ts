//@desc Get all contacts
//@route GET api/contacts

import { Request, Response } from "express";

//@access Public
const getAllContacts = (req: Request, res: Response) => {
  res.status(200).json({
    message: "Get all contacts",
  });
};

//@desc Create new contact
//@route POST api/contacts
//@access Public
const createNewContact = (req: Request, res: Response) => {
  res.status(201).json({
    message: "Create new contact",
  });
};

//@desc Get contact by id
//@route GET api/contacts/:id
//@access Public
const getContactById = (req: Request, res: Response) => {
  res.status(200).json({
    message: `Get contact for ${req.params.id}`,
  });
};

//@desc Update contact by id
//@route PUT api/contacts/:id
//@access Public
const updateContactById = (req: Request, res: Response) => {
  res.status(200).json({
    message: `Update contact for ${req.params.id}`,
  });
};

//@desc Delete contact by id
//@route DELETE api/contacts/:id
//@access Public
const deleteContactById = (req: Request, res: Response) => {
  res.status(200).json({
    message: `Delete contact for ${req.params.id}`,
  });
};

export {
  getAllContacts,
  createNewContact,
  getContactById,
  updateContactById,
  deleteContactById,
};
