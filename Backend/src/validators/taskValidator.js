import { check } from 'express-validator';

export const createTaskValidation = [
  check('title').notEmpty().withMessage('Task title is required'),
  check('project').notEmpty().withMessage('Project ID is required'),
  check('status').optional().isIn(['todo', 'in-progress', 'done']),
  check('priority').optional().isIn(['low', 'medium', 'high']),
];
