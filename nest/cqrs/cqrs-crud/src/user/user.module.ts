import { Module } from '@nestjs/common';
import { UserService } from './entity/user.service';
import { UserController } from './user.controller';
import { userAggregatesManager } from './aggregate';
import { userCommandsManager } from './command';
import { userEventsManager } from './event';
import { userQueriesManager } from './query';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { CqrsModule } from '@nestjs/cqrs';
import { UsersSagas } from './saga/user.saga';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [
    UserService,
    ...userAggregatesManager,
    ...userCommandsManager,
    ...userEventsManager,
    ...userQueriesManager,
    UsersSagas,
  ],
  exports: [UserService],
})
export class UserModule {}
