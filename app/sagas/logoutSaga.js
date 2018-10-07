/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put, call, select } from 'redux-saga/effects';
import * as navigationActions from 'app/actions/navigationActions';

// Our worker Saga that logins the user
export default function* loginAsync(action) {
    //how to call api
    try{
        navigationActions.navigateToLogin(); 
    }catch(error){
        console.log("ERROR: ", error);
        
    }
}
