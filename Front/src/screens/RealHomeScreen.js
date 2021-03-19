import React, { useState, useEffect, useRef, useReducer,useContext } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  SafeAreaView,
  ScrollViewBase
} from "react-native";
import { FontAwesome5, MaterialIcons,FontAwesome } from "@expo/vector-icons";






import { MaterialCommunityIcons } from '@expo/vector-icons';

import {Context as AuthContext} from "../context/AuthContext"
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import { sub } from "react-native-reanimated";

// import { ScrollView } from "react-native-gesture-handler";


const RealHomeScreen = (props) => {
  const [name, setname] = useState("");
  const [balance, setbalance] = useState("");
  // const [, forceUpdate] = useReducer((x) => x + 1, 0);
  // const [arraysub, setarray] = useState([]);
  const [sub0, setsub0] = useState("");
  const [sub1, setsub1] = useState("");
  const [sub2, setsub2] = useState("");
  const [sub3, setsub3] = useState("");
  const [sub4, setsub4] = useState("");
  const [sub5, setsub5] = useState("");
  const [sub6, setsub6] = useState("");
  const [sub7, setsub7] = useState("");
  const [sub8, setsub8] = useState("");
  const {state,getbal} = useContext(AuthContext);

  let subsend = "";
  const arr = [];
    useEffect(() => {
      console.log("kuy")
      getBalance();
      getSubject();
      ladasaid();
    },[])

// console.log(getbal())

  // let sublis = []

const ladasaid = async () => {
    const token = await AsyncStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get("http://127.0.0.1:8000/getUser", config)
      .then((res) => setname(res.data));
  };
  // const name = () => {{ data: branch_data; error: branch_error; loading: branch_loading } = useQuery(GETALLTOURNAMENT, {
  //   variables: {
  //       input: {
  //           limit: 12,
  //           offset: 0,
  //       }
  //   }
  // })};
  // // console.log("Nissan")
  const getBalance = async () => {
    const token = await AsyncStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get("http://127.0.0.1:8000/getBalance", config)
      .then((res) => setbalance(res.data));
  };

  const getSubject = async () => {
    const token = await AsyncStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get("http://127.0.0.1:8000/getSubject", config)
      .then((ret) => {
       
        if (ret.data.length == 1) {
          setsub0(ret.data[0].subject);
        } else if (ret.data.length == 2) {
          setsub0(ret.data[0].subject);
          setsub1(ret.data[1].subject);
        } else if (ret.data.length == 3) {
          setsub0(ret.data[0].subject);
          setsub1(ret.data[1].subject);
          setsub2(ret.data[2].subject);
        } else if (ret.data.length == 4) {
          setsub0(ret.data[0].subject);
          setsub1(ret.data[1].subject);
          setsub2(ret.data[2].subject);
          setsub3(ret.data[3].subject);
        } else if (ret.data.length == 5) {
          setsub0(ret.data[0].subject);
          setsub1(ret.data[1].subject);
          setsub2(ret.data[2].subject);
          setsub3(ret.data[3].subject);
          setsub4(ret.data[4].subject);
        } else if (ret.data.length == 6) {
          setsub0(ret.data[0].subject);
          setsub1(ret.data[1].subject);
          setsub2(ret.data[2].subject);
          setsub3(ret.data[3].subject);
          setsub4(ret.data[4].subject);
          setsub5(ret.data[5].subject);
        } else if (ret.data.length == 7) {
          setsub0(ret.data[0].subject);
          setsub1(ret.data[1].subject);
          setsub2(ret.data[2].subject);
          setsub3(ret.data[3].subject);
          setsub4(ret.data[4].subject);
          setsub5(ret.data[5].subject);
          setsub6(ret.data[6].subject);
        } else if (ret.data.length == 8) {
          setsub0(ret.data[0].subject);
          setsub1(ret.data[1].subject);
          setsub2(ret.data[2].subject);
          setsub3(ret.data[3].subject);
          setsub4(ret.data[4].subject);
          setsub5(ret.data[5].subject);
          setsub6(ret.data[6].subject);
          setsub7(ret.data[7].subject);
        }
      });
  };

  

  // // const test = () => {
  // //   console.log(arraysub);
  // //   console.log(sublis)
  // //   return arraysub.map((data)=>{
  // //     return <View><Text>{data}</Text></View>
  // //   })
  // //   // return <View><Text>{arraysub[0]}</Text></View>
  // // }
  
 

  return (
    < SafeAreaView  style={styles.viewStyle}>
      <View style={styles.viewStyle1}>
        <Text style={styles.text}>HELLO! {name}</Text>
      </View>

      <View style={styles.viewStyle2}>
      <View style={styles.viewStyle6}>
        <Text style={styles.textcard}>{balance}</Text>
        
        <TouchableOpacity style={styles.viewStyle5} onPress={() => props.navigation.navigate("forceUpdate")}>
             <FontAwesome  name="refresh" style={styles.iconstyle2}/>
           </TouchableOpacity>
        </View>
          

        <Text style={styles.textcard1}>Reward Coin</Text>

        <View style={styles.loginScreenButton}>
          <TouchableOpacity style={styles.buttonShadow}  onPress={() => props.navigation.navigate("Acc")}>
          <View style={styles.buttonStyle}>
          <MaterialCommunityIcons name="account" style={styles.iconstyle2} />
        
              <Text style={styles.Buttontext1}>Account</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.viewButton}>
        <View style={styles.MenuButton}>
        <TouchableOpacity style={styles.buttonShadow}  onPress={() => props.navigation.navigate("Tran")}>
          <View style={styles.buttonStyle1}>
          <FontAwesome5 name="gift" style={styles.iconstyle3} />
        
              <Text style={styles.Buttontext}>Reward</Text>
            </View>
          </TouchableOpacity>
          </View>

          <View style={styles.MenuButton}>
        <TouchableOpacity style={styles.buttonShadow}  onPress={() => props.navigation.navigate("Tran")}>
          <View style={styles.buttonStyle3}>
          <FontAwesome  name="exchange" style={styles.iconstyle3} />
        
              <Text style={styles.Buttontext}>Transfer</Text>
            </View>
          </TouchableOpacity>
          </View>


          <View style={styles.MenuButton}>
        <TouchableOpacity style={styles.buttonShadow}  onPress={() => props.navigation.navigate("Checkin")}>
          <View style={styles.buttonStyle2}>
          <FontAwesome5 name="coins" style={styles.iconstyle3} />
        
              <Text style={styles.Buttontext}>Get Coin</Text>
            </View>
          </TouchableOpacity>
          </View>

          



          </View>
      

    
      <View style={styles.viewStyle1}>
        <Text style={styles.text}>Your Course</Text>
        </View>

        <View style={styles.viewStyle7}>
         <View style={styles.viewStyle8}>
         <Text style={styles.text8}>Slot 1 :</Text>
         <TouchableOpacity style={styles.Box}
          onPress={() => {
            subsend = sub0
            props.navigation.navigate("Ac",{subsend})
          }}
         >
         <Text style={styles.text7}>{sub0}</Text>
         </TouchableOpacity>
         </View>
         <View style={styles.viewStyle8}>
         <Text style={styles.text8}>Slot 2 :</Text>
         <TouchableOpacity style={styles.Box} 
         onPress={() => {
          subsend = sub1 
          props.navigation.navigate("Ac",{subsend})}}
         >
          <Text style={styles.text7}>{sub1}</Text>
         </TouchableOpacity>
         </View>
         </View>

         <View style={styles.viewStyle7}>
         <View style={styles.viewStyle8}>
         <Text style={styles.text8}>Slot 3 :</Text>
         <TouchableOpacity style={styles.Box}
         onPress={() => {
          subsend = sub2 
          props.navigation.navigate("Ac",{subsend})}}
         >
         <Text style={styles.text7}>{sub2}</Text>
         </TouchableOpacity>
         </View>
         <View style={styles.viewStyle8}>
         <Text style={styles.text8}>Slot 4 :</Text>
         <TouchableOpacity style={styles.Box}
         onPress={() => {
          subsend = sub3 
          props.navigation.navigate("Ac",{subsend})}}
         >
          <Text style={styles.text7}>{sub3}</Text>
         </TouchableOpacity>
         </View>
         </View>

         <View style={styles.viewStyle7}>
         <View style={styles.viewStyle8}>
         <Text style={styles.text8}>Slot 5 :</Text>
         <TouchableOpacity style={styles.Box}
         onPress={() => {
          subsend = sub4 
          props.navigation.navigate("Ac",{subsend})}}
         >
         <Text style={styles.text7}>{sub4}</Text>
         </TouchableOpacity>
         </View>
         <View style={styles.viewStyle8}>
         <Text style={styles.text8}>Slot 6 :</Text>
         <TouchableOpacity style={styles.Box}
         onPress={() => {
          subsend = sub5 
          props.navigation.navigate("Ac",{subsend})}}
         >
          <Text style={styles.text7}>{sub5}</Text>
         </TouchableOpacity>
         </View>
         </View>


         <View style={styles.viewStyle7}>
         <View style={styles.viewStyle8}>
         <Text style={styles.text8}>Slot 7 :</Text>
         <TouchableOpacity style={styles.Box}
         onPress={() => {
          subsend = sub6 
          props.navigation.navigate("Ac",{subsend})}}
         >
         <Text style={styles.text7}>{sub6}</Text>
         </TouchableOpacity>
         </View>
         <View style={styles.viewStyle8}>
         <Text style={styles.text8}>Slot 8 :</Text>
         <TouchableOpacity style={styles.Box}
         onPress={() => {
          subsend = sub7 
          props.navigation.navigate("Ac",{subsend})}}
         >
          <Text style={styles.text7}>{sub7}</Text>
         </TouchableOpacity>
         </View>
         </View>

           <View style={styles.viewStyle7}>
          <TouchableOpacity style={styles.Box2} >
         <Text style={styles.text9}>Special Activity</Text>
         <FontAwesome  name="play" style={styles.iconstyle3} />
         </TouchableOpacity>
         </View>

    </ SafeAreaView >
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#F2F2F2",
    maxHeight : '100%'
  },
  viewStyle1: {
    marginLeft: 10,
  },
  buttonrow: {
    flexDirection: "row",
  },
  viewStyle2: {
    height : 180,
    alignItems: "flex-end",
    backgroundColor: "#FF6F07",
    borderRadius: 6,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    shadowRadius: 1,
    shadowOffset: { width: 2, height: 2 },
    margin: 10
  },
  viewStyle5: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: "50%",
    marginRight: 15,
    marginTop: 10,
    marginBottom: 5,
    borderRadius : 6,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    shadowRadius: 1,
    shadowOffset: { width: 2, height: 2 },
  },
  viewStyle6: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  viewStyle7: {
    height: "100%",
  },
  viewStyle10: {
    flex: 1,
  },
  viewStyle3: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FBFBFB",
    height: "15%",
    marginRight: 15,
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 10,
    borderRadius : 6,
    flexDirection:'row',
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    shadowRadius: 1,
    shadowOffset: { width: 2, height: 2 },
  },
  viewButton: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  loginScreenButton: {
    width: "42%",
    margin: 10,
  },
  MenuButton: {
    width: "30%",
    margin: 5,
  },
  buttonShadow: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    shadowRadius: 1,
    shadowOffset: { width: 2, height: 2 },
  },
  buttonStyle: { backgroundColor: "#fff",  flexDirection: "row",alignItems :'center',justifyContent:'center', borderRadius: 6},
  buttonStyle1: { backgroundColor: "#FF6838" ,  flexDirection: "row",alignItems :'center',justifyContent:'center', borderRadius: 6, },
  buttonStyle2: { backgroundColor: "#FFA133" ,  flexDirection: "row",alignItems :'center',justifyContent:'center', borderRadius: 6,},
  buttonStyle3: { backgroundColor: "#FF7817" ,  flexDirection: "row",alignItems :'center',justifyContent:'center', borderRadius: 6,},
  text: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#464646",
    marginTop: 10,
  },
  text2: {
    fontSize: 16,
    fontWeight: "500",
    color: "#464646",
    marginBottom : 5,
    marginTop : 5
  },
  text1: {
    fontSize: 16,
    color: "#B0AEAD",
    margin: 10,
  },
  textcard: {
    fontSize: 35,
    color: "#fff",
    marginTop: 5,
    marginRight: 15,
  },
  textcard1: {
    fontSize: 25,
    color: "#fff",
    marginTop: 5,
    marginRight: 15,
  },
  Buttontext: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "500",
    color: "#fff",
  },
  Buttontext1: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    color: "#9B9B9B",
  },
  Buttontext2: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    color: "#464646",
    marginTop : 5,
    marginBottom : 5
  },
  iconstyle :{
    fontSize : 25,
    alignSelf : 'center',
    marginRight : 10,
    color: "#4A3939",
  },
  iconstyle2 :{
    fontSize : 15,
    alignSelf : 'center',
    margin : 10,
    color: "#9B9B9B",
  },
  iconstyle3 :{
    fontSize : 18,
    alignSelf : 'center',
    margin : 10,
    color: "#fff",
  },
  viewStyle7:{
    alignContent : 'center',
    marginLeft : 10,
    marginRight : 10,
    flexDirection: 'row',
    width : '100%'
  }, 
  viewStyle8:{
    flexDirection: 'column',
    width : '47%',
    margin : 1,
  }, 
 
  Box:{
    height : 55,
    alignItems: "center",
    justifyContent : 'center',
    backgroundColor: "#fff",
    margin : 5,
    borderWidth: 2 ,
    borderColor:'#FBFBFB',
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    shadowRadius: 1,
    shadowOffset: { width: 2, height: 2 },
    borderRadius : 6,
  },
  Box2:{
    flexDirection: 'row',
    height : 50,
    width : '93%',
    alignItems: "center",
    justifyContent : 'center',
    backgroundColor: "#56504D",
    marginTop : 7,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    shadowRadius: 1,
    shadowOffset: { width: 2, height: 2 },
    borderRadius : 6,
  },
  
  text7: {
    fontSize: 14,color: "#000" ,fontWeight : '500'
  },
  text8: {
    fontSize: 14,color: "#383838", marginTop : 5 ,marginBottom : 5 ,
  },
  text9: {
    fontSize: 18,color: "#fff", marginTop : 5 ,marginBottom : 5 , fontWeight : '500'
  
  },
});

export default RealHomeScreen;
