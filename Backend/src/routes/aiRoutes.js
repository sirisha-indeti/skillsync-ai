import express from 'express';
import { generateInsights, generateTaskSummary } from '../controllers/aiController.js';

const router = express.Router();

router.post('/insights', generateInsights);
router.post('/task-summary', generateTaskSummary);

export default router;
