import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WinstonModule } from 'nest-winston';
import {
  debugTransport,
  elasticSearchTransport,
  errorTransport,
  infoTransport,
  logTransport,
  warnTransport,
} from './transports';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      transports: [
        logTransport,
        errorTransport,
        infoTransport,
        warnTransport,
        debugTransport,
        elasticSearchTransport,
      ],
    }),
  });

  await app.listen(3000);
}
bootstrap();
