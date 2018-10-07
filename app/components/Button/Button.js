import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const TransparentButton = (props) => {
    const { text } = props;
    return(
        <TouchableOpacity style={styles.subContainer} onPress={()=>props.onPress(text)}>
            <Text style={styles.text} >{text}</Text>
        </TouchableOpacity>
    );
}

export default TransparentButton;