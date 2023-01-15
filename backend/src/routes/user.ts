import express from "express";
import {
  CreateNewUser,
  DeleteUser,
  GetAllUsers,
  GetUserRole,
  GetUserRoleByEmail,
  UpdateUserRole,
} from "../controllers/UserController";
import { CheckExistingUser } from "../middlewares/CheckExistingUser";
import ValidateId from "../middlewares/ValidateId";
import VerifyAdmin from "../middlewares/VerifyAdmin";
import { VerifyJwt } from "../middlewares/VerifyJwt";

const router = express.Router();

router.get("/admin/users", VerifyJwt, VerifyAdmin, GetAllUsers);
router.post("/user/new", CheckExistingUser, CreateNewUser);
router.get("/user/role", VerifyJwt, GetUserRole);
router.get("/user/role/:email", GetUserRoleByEmail);
router.patch(
  "/admin/user/:id",
  ValidateId,
  VerifyJwt,
  VerifyAdmin,
  UpdateUserRole
);
router.delete(
  "/admin/user/:id",
  ValidateId,
  VerifyJwt,
  VerifyAdmin,
  DeleteUser
);

export default router;
