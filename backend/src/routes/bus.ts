import express from "express";
import { CreateNewBus, GetAllBuses } from "../controllers/BusController";

const router = express.Router();

router.get("/buses", GetAllBuses);
router.post("/bus/new", CreateNewBus);

export default router;
