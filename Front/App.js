import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import RealHomeScreen from './src/screens/RealHomeScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Real: RealHomeScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
