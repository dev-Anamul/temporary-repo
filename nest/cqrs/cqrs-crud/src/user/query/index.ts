import { GetUserHandler } from './get-user-query/get-user.handler';
import { ListUsersHandler } from './list-users-query/list-users.handler';

export const userQueriesManager = [ListUsersHandler, GetUserHandler];
