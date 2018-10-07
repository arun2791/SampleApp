import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from './styles';

const TransparentButton = (props) => {
    const { text, isSelected } = props;
    const textStyle = isSelected ? styles.textSelected : styles.textUnSelected;
    return(
        <View style={styles.subContainer}>
            <TouchableOpacity style={styles.view} onPress={()=>props.onPress(text)}>
                <Text style={textStyle} >{text}</Text>     
            </TouchableOpacity>
        </View>
    );
}

export default TransparentButton;