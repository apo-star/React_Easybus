import { Request, Response } from "express";
import Booking from "../models/Booking";
import Bus from "../models/Bus";

export const CreateNewBooking = async (req: Request, res: Response) => {
  const busId = req.body.busId;
  const busSeatNo = req.body.seatNo;
  const date = req.body.date;
  try {
    const bookedBus = await Bus.findById(busId);
    const selectedSeat = bookedBus?.seats.find(
      (seat) => seat.seatNo === busSeatNo
    );
    const newBookingDate = {
      bookingDate: date,
      isBooked: true,
    };
    const seat = selectedSeat?.seatAvailability.push(newBookingDate);
    await bookedBus?.save();
    const newBooking = await Booking.create(req.body);
    res.status(200).json({ success: true, data: newBooking });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};

export const GetAllBookings = async (req: Request, res: Response) => {
  try {
    const allBookings = await Booking.find({});
    res.status(200).json({ success: true, data: allBookings });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};