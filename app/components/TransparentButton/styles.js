import { StyleSheet } from 'react-native';
import ApplicationStyles from 'app/config/styles';
import color from 'app/config/colors';

const styles = StyleSheet.create({
    ...ApplicationStyles,
    subContainer: {
        alignItems: 'center',
    },
    view: {
        borderBottomWidth: 2,
        borderBottomColor: color.COLOR_BLACK,
    },
    textUnSelected: {
        ...ApplicationStyles.fontlight,
        textAlign: 'center',
        color: color.COLOR_BLACK,
    },
    textSelected: {
        ...ApplicationStyles.fontlight,
        textAlign: 'center',
        color: color.COLOR_BLUE,
    }

});

export default styles;
