import express from "express";
import {
  CreateNewBooking,
  GetAllBookings,
} from "../controllers/BookingController";

const router = express.Router();
router.get("/all-bookings", GetAllBookings);
router.post("/booking/new", CreateNewBooking);

export default router;
