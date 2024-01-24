import { Injectable } from '@nestjs/common';
import { Worker, isMainThread } from 'worker_threads';
import { LoggerService } from './logger/logger.service';

@Injectable()
export class AppService {
  constructor(private readonly loggerService: LoggerService) {}
  getHello(): string {
    if (isMainThread) {
      const worker = new Worker('./src/worker/worker.mjs');
      worker.on('message', (message) => {
        this.loggerService.info(`Message from worker: ${message}`);
      });
    }

    return `Hello World! ${'count'}`;
  }
}
