import React, {Component} from 'react';
import AuthenticationView from './AuthenticationView';
import { connect } from 'react-redux';
import * as loginActions from 'app/actions/loginActions';
import * as signUpActions from 'app/actions/signupActions';

class AuthenticationContainer extends Component {

    componentDidMount(){
        if(this.props.user.userName){
            this.props.navigation.navigate('Tabs');
        }
    }

    render() {
        return <AuthenticationView {...this.props} />;
    }
}

function mapStateToProps(state) {
    const {user} = state.userReducer;
    console.log("USER: ", user);
    
    return {
        user
    };
}
function mapDispatchToProps(dispatch) {
    return {
        loginRequest: (userName, pinCode) => {
            if(userName !=='' && pinCode !==''){
                dispatch(loginActions.loginRequest(userName, pinCode))
            } else {
                alert('missing fields')
            }
        },
        signUpRequest: (userName, pinCode) => {
            if(userName!=='' && pinCode!==''){
                dispatch(signUpActions.signUpRequest(userName, pinCode))
            } else {
                alert('missing fields')
            }
        }
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthenticationContainer);