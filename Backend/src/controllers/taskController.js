import asyncHandler from 'express-async-handler';
import Task from '../models/Task.js';
import ApiError from '../utils/apiError.js';

export const createTask = asyncHandler(async (req, res) => {
  const task = await Task.create({
    ...req.body,
    assignee: req.body.assignee || req.user.id,
  });
  res.status(201).json({ task });
});

export const getTasks = asyncHandler(async (req, res) => {
  const filters = {};
  if (req.query.project) filters.project = req.query.project;
  if (req.query.assignee) filters.assignee = req.query.assignee;
  if (req.query.status) filters.status = req.query.status;

  const tasks = await Task.find(filters).populate('assignee', 'name email').populate('project', 'title');
  res.json({ count: tasks.length, tasks });
});

export const getTaskById = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id).populate('assignee', 'name email').populate('project', 'title');
  if (!task) {
    throw new ApiError(404, 'Task not found');
  }
  res.json({ task });
});

export const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    throw new ApiError(404, 'Task not found');
  }
  res.json({ task });
});

export const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) {
    throw new ApiError(404, 'Task not found');
  }
  res.json({ message: 'Task deleted successfully' });
});
