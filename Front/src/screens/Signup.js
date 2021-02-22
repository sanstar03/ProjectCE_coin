import React from "react";
import { Text, StyleSheet, View,TouchableOpacity,TextInput} from "react-native";

const Signup = props => {


  return (
  <View style={styles.viewStyle}>
    <Text style={styles.text}>CREATE ACCOUNT</Text>
    <View style={styles.InputflexStyle}>
     <TextInput
      style={styles.InputStyle}
      placeholder="Please Enter ID"
    />
    <TextInput
      style={styles.InputStyle}
      placeholder="Please Enter First Name"
    />
    <TextInput
      style={styles.InputStyle}
      placeholder="Please Enter Last Name"
    />
    <TextInput
      style={styles.InputStyle}
      placeholder="Please Enter Password"
    />
    </View>
    <View style={styles.loginScreenButton}>
    <TouchableOpacity 
    style={styles.buttonStyle}
    onPress={() => props.navigation.navigate('Home')}
    >
    <Text style={styles.Buttontext}>Sign Up</Text>
    </TouchableOpacity>
    </View>
    
  </View>
  );
};

const styles = StyleSheet.create({
  InputStyle:{
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    borderRadius: 6,
    margin: 10,
    paddingLeft:10
  },
  buttonStyle:{
    backgroundColor:'#FF4D15',
    borderRadius: 6,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    shadowRadius: 1 ,
    shadowOffset : { width: 2, height: 2 }
  },
  loginScreenButton:{
    width: "40%", 
    margin: 10
  },
  InputflexStyle:{
    width: "90%", 
    margin: 10
  },
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%", 
    backgroundColor:'#fff'
    },
    text: {
      fontSize: 32 ,
      margin: 5,
      textAlign: "center",
      fontWeight : 'bold',
    },
  Buttontext: {
    fontSize: 16 ,
    margin: 8,
    color: "#fff",
    textAlign: "center",
    fontWeight : 'bold',
  }
});

export default Signup;
