import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { LoggerService } from './logger/logger.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly logger: LoggerService,
  ) {}

  @Get()
  getHello(): string {
    this.logger.info('Hello World!');
    return this.appService.getHello();
  }

  @Get('error')
  getError(): string {
    this.logger.error('Error!');
    return this.appService.getError();
  }

  @Get('warn')
  getWarn(): string {
    this.logger.warn('Warn!');
    return this.appService.getWarn();
  }

  @Get('debug')
  getDebug(): string {
    this.logger.debug('Debug!');
    return this.appService.getDebug();
  }

  @Get('verbose')
  getVerbose(): string {
    this.logger.verbose('Verbose!');
    return this.appService.getVerbose();
  }

  @Get('silly')
  getSilly(): string {
    this.logger.silly('Silly!');
    return this.appService.getSilly();
  }
}
