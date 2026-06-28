import asyncHandler from 'express-async-handler';

import Project from '../models/Project.js';
import ApiError from '../utils/apiError.js';

export const createProject = asyncHandler(async (req, res) => {
  const project = await Project.create({
    ...req.body,
    owner: req.user?.id,
  });

  res.status(201).json({ project });
});

export const getProjects = asyncHandler(async (req, res) => {
  const filters = {};
  if (req.query.owner) filters.owner = req.query.owner;
  if (req.query.status) filters.status = req.query.status;

  const projects = await Project.find(filters)
    .sort({ createdAt: -1 })
    .populate('owner', 'name email');

  res.json({ count: projects.length, projects });
});

export const getProjectById = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id).populate('owner', 'name email');
  if (!project) {
    throw new ApiError(404, 'Project not found');
  }

  res.json({ project });
});

export const updateProject = asyncHandler(async (req, res) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!project) {
    throw new ApiError(404, 'Project not found');
  }

  res.json({ project });
});

export const deleteProject = asyncHandler(async (req, res) => {
  const project = await Project.findByIdAndDelete(req.params.id);
  if (!project) {
    throw new ApiError(404, 'Project not found');
  }

  res.json({ message: 'Project deleted successfully' });
});
