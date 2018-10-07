import {StyleSheet} from 'react-native';
import metrics from '../../config/metrics';

const styles = StyleSheet.create({
    row1: {
        flexDirection: 'row',
        width: metrics.screenWidth -24,
        backgroundColor: '#f1f1f1',
        height: 40,
    },
    row2: {
        flexDirection: 'row',
        width: metrics.screenWidth -24,
        backgroundColor: 'white',
        height: 40,
    },
    headerRow: {
        flexDirection: 'row',
        width: metrics.screenWidth -24,
        backgroundColor: 'grey',
        height: 40,
    },
    itemEnds: {
        justifyContent: 'center',
        paddingLeft: 5,
        flex: 1,
    },
    itemCenter: {
        justifyContent: 'center',
        paddingLeft: 5,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        flex: 1.3,
    },
    text:{
        color: 'black'
    },
    textHeader: {
        color: 'black',
        fontWeight: 'bold'
    },
    button: {
        color: 'blue',
    }
});

export default styles;