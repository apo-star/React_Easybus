import express from "express";
import {
  CreateNewContact,
  DeleteContact,
  GetAllContactMessage,
} from "../controllers/ContactController";
import { VerifyJwt } from "../middlewares/VerifyJwt";
import VerifyAdmin from "../middlewares/VerifyAdmin";

const router = express.Router();

router.get("/contacts", VerifyJwt, VerifyAdmin, GetAllContactMessage);
router.post("/contact/new", CreateNewContact);
router.delete("/contact/:id", DeleteContact);

export default router;
