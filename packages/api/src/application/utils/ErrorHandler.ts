import { NextFunction, Request, Response } from 'express';

export const ErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }

  console.error(`${req.method} ${req.url}`, err);

  const statusCode = err.statusCode || err.status || 500;
  const message = err.message || `Internal Server Error`;

  res.status(statusCode).json({
    error: message,
    message: `An error occurred processing your request`,
    statusCode,
    success: false,
  });
};
