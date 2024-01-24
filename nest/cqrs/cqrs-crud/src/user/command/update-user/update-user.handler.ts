import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { UserUpdateCommand } from './update-user.command';
import { UserAggregateService } from 'src/user/aggregate/user-aggregate/user-aggragate.service';

@CommandHandler(UserUpdateCommand)
export class UserUpdateHandler implements ICommandHandler<UserUpdateCommand> {
  constructor(
    private publisher: EventPublisher,
    private manager: UserAggregateService,
  ) {}

  async execute(command: UserUpdateCommand) {
    const { id, updateUserDto } = command;
    const aggregate = this.publisher.mergeObjectContext(this.manager);
    const user = await aggregate.update(id, updateUserDto);
    aggregate.commit();
    return user;
  }
}
