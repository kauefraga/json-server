import {
  Request, Response, NextFunction,
} from 'express';
import { info } from '../../lib/colorized-console';

export function logger(req: Request, res: Response, next: NextFunction) {
  res.req.statusCode = 200;

  info(`${req.method} ${req.url} ${res.req.statusCode} - ${new Date()}`);

  return next();
}
