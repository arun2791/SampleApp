/*
 * Reducer actions related with login
 */
import * as types from './types';

export function signUpRequest(userName, pinCode) {
    return {
        type: types.SIGNUP_REQUEST,
        userName,
        pinCode
    };
}

export function signUpFailed() {
    return {
        type: types.SIGNUP_FAILURE
    };
}

export function signUpResponse(user) {
    return {
        type: types.SIGNUP_RESPONSE,
        user
    };
}
