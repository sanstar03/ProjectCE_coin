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
    axios.get('https://cecoinserver.ngrok.io/getRole',config).then(res => 
    {
      if(res.data == 0){
        navigate('Real')
      }else if(res.data ==1){
        navigate('THome')
      }else if (res.data == 3){
        navigate('gencode')
      }else if (res.data == 4){
        navigate('SHome')
      }
    }
    )
    
  }
  useEffect(() => {
    setTimeout(() => {
    getRole()}, 1000)
  }, [])
  return  (
    <ImageBackground  style={styles.image}
  source={require('./../../assets/load.png')}>
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