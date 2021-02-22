import React from "react";
import { Text, StyleSheet, TouchableOpacity,View } from "react-native";
import { FontAwesome5,MaterialIcons  } from '@expo/vector-icons';

const TeacherHome = props => {
  const Amount ='200';
    return   ( 
  <View style={styles.viewStyle}>
          <View style={styles.viewStyle1}>
            <Text style={styles.text}>HELLO! T.ABCD :D</Text>
           </View>

           <View style={styles.viewStyle2}>
           <Text style={styles.textcard}>{Amount}</Text>
           <Text style={styles.textcard}>Reward Coin</Text>

           <View style={styles.loginScreenButton}> 
           <TouchableOpacity style={styles.buttonShadow} >
           <MaterialIcons.Button name="account-box"color='#9B9B9B'style={styles.buttonStyle}>
          <Text style={styles.Buttontext1}>Account</Text> 
          </MaterialIcons.Button>
          </TouchableOpacity>
           </View>
           </View>

           <View style={styles.viewStyle4}>
           <TouchableOpacity style={styles.buttonS} onPress={() => props.navigation.navigate('CreateAc')} >
          <Text style={styles.Buttontext}>Create Activity</Text> 
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonS} >
          <Text style={styles.Buttontext}>Create QR Code</Text> 
          </TouchableOpacity>

           </View>

           
    
          </View>

      )
  };
  
  const styles = StyleSheet.create({
    viewStyle:{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      backgroundColor:'#fff'
    },
    viewStyle1:{
      marginLeft : 15
    },
    viewStyle2:{
      height : "19%",
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
      backgroundColor:'#F8F8F8',
      height : "10%",
      margin : 10,
    },
    viewStyle4:{
        height : "19%",
        margin : 15,
      },
    viewButton:{
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor:'#fff'
    },
    loginScreenButton:{
      width: "42%",
      margin: 10
    },
    MenuButton:{
      width: "30%", 
      margin: 5
    },
    buttonShadow:{
      borderRadius: 6,
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      shadowOpacity: 0.8,
      shadowRadius: 1 ,
      shadowOffset : { width: 2, height: 2 }
    },
    buttonS:{
        borderRadius: 6,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        shadowRadius: 1 ,
        shadowOffset : { width: 2, height: 2 },
        backgroundColor:'#FF6838',
        margin: 10
      },
    buttonStyle:{ backgroundColor:'#fff',},
    buttonStyle1:{backgroundColor:'#FF6838'},
    buttonStyle2:{backgroundColor:'#FFA133'},
    buttonStyle3:{backgroundColor:'#FF7817'},
    text: {
      fontSize: 22,fontWeight : 'bold',color: "#464646", marginTop : 10 
    },
    text1: {
      fontSize: 16,color: "#B0AEAD", margin : 10 
    },
    textcard: {
      fontSize: 25,color: "#fff",marginTop : 5,marginRight : 15
    },
    Buttontext: {
      fontSize: 18,margin: 10,textAlign: "center",fontWeight : 'bold',color : "#fff"
    },
    Buttontext1: {
      fontSize: 16 ,marginLeft: 16,textAlign: "center",fontWeight : 'bold',color : "#9B9B9B"
    }
  });
  
  export default TeacherHome;