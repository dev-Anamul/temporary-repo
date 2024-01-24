import { Injectable, NestMiddleware } from '@nestjs/common';
import * as expressWinston from 'express-winston';
import { loggerInstance } from 'src/transports';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    expressWinston.logger({
      level: 'http',
      winstonInstance: loggerInstance,
      meta: true,
      msg: 'HTTP {{req.method}} {{req.url}} {{res.responseTime}}',
      expressFormat: true,
      colorize: true,
    })(req, res, next);
  }
}
