import { Injectable } from '@nestjs/common';
import { AggregateRoot } from '@nestjs/cqrs';
import { UserService } from '../../entity/user.service';
import { CreateUserDto } from 'src/user/entity/user.dto';
import { User } from '../../entity/user.entity';
import { UserCreatedEvent } from 'src/user/event/user-created-event/user-created.event';
import { of } from 'rxjs';
import { UserRemovedEvent } from 'src/user/event/user-removed-event/user-removed.event';
import { UpdateUserDto } from 'src/user/entity/update-user.dto';
import { UserUpdatedEvent } from 'src/user/event/user-updated-event/user-updated.event';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UserAggregateService extends AggregateRoot {
  constructor(private readonly userService: UserService) {
    super();
  }

  // ! create a new user
  create(userPayload: CreateUserDto) {
    const user = new User();
    Object.assign(user, userPayload);
    // add other fields if needed
    user.uuid = uuid();

    // persist
    this.apply(new UserCreatedEvent(user));
    return of(user);
  }

  // ! update a user
  update(id: string, userPayload: UpdateUserDto) {
    const user = new User();
    Object.assign(user, userPayload);

    // persist
    this.apply(new UserUpdatedEvent(id, user));
    return of(user);
  }

  // ! remove a user
  remove(id: string) {
    // persist
    this.apply(new UserRemovedEvent(id));
  }

  // ! find all users
  async findAll() {
    return await this.userService.findAll();
  }

  // ! find one user
  async findOne(id: string) {
    return await this.userService.findOne(id);
  }
}
