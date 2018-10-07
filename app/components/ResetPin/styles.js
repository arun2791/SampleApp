import { StyleSheet, Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        width
    },
    row: {
        margin: 10,
        flexDirection: 'row',
    },
    text: {
        color: 'black',
        flex: 1,
        textAlign: 'left',
    },
    textInput: {
        height: 50,
        borderWidth: 2,
        borderColor: 'black',
        flex: 1, 
    }
});

export default styles;