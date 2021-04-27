import { Image,ImageBackground, View, StyleSheet } from "react-native";
import React,{ useEffect } from "react";


const Sp = ( {navigation}) =>{
    useEffect(() => {
        setTimeout(() => navigation.navigate('Home'), 3000)
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

export default Sp;