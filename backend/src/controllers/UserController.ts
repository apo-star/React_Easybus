import { Request, Response } from "express";
import User from "../models/User";
import { AssignJwt } from "../services/ManageJwt";

export const CreateNewUser = async (req: Request, res: Response) => {
  if (req.body?.role && req.body.role === "admin") {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
  try {
    const newUser = await User.create(req.body);
    const token = await AssignJwt(newUser.email);
    res.status(200).json({ success: true, data: newUser, token });
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
    res.status(200).json({
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
