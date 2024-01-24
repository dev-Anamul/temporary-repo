import { Injectable } from '@nestjs/common';
import * as Winston from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';
import { ElasticsearchTransport } from 'winston-elasticsearch';

const logTransport = new Winston.transports.Console({
  level: 'debug',
  format: Winston.format.combine(
    Winston.format.colorize(),
    Winston.format.timestamp(),
    Winston.format.printf(({ level, message, timestamp }) => {
      return `${timestamp} ${level}: ${message}`;
    }),
  ),
});

// create a file transport for the logs
const loggerTransport = (filename: string, level: string) => {
  return new DailyRotateFile({
    filename: `./logs/${level}/${filename}-%DATE%.log`,
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
    level,
  });
};

const errorTransport = loggerTransport('error', 'error');
const infoTransport = loggerTransport('info', 'info');
const warnTransport = loggerTransport('warn', 'warn');
const debugTransport = loggerTransport('debug', 'debug');

const elasticSearchTransport = new ElasticsearchTransport({
  level: 'http',
  clientOpts: { node: 'http://localhost:9200' },
  indexPrefix: 'nest-logger',
  indexSuffixPattern: 'YYYY.MM.DD',
});

@Injectable()
export class LoggerService {
  private readonly logger: Winston.Logger;

  constructor() {
    this.logger = Winston.createLogger({
      format: Winston.format.json(),
      transports: [
        logTransport,
        errorTransport,
        infoTransport,
        warnTransport,
        debugTransport,
        elasticSearchTransport,
      ],
    });
  }

  public info(message: string): void {
    this.logger.info(message);
  }

  public error(message: string): void {
    this.logger.error(message);
  }

  public warn(message: string): void {
    this.logger.warn(message);
  }

  public http(message: string): void {
    this.logger.http(message);
  }

  public debug(message: string): void {
    this.logger.debug(message);
  }

  public verbose(message: string): void {
    this.logger.verbose(message);
  }

  public silly(message: string): void {
    this.logger.silly(message);
  }

  getLogger() {
    return this.logger;
  }
}

export const logger = new LoggerService().getLogger();
