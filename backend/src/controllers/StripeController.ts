import { Request, Response } from "express";
import * as dotenv from "dotenv";
dotenv.config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export const SendStripeApi = async (req: Request, res: Response) => {
  try {
    const price = req.body.price;
    console.log(price);
    const amount = price * 100;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    res.status(200).json({ success: true, data: paymentIntent.client_secret });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};
