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
    case 'getbal':
      return {...state,datatosend:action.payload}
    // case 'add_error':
    //   return { ...state, errorMessage: action.payload };
    // case 'signup':
    //   return { errorMessage: '', token: action.payload };
    default:
      return state;
  }
};




const getbal = dispatch => async () =>{
  try{
    const token = await AsyncStorage.getItem('token');
    const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
    await axios.get("http://127.0.0.1:8000/getBalance",config).then(res => {
    dispatch({type:'getbal',payload:res.data});
    })
  }catch(e){
    dispatch({type:'add_error',payload:'Something went wrong with sign in'});
  }

}
export const { Provider, Context } = createDataContext(
  authReducer,
  {getbal},
  {error_message:'',datatosend:0}
);
