import * as Winston from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';
import { ElasticsearchTransport } from 'winston-elasticsearch';

export const logTransport = new Winston.transports.Console({
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

export const errorTransport = loggerTransport('error', 'http');
export const infoTransport = loggerTransport('info', 'info');
export const warnTransport = loggerTransport('warn', 'warn');
export const debugTransport = loggerTransport('debug', 'debug');

export const elasticSearchTransport = new ElasticsearchTransport({
  level: 'info',
  clientOpts: { node: 'http://localhost:9200' },
  indexPrefix: 'log-express',
  indexSuffixPattern: 'YYYY-MM-DD',
});

export const loggerInstance = Winston.createLogger({
  transports: [
    elasticSearchTransport,
    logTransport,
    errorTransport,
    infoTransport,
    warnTransport,
    debugTransport,
  ],
});
