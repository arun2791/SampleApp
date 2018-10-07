/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    user:{},
    loading: false
};

export const userReducer = createReducer(initialState, {
    [types.LOGIN_REQUEST](state, action) {
        return {
            ...state,
            user: {},
            loading: true
        };
    },
    [types.LOGIN_RESPONSE](state, action) {
        return {
            ...state,
            user: action.user,
            loading: false
        };
    },
    [types.LOGIN_FAILURE](state, action) {
        return {
            ...state,
            loading: false
        };
    },
    [types.LOGOUT](state, action){
        return {
            ...state,
            user: {}
        }
    },
    [types.RESET_PIN](state, action){
        return {
            ...state,
            user: {} 
        }
    }
});
