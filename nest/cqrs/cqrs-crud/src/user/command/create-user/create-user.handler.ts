import { CommandHandler, ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import { CreateUserCommand } from './create-user.command';
import { UserAggregateService } from '../../aggregate/user-aggregate/user-aggragate.service';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(
    private pulisher: EventPublisher,
    private manager: UserAggregateService,
  ) {}

  async execute(command: CreateUserCommand) {
    const { createUserDto } = command;
    const aggregate = this.pulisher.mergeObjectContext(this.manager);
    const user = await aggregate.create(createUserDto);
    aggregate.commit();
    return user;
  }
}
