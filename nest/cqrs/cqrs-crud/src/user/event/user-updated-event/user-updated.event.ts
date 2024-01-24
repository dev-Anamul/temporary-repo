import { IEvent } from '@nestjs/cqrs';
import { User } from 'src/user/entity/user.entity';

export class UserUpdatedEvent implements IEvent {
  constructor(public id: string, public user: User) {}
}
