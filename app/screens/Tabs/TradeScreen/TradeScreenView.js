import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles';

import StockForm from 'app/components/StockForm';
import StockSellForm from 'app/components/StockSellForm';
import Button from 'app/components/Button';
import Logout from 'app/components/Logout';

export default class TradeScreenView extends Component {
	state = {
		name: '',
		pincode: '',
		qty: ''
	}
	render() {
		const toSell = this.props.navigation.state.params ? this.props.navigation.state.params.sell : null
		const buttonText = toSell ? 'Sell' : 'Buy'
		return (
			<View style={styles.container} >
				<Logout/>
				{this.form(toSell)}
				<Button text={buttonText} onPress={this.buy}/>
			</View>
		);
	}

	form = (toSell) => {
		if(toSell){
			return (
				<StockSellForm onChangeText={this.onChangeText} options = {toSell}/>
			);
		} else {
			return(
				<StockForm
					onChangeText={this.onChangeText}/>
			);
		}
	}

	buy = () => {
		const {name, qty, pincode} = this.state;
		const toSell = this.props.navigation.state.params ? this.props.navigation.state.params.sell : null
		if(toSell){
			if(pincode === toSell.pinCode){

			} else {
				alert('pin mismatch');
			}
		} else {
			if(name !== '' && qty !== '' && pincode !== ''){
				this.props.createTrade(name, qty, pincode);
			} else {
				alert('All fileds are mandatory');
			}
		}
	}
	onChangeText = (type, text) => {
        this.setState({[type]: text});
    }
}
