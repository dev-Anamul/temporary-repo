import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetUserQuery } from './get-user.query';
import { UserAggregateService } from 'src/user/aggregate/user-aggregate/user-aggragate.service';
import { User } from 'src/user/entity/user.entity';

@QueryHandler(GetUserQuery)
export class GetUserHandler implements IQueryHandler<GetUserQuery> {
  constructor(private readonly userAggregateService: UserAggregateService) {}

  async execute(query: GetUserQuery): Promise<User> {
    const { id } = query;
    return this.userAggregateService.findOne(id);
  }
}
