/**
 *  Redux saga class init
 */
import { takeEvery, all, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/types';
import loginSaga from './loginSaga';
import signupSaga from './signupSaga';
import createTradeSaga from './createTradeSaga';
import logoutSaga from './logoutSaga';
import resetPinSaga from './resetPinSagas';

export default function* watch() {
    yield all([takeEvery(types.LOGIN_REQUEST, loginSaga)]),
    yield all([takeEvery(types.SIGNUP_REQUEST, signupSaga)]),
    yield all([takeLatest(types.CREATE_TRADE_REQUEST, createTradeSaga)]),
    yield all([takeLatest(types.LOGOUT, logoutSaga)]),
    yield all([takeLatest(types.RESET_PIN,resetPinSaga)])
}
