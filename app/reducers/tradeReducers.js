/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    trades:[],
    loading: false,
};

export const tradeReducer = createReducer(initialState, {
    [types.CREATE_TRADE_REQUEST](state, action) {
        return {
            ...state,
            loading: true
        };
    },
    [types.CREATE_TRADE_RESPONSE](state, action) {
        return {
            ...state,
            trades: [...state.trades, action.trade],
            loading: false
        };
    },
    [types.CREATE_TRADE_FAILURE](state, action) {
        return {
            ...state,
            loading: false
        };
    },
});
