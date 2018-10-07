import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import styles from './styles';
import TradeItem from 'app/components/TradeItem'
import Logout from 'app/components/Logout';

export default class HomeScreenView extends Component {
	state = {
		data: []
	}
	static getDerivedStateFromProps(nextProps, state){
		return{
			data: nextProps.trades
		}
	}
	render() {
		return (
			<View style={styles.container} >	
				<Logout/>
				<View style={styles.subView}>
					<Text style={styles.textSubHead}>List of asset</Text>
					{this.state.data.length > 0 && 
					<FlatList
						contentContainerStyle={styles.list}
						data={this.state.data}
						renderItem={this.renderItem}
						extraData={this.state.data}
						ListHeaderComponent={this.header}
						keyExtractor={this.keyExtractor}/>
					}
				</View>
			</View>
		);
	}
	header = () => {
		return(
			<TradeItem header={true}/>
		);
	}
	renderItem = ({item, index}) => {
		return(
			<TradeItem onPress={this.sell} index={index} item={item}/>
		);
	}
	sell = (item) => {
		this.props.navigateForSell(item);
	}
	keyExtractor =(item,index) => {
		return index;
	}
}
