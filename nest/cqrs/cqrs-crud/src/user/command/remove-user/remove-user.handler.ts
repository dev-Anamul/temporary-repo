import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { RemoveUserCommand } from './remove-user.command';
import { UserAggregateService } from 'src/user/aggregate/user-aggregate/user-aggragate.service';

@CommandHandler(RemoveUserCommand)
export class RemoveUserHandler implements ICommandHandler<RemoveUserCommand> {
  constructor(
    private readonly publisher: EventPublisher,
    private readonly manager: UserAggregateService,
  ) {}

  async execute(command: RemoveUserCommand) {
    const { id } = command;
    const aggregate = this.publisher.mergeObjectContext(this.manager);
    await this.manager.remove(id);
    aggregate.commit();
  }
}
