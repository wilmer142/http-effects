import { User } from '../../models/user.model';
import { userActions, LOAD_USERS, LOAD_USERS_SUCCESS, LOAD_USERS_FAIL } from '../actions/users.actions';


export interface UsersState {
    users: User[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

const initialState: UsersState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
}

export function usersReducer(state = initialState, action: userActions): UsersState {

    switch (action.type) {
        case LOAD_USERS:
            return {
                ...state,
                loading: true                
            }

        case LOAD_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                users: [... action.users]                
            }
    
        case LOAD_USERS_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false, 
                error: action.payload               
            }
        default:
            return state;
    }
}