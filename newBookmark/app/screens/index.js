import { createStackNavigator } from 'react-navigation';
import BookMark from '../screens/BookMark';
import Search from '../screens/Search';
import About from '../screens/About';

const Routes = createStackNavigator({
    Home: {
        screen: BookMark
    },
    Search: {
        screen: Search
    },
    About: {
        screen: About
    }
});

export default Routes;
