import React, { useEffect } from "react";
import { Text, StyleSheet, View,TouchableOpacity,TextInput ,Alert} from "react-native";
import { useState } from "react";
import { set } from "mongoose";
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
const TransferScreen = () => {

  const [reciever,setreciever] = useState('');
  const [amount,setamount] = useState('');
  const [password,setpassword] = useState('');
  const [bal,setbal] = useState('')


  useEffect(()=>{
    getBalance()
  },[])

  const getBalance = async () => {
    const token = await AsyncStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get("http://127.0.0.1:8000/getBalance", config)
      .then((res) => setbal(res.data));
  };

  const transfer = async () => {
    const token = await AsyncStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    
    
    if (reciever != "" && password != "" && amount != "") {
      if (bal < amount)
      {
        Alert.alert('Error:',"Not enough coin.",[{text:'Ok'}])
        setreciever('')
        setamount('')
        setpassword('')
      }else{
        const user = {
          reciever: reciever,
          password: password,
          amount:amount
          
      }
      axios
        .post("http://127.0.0.1:8000/transfer",user,config)
        .then(async (response) => {
          console.log(response.data.message)
          Alert.alert('Result:',response.data.message,[{text:'Ok'}])
          setreciever('');
          setamount('');
          setpassword('');
        })
      }
    }
    
  };


  const ID = '60010317';
    return (
        <View style={styles.viewStyle}>
          <View style={styles.viewStyle1}>
          <Text style={styles.text}>From</Text>
          <Text style={styles.text}>ID : {ID}</Text>
          </View>

          <View style={styles.viewStyle2}>
           <Text style={styles.textcard}>200</Text>
           <Text style={styles.textcard}>Reward Coin</Text>
           </View>

           <View style={styles.viewStyle1}>
          <Text style={styles.text}>To</Text>
          <Text style={styles.text1}>Destination ID</Text>
          </View>

          <View style={styles.InputflexStyle}>
         <TextInput style={styles.InputStyle} placeholder="Input Destination ID" 
         value = {reciever}
         onChangeText = {(reciever) => setreciever(reciever)}
         />
         </View>

         <View style={styles.viewStyle1}>
         <Text style={styles.text1}>Amount</Text>
          </View>

          <View style={styles.InputflexStyle}>
         <TextInput style={styles.InputStyle} placeholder="Input Amount"
         value = {amount}
         onChangeText = {(amount) => setamount(amount)}/>
         </View>

         <View style={styles.viewStyle1}>
         <Text style={styles.text1}>Password</Text>
          </View>

          <View style={styles.InputflexStyle}>
         <TextInput maxLength={8}  style={styles.InputStyle} placeholder="Input Password"
            value = {password}
            onChangeText = {(password) => setpassword(password)}
          />
         </View>

         <View style={styles.viewStyle3}>
         <View style={styles.loginScreenButton}>
        <TouchableOpacity style={styles.buttonStyle} onPress={transfer}>
          <Text style={styles.Buttontext}>Next</Text>
          </TouchableOpacity>
           </View>

          </View>
    </View>
    );
  };
  
  const styles = StyleSheet.create({
    viewStyle:{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      backgroundColor:'#F2F2F2'
    },
    InputStyle:{
      height: 50, 
      borderColor: 'gray', 
      borderWidth: 1, 
      borderRadius: 6,
      margin: 10,
      paddingLeft:10
    },
    InputflexStyle:{
      width: "95%", 
      margin: 10
    },
    loginScreenButton:{
      width: "40%", 
      margin: 10
    },
    viewStyle1:{
      marginLeft : 15
    },
    viewStyle2:{
      height : "12%",
      alignItems: 'flex-end',
      backgroundColor:'#FF6F07',
      borderRadius: 6,
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      shadowOpacity: 0.8,
      shadowRadius: 1 ,
      shadowOffset : { width: 2, height: 2 },
      margin : 15,
    },
    viewStyle3:{
      alignItems: 'center'
    },
    textcard: {
      fontSize: 25,color: "#fff",marginTop : 5,marginRight : 15
    },
    text: {
      fontSize: 22,fontWeight : 'bold',color: "#464646", marginTop : 10 
    },
    text1: {
      fontSize: 18,fontWeight : 'bold',color: "#464646", marginTop : 10 
    },
    loginScreenButton:{
        width: "40%", margin: 10
    },
    buttonStyle:{
      backgroundColor:'#FF4D15',
      borderRadius: 6,
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      shadowOpacity: 0.8,
      shadowRadius: 1 ,
      shadowOffset : { width: 2, height: 2 }
    },
    Buttontext: {
      fontSize: 16 ,margin: 8,color: "#fff",textAlign: "center",fontWeight : 'bold',
    }
  });
  
  export default TransferScreen;