import express from 'express';
import {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
} from '../controllers/projectController.js';
import { protect } from '../middleware/authMiddleware.js';
import { createProjectValidation } from '../validators/projectValidator.js';
import { validateRequest } from '../middleware/validateMiddleware.js';

const router = express.Router();

router.use(protect);
router.post('/', createProjectValidation, validateRequest, createProject);
router.get('/', getProjects);
router.get('/:id', getProjectById);
router.patch('/:id', updateProject);
router.delete('/:id', deleteProject);

export default router;
