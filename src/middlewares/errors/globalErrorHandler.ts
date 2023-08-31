import type { ErrorRequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

export const globalErrorHandler: ErrorRequestHandler = async (err, req, res, next): Promise<void> => {
  const customErr = {
    message: err.message || 'Something went wrong, please try again later',
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
  };
  res.status(customErr.statusCode).json({ msg: customErr.message });
  next();
};
