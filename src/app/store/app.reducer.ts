import { UsersState, usersReducer } from './reducers/users.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { UserState, userReducer } from './reducers/user.reducer';


export interface AppState {
    users: UsersState;
    user: UserState;
}

export const appReducers: ActionReducerMap<AppState> = {
    users: usersReducer,
    user: userReducer
};