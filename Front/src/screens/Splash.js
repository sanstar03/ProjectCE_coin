import { Image,ImageBackground, View, StyleSheet } from "react-native";
import React,{ useEffect } from "react";
import AsyncStorage from '@react-native-community/async-storage';
import axios from "axios";
import {navigate} from '../navigationRef';

const SplashScreen = ( {navigation}) =>{

  const getRole = async () => {
    const token = await AsyncStorage.getItem("token");
    const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
    axios.get('http://127.0.0.1:8000/getRole',config).then(res => 
    {
      if(res.data == 0){
        navigate('Real')
      }else{
        navigate('THome')
      }
    }
    )
    
  }
  useEffect(() => {
    setTimeout(() => {
    getRole()}, 2000)
  }, [])
  return  (
    <ImageBackground  style={styles.image}
  source={require('./../../assets/splash.png')}>
   </ImageBackground>
  );
};

const styles = StyleSheet.create({
image: {
  height: '100%',
  width: '100%',
  flex: 1 
}
});

export default SplashScreen;