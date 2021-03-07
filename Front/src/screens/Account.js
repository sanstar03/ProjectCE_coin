import React from "react";
import { Text, StyleSheet, View,TouchableOpacity,Image,TextInput} from "react-native";

const Account = props => {
const Name = 'Nattaphong Wattaninkul';
const ID = '60010317';

  return (
  <View style={styles.viewStyle}>
  <View style={styles.viewStyle1}>
  <Text style={styles.text}>USER PROFILE</Text>
  <View style={styles.viewStyle3}>
  <Text style={styles.text1}>Name</Text>
  <Text style={styles.text2}>{Name}</Text>
  <View style={styles.line}/> 
  <Text style={styles.text1}>Student ID</Text>
  <Text style={styles.text2}>{ID}</Text>
  <View style={styles.line}/> 
  <Text style={styles.text3}>Enroll Course</Text>
  <View style={styles.InputflexStyle}>
         <TextInput style={styles.InputStyle} placeholder="Input Course ID"/>
  </View>
  <View style={styles.viewStyle4}>
  <View style={styles.ConButton} >
        <TouchableOpacity style={styles.buttonStyle2} onPress={() => props.navigation.navigate('Home')} >
          <Text style={styles.Buttontext2}>Enroll</Text>
          </TouchableOpacity>
          </View>
          </View>
  </View>
  </View>
       





         <View style={styles.viewStyle2}>
         <View style={styles.LogButton} >
        <TouchableOpacity style={styles.buttonStyle} onPress={() => props.navigation.navigate('Home')} >
          <Text style={styles.Buttontext}>Logout</Text>
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
        justifyContent: 'flex-start' ,
         backgroundColor:'#fff'
      },
      image: {
        height: '60%',
        weight: '60%',
      },
      viewStyle1:{
        alignItems : 'center'
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
        paddingLeft:10
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
    fontSize: 12 ,
    margin: 5,
    color: "#fff",
    textAlign: "center",
    fontWeight : '500',
  },
  text: {
    fontSize: 24,fontWeight : 'bold',color: "#464646", marginTop : 50 , marginBottom : 20
  },
  text1: {
    fontSize: 18,fontWeight : '500',color: "#464646", margin : 5
  },
  text2: {
    fontSize: 16,color: "#585858", marginTop : 5,marginBottom : 5,marginLeft : 25
},
text3: {
    fontSize: 18,fontWeight : '500',color: "#464646" ,marginLeft: 5
  },
  buttonStyle:{
    backgroundColor:'#FF4D15',
  },
  buttonStyle2:{
    backgroundColor:'#393433',
    borderRadius: 6,
  },
  line:{
    height : "0.5px",
    backgroundColor:'#CFCFCF',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15
  },
});

export default Account;
