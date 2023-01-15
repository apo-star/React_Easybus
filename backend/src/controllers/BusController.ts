import { Request, Response } from "express";
import Bus from "../models/Bus";

export const CreateNewBus = async (req: Request, res: Response) => {
  try {
    const newBus = await Bus.create(req.body);
    res.status(200).json({ success: true, data: newBus });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};

export const GetAllBuses = async (req: Request, res: Response) => {
  let query = {};
  if (req.query.from && req.query.to) {
    query = {
      departureLocation: req.query.from,
      arrivalLocation: req.query.to,
    };
  }
  try {
    const allBuses = await Bus.find(query).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: allBuses });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};

export const DeleteBus = async (req: Request, res: Response) => {
  try {
    const bus = await Bus.findById(req.params.id);
    if (!bus) {
      return res.status(404).json({
        success: false,
        message: "Bus Not Found",
      });
    }
    await bus.delete();
    res.status(200).json({
      success: true,
      message: "Bus successfully deleted",
      data: bus,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};

export const UpdateTempBookedSeat = async (req: Request, res: Response) => {
  const busId = req.body.busId;
  const busSeatNo = req.body.seatNo as [string];
  try {
    const bookedBus = await Bus.findById(busId);
    busSeatNo.map((seatNo) => {
      const selectedSeat = bookedBus?.seats.find(
        (seat) => seat.seatNo === seatNo
      );
      selectedSeat!.tempBooked = false;
    });
    await bookedBus?.save();
    res.status(200).json({ success: true, data: bookedBus });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};

export const ResetTempBookedSeat = async (req: Request, res: Response) => {
  const from = req.query.from;
  const to = req.query.to;
  try {
    const availableBus = await Bus.find({
      departureLocation: from,
      arrivalLocation: to,
    });
    availableBus.map((bus) =>
      bus.seats.map((seat) => seat.tempBooked === false)
    );

    // await availableBus?.save();
    res.status(200).json({ success: true, data: availableBus });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};
