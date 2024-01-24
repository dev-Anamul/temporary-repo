import { Injectable } from '@nestjs/common';

import * as winston from 'winston';
import * as WinstonDailyRotateFile from 'winston-daily-rotate-file';
import * as WinstonMongoDB from 'winston-mongodb';

const { combine, timestamp, printf } = winston.format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

@Injectable()
export class LoggerService {
  private readonly logger: winston.Logger;

  constructor() {
    this.logger = winston.createLogger({
      level: 'info',
      format: combine(timestamp(), myFormat),
      transports: [
        new WinstonDailyRotateFile({
          filename: 'logs/%DATE%.log',
          datePattern: 'YYYY-MM-DD',
          zippedArchive: true,
          maxSize: '20m',
          maxFiles: '14d',
        }),
        new WinstonMongoDB.MongoDB({
          db: 'mongodb://admin:password@localhost:27017/logger',
          options: { useUnifiedTopology: true, authSource: 'admin' },
          collection: 'logs',
          capped: true,
          cappedMax: 100,
          tryReconnect: true,
        }),
      ],
    });
  }

  info(message: string) {
    this.logger.info(message);
  }

  warn(message: string) {
    this.logger.warn(message);
  }

  error(message: string) {
    this.logger.error(message);
  }

  log(message: string) {
    this.logger.log('info', message);
  }
}
