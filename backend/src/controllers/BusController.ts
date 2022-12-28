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
  try {
    const allBuses = await Bus.find({});
    res.status(200).json({ success: true, data: allBuses });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};

export const GetBusById = async (req: Request, res: Response) => {
  try {
    const allBuses = await Bus.find({});
    res.status(200).json({ success: true, data: allBuses });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};
