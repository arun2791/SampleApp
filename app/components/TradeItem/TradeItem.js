import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import TransparentButton from '../TransparentButton';

const TradeItem = (props) => {
    const { index, header } = props;
    if(!header){
        const {name, qty} = props.item;
        const stylesView = index % 2 === 0 ? styles.row1 :  styles.row2;
        return(
            <View style={stylesView}>
                <View style={styles.itemEnds}>
                    <Text style={styles.text}>{name}</Text>
                </View>
                <View style={styles.itemCenter}>
                    <Text style={styles.text}>{qty}</Text>
                </View>
                <View style={styles.itemEnds}>
                <TransparentButton
                    text={'Sell'}
                    isSelected={true}
                    onPress={()=>props.onPress(props.item)}/>
                </View> 
            </View>
        );
    } else {
        return(
            <View style={styles.headerRow}>
                <View style={styles.itemEnds}>
                    <Text style={styles.textHeader}>Stock</Text>
                </View>
                <View style={styles.itemCenter}>
                    <Text style={styles.textHeader}>Quantity</Text>
                </View>
                <View style={styles.itemEnds}>
                    <Text style={styles.textHeader}>Action</Text>
                </View> 
            </View>
        );
    }
}

export default TradeItem;