import { ICommand } from '@nestjs/cqrs';
import { UpdateUserDto } from 'src/user/entity/update-user.dto';

export class UserUpdateCommand implements ICommand {
  constructor(public id: string, public updateUserDto: UpdateUserDto) {}
}
