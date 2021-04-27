import AsyncStorage from '@react-native-community/async-storage';
import createDataContext from "./createDataContext";
// import trackerApi from '../api/tracker';
// import { navigate } from '../navigationRef';
import axios from 'axios';
import {navigate} from '../navigationRef';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Alert,

} from "react-native";

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state,error_message:action.payload};
    case 'signin':
      return {error_message:'',token:action.payload};
    case 'clear_error_message':
      return {...state,error_message:''};
    case 'signout':
      return {token:null,error_message:''};
    case 'getbal':
      return {...state,data:action.payload}
    case 'joinsub':
      return {...state,data:action.payload}
    // case 'add_error':
    //   return { ...state, errorMessage: action.payload };
    // case 'signup':
    //   return { errorMessage: '', token: action.payload };
    default:
      return state;
  }
};

const signout = dispatch => () => {
  try{
   AsyncStorage.removeItem('token');
    dispatch({type:'signout'});
    navigate('Home')
  }catch(e){
    console.log(e.message)
  }
}


const tryLocalSignin = dispatch => async () =>{
    const token = await AsyncStorage.getItem('token');
    if(token){
      dispatch({type:'signin',payload:token})
      navigate('Sp')
    }else{
      navigate('Home')
    }
}

const clearErrorMessage = dispatch => () => {
  dispatch({type:'clear_error_message'})
}

const signup = dispatch => async ({ username, password, firstname, lastname, studentid }) => {
    try {
      await axios.post("https://cecoinserver.ngrok.io/signup", {
        username,
        password,
        firstname,
        lastname,
        studentid,
      }).then(async res =>{
      await AsyncStorage.setItem('token',res.data.token);
      dispatch({type:'signup',payload:res.data.token});
      // await AsyncStorage.getItem('token')
      Alert.alert("Result","Successful",[{text:'Ok',onPress:()=>navigate('Home')}]);
      
      // console.log(res.data);
      })
      
    } catch (e) {
      console.log(e.message)
      
      dispatch({type:'add_error',payload:'Something went wrong with sign up'});
      Alert.alert("Error","Something went wrong with sign up",[{text:'Ok'}]);
    }
  };

const signin = dispatch => async ({username,password}) => {
  try {
    await axios.post("https://cecoinserver.ngrok.io/signin", {
      username,
      password
    }).then(async res => {
      await AsyncStorage.setItem('token',res.data.token);
      dispatch({type:'signin',payload:res.data.token});
      // console.log(res.data.role)
      navigate('Sp')
    })}catch(e){
      console.log(e.message)
      dispatch({type:'add_error',payload:'Something went wrong with sign in'});
      Alert.alert("Error","Something went wrong with sign in",[{text:'Ok'}]);
    }
};

const joinsub = dispatch => async ({subjectId,studentid}) => {
  try {
    const token = await AsyncStorage.getItem("token");
    const config = {
    headers: { Authorization: `Bearer ${token}` },
      };
    await axios.post("https://cecoinserver.ngrok.io/joinSubject", token,{
      subjectId
    }).then(async res => {
      dispatch({type:'joinsub',payload:res.data.message});
    })}catch(e){
      console.log(e.message)
      dispatch({type:'add_error',payload:'Something went wrong with Sunject'});
      Alert.alert("Error","Subject not found.",[{text:'Ok'}]);
    }
};


// const joinsub = dispatch => async ({subjectid}) => {
//   try{
//     awa
//   }
// }
const getbal = dispatch => async () =>{
  try{
    const token = await AsyncStorage.getItem('token');
    const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
    await axios.get("https://cecoinserver.ngrok.io/getBalance",config).then( res => {
      const result = res.data
      dispatch({type:'getbal',payload:result});
      console.log(result)
    })
  }catch(e){
    console.log(e.message)
  }

}


export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup ,clearErrorMessage,tryLocalSignin,getbal,joinsub},
  { token:null ,error_message:'',data:null}
);
