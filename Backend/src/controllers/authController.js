import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';

import User from '../models/User.js';
import ApiError from '../utils/apiError.js';
import { createAccessToken, createRefreshToken, verifyRefreshToken } from '../services/tokenService.js';
import sendWelcomeEmail from '../services/emailService.js';

export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, role } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new ApiError(409, 'Email already registered');
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await User.create({ name, email, password: hashedPassword, role });

  try {
    await sendWelcomeEmail(user.email, user.name);
  } catch (error) {
    console.warn('Welcome email failed:', error.message);
  }

  const accessToken = createAccessToken(user.id);
  const refreshToken = createRefreshToken(user.id);

  res.status(201).json({
    user: { id: user.id, name: user.name, email: user.email, role: user.role },
    accessToken,
    refreshToken,
  });
});

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new ApiError(401, 'Invalid email or password');
  }

  const accessToken = createAccessToken(user.id);
  const refreshToken = createRefreshToken(user.id);

  res.json({
    user: { id: user.id, name: user.name, email: user.email, role: user.role },
    accessToken,
    refreshToken,
  });
});

export const getMe = asyncHandler(async (req, res) => {
  if (!req.user) {
    throw new ApiError(401, 'Unauthorized');
  }

  res.json({
    user: {
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
      role: req.user.role,
    },
  });
});

export const refreshToken = asyncHandler(async (req, res) => {
  const token = req.body.refreshToken || req.cookies?.refreshToken;
  if (!token) {
    throw new ApiError(401, 'Refresh token required');
  }

  const decoded = verifyRefreshToken(token);
  const user = await User.findById(decoded.id);
  if (!user) {
    throw new ApiError(404, 'User not found');
  }

  const accessToken = createAccessToken(user.id);
  res.json({ accessToken });
});

export const logout = asyncHandler(async (req, res) => {
  res.json({ message: 'Logged out successfully' });
});
