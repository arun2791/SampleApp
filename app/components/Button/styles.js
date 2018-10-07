import { StyleSheet } from 'react-native';
import ApplicationStyles from 'app/config/styles';
import color from 'app/config/colors';
import metrics from '../../config/metrics';

const styles = StyleSheet.create({
    ...ApplicationStyles,
    subContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: color.COLOR_BLACK,
        width: metrics.screenWidth*0.7,
        height: 50,
        marginTop: 50,
    },
    text: {
        ...ApplicationStyles.fontlight,
        textAlign: 'center',
        color: color.COLOR_BLACK,
    }

});

export default styles;
