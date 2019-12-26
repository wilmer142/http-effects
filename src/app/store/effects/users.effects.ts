import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from "@ngrx/effects";
import * as fromUsersActions from "../actions";
import { switchMap, map } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { LoadUsersSuccess } from '../actions/users.actions';

@Injectable()
export class UsersEffects {

    @Effect()
    loadUsers$ = this.actions$.pipe(
        ofType(fromUsersActions.LOAD_USERS),
        switchMap(() => {
            return this.usersService.getUsers()
                .pipe(
                    map(users => new LoadUsersSuccess(users))
                );
        })
    );

    constructor(private actions$: Actions, public usersService: UserService) { }
}