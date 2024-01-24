import { Injectable, NestMiddleware } from '@nestjs/common';
import { logger } from './logger.service';
import * as expressWinston from 'express-winston';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    expressWinston.logger({
      winstonInstance: logger,
      meta: false,
      msg: 'HTTP {{req.method}} {{req.url}}',
      expressFormat: true,
      colorize: false,
    })(req, res, next);
  }
}
