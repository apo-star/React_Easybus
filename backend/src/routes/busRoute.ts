import express from "express";
import {
  CreateNewBusRoute,
  GetAllBusRoutes,
} from "../controllers/BusRouteController";

const router = express.Router();
router.get("/bus-routes", GetAllBusRoutes);
router.post("/bus-route/new", CreateNewBusRoute);

export default router;
