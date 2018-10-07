/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put, call, select } from 'redux-saga/effects';
import * as tradeActions from 'app/actions/tradeActions';
import * as navigationActions from 'app/actions/navigationActions';

// Our worker Saga that logins the user
export default function* tradeAsync(action) {
    //how to call api
    console.log("TRADE ACTIOND: ", action)
    try{
    const trade = {
        name: action.name,
        pinCode: action.pinCode,
        qty: action.qty
    }
     if (trade) {
         yield put(tradeActions.createTradeResponse(trade));
     }else{
        yield put(tradeActions.createTradeFailure());
     } 
    }catch(error){
        console.log("ERROR: ", error);
    }
}
