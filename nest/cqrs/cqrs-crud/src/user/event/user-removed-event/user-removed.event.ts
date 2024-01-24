import { IEvent } from '@nestjs/cqrs';

export class UserRemovedEvent implements IEvent {
  constructor(public id: string) {}
}
