import { ICommand } from '@nestjs/cqrs';
import { CreateUserDto } from '../../entity/create-user.dto';

export class CreateUserCommand implements ICommand {
  constructor(public createUserDto: CreateUserDto) {}
}
