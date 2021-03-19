import React from "react";
import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";



const Activity = (props) => {
  
  return (
    <View style={styles.viewStyle}>

    <Text style={styles.text5}> {props.navigation.getParam('subsend')} </Text>
   
       <View style={styles.viewStyle1}>
       <View style={styles.viewStyle2}>
       <Text style={styles.text2}>Presentation Test</Text>
       <Text style={styles.text1}>@Room706</Text>
       <Text style={styles.text1}>17 March 2021</Text>
       <Text style={styles.text1}>Create by : T.ABCD</Text>
   </View>
   <View style={styles.viewStyle3}>
   <Text style={styles.text3}>10</Text>
   <Text style={styles.text4}>Reward Coin</Text>
   </View>
       </View>
   
       <View style={styles.viewStyle1}>
       <View style={styles.viewStyle2}>
       <Text style={styles.text2}>Presentation Test</Text>
       <Text style={styles.text1}>@Room706</Text>
       <Text style={styles.text1}>17 March 2021</Text>
       <Text style={styles.text1}>Create by : T.ABCD</Text>
   </View>
   <View style={styles.viewStyle3}>
   <Text style={styles.text3}>10</Text>
   <Text style={styles.text4}>Reward Coin</Text>
   </View>
       </View>
   
   
   
             </View>
         )
     };

const styles = StyleSheet.create({
    viewStyle:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems : 'center',
        backgroundColor:'#F2F2F2'
      },
      viewStyle1:{
        height : 120,
        width : '92%',
        flexDirection: 'row',
        backgroundColor:'#fff',
        borderRadius : 6,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        shadowRadius: 1 ,
        shadowOffset : { width: 2, height: 2 },
        marginTop : 5,
        marginBottom : 5
      },
      viewStyle2:{
        width : '50%',
        alignItems :'flex-start'
      },
      viewStyle3:{
        width : '50%',
        alignItems :'flex-end',
      },
    start:{
      alignItems :'flex-start'
  },
  text2: {
    fontSize: 18,color: "#5E5E5E", marginLeft : 20, marginTop : 10  ,fontWeight : '500'
  },
  text1: {
    fontSize: 14,color: "#828282", marginLeft : 30, marginTop : 5  ,fontWeight : '400'
  },
      text3: {
        fontSize: 36,color: "#5E5E5E", marginRight : 20  ,fontWeight : 'bold',marginTop : 18  ,
      },
      text4: {
        fontSize: 18,color: "#5E5E5E", marginRight : 20  ,fontWeight : 'bold'
      },
      text5    : {
        fontSize: 26,color: "#5E5E5E", marginLeft : 10 ,marginTop : 10,fontWeight : 'bold',marginBottom : 10
      },
      textcard: {
        fontSize: 20,color: "#fff",marginTop : 5,marginLeft : 15,
      },
      textcard2: {
        fontSize: 15,color: "#fff",marginTop : 5,marginLeft : 15,
      },
      line:{
        height : 1,
        backgroundColor:'#000',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 15
      },
    });

export default Activity;