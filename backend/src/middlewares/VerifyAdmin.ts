import { NextFunction, Request, Response } from "express";
import { QueryUser } from "../services/UserService";

const VerifyAdmin = async (req: Request, res: Response, next: NextFunction) => {
  const decodedEmail = req.decoded.email;
  const user = await QueryUser(decodedEmail);
  if (!user || user?.role !== "admin") {
    return res
      .status(403)
      .json({ success: false, message: "Forbidden Access" });
  }

  next();
};

export default VerifyAdmin;
