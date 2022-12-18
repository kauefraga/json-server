import { Request, Response } from 'express';

export function NotFound(
  _: Request,
  response: Response,
) {
  return response.status(404).json({
    error: {
      name: 'Not Found',
      message: 'The requested URL is not available.',
    },
  });
}
