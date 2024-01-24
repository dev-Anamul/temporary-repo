import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { UserRemovedEvent } from './user-removed.event';
import { UserService } from 'src/user/entity/user.service';

@EventsHandler(UserRemovedEvent)
export class UserRemovedHandler implements IEventHandler<UserRemovedEvent> {
  constructor(private readonly userService: UserService) {}
  async handle(event: UserRemovedEvent) {
    const id = event.id;
    console.log('UserRemovedEvent', id);

    return await this.userService.remove(id);
  }
}
