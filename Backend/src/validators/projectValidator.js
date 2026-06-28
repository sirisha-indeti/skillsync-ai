import { check } from 'express-validator';

export const createProjectValidation = [
  check('title').notEmpty().withMessage('Project title is required'),
  check('description').notEmpty().withMessage('Project description is required'),
  check('status').optional().isIn(['planning', 'active', 'completed', 'archived']),
  check('priority').optional().isIn(['low', 'medium', 'high']),
];
