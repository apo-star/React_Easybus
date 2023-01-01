import express from "express";
import {
  CreateNewBooking,
  GetAllBookings,
} from "../controllers/BookingController";
import { VerifyJwt } from "../middlewares/VerifyJwt";

const router = express.Router();
router.get("/all-bookings", VerifyJwt, GetAllBookings);
router.post("/booking/new", CreateNewBooking);

export default router;
