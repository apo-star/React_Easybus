import { Request, Response } from "express";
import User from "../models/User";

export const CreateNewUser = async (req: Request, res: Response) => {

  try {
    const newUser = await User.create(req.body);
    res.status(200).json({ success: true, data: newUser });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};
