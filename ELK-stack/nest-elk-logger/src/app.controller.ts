import { Controller, Get, Inject, Logger, LoggerService } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    @Inject(Logger) private readonly logger: LoggerService,
    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): string {
    this.logger.log('calling get hello', AppController.name);
    return this.appService.getHello();
  }

  @Get('log')
  log(): void {
    this.logger.log('log');
  }

  @Get('error')
  error(): void {
    this.logger.error('error');
  }

  @Get('warn')
  warn(): void {
    this.logger.verbose('warn');
  }
}
