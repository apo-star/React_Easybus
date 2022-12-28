import { Request, Response } from "express";
import OfferDeals from "../models/OfferDeals";

export const createOfferDeals = async (req: Request, res: Response) => {
  try {
    const newOfferDeals = await OfferDeals.create(req.body);
    res.status(200).json({ success: true, data: newOfferDeals });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};

export const getAllOfferDeals = async (req: Request, res: Response) => {
  try {
    const allOfferDeals = await OfferDeals.find({});
    res.status(200).json({ success: true, data: allOfferDeals });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};
