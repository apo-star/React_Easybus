import express from "express";
import {
  CreateNewUser,
  DeleteUser,
  GetAllUsers,
} from "../controllers/UserController";
import { CheckExistingUser } from "../middlewares/CheckExistingUser";
import ValidateId from "../middlewares/ValidateId";

const router = express.Router();

router.get("/users", GetAllUsers);
router.post("/user/new", CheckExistingUser, CreateNewUser);
router.delete("/user/:id", ValidateId, DeleteUser);

export default router;
