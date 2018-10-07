/* 
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as userReducer from './userReducer';
import * as usersReducer from './usersReducer';
import * as tradeReducer from './tradeReducers';
export default Object.assign(userReducer, loadingReducer, usersReducer, tradeReducer);
