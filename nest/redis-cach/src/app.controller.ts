import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CacheKey, CacheTTL } from '@nestjs/cache-manager';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @CacheKey('hello')
  @CacheTTL(70)
  @Get()
  async getHello() {
    return await this.appService.getHello();
  }
}
