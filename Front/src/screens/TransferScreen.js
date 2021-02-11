import React from "react";
import { Text, StyleSheet, View,TouchableOpacity,TextInput } from "react-native";

const TransferScreen = () => {
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
         <TextInput style={styles.InputStyle} placeholder="Input Destination ID"/>
         </View>

         <View style={styles.viewStyle1}>
         <Text style={styles.text1}>Amount</Text>
          </View>

          <View style={styles.InputflexStyle}>
         <TextInput style={styles.InputStyle} placeholder="Input Amount"/>
         </View>

         <View style={styles.viewStyle3}>
         <View style={styles.loginScreenButton}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => props.navigation.navigate('Real')}>
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
      backgroundColor:'#fff'
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