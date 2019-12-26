import { User } from '../../models/user.model';
import { userActions, LOAD_USER, LOAD_USER_SUCCESS, LOAD_USER_FAIL } from '../actions/';


export interface UserState {
    user: User;
    loaded: boolean;
    loading: boolean;
    error: any;
}

const initialState: UserState = {
    user: null,
    loaded: false,
    loading: false,
    error: null
}

export function userReducer(state = initialState, action: userActions): UserState {

    switch (action.type) {
        case LOAD_USER:
            return {
                ...state,
                loading: true,
                error: null                
            }

        case LOAD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                user: { ... action.user }                
            }
    
        case LOAD_USER_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false, 
                error: {
                    status: action.payload.status,
                    message: action.payload.message,
                    url: action.payload.url
                }             
            }
        default:
            return state;
    }
}