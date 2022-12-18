import { Request, Response, NextFunction } from 'express';

export function cors(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  response.setHeader('access-control-allow-origin', '*');

  return next();
}
