import { createStackNavigator } from 'react-navigation';
import Authentication from 'app/screens/Authentication';
import Tabs from './NavigationTab';
const RNApp = createStackNavigator(
    {
        Authentication : {
            screen: Authentication,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        Tabs: {
            screen: Tabs,
            navigationOptions: { header: null, gesturesEnabled: false }
        }
    },
    {
        initialRouteName: 'Authentication'
    }
);

export default RNApp;
