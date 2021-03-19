import React, { useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Picker,
  Alert
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { Context as AuthContext } from "../context/AuthContext";
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import { navigate } from "../navigationRef";

const Codegen = (props) => {
  const Name = "Nattaphong Wattaninkul";
  const [selectedValue, setSelectedValue] = useState("java");
  const [code, setCode] = useState("");
  const [data1,setdata1] = useState("");
  const [upDate,setUpdate] = useState(false);
  let subsend = "";
  let subdel = "";
  const itemsub = [
    // { label: "a", value: "a" },
    // { label: "b", value: "b" },
    // { label: "c", value: "c" },
    // { label: "d", value: "d" },
    // { label: "e", value: "e" },
    // { label: "f", value: "f" },
    // { label: "g", value: "g" },
    // { label: "h", value: "h" }
  ];




  useEffect(() => {
    getSubject()

  },[upDate]);
  const getSubject = async () => {
    const token = await AsyncStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    await axios
      .get("http://127.0.0.1:8000/getSubjectByTeacher", config)
      .then((ret) => {
        if (ret.data.length == 1) {
          itemsub.push({ label: ret.data[0].subject, value: ret.data[0].subject })
          // itemsub[0] = [{ label: ret.data[0].subject, value: ret.data[0].subject }]
        } else if (ret.data.length == 2) {
          itemsub.push({ label: ret.data[0].subject, value: ret.data[0].subject })
          itemsub.push({ label: ret.data[1].subject, value: ret.data[1].subject })
        }
        // } else if (ret.data.length == 3) {
        //   setsub0(ret.data[0].subject);
        //   setsub1(ret.data[1].subject);
        //   setsub2(ret.data[2].subject);
        // } else if (ret.data.length == 4) {
        //   setsub0(ret.data[0].subject);
        //   setsub1(ret.data[1].subject);
        //   setsub2(ret.data[2].subject);
        //   setsub3(ret.data[3].subject);
        // } else if (ret.data.length == 5) {
        //   setsub0(ret.data[0].subject);
        //   setsub1(ret.data[1].subject);
        //   setsub2(ret.data[2].subject);
        //   setsub3(ret.data[3].subject);
        //   setsub4(ret.data[4].subject);
        // } else if (ret.data.length == 6) {
        //   setsub0(ret.data[0].subject);
        //   setsub1(ret.data[1].subject);
        //   setsub2(ret.data[2].subject);
        //   setsub3(ret.data[3].subject);
        //   setsub4(ret.data[4].subject);
        //   setsub5(ret.data[5].subject);
        // } else if (ret.data.length == 7) {
        //   setsub0(ret.data[0].subject);
        //   setsub1(ret.data[1].subject);
        //   setsub2(ret.data[2].subject);
        //   setsub3(ret.data[3].subject);
        //   setsub4(ret.data[4].subject);
        //   setsub5(ret.data[5].subject);
        //   setsub6(ret.data[6].subject);
        // } else if (ret.data.length == 8) {
        //   setsub0(ret.data[0].subject);
        //   setsub1(ret.data[1].subject);
        //   setsub2(ret.data[2].subject);
        //   setsub3(ret.data[3].subject);
        //   setsub4(ret.data[4].subject);
        //   setsub5(ret.data[5].subject);
        //   setsub6(ret.data[6].subject);
        //   setsub7(ret.data[7].subject);
        // }
      });
  };

  const createcheckin = async () => {
    const token = await AsyncStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
      
      await axios
        .post("http://127.0.0.1:8000/createCheckin",{subject:subsend},config)
        .then(async (response) => {
          Alert.alert('Result:',response.data.message,[{text:'Ok'}])
          await setCode(response.data.code)
          await setUpdate(prev => {!prev})
        })
      
    }
  
  const deletecheckin = async () => {
      const token = await AsyncStorage.getItem("token");
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
        
        await axios
          .post("http://127.0.0.1:8000/deleteCheckin",{subject:subdel},config)
          .then(async (response) => {
            Alert.alert('Result:',response.data.message,[{text:'Ok'}])
            await setCode("")
            await setUpdate(prev => {!prev})
          })
        
      }

      const showcheckin = async () => {
        const token = await AsyncStorage.getItem("token");
        const config = {
        headers: { Authorization: `Bearer ${token}` },
        };
       axios
        .get("http://127.0.0.1:8000/showCheckin",config,{subject:subdel})
        .then(async (response) => {
          // Alert.alert('Result:',response.data.message,[{text:'Ok'}])
          console.log(response.data.code)
          await setCode(response.data.code)
          await setUpdate(prev => {!prev})
        })
          
        }
  
  
  

  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewStyle1}>
        <FontAwesome5 name="coins" style={styles.iconstyle3} />
        <Text style={styles.text}>Generate Code</Text>
        <View style={styles.viewStyle3}>
          <View style={styles.line} />
        </View>

        <DropDownPicker
          items={itemsub}
          containerStyle={{ height: 40, width: "90%" }}
          style={styles.dropdown}
          itemStyle={{
            justifyContent: "flex-start",
          }}
          dropDownStyle={{ backgroundColor: "#fafafa" }}
          onChangeItem={ item => {
            subsend = item.value
            subdel = item.value
            showcheckin();
            // createcheckin();
            
          }}
        />
        
        <View style={styles.viewStyle5}>
          <Text style={styles.text4}>{code}</Text>
        </View>

        <View style={styles.viewStyle4}>
          <View style={styles.ConButton}>
            { code == "" ? <TouchableOpacity style={styles.buttonStyle2} onPress={() => createcheckin()}>
              <Text style={styles.Buttontext2}>Generate</Text>
            </TouchableOpacity>:<TouchableOpacity disabled ={true} style={styles.buttonStyle4} onPress={() => createcheckin()}>
              <Text style={styles.Buttontext2}>Generate</Text>
            </TouchableOpacity>}
          </View>
          <View style={styles.ConButton} >
          <TouchableOpacity style={styles.buttonStyle3} onPress={() => deletecheckin()} >
          <Text style={styles.Buttontext2}>Clear</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
        }

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#F2F2F2",
  },
  InputStyle: {
    backgroundColor: "#fff",
    width: "100%",
  },
  InputflexStyle1: {
    width: "85%",
  },
  viewStyle1: {
    alignItems: "center",
    height: 350,
    backgroundColor: "#fff",
    margin: 15,
    borderRadius: 6,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    shadowRadius: 1,
    shadowOffset: { width: 2, height: 2 },
  },
  viewStyle4: {
    marginTop: 10,
    alignItems: "center",
    width: "100%",
    flexDirection:'row',
    justifyContent :'center'
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
  viewStyle5: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: "20%",
    backgroundColor: "#FBFBFB",
    marginTop: 10,
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
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    fontWeight: "500",
  },
  text: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#464646",
    marginTop: 10,
    marginBottom: 5,
  },
  text4: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#333333",
    alignItems: "center",
  },
  text1: {
    fontSize: 18,
    fontWeight: "500",
    color: "#464646",
  },
  text2: {
    fontSize: 16,
    fontWeight: "400",
    color: "#858585",
    margin: 2,
  },
  text3: {
    fontSize: 18,
    fontWeight: "500",
    color: "#464646",
    marginLeft: 5,
  },
  buttonStyle: {
    backgroundColor: "#FF4D15",
  },
  buttonStyle2: {
    backgroundColor: "#FF4D15",
    borderRadius: 6,
    marginBottom: 15,
    height : 45,
    justifyContent : 'center'
  },
  buttonStyle3:{
    backgroundColor:'red',
    borderRadius: 6,
    marginBottom : 15,
    height : 45,
    justifyContent : 'center'
  },
  buttonStyle4:{
    backgroundColor:'#ACACAC',
    borderRadius: 6,
    marginBottom : 15,
    height : 45,
    justifyContent : 'center'
  },
  line: {
    height: 1,
    backgroundColor: "#CFCFCF",
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
  },
  iconstyle3: {
    marginTop: 15,
    fontSize: 45,
    alignSelf: "center",
    margin: 10,
    color: "#000",
  },
});

export default Codegen;
