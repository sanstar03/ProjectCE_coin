
import { createAppContainer,CreateBottomTabNavigator,createSwitchNavigator} from 'react-navigation';
import { createStackNavigator, HeaderBackground } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import RealHomeScreen from './src/screens/RealHomeScreen';
import Splash from './src/screens/Splash';
import Transfer from './src/screens/TransferScreen';
import CreateAc from './src/screens/CreateAc';
import TeacherHome from './src/screens/TeacherHome';
import Signup from './src/screens/Signup';
import Account  from './src/screens/Account';
// import Checkin  from './src/screens/Checkin ';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Real: RealHomeScreen,
    Sp : Splash,
    Tran : Transfer,
    CreateAc : CreateAc,
    THome : TeacherHome,
    Signup : Signup,
    Acc : Account,
    // ChecK : Checkin 
  },
  {
    initialRouteName: 'CreateAc',
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

const switchNavigator = createSwitchNavigator({
  loginflow:createStackNavigator({
    Su:Signup,
    Si:HomeScreen,
  }),
  mainflow:createStackNavigator({
    Tran : Transfer,
    CreateAc : CreateAc,
    THome : TeacherHome,
    Real: RealHomeScreen
  })

});


export default createAppContainer(navigator);





