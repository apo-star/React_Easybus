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
    const user = await Bus.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Bus Not Found",
      });
    }
    await user.delete();
    res.status(200).json({
      success: true,
      message: "Bus successfully deleted",
      data: user,
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
  const busSeatNo = req.body.seatNo;
  try {
    const bookedBus = await Bus.findById(busId);
    const selectedSeat = bookedBus?.seats.find(
      (seat) => seat.seatNo === busSeatNo
    );
    if (selectedSeat?.tempBooked === undefined) {
      return res.status(404).json({ success: false });
    }
    selectedSeat.tempBooked = !selectedSeat.tempBooked;
    await bookedBus?.save();
    res.status(200).json({ success: true, data: bookedBus });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};
