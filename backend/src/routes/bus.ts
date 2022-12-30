import express from "express";
import {
  CreateNewBus,
  DeleteBus,
  GetAllBuses,
} from "../controllers/BusController";

const router = express.Router();

router.get("/buses", GetAllBuses);
router.post("/bus/new", CreateNewBus);
router.delete("/bus/:id", DeleteBus);

export default router;
