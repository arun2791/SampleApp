import { StyleSheet } from 'react-native';
import ApplicationStyles from 'app/config/styles';
import metrics from 'app/config/metrics';
const styles = StyleSheet.create({
    ...ApplicationStyles,
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: metrics.screenWidth,
        marginTop: metrics.screenHeight * 0.1,
        backgroundColor: '#f1f1f1',
        paddingVertical: 10,
    },
    buttonView: {
        flex: 0.5,
        alignItems: 'center',
    }
});

export default styles;
