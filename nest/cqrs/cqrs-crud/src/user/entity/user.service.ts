import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find({});
  }

  async findOne(id: string): Promise<User> {
    return await this.userRepository.findOneBy({ uuid: id });
  }

  async update(id: string, userPayload: User): Promise<User> {
    const user = await this.findOne(id);
    user.firstName = userPayload.firstName || user.firstName;
    user.lastName = userPayload.lastName || user.lastName;
    user.email = userPayload.email || user.email;
    user.phone = userPayload.phone || user.phone;

    return await this.userRepository.save(user);
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete({ uuid: id });
  }
}
