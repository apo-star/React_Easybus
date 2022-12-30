import express from "express";
import {
  CreateNewUser,
  DeleteUser,
  GetAllUsers,
} from "../controllers/UserController";
import { CheckExistingUser } from "../middlewares/CheckExistingUser";
import ValidateId from "../middlewares/ValidateId";

const router = express.Router();

router.get("/users", CheckExistingUser, GetAllUsers);
router.post("/user/new", CreateNewUser);
router.delete("/user/:id", ValidateId, DeleteUser);

export default router;
