import { Request, Response } from "express";
import Contact from "../models/Contact";

export const CreateNewContact = async (req: Request, res: Response) => {
  try {
    const newContact = await Contact.create(req.body);
    res.status(200).json({ success: true, data: newContact });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};

export const GetAllContactMessage = async (req: Request, res: Response) => {
  try {
    const allContacts = await Contact.find({}).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: allContacts });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};

export const DeleteContact = async (req: Request, res: Response) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact Not Found",
      });
    }
    await contact.delete();
    res.status(200).json({
      success: true,
      message: "Contact successfully deleted",
      data: contact,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};
