import express from "express";
import { CreateNewUser } from "../controllers/UserController";

const router = express.Router();

router.post("/user/new", CreateNewUser);

export default router;
