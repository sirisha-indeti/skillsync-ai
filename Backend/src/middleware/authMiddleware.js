import asyncHandler from 'express-async-handler';
import ApiError from '../utils/apiError.js';
import { verifyAccessToken } from '../services/tokenService.js';
import User from '../models/User.js';

export const protect = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new ApiError(401, 'Authorization required');
  }

  const token = authHeader.split(' ')[1];
  const decoded = verifyAccessToken(token);
  const user = await User.findById(decoded.id).select('-password');

  if (!user) {
    throw new ApiError(401, 'Invalid authorization token');
  }

  req.user = user;
  next();
});

export const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new ApiError(403, 'Forbidden');
    }
    next();
  };
};
