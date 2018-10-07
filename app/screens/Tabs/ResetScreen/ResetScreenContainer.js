import React, { Component } from 'react';
import ResetScreenView from './ResetScreenView';
import { connect } from 'react-redux';
import * as loginActions from 'app/actions/loginActions';
class ResetScreenContainer extends Component {
	render() {
		return <ResetScreenView {...this.props} />;
	}
}
const mapStateToProps = state => {
	const { user } = state.userReducer;
	console.log("User 111: ", user);
	
	return {
		user
	};
};
const mapDispatchToProps = dispatch => {
	return {
		reset: (user, newPin) => {
			dispatch(loginActions.resetPin(user, newPin));
		}
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(ResetScreenContainer);
