import { UserCreatedHandler } from './user-created-event/user-created.handler';
import { UserRemovedHandler } from './user-removed-event/user-removed.hanlder';
import { UserUpdatedHandler } from './user-updated-event/user-updated.handler';

export const userEventsManager = [
  UserCreatedHandler,
  UserRemovedHandler,
  UserUpdatedHandler,
];
