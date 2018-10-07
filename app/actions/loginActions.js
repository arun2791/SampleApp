/*
 * Reducer actions related with login
 */
import * as types from './types';

export function loginRequest(userName, pinCode) {
    return {
        type: types.LOGIN_REQUEST,
        userName,
        pinCode
    };
}

export function signout() {
    return {
        type: types.LOGOUT,
    }
}

export function resetPin(user, newpin) {
    return {
        type: types.RESET_PIN,
        user,
        newpin
    }
}

export function resetPinSuccess(users){
    return {
        type: types.RESET_PIN_SUCCESS,
        users
    }
}

export function onLoginFailed() {
    return {
        type: types.LOGIN_FAILURE
    };
}

export function onLoginResponse(user) {
    return {
        type: types.LOGIN_RESPONSE,
        user
    };
}
