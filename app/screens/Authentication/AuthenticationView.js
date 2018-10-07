import React, {Component} from 'react';
import { View } from 'react-native';
import styles from './styles';
import TransparentButton from 'app/components/TransparentButton';
import UserForm from '../../components/UserForm';
import Button from 'app/components/Button';

export default class AuthenticationScreen extends Component{
    state = {
        currentPage : 'Create',
        userName: '',
        pinCode: '',
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.row}>
                    <TransparentButton
                        text={'Create'}
                        isSelected={this.state.currentPage === 'Create'}
                        onPress={this.onPress}/>
                    <TransparentButton
                        text={'Login'}
                        isSelected={this.state.currentPage === 'Login'}
                        onPress={this.onPress}/>
                </View>
                <UserForm onChangeText={this.onChangeText}/>
                <View style={styles.buttonView}>
                    <Button
                        text={this.getState()}
                        onPress={this.onSubmit}/>
                </View>
            </View>
        );
    }

    onPress = (currentPage) => {
       this.setState({currentPage});
    }

    getState = () => {
        if(this.state.currentPage === 'Create'){
            return 'Create User';
        }
        return 'Login';
    }

    onChangeText = (type, text) => {
        this.setState({[type]: text});
    }

    onSubmit = () => {
        const {userName, pinCode} = this.state;
        if(this.state.currentPage === 'Create'){
            return this.props.signUpRequest(userName, pinCode);
        }
        return this.props.loginRequest(userName, pinCode);
    }
}