import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return  (
    <View style={style.header}>
      <View>
<Text style={style.headerText}></Text>
      </View>
   </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    AlignItems: 'center',
    justifyContent: 'center',
  },
  headerText:{
      fontWeight: 'bold',
      fontSize:'20',
      color: '#333',
  },
});
