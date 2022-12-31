import express from "express";
import {
  CreateNewBus,
  DeleteBus,
  GetAllBuses,
  UpdateTempBookedSeat,
} from "../controllers/BusController";
import ValidateId from "../middlewares/ValidateId";

const router = express.Router();

router.get("/buses", GetAllBuses);
router.post("/bus/new", CreateNewBus);
router.patch("/bus/update", UpdateTempBookedSeat);
router.delete("/bus/:id", ValidateId, DeleteBus);

export default router;
