import React from "react";
import { Text, StyleSheet, View,TouchableOpacity,Image,TextInput} from "react-native";
import { FontAwesome5  } from '@expo/vector-icons'; 

const Code = props => {
const Name = 'Nattaphong Wattaninkul';
const ID = '60010317';

  return (
  <View style={styles.viewStyle}>
  <View style={styles.viewStyle1}>
  <FontAwesome5 name="coins" style={styles.iconstyle3}/>
  <Text style={styles.text}>Get Reward Coin!</Text>
  <Text style={styles.text1}>*How To Get Code :  </Text>
  <Text style={styles.text2}>1. Class Check-in </Text>
  <Text style={styles.text2}>2. Join Special Activity </Text> 
  <View style={styles.viewStyle3}>
  <View style={styles.line}/> 
  <View style={styles.InputflexStyle}>
         <TextInput style={styles.InputStyle} placeholder="Input Reward Coin Code"/>
  </View>
  <View style={styles.viewStyle4}>
  <View style={styles.ConButton} >
        <TouchableOpacity style={styles.buttonStyle2} onPress={() => props.navigation.navigate('Home')} >
          <Text style={styles.Buttontext2}>Get Coin</Text>
          </TouchableOpacity>
          </View>
          </View>
  </View>
  </View>     
           
  </View>
  );
};

const styles = StyleSheet.create({
    viewStyle:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center' ,
         backgroundColor:'#F2F2F2'
      },
      image: {
        height: '60%',
        width: '60%',
      },
      viewStyle1:{
        alignItems : 'center',
        backgroundColor : '#fff',
        margin : 15,
        borderRadius : 6,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        shadowRadius: 1 ,
        shadowOffset : { width: 2, height: 2 }
      },
      viewStyle4:{
        alignItems : 'flex-end'
      },
    viewStyle2:{
        alignItems :'center',
        width: "100%",
        position : 'absolute',
        bottom : 0,
      },
      viewStyle3:{

        width: "90%",
    
      },
      InputStyle:{
        height: 50, 
        borderColor: 'gray', 
        borderWidth: 1, 
        borderRadius: 6,
        margin: 10,
        paddingLeft:10,
        backgroundColor : '#fff'
      },
      InputflexStyle:{
        width: "100%", 
      },
      LogButton:{
        width: "100%",
      },
      ConButton:{
        width: "40%",
        marginRight : 8
      },
  Buttontext: {
    fontSize: 20 ,
    margin: 10,
    color: "#fff",
    textAlign: "center",
    fontWeight : '500',
  },
  Buttontext2: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    fontWeight: "500",
  },
  text: {
    fontSize: 26,fontWeight : 'bold',color: "#464646", marginTop : 10 , marginBottom : 20
  },
  text1: {
    fontSize: 18,fontWeight : '500',color: "#464646", 
  },
  text2: {
    fontSize: 16,fontWeight : '400',color: "#858585",margin :2
},
text3: {
    fontSize: 18,fontWeight : '500',color: "#464646" ,marginLeft: 5
  },
  buttonStyle:{
    backgroundColor:'#FF4D15',
  },
  buttonStyle2:{
    backgroundColor:'#FF4D15',
    borderRadius: 6,
    marginBottom : 15,
    height : 40,
    justifyContent : 'center'
  },
  line:{
    height : 1,
    backgroundColor:'#CFCFCF',
    marginTop: 25,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15
  },
  iconstyle3 :{
    marginTop : 15 ,
    fontSize : 45,
    alignSelf : 'center',
    margin : 10,
    color: "#000",
  },
});

export default Code;