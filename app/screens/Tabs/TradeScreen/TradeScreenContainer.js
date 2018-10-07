import React, { Component } from 'react';
import TradeScreenView from './TradeScreenView';
import * as tradeActions from 'app/actions/tradeActions';
import { connect } from 'react-redux';
class TradeScreenContainer extends Component {
	render() {
		return <TradeScreenView {...this.props} />;
	}
}
const mapStateToProps = state => {
	return {};
};
const mapDispatchToProps = dispatch => {
	return {
		createTrade: (name, qty, pin) => {
			dispatch(tradeActions.createTradeRequest(name, qty, pin))
		}
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(TradeScreenContainer);
