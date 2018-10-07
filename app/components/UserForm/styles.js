import { StyleSheet } from 'react-native';
import ApplicationStyles from 'app/config/styles';
import color from 'app/config/colors';
import metrics from '../../config/metrics';

const styles = StyleSheet.create({
    ...ApplicationStyles,
    subContainer: {
        width: metrics.screenWidth*0.9,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        marginTop: 10,
    },
    text: {
        ...ApplicationStyles.fontlight,
        textAlign: 'center',
        alignSelf: 'center',
        color: color.COLOR_BLACK,
        flex: 1,
    },
    textInput: {
        flex: 1,
        height: 50,
        borderWidth: 2,
        borderColor: color.COLOR_BLACK
    }
    

});

export default styles;
