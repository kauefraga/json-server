import { Request, Response } from 'express';
import { warn } from '../../lib/colorized-console';

export function NotFound(
  request: Request,
  response: Response,
) {
  response.req.statusCode = 404;

  warn(`${request.method} ${request.url} ${response.req.statusCode} - ${new Date()}`);

  return response.status(404).json({
    error: {
      name: 'Not Found',
      message: 'The requested URL is not available.',
    },
  });
}
