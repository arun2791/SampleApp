import React, { Component } from 'react';
import HomeScreenView from './HomeScreenView';
import { connect } from 'react-redux';
class HomeScreenContainer extends Component {
	render() {
		return <HomeScreenView {...this.props} />;
	}
}
const mapStateToProps = state => {
	console.log("Trades: ", state.tradeReducer.trades);
	const { trades } =  state.tradeReducer;
	return {
		trades
	};
};
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		navigateForSell : (item) => {
			ownProps.navigation.navigate('Trade', {sell: item});
		}
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreenContainer);
