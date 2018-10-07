/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put, call, select } from 'redux-saga/effects';
import * as loginUser from 'app/lib/checkUser';
import * as loginActions from 'app/actions/loginActions';
import * as signupActions from 'app/actions/signupActions';
import * as navigationActions from 'app/actions/navigationActions';

// Our worker Saga that logins the user
export default function* loginAsync(action) {
    //how to call api
    try{
    const {users} = yield select(state=> state.usersReducer);
    const user = {
        userName: action.userName,
        pinCode: action.pinCode,
    }
    const response = yield call(loginUser.checkUserName, users , user);
     if (response) {
        yield put(signupActions.signUpResponse(user));
         yield put(loginActions.onLoginResponse(user));
         navigationActions.navigateToHome();
     }else{
        yield put(signupActions.signUpFailed());
     } 
    }catch(error){
        console.log("ERROR: ", error);
        
    }
}
