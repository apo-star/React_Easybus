import express from "express";
import {
  CreateNewUser,
  DeleteUser,
  GetAllUsers,
  GetUserRole,
  UpdateUserRole,
} from "../controllers/UserController";
import { CheckExistingUser } from "../middlewares/CheckExistingUser";
import ValidateId from "../middlewares/ValidateId";
import { VerifyJwt } from "../middlewares/VerifyJwt";

const router = express.Router();

router.get("/admin/users", GetAllUsers);
router.get("/user/role", VerifyJwt, GetUserRole);
router.post("/user/new", CheckExistingUser, CreateNewUser);
router.patch("/admin/user/:id", ValidateId, UpdateUserRole);
router.delete("/admin/user/:id", ValidateId, DeleteUser);

export default router;
