/*
 * Reducer actions related with login
 */
import * as types from './types';

export function createTradeRequest(name, qty, pinCode) {
 
    return {
        type: types.CREATE_TRADE_REQUEST,
        name,
        pinCode,
        qty
    };
}

export function createTradeFailed() {
    return {
        type: types.CREATE_TRADE_FAILURE
    };
}

export function createTradeResponse(trade) {
    alert('called');
    return {
        type: types.CREATE_TRADE_RESPONSE,
        trade
    };
}
