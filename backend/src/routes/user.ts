import express from "express";
import {
  CreateNewUser,
  DeleteUser,
  GetAllUsers,
  GetUserRole,
} from "../controllers/UserController";
import { CheckExistingUser } from "../middlewares/CheckExistingUser";
import ValidateId from "../middlewares/ValidateId";
import { VerifyJwt } from "../middlewares/VerifyJwt";

const router = express.Router();

router.get("/users", CheckExistingUser, GetAllUsers);
router.get("/user/role", VerifyJwt, GetUserRole);
router.post("/user/new", CreateNewUser);
router.delete("/user/:id", ValidateId, DeleteUser);

export default router;
