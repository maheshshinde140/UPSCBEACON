// routes/currentAffairs.js
import express from 'express';
import { fetchAndStoreCurrentAffairs, getMonthlyCurrentAffairs } from '../controllers/currentAffairs.controller.js';

const router = express.Router();

router.get('/fetch', fetchAndStoreCurrentAffairs); // Fetch and store current affairs
router.get('/monthly/:month/:year', getMonthlyCurrentAffairs); // Get monthly current affairs

export default router;
