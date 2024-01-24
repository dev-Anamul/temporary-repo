import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getError(): string {
    return 'Error!';
  }

  getWarn(): string {
    return 'Warn!';
  }

  getDebug(): string {
    return 'Debug!';
  }

  getVerbose(): string {
    return 'Verbose';
  }

  getSilly(): string {
    return 'Silly';
  }
}
