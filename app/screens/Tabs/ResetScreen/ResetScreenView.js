import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles';
import ResetPin from 'app/components/ResetPin';
import Logout from 'app/components/Logout';
import Button from 'app/components/Button';

export default class ResetScreenView extends Component {
	state = {
		oldpin: '',
		newpin: '',
	}
	render() {
		return (
			<View style={styles.container}>
				<Logout/>
				<ResetPin
					onChangeText={this.onChangeText}/>
				<Button text={'RESET'} onPress={this.reset}/>
			</View>
		);
	}

	onChangeText = (type, text) => {
        this.setState({[type]: text});
    }

	reset = () =>{
		const { oldpin, newpin } = this.state;
		const { user } = this.props;
		if(oldpin === user.pinCode){
			this.props.reset(user, newpin)
		} else {
			alert('Old Pin not matches with existing one')
		}
	}
}
