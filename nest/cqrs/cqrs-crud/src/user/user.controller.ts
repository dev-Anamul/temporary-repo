import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { User } from './entity/user.entity';
import { CreateUserDto } from './entity/user.dto';
import { CreateUserCommand } from './command/create-user/create-user.command';
import { UpdateUserDto } from './entity/update-user.dto';
import { UserUpdateCommand } from './command/update-user/update-user.command';
import { RemoveUserCommand } from './command/remove-user/remove-user.command';
import { ListUsersQuery } from './query/list-users-query/list-users.query';
import { GetUserQuery } from './query/get-user-query/get-user.query';

@Controller('user')
export class UserController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    const command = new CreateUserCommand(createUserDto);
    return await this.commandBus.execute(command);
  }

  @Get()
  async findAll(): Promise<User[]> {
    const query = new ListUsersQuery();
    return await this.queryBus.execute(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    const query = new GetUserQuery(id);
    return await this.queryBus.execute(query);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    const command = new UserUpdateCommand(id, updateUserDto);
    return await this.commandBus.execute(command);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    console.log(id);

    const command = new RemoveUserCommand(id);
    return await this.commandBus.execute(command);
  }
}
