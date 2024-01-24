import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { UserCreatedEvent } from './user-created.event';
import { UserService } from 'src/user/entity/user.service';

@EventsHandler(UserCreatedEvent)
export class UserCreatedHandler implements IEventHandler<UserCreatedEvent> {
  constructor(private readonly userService: UserService) {}
  async handle(event: UserCreatedEvent) {
    const user = event.user;
    return await this.userService.create(user);
  }
}
