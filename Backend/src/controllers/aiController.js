import asyncHandler from 'express-async-handler';
import { generateText } from '../services/aiService.js';
import ApiError from '../utils/apiError.js';

export const generateInsights = asyncHandler(async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) {
    throw new ApiError(400, 'Prompt is required');
  }

  const output = await generateText(`Create a short list of AI-powered project insights for: ${prompt}`);
  res.json({ prompt, insights: output });
});

export const generateTaskSummary = asyncHandler(async (req, res) => {
  const { tasks } = req.body;
  if (!Array.isArray(tasks) || tasks.length === 0) {
    throw new ApiError(400, 'Task list is required');
  }

  const taskText = tasks.map((task, index) => `${index + 1}. ${task.title}: ${task.status || 'pending'}`).join('\n');
  const summary = await generateText(`Summarize the following tasks into a short executive update:\n${taskText}`);
  res.json({ summary });
});
