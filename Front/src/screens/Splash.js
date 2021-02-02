import { Image,ImageBackground, View, StyleSheet } from "react-native";
import React,{ useEffect } from "react";


const SplashScreen = ( {navigation}) =>{
    useEffect(() => {
        setTimeout(() => navigation.navigate('Home'), 2000)
      }, [])

  return  (
    <ImageBackground  style={styles.image}
  source={require('./../../assets/s.png')}>
   </ImageBackground>
  );
};

const styles = StyleSheet.create({
image: {
  height: '100%',
  weight: '100%',
  flex: 1 
}
});

export default SplashScreen;