import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from "@ngrx/effects";
import * as fromUserActions from "../actions";
import { switchMap, map, catchError } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { LoadUserSuccess, LoadUserFail } from '../actions/';
import { of } from "rxjs";
import { LoadUser } from '../actions/user.actions';

@Injectable()
export class UserEffects {

    @Effect()
    loadUser$ = this.actions$.pipe(
        ofType(fromUserActions.LOAD_USER),
        switchMap((action: LoadUser) => {
            return this.usersService.getUserById(action.id)
                .pipe(
                    map(user => new LoadUserSuccess(user)),
                    catchError(error => of(new LoadUserFail(error)))
                );
        })
    );

    constructor(private actions$: Actions, public usersService: UserService) { }
}