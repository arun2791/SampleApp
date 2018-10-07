import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

const TradeForm = (props) => {
    return(
        <View style={styles.container}>
            <FormField {...props} text='Stock Name' type= 'name'/>
            <FormField {...props} text='Quantity' type= 'qty'/>
            <FormField {...props} text='Pincode' type= 'pincode'/>
        </View>
    );
}

const FormField = (props) => {
    const {text, type} = props;
    return(
        <View style={styles.row}>
            <Text style={styles.text}>{text}</Text>
            <TextInput
                onChangeText={(text)=>props.onChangeText(type,text)}
                style={styles.textInput}/>
        </View>
    );
}

export default TradeForm;