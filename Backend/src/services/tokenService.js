import jwt from 'jsonwebtoken';
import ApiError from '../utils/apiError.js';

const accessSecret = process.env.JWT_ACCESS_SECRET;
const refreshSecret = process.env.JWT_REFRESH_SECRET;

if (!accessSecret || !refreshSecret) {
  throw new Error('JWT secrets must be defined in environment variables');
}

export const createAccessToken = (userId) => {
  return jwt.sign({ id: userId }, accessSecret, { expiresIn: '15m' });
};

export const createRefreshToken = (userId) => {
  return jwt.sign({ id: userId }, refreshSecret, { expiresIn: '7d' });
};

export const verifyAccessToken = (token) => {
  try {
    return jwt.verify(token, accessSecret);
  } catch (error) {
    throw new ApiError(401, 'Invalid access token');
  }
};

export const verifyRefreshToken = (token) => {
  try {
    return jwt.verify(token, refreshSecret);
  } catch (error) {
    throw new ApiError(401, 'Invalid refresh token');
  }
};
