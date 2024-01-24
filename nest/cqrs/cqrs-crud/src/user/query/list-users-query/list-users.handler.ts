import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { UserAggregateService } from 'src/user/aggregate/user-aggregate/user-aggragate.service';
import { ListUsersQuery } from './list-users.query';

@QueryHandler(ListUsersQuery)
export class ListUsersHandler implements IQueryHandler<ListUsersQuery> {
  constructor(private userAggregateService: UserAggregateService) {}

  async execute(query: ListUsersQuery) {
    return await this.userAggregateService.findAll();
  }
}
