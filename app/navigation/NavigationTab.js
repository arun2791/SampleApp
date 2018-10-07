import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from 'app/screens/Tabs/HomeScreen';
import ResetScreen from 'app/screens/Tabs/ResetScreen';
import TradeScreen from 'app/screens/Tabs/TradeScreen';
export default createBottomTabNavigator({
	Home: HomeScreen,
	Trade: TradeScreen,
	Reset: ResetScreen,
}); 
