import express from "express";
import { CreateNewBus, GetAllBuses } from "../controllers/BusController";

const router = express.Router();
router.get("/all-bookings", GetAllBuses);
router.post("/booking/new", CreateNewBus);

export default router;
