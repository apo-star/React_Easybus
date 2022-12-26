import express from "express"
import { createOfferDeals, getAllOfferDeals } from "../controllers/OfferDealsController";

const  router = express.Router()

router.get("/offerDeals",getAllOfferDeals)
router.post("/offerDeal/new",createOfferDeals)

export default router

