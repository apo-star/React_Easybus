import { NextFunction, Request, Response } from "express";
import User from "../models/User";
import { AssignJwt } from "../services/ManageJwt";

export const CheckExistingUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const email = req.body.email;
  const existingUser = await User.findOne({ email: req.body.email });
  if (existingUser) {
    const token = await AssignJwt(email);
    return res.status(200).json({ success: true, token });
  }
  next();
};
