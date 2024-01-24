import { Injectable } from '@nestjs/common';
import { Saga, ofType } from '@nestjs/cqrs';
import { Observable, map } from 'rxjs';
import { UserCreatedEvent } from '../event/user-created-event/user-created.event';
import { UserUpdatedEvent } from '../event/user-updated-event/user-updated.event';

@Injectable()
export class UsersSagas {
  @Saga()
  userCreated = (events$: Observable<any>) => {
    return events$.pipe(
      ofType(UserCreatedEvent),
      map((event) => {
        console.log('Inside [UserSagas] Saga' + event.user);
      }),
    );
  };

  @Saga()
  userUpdated = (events$: Observable<any>) => {
    return events$.pipe(
      ofType(UserUpdatedEvent),
      map((event) => {
        console.log('Inside [UserSagas] Saga' + event.user);
      }),
    );
  };
}
