/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    users:[],
    loading: false,
};

export const usersReducer = createReducer(initialState, {
    [types.SIGNUP_REQUEST](state, action) {
        return {
            ...state,
            loading: true
        };
    },
    [types.SIGNUP_RESPONSE](state, action) {
        return {
            ...state,
            users: [...state.users, action.user],
            loading: false
        };
    },
    [types.SIGNUP_FAILURE](state, action) {
        return {
            ...state,
            loading: false
        };
    },
    [types.RESET_PIN_SUCCESS](state, action){
        return {
            ...state,
            user: action.users
        }
    }
});
