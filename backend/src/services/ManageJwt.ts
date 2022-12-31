import * as dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const AssignJwt = async (email: string) => {
  const token = jwt.sign({ email }, process.env.ACCESS_TOKEN as string);
  return token;
};

export const VerifyToken = async (token: string) => {
  return jwt.verify(token, process.env.ACCESS_TOKEN as string);
};
