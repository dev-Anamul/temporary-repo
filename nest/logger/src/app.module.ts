import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerService } from './logger/logger.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://admin:password@localhost:27017', {
      authSource: 'admin',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, LoggerService],
})
export class AppModule {}
