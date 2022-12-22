import express from 'express';
import { CreateNewLocation, GetAllLocation } from '../controllers/LocationController';

const router = express.Router();
router.get('/locations',GetAllLocation);
router.post('/location/new',CreateNewLocation);

export default router;