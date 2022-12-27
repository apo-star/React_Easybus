import { Request, Response } from "express";
import BusRoute from "../models/BusRoute";

export const CreateNewBusRoute = async (req: Request, res: Response) => {
  try {
    const newBus = await BusRoute.create(req.body);
    res.status(200).json({ success: true, data: newBus });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};

export const GetAllBusRoutes = async (req: Request, res: Response) => {
  try {
    const allBuses = await BusRoute.find({});
    res.status(200).json({ success: true, data: allBuses });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};
