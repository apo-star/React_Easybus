import express from "express";
import { SendStripeApi } from "../controllers/StripeController";

const router = express.Router();

router.post("/stripeapi", SendStripeApi);

export default router;
