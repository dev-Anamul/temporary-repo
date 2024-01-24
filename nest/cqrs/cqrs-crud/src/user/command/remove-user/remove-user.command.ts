import { ICommand } from '@nestjs/cqrs';

export class RemoveUserCommand implements ICommand {
  constructor(public id: string) {}
}
