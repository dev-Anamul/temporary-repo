import { IEvent } from '@nestjs/cqrs';
import { User } from 'src/user/entity/user.entity';

export class UserCreatedEvent implements IEvent {
  constructor(public user: User) {}
}
