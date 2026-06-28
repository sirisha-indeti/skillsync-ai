import express from 'express';
import {
  registerUser,
  loginUser,
  getMe,
  refreshToken,
  logout,
} from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';
import { registerValidation, loginValidation } from '../validators/authValidator.js';
import { validateRequest } from '../middleware/validateMiddleware.js';

const router = express.Router();

router.post('/register', registerValidation, validateRequest, registerUser);
router.post('/login', loginValidation, validateRequest, loginUser);
router.post('/refresh', refreshToken);
router.post('/logout', protect, logout);
router.get('/me', protect, getMe);

export default router;
