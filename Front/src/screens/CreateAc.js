import React from "react";
import { Text, StyleSheet, View,TouchableOpacity,TextInput } from "react-native";

const CreateAc = props => {
  const ID = '60010317';
    return (
        <View style={styles.viewStyle}>

           <View style={styles.viewStyle1}>
          <Text style={styles.text1}>Activity Name</Text>
          <View style={styles.InputflexStyle}>
         <TextInput style={styles.InputStyle} placeholder="Input Activity Name"/>
         </View>
          </View>

          <View style={styles.viewStyle1}>
          <Text style={styles.text1}>Location</Text>
          <View style={styles.InputflexStyle}>
         <TextInput style={styles.InputStyle} placeholder="Input Location"/>
         </View>
          </View>

          <View style={styles.viewStyle1}>
          <Text style={styles.text1}>Subject</Text>
          <View style={styles.InputflexStyle}>
         <TextInput style={styles.InputStyle} placeholder="Input Subject"/>
         </View>
          </View>

          <View style={styles.viewStyle2}>

          <View >
              <Text style={styles.text1}>Date</Text>
               <View style={styles.InputflexStyle1}>
              <TextInput style={styles.InputStyle} placeholder="Input Class Date"/>
               </View>
              </View>

              <View>
              <Text style={styles.text1}>Time</Text>
               <View style={styles.InputflexStyle1}>
              <TextInput style={styles.InputStyle} placeholder="Input Class Time"/>
               </View>
              </View>
              
          </View>
          <View style={styles.viewStyle1}>
          <Text style={styles.text1}>Class Activity Coin Reward</Text>
          <View style={styles.InputflexStyle}>
         <TextInput style={styles.InputStyle} placeholder="Input Amout of Class Activity Coin "/>
         </View>
          </View>

        

          <View style={styles.viewStyle4}>
         <View style={styles.ConButton} >
        <TouchableOpacity style={styles.buttonStyle} >
          <Text style={styles.Buttontext}>Confirm</Text>
          </TouchableOpacity>
           </View> </View>

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
    },
    InputflexStyle1:{
        width: "85%", 
      },
    viewStyle1:{
      marginLeft : 15
    },
    viewStyle5:{
        marginLeft : 15,
        marginBottom : 50
      },
    viewStyle4:{
        alignItems :'center',
        width: "100%",
        position : 'absolute',
        bottom : 0,
      },
      ConButton:{
        width: "50%",
        margin: 10,
        
      },
      buttonStyle:{
        backgroundColor:'#FF4D15',
        borderRadius: 6,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        shadowRadius: 1 ,
        shadowOffset : { width: 2, height: 2 }
      },
    viewStyle2:{
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
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
    NextButton:{
        width: "40%", margin: 10
    },
    Buttontext: {
      fontSize: 16 ,margin: 8,color: "#fff",textAlign: "center",fontWeight : 'bold',
    }
  });
  
  export default CreateAc ;