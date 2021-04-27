import React, { useState,useEffect,useContext } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Alert,

} from "react-native";
import {Context as AuthContext} from "../context/AuthContext"
import {navigate} from '../navigationRef'
import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';


const HomeScreen = ({ navigation }) => {
  // State set for username
  const [username, setusername] = useState("");
  const [usernameError, setusernameError] = useState("");
  
  // State set for password
  const [password, setpassword] = useState("");
  const [passwordError, setpasswordError] = useState("");

  const [error,setError] = useState("");
  const [arraysub,setarray] = useState([]);
  const [tooken,settooken] = useState("");
  const {state,signin,clearErrorMessage,tryLocalSignin} = useContext(AuthContext);
  //about token

  //signin function
  //signin function

  // const signin = async () => {
  //   if (username != "" && password != "") {
  //     const user = {
  //       username: username,
  //       password: password,
  //     }
  //     axios
  //       .post("http://127.0.0.1:8000/api/login", user)
  //       .then(async (response) => {
  //         settooken(response.data.token)
  //         await AsyncStorage.setItem('token', response.data.token);
  //         console.log(response.data.token)
  //         navigation.navigate("Real");
  //         // try{
  //         //   navigation.navigate("Real")
  //         // }catch(e){
  //         //   Alert.alert("Error please try again.",[{text:'Ok'}])
  //         // }
  //       }).catch(e => {
  //         console.log(e.message)
  //         Alert.alert("Error :","something went wrong.",[{text:'Ok'}])

  //       })
  //   }
  // };

// const getSubject = async () =>{
    
//     const config = {
//   headers:{Authorization:`Bearer ${tooken}`}
//     };
//     axios.get('http://127.0.0.1:8000/api/getSubjectbyid',config).then(ret => setarray(ret.data))
//   }

// getSubject();
// console.log(arraysub)

useEffect(() => {
  tryLocalSignin()
},[]);

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.text}>CE COIN</Text>
      <View style={styles.InputflexStyle}>
        <TextInput
          style={styles.InputStyle}
          placeholder="Please Enter ID"
          value={username}
          onChangeText={(username) => setusername(username)}
          onChange={() => setusernameError("")}
        />
        <TextInput
          style={styles.InputStyle}
          placeholder="Please Enter Password"
          secureTextEntry = {true}
          value={password}
          onChangeText={(password) => setpassword(password)}
          onChange={() => setpasswordError("")}
        />
      </View>
      <View style={styles.loginScreenButton}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => signin({username,password})}>
          <Text style={styles.Buttontext}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
      <Text style={styles.text1}>If you don't have an account</Text> 
      <TouchableOpacity
      onPress={() => navigate("Signup")}
      >
      <Text style={styles.text2}>Create Account</Text>
      </TouchableOpacity>
      </View>
      {/* <View style={styles.loginScreenButton}>
        <TouchableOpacity style={styles.buttonStyle} onPress={signin}>
          <Text style={styles.Buttontext}>Teacher Login</Text>
        </TouchableOpacity>
      </View> */}
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
  row : {
    flexDirection : 'row',
  },
  text1: {
    color: "#6B6B6B",
    fontSize: 14,
    justifyContent :'center' 
  },
  text2: {
    fontSize: 15,

    textAlign: "center",
    fontWeight: "500",
    textDecorationLine : 'underline',
    marginLeft: 5 ,
    color: "#595959",
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
    width: "80%",
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
    fontSize: 48,
    margin: 5,
    textAlign: "center",
    fontWeight: "bold",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
  },
  Buttontext: {
    fontSize: 16,
    margin: 8,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default HomeScreen;
