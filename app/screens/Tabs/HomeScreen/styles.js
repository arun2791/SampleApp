import { StyleSheet } from 'react-native';
import metrics from '../../../config/metrics';
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
	},
	subView: {
		flex: 1,
	},
	textSubHead: {
		color: 'black',
		fontWeight: 'bold',
	},
	list:{
		width: metrics.screenWidth -20,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 2,
		borderColor: 'black',
	}
});
export default styles;