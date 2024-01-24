import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { UserUpdatedEvent } from './user-updated.event';
import { UserService } from 'src/user/entity/user.service';

@EventsHandler(UserUpdatedEvent)
export class UserUpdatedHandler implements IEventHandler<UserUpdatedEvent> {
  constructor(private readonly userService: UserService) {}
  async handle(event: UserUpdatedEvent) {
    const { id, user } = event;
    return await this.userService.update(id, user);
  }
}
