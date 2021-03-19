import React, { useState,useContext} from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Touchable,
  Alert
} from "react-native";

import {Context as AuthContext} from "../context/AuthContext"

import axios from 'axios';

const Signup = ({ navigation }) => {
  const {state,signup} = useContext(AuthContext);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [studentid, setstudentid] = useState("");
  const [load, setload] = useState("");
  

  
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.text}>CREATE ACCOUNT</Text>
      <View style={styles.InputflexStyle}>
        <TextInput
          style={styles.InputStyle}
          placeholder="Please Enter ID"
          value={studentid}
          onChangeText={setstudentid}
        />
        
        <TextInput
          style={styles.InputStyle}
          placeholder="Please Enter First Name"
          value={firstname}
          onChangeText={setfirstname}
        />
        <TextInput
          style={styles.InputStyle}
          placeholder="Please Enter Last Name"
          value={lastname}
          onChangeText={setlastname}
        />
        <TextInput
          style={styles.InputStyle}
          placeholder="Please Enter Username"
          value={username}
          onChangeText={setusername}
        />
        <TextInput
          style={styles.InputStyle}
          placeholder="Please Enter Password"
          value={password}
          onChangeText={setpassword}
        />

        {/* {state.error_message ? <Text>{state.error_message}</Text>:null} */}
      </View>
      <View style={styles.loginScreenButton}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => signup({username,
        firstname,
        lastname,
        password,
        studentid})}>
          <Text style={styles.Buttontext}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  InputStyle: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 6,
    margin: 10,
    paddingLeft: 10,
  },
  buttonStyle: {
    backgroundColor: "#FF4D15",
    borderRadius: 6,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    shadowRadius: 1,
    shadowOffset: { width: 2, height: 2 },
  },
  loginScreenButton: {
    width: "40%",
    margin: 10,
  },
  InputflexStyle: {
    width: "90%",
    margin: 10,
  },
  viewStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 32,
    margin: 5,
    textAlign: "center",
    fontWeight: "bold",
  },
  Buttontext: {
    fontSize: 16,
    margin: 8,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Signup;
