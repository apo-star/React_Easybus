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

export const GetAllUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await User.find({});
    res.status(200).json({ success: true, data: allUsers });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};

export const DeleteUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    }
    await user.delete();
    res
      .status(200)
      .json({
        success: true,
        message: "User successfully deleted",
        data: user,
      });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};
