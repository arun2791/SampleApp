import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

const ResetPin = (props) => {
    return(
        <View style={styles.container}>
            <FormField {...props} text='Orginal Pin' type= 'oldpin'/>
            <FormField {...props} text='New Pin' type= 'newpin'/>
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

export default ResetPin;