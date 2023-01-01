import express from "express";
import {
  CreateNewBus,
  DeleteBus,
  GetAllBuses,
  ResetTempBookedSeat,
  UpdateTempBookedSeat,
} from "../controllers/BusController";
import ValidateId from "../middlewares/ValidateId";
import VerifyAdmin from "../middlewares/VerifyAdmin";
import { VerifyJwt } from "../middlewares/VerifyJwt";

const router = express.Router();

router.get("/buses", GetAllBuses);
router.post("/admin/bus/new", VerifyJwt, VerifyAdmin, CreateNewBus);
router.patch("/bus/update", UpdateTempBookedSeat);
router.patch("/bus/reset", ResetTempBookedSeat);
router.delete("/admin/bus/:id", ValidateId, VerifyJwt, VerifyAdmin, DeleteBus);

export default router;
