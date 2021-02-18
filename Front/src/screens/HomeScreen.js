import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Alert
} from "react-native";
import axios from "axios";

const HomeScreen = ({navigation}) => {
  // State set for username
  const [username, setusername] = useState("");
  const [usernameError, setusernameError] = useState("");

  // State set for password
  const [password, setpassword] = useState("");
  const [passwordError, setpasswordError] = useState("");
  
  //about token
  

  //signin function
  const signin = async () => {

    if (username != "" && password != "") {
      const user = {
        username:username,
        password:password
      }
      axios.post('http://127.0.0.1:8000/api/login',user).then(response=>{
        navigation.navigate("Real")
        console.log(response)
        // try{
        //   navigation.navigate("Real")
        // }catch(e){
        //   return res.send({
        //     status:400,
        //     message:'Something went wrong'
        //   }).then(()=>Alert.alert('Invalid Usernam and Password',[{text:'Ok'}]))
          
        // }
      }).catch(()=> {
        
        Alert.alert('Invalid Usernam and Password',[{text:'Ok'}]);
      })
    }
  };

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
          value={password}
          onChangeText={(password) => setpassword(password)}
          onChange={() => setpasswordError("")}
          secureTextEntry={true}
        />
      </View>

      <View style={styles.loginScreenButton}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={signin}
        >
          <Text style={styles.Buttontext}>Next</Text>
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
