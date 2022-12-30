import { NextFunction, Request, Response } from "express";
import { VerifyToken } from "../services/ManageJwt";

export const VerifyJwt = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
  const token = authHeader?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
  try {
    const decoded = await VerifyToken(token);
    req.decoded = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ success: false, message: "Forbidden" });
  }
};
