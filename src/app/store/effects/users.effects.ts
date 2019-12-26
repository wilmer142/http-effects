import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from "@ngrx/effects";
import * as fromUsersActions from "../actions";
import { switchMap, map, catchError } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { LoadUsersSuccess, LoadUsersFail } from '../actions/users.actions';
import { of } from "rxjs";

@Injectable()
export class UsersEffects {

    @Effect()
    loadUsers$ = this.actions$.pipe(
        ofType(fromUsersActions.LOAD_USERS),
        switchMap(() => {
            return this.usersService.getUsers()
                .pipe(
                    map(users => new LoadUsersSuccess(users)),
                    catchError(error => of(new LoadUsersFail(error)))
                );
        })
    );

    constructor(private actions$: Actions, public usersService: UserService) { }
}