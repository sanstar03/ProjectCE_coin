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
import { Provider as AuthProvider } from "./src/context/AuthContext";

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
    initialRouteName: "Home",
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
    Si: HomeScreen,
    Su: Signup,
  }),
  mainflow: createStackNavigator({
    Sp: Splash,
    Real: RealHomeScreen,
    Checkin: Checkin,
    CreateAc: CreateAc,
    Real: RealHomeScreen,
    Acc: Account,
    Ac: Activity,
    Tran: Transfer,
  }),
  teacherflow: createStackNavigator({
    Sp: Splash,
    THome: TeacherHome,
    Codegen: Codegen,
    Tran: Transfer,
    AccT: AccT,
  }),
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
