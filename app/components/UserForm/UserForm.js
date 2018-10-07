import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from './styles';

const TransparentButton = (props) => {
    return(
        <View style={styles.subContainer}>
            <InputField {...props} text='User Name' type='userName'/>
            <InputField {...props} text='Pin Code' type='pinCode'/>
        </View>
    );
}

const InputField = (props) => {
    const { text, type } = props;
    return(
        <View style={styles.row}>
            <Text style={styles.text}>{text}</Text>
            <TextInput
                onChangeText={(text)=>props.onChangeText(type,text)}
                style={styles.textInput}/>
        </View>
    );
}

export default TransparentButton;