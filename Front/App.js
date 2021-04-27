import React from "react";
import {
  createAppContainer,
  CreateBottomTabNavigator,
  createSwitchNavigator,
} from "react-navigation";
import { createStackNavigator, HeaderBackground } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import RealHomeScreen from "./src/screens/RealHomeScreen";
import Splash from "./src/screens/Splash";
import Transfer from "./src/screens/TransferScreen";
import CreateAc from "./src/screens/CreateAc";
import TeacherHome from "./src/screens/TeacherHome";
import Signup from "./src/screens/Signup";
import Account from "./src/screens/Account";
import Activity from "./src/screens/Activitylist";
import Checkin from "./src/screens/Code";
import Codegen from "./src/screens/Codegen";
import AccT from "./src/screens/AccountTeacher";
import AccS from "./src/screens/StudentActlist"
import Rclist from "./src/screens/Rewardlist"
import testt from "./src/screens/test"
import gencode from "./src/screens/genCode"
import Speciallist from "./src/screens/SpecialList"
import { Provider as AuthProvider } from "./src/context/AuthContext";
import SpDetail from "./src/screens/SpecialDetail"
import Red from "./src/screens/Redeemed"
import ShopH from "./src/screens/ShopHome"
import Sp from "./src/screens/Sp"
// import Checkin  from './src/screens/Checkin ';
import { setNavigator } from "./src/navigationRef";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Real: RealHomeScreen,
    Sp: Splash,
    Tran: Transfer,
    CreateAc: CreateAc,
    THome: TeacherHome,
    Signup: Signup,
    Acc: Account,
    Ac: Activity,
    // ChecK : Checkin
  },
  {
    initialRouteName: "S",
    defaultNavigationOptions: {
      title: "CE COIN",
      headerStyle: {
        backgroundColor: "#333333",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    },
  }
);

const switchNavigator = createSwitchNavigator({
  loginflow: createStackNavigator({
   
    Home: HomeScreen,
    Signup: Signup,
  }),
  mainflow: createStackNavigator({
  
    Sp: Splash,
    Real: RealHomeScreen,
    Speciallist:Speciallist,
    SpDetail:SpDetail,
    Rclist:Rclist,
    AccS:AccS,
    Checkin: Checkin,
    Real: RealHomeScreen,
    Acc: Account,
    Redd:Red,
    Tran: Transfer,
  }),
  teacherflow: createStackNavigator({
   
    Sp: Splash,
    THome: TeacherHome,
    Ac: Activity,
    Codegen: Codegen,
    Tran: Transfer,
    AccT: AccT,
    CreateAc: CreateAc,
  }),
  staffFlow:createStackNavigator({
  
    Sp: Splash,
    gencode:gencode
  }),
  shopFlow:createStackNavigator({
   
    Sp: Splash,
    SHome:ShopH,
    Tran: Transfer,
  })
  
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App
        ref={(navigator) => {
          setNavigator(navigator);
        }}
      />
    </AuthProvider>
  );
};
