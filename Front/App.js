
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, HeaderBackground } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import RealHomeScreen from './src/screens/RealHomeScreen';
import Splash from './src/screens/Splash';
import Transfer from './src/screens/TransferScreen';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Real: RealHomeScreen,
    Sp : Splash,
    Tran : Transfer,
  },
  {
    initialRouteName: 'Sp',
    defaultNavigationOptions: {
      title: 'CE COIN',
      headerStyle: {
        backgroundColor: '#333333',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default createAppContainer(navigator);
