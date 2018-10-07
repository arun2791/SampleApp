import { put, call, select } from 'redux-saga/effects';
import * as loginActions from 'app/actions/loginActions';
import * as navigationActions from 'app/actions/navigationActions';

// Our worker Saga that logins the user
export default function* loginAsync(action) {
    //how to call api
    try{
    const {users} = yield select(state=> state.usersReducer);
    const {user} = action
     const findIndex = users.findIndex(data=>{
         return data.userName === user.userName && 
            data.pinCode === user.pinCode
     })
    users.splice(findIndex, 1, {...user, pinCode: action.newpin});
    yield put(loginActions.resetPinSuccess(users));
    navigationActions.navigateToLogin();
      
    }catch(error){
        console.log("ERROR: ", error);
        
    }
}
