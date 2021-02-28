import React, { useState } from "react";
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

import axios from 'axios';

const Signup = ({ navigation }) => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [studentid, setstudentid] = useState("");
  const [load, setload] = useState("");

  const ssignup = async () => {
      const user = {
        "username": username,
        "password": password,
        "firstname": firstname,
        "lastname": lastname,
        "studentid": studentid,
      }
      axios
        .post("http://127.0.0.1:8000/api/createUser", user)
        .then((response) => {
          Alert.alert("Sign up Success ", [
            { text: "Ok" },
          ]);
          console.log(response.data)
          

        })
        .catch((e) => {
          Alert.alert("Error :",e.message, [
            { text: "Ok" },
          ]);
        });
    
  };

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.text}>CREATE ACCOUNT</Text>
      <View style={styles.InputflexStyle}>
        <TextInput
          style={styles.InputStyle}
          placeholder="Please Enter ID"
          value={studentid}
          onChangeText={(studentid) => setstudentid(studentid)}
        />
        <TextInput
          style={styles.InputStyle}
          placeholder="Please Enter First Name"
          value={firstname}
          onChangeText={(firstname) => setfirstname(firstname)}
        />
        <TextInput
          style={styles.InputStyle}
          placeholder="Please Enter Last Name"
          value={lastname}
          onChangeText={(lastname) => setlastname(lastname)}
        />
        <TextInput
          style={styles.InputStyle}
          placeholder="Please Enter Username"
          value={username}
          onChangeText={(username) => setusername(username)}
        />
        <TextInput
          style={styles.InputStyle}
          placeholder="Please Enter Password"
          value={password}
          onChangeText={(password) => setpassword(password)}
        />
      </View>
      <View style={styles.loginScreenButton}>
        <TouchableOpacity style={styles.buttonStyle} onPress={ssignup}>
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
