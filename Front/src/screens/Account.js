import React, { useState ,useContext,useEffect} from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  ScrollView
} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import {Context as AuthContext} from '../context/AuthContext'
import {navigate} from '../navigationRef'
import { sub } from "react-native-reanimated";

const Account = (props) => {
  const [name, setname] = useState("");
  const [id, setid] = useState("");
  const [subid, setsubid] = useState("");
  const {state,signout} = useContext(AuthContext);


const getId = async () => {
    const token = await AsyncStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get("https://cecoinserver.ngrok.io/getId", config)
      .then((res) => setid(res.data));
};

const ladasaid = async () => {
  const token = await AsyncStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  axios
    .get("https://cecoinserver.ngrok.io/getUser", config)
    .then((res) => setname(res.data));
};

const nissan = async () => {
  const token = await AsyncStorage.getItem("token");
  console.log(token)
  }


const joinsub = async () => {
  const token = await AsyncStorage.getItem("token");
  const config = {
    headers: { authorization: `Bearer ${token}` },
  };
  const data = {
    subjectId:subid,
  }
  axios
    .post("https://cecoinserver.ngrok.io/joinSubject", data,config).then(res => {
      Alert.alert('Result:',res.data.message,[{text:'Ok'}])
      setsubid('')
    })
};
useEffect (() => {
  getId()
  ladasaid()
  nissan()
},[])




  return (
    
    <View style={styles.viewStyle}>
      <ScrollView>
      <View style={styles.viewStyle1}>
        <Text style={styles.text}>USER PROFILE</Text>
        <View style={styles.viewStyle3}>
          <Text style={styles.text1}>Name</Text>
          <Text style={styles.text2}>{name}</Text>
          <View style={styles.line} />
          <Text style={styles.text1}>Student ID</Text>
          <Text style={styles.text2}>{id}</Text>
          <View style={styles.line} />
          <Text style={styles.text3}>Enroll Course</Text>
          <View style={styles.InputflexStyle}>
            <TextInput
              style={styles.InputStyle}
              placeholder="Input Course ID"
              value = {subid}
              onChangeText = {(subid) => setsubid(subid)}
              
            />
          </View>
          <View style={styles.viewStyle4}>
            <View style={styles.ConButton}>
              <TouchableOpacity
                style={styles.buttonStyle2}
                value = {subid}
                onPress = {() => {joinsub({subid})}}
              >
                <Text style={styles.Buttontext2}>Enroll</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.line}/>
        <Text style={styles.text1}>Reward</Text>
        <TouchableOpacity style={styles.buttonStyle1} onPress={() => navigate('Redd')} >
          <View style={styles.Rowd} >
          <Text style={styles.Buttontext3}>See Your Redeemed Reward</Text>
          <AntDesign name="caretright"  style={styles.iconstyle } />
          </View>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
      <View style={styles.viewStyle2}>
        <View style={styles.LogButton}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => signout()}

          >
            <Text style={styles.Buttontext }>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#F2F2F2",
  },
  image: {
    height: "60%",
    width: "60%",
  },
  viewStyle1: {
    alignItems: "center",
  },
  viewStyle4: {
    alignItems: "flex-end",
  },
  viewStyle2: {
    alignItems: "center",
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  viewStyle3: {
    width: "90%",
  },
  InputStyle: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 6,
    margin: 10,
    paddingLeft: 10,
    backgroundColor: "#fff",
  },
  InputflexStyle: {
    width: "100%",
  },
  LogButton: {
    width: "100%",
  },
  ConButton: {
    width: "40%",
    marginRight: 8,
  },
  Buttontext: {
    fontSize: 20,
    margin: 10,
    color: "#fff",
    textAlign: "center",
    fontWeight: "500",
  },
  Buttontext2: {
    fontSize: 14,
    margin: 10,
    color: "#fff",
    textAlign: "center",
    fontWeight: "500",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#464646",
    marginTop: 50,
    marginBottom: 20,
  },
  text1: {
    fontSize: 18,
    fontWeight: "500",
    color: "#464646",
    margin: 5,
  },
  text2: {
    fontSize: 16,
    color: "#585858",
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 25,
  },
  text3: {
    fontSize: 18,
    fontWeight: "500",
    color: "#464646",
    marginLeft: 5,
  },
  buttonStyle: {
    backgroundColor: "#333333",
  },
  buttonStyle2: {
    backgroundColor: "#393433",
    borderRadius: 6,
    elevation : 2,
  },
  line: {
    height: 0.5,
    backgroundColor: "#CFCFCF",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },buttonStyle1:{
    height : 50 ,
    margin :5 ,
    width : '95%',
    backgroundColor:'#FF4D15',
    borderRadius: 6,
    justifyContent : 'center',
    elevation : 2,
  },Buttontext3: {
    fontSize: 16 ,
    margin: 5,
    color: "#fff",
    textAlign: "center",
    fontWeight : '500',
  }, Rowd:{
    flexDirection: 'row',
    justifyContent : 'center'
  },iconstyle :{
    fontSize : 16,
    alignSelf : 'center',
    margin : 5,
    color: "#fff",
  },
});

export default Account;
