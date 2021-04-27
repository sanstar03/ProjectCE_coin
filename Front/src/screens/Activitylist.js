import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  ScrollView,
  Alert
} from "react-native";

import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";

const Activity = (props) => {
  const [act0, setact0] = useState({activityname:"",date:"",location:"",price:"",subject:""});
  const [act1, setact1] = useState({activityname:"",date:"",location:"",price:"",subject:""})
  const [act2, setact2] = useState({activityname:"",date:"",location:"",price:"",subject:""})
  const [act3, setact3] = useState({activityname:"",date:"",location:"",price:"",subject:""})
  const [act4, setact4] = useState({activityname:"",date:"",location:"",price:"",subject:""})
  const [act5, setact5] = useState({activityname:"",date:"",location:"",price:"",subject:""})
  const [act6, setact6] = useState({activityname:"",date:"",location:"",price:"",subject:""})
  const [act7, setact7] = useState({activityname:"",date:"",location:"",price:"",subject:""})
  const [sub,setsub] = useState("");

  const [upDate,setUpdate] = useState(false);

 let subdel = ""
 let datedel = ""
 let locationdel = ""
 let pricedel = ""
 let actdel = ""


  // const [nissan, setnissan] = useState("");
  let test = "";
  const [acti, setActi] = useState([{activityname:"",date:"",location:"",price:"",subject:""}]);
  useEffect(() => {
    test = props.navigation.getParam("subsend");
    console.log(test);
    getActivity();
    
  }, [upDate]);

  const getActivity = async () => {
    const token = await AsyncStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    
    await axios.post("https://cecoinserver.ngrok.io/getActivity",{subject:test},config).then((ret) => {

      if (ret.data.length == 1) {
        setact0({activityname:ret.data[0].activityname,date:ret.data[0].date,location:ret.data[0].location,price:ret.data[0].price,subject:ret.data[0].subject})
      } 
      else if (ret.data.length == 2) {
        setact0({activityname:ret.data[0].activityname,date:ret.data[0].date,location:ret.data[0].location,price:ret.data[0].price,subject:ret.data[0].subject})
        setact1({activityname:ret.data[1].activityname,date:ret.data[1].date,location:ret.data[1].location,price:ret.data[1].price,subject:ret.data[1].subject})
      } 
      
       else if (ret.data.length == 3) {
        setact0({activityname:ret.data[0].activityname,date:ret.data[0].date,location:ret.data[0].location,price:ret.data[0].price,subject:ret.data[0].subject})
        setact1({activityname:ret.data[1].activityname,date:ret.data[1].date,location:ret.data[1].location,price:ret.data[1].price,subject:ret.data[1].subject})
        setact2({activityname:ret.data[2].activityname,date:ret.data[2].date,location:ret.data[2].location,price:ret.data[2].price,subject:ret.data[2].subject})
      } 
      else if (ret.data.length == 4) {
        setact0({activityname:ret.data[0].activityname,date:ret.data[0].date,location:ret.data[0].location,price:ret.data[0].price,subject:ret.data[0].subject})
        setact1({activityname:ret.data[1].activityname,date:ret.data[1].date,location:ret.data[1].location,price:ret.data[1].price,subject:ret.data[1].subject})
        setact2({activityname:ret.data[2].activityname,date:ret.data[2].date,location:ret.data[2].location,price:ret.data[2].price,subject:ret.data[2].subject})
        setact3({activityname:ret.data[3].activityname,date:ret.data[3].date,location:ret.data[3].location,price:ret.data[3].price,subject:ret.data[3].subject})
      } 
      else if (ret.data.length == 5) {
        setact0({activityname:ret.data[0].activityname,date:ret.data[0].date,location:ret.data[0].location,price:ret.data[0].price,subject:ret.data[0].subject})
        setact1({activityname:ret.data[1].activityname,date:ret.data[1].date,location:ret.data[1].location,price:ret.data[1].price,subject:ret.data[1].subject})
        setact2({activityname:ret.data[2].activityname,date:ret.data[2].date,location:ret.data[2].location,price:ret.data[2].price,subject:ret.data[2].subject})
        setact3({activityname:ret.data[3].activityname,date:ret.data[3].date,location:ret.data[3].location,price:ret.data[3].price,subject:ret.data[3].subject})
        setact4({activityname:ret.data[4].activityname,date:ret.data[4].date,location:ret.data[4].location,price:ret.data[4].price,subject:ret.data[4].subject})
      } 
      else if (ret.data.length == 6) {
        setact0({activityname:ret.data[0].activityname,date:ret.data[0].date,location:ret.data[0].location,price:ret.data[0].price,subject:ret.data[0].subject})
        setact1({activityname:ret.data[1].activityname,date:ret.data[1].date,location:ret.data[1].location,price:ret.data[1].price,subject:ret.data[1].subject})
        setact2({activityname:ret.data[2].activityname,date:ret.data[2].date,location:ret.data[2].location,price:ret.data[2].price,subject:ret.data[2].subject})
        setact3({activityname:ret.data[3].activityname,date:ret.data[3].date,location:ret.data[3].location,price:ret.data[3].price,subject:ret.data[3].subject})
        setact4({activityname:ret.data[4].activityname,date:ret.data[4].date,location:ret.data[4].location,price:ret.data[4].price,subject:ret.data[4].subject})
        setact5({activityname:ret.data[5].activityname,date:ret.data[5].date,location:ret.data[5].location,price:ret.data[5].price,subject:ret.data[5].subject})
      } 
      else if (ret.data.length == 7) {
        setact0({activityname:ret.data[0].activityname,date:ret.data[0].date,location:ret.data[0].location,price:ret.data[0].price,subject:ret.data[0].subject})
        setact1({activityname:ret.data[1].activityname,date:ret.data[1].date,location:ret.data[1].location,price:ret.data[1].price,subject:ret.data[1].subject})
        setact2({activityname:ret.data[2].activityname,date:ret.data[2].date,location:ret.data[2].location,price:ret.data[2].price,subject:ret.data[2].subject})
        setact3({activityname:ret.data[3].activityname,date:ret.data[3].date,location:ret.data[3].location,price:ret.data[3].price,subject:ret.data[3].subject})
        setact4({activityname:ret.data[4].activityname,date:ret.data[4].date,location:ret.data[4].location,price:ret.data[4].price,subject:ret.data[4].subject})
        setact5({activityname:ret.data[5].activityname,date:ret.data[5].date,location:ret.data[5].location,price:ret.data[5].price,subject:ret.data[5].subject})
        setact6({activityname:ret.data[6].activityname,date:ret.data[6].date,location:ret.data[6].location,price:ret.data[6].price,subject:ret.data[6].subject})
      }
      else if (ret.data.length == 8) {
        setact0({activityname:ret.data[0].activityname,date:ret.data[0].date,location:ret.data[0].location,price:ret.data[0].price,subject:ret.data[0].subject})
        setact1({activityname:ret.data[1].activityname,date:ret.data[1].date,location:ret.data[1].location,price:ret.data[1].price,subject:ret.data[1].subject})
        setact2({activityname:ret.data[2].activityname,date:ret.data[2].date,location:ret.data[2].location,price:ret.data[2].price,subject:ret.data[2].subject})
        setact3({activityname:ret.data[3].activityname,date:ret.data[3].date,location:ret.data[3].location,price:ret.data[3].price,subject:ret.data[3].subject})
        setact4({activityname:ret.data[4].activityname,date:ret.data[4].date,location:ret.data[4].location,price:ret.data[4].price,subject:ret.data[4].subject})
        setact5({activityname:ret.data[5].activityname,date:ret.data[5].date,location:ret.data[5].location,price:ret.data[5].price,subject:ret.data[5].subject})
        setact6({activityname:ret.data[6].activityname,date:ret.data[6].date,location:ret.data[6].location,price:ret.data[6].price,subject:ret.data[6].subject})
        setact7({activityname:ret.data[7].activityname,date:ret.data[7].date,location:ret.data[7].location,price:ret.data[7].price,subject:ret.data[7].subject})
      }
    });
  };

  const deleteActivity = async () => {
    const token = await AsyncStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
      await axios
        .post("https://cecoinserver.ngrok.io/deleteActivity",{subject:subdel,date:datedel,price:pricedel,location:locationdel,activityname:actdel},config)
        .then(async (response) => {
          Alert.alert('Result:',response.data.message,[{text:'Ok'}])
          // await setCode("")
          await setUpdate(prev => {!prev})
        })
  }

  return (
    <ScrollView>
    <View style={styles.viewStyle}>

<View style={styles.viewHead}>
      <Text style={styles.text5}> {props.navigation.getParam("subsend")} </Text>
      </View>
      { act0.activityname == "" ?   <View></View>:<View style={styles.viewStyle1}>
        <View style={styles.viewStyle2}>
          <Text style={styles.text2}>{act0.activityname}</Text>
          <Text style={styles.text1}>{act0.location}</Text>
          <Text style={styles.text1}>{act0.date}</Text>
          
        </View>
        <View style={styles.viewStyle3}>
          <Text style={styles.text3}>{act0.price}</Text>
          <Text style={styles.text4}>CE COIN</Text>
          <View style={styles.ConButton} >
        <TouchableOpacity style={styles.buttonStyle2} onPress={async () => {
          subdel = act0.subject
          datedel = act0.date
          locationdel = act0.location
          pricedel = act0.price
          actdel = act0.activityname
          await deleteActivity()
        } }>
          <Text style={styles.Buttontext2}>Close Activity</Text>
          </TouchableOpacity>
          </View>
        </View>
        
      </View>}
      { act1.activityname == "" ?   <View></View>:<View style={styles.viewStyle1}>
        <View style={styles.viewStyle2}>
          <Text style={styles.text2}>{act1.activityname}</Text>
          <Text style={styles.text1}>{act1.location}</Text>
          <Text style={styles.text1}>{act1.date}</Text>
        </View>
        <View style={styles.viewStyle3}>
          <Text style={styles.text3}>{act1.price}</Text>
          <Text style={styles.text4}>CE COIN</Text>
          <View style={styles.ConButton} >
        <TouchableOpacity style={styles.buttonStyle2} onPress={async () => {
          subdel = act1.subject
          datedel = act1.date
          locationdel = act1.location
          pricedel = act1.price
          actdel = act1.activityname
          await deleteActivity()
        } } >
          <Text style={styles.Buttontext2}>Close Activity</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>}

      { act2.activityname == "" ?   <View></View>:<View style={styles.viewStyle1}>
        <View style={styles.viewStyle2}>
          <Text style={styles.text2}>{act2.activityname}</Text>
          <Text style={styles.text1}>{act2.location}</Text>
          <Text style={styles.text1}>{act2.date}</Text>
          
        </View>
        <View style={styles.viewStyle3}>
          <Text style={styles.text3}>{act2.price}</Text>
          <Text style={styles.text4}>CE COIN</Text>
          <View style={styles.ConButton} >
        <TouchableOpacity style={styles.buttonStyle2} onPress={async () => {
          subdel = act2.subject
          datedel = act2.date
          locationdel = act2.location
          pricedel = act2.price
          actdel = act2.activityname
          await deleteActivity()
        } } >
          <Text style={styles.Buttontext2}>Close Activity</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>}

      { act3.activityname == "" ?   <View></View>:<View style={styles.viewStyle1}>
        <View style={styles.viewStyle2}>
          <Text style={styles.text2}>{act3.activityname}</Text>
          <Text style={styles.text1}>{act3.location}</Text>
          <Text style={styles.text1}>{act3.date}</Text>
          
        </View>
        <View style={styles.viewStyle3}>
          <Text style={styles.text3}>{act3.price}</Text>
          <Text style={styles.text4}>CE COIN</Text>
          <View style={styles.ConButton} >
        <TouchableOpacity style={styles.buttonStyle2} onPress={async () => {
          subdel = act3.subject
          datedel = act3.date
          locationdel = act3.location
          pricedel = act3.price
          actdel = act3.activityname
          await deleteActivity()
        } } >
          <Text style={styles.Buttontext2}>Close Activity</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>}

      { act4.activityname == "" ?   <View></View>:<View style={styles.viewStyle1}>
        <View style={styles.viewStyle2}>
          <Text style={styles.text2}>{act4.activityname}</Text>
          <Text style={styles.text1}>{act4.location}</Text>
          <Text style={styles.text1}>{act4.date}</Text>
          
        </View>
        <View style={styles.viewStyle3}>
          <Text style={styles.text3}>{act4.price}</Text>
          <Text style={styles.text4}>CE COIN</Text>
          <View style={styles.ConButton} >
        <TouchableOpacity style={styles.buttonStyle2} onPress={async () => {
          subdel = act4.subject
          datedel = act4.date
          locationdel = act4.location
          pricedel = act4.price
          actdel = act4.activityname
          await deleteActivity()
        } } >
          <Text style={styles.Buttontext2}>Close Activity</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>}

      { act5.activityname == "" ?   <View></View>:<View style={styles.viewStyle1}>
        <View style={styles.viewStyle2}>
          <Text style={styles.text2}>{act5.activityname}</Text>
          <Text style={styles.text1}>{act5.location}</Text>
          <Text style={styles.text1}>{act5.date}</Text>
        
        </View>
        <View style={styles.viewStyle3}>
          <Text style={styles.text3}>{act5.price}</Text>
          <Text style={styles.text4}>CE COIN</Text>
          <View style={styles.ConButton} >
        <TouchableOpacity style={styles.buttonStyle2} onPress={async () => {
          subdel = act5.subject
          datedel = act5.date
          locationdel = act5.location
          pricedel = act5.price
          actdel = act5.activityname
          await deleteActivity()
        } } >
          <Text style={styles.Buttontext2}>Close Activity</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>}

      { act6.activityname == "" ?   <View></View>:<View style={styles.viewStyle1}>
        <View style={styles.viewStyle2}>
          <Text style={styles.text2}>{act6.activityname}</Text>
          <Text style={styles.text1}>{act6.location}</Text>
          <Text style={styles.text1}>{act6.date}</Text>
      
        </View>
        <View style={styles.viewStyle3}>
          <Text style={styles.text3}>{act6.price}</Text>
          <Text style={styles.text4}>CE COIN</Text>
          <View style={styles.ConButton} >
        <TouchableOpacity style={styles.buttonStyle2} onPress={async () => {
          subdel = act6.subject
          datedel = act6.date
          locationdel = act6.location
          pricedel = act6.price
          actdel = act6.activityname
          await deleteActivity()
        } } >
          <Text style={styles.Buttontext2}>Close Activity</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>}

      { act7.activityname == "" ?   <View></View>:<View style={styles.viewStyle1}>
        <View style={styles.viewStyle2}>
          <Text style={styles.text2}>{act7.activityname}</Text>
          <Text style={styles.text1}>{act7.location}</Text>
          <Text style={styles.text1}>{act7.date}</Text>
        
        </View>
        <View style={styles.viewStyle3}>
          <Text style={styles.text3}>{act7.price}</Text>
          <Text style={styles.text4}>CE COIN</Text>
          <View style={styles.ConButton} >
        <TouchableOpacity style={styles.buttonStyle2} onPress={async () => {
          subdel = act7.subject
          datedel = act7.date
          locationdel = act7.location
          pricedel = act7.price
          actdel = act7.activityname
          await deleteActivity()
        } } >
          <Text style={styles.Buttontext2}>Close Activity</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>}

      
      
      {/* <View style={styles.viewStyle2}>
        
        <Text style={styles.text2} >{acti[0].date}</Text>
     
      </View> */}

      {/* <FlatList
      data = {itemsub}
      renderItem = {({item,key}) => (
        <View style={styles.viewStyle2}>
        <Text key = {key} style={styles.text2} >{item.date}</Text>
        </View>
      )}
      
      /> */}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
  },
  viewStyle1: {
    height: 160,
    width: "92%",
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 6,
    elevation : 2,
    marginTop: 5,
    marginBottom: 5,
  },
  viewStyle2: {
    width: "50%",
    alignItems: "flex-start",
  },
  viewStyle3: {
    width: "50%",
    alignItems: "flex-end",
  },
  start: {
    alignItems: "flex-start",
  },
  text2: {
    fontSize: 18,
    color: "#5E5E5E",
    marginLeft: 20,
    marginTop: 25,
    fontWeight: "bold",
  },
  text1: {
    fontSize: 14,
    color: "#828282",
    marginLeft: 30,
    marginTop: 5,
    fontWeight: "400",
  },
  text3: {
    fontSize: 36,
    color: "#5E5E5E",
    marginRight: 20,
    fontWeight: "bold",
    marginTop: 18,
  },
  text4: {
    fontSize: 18,
    color: "#5E5E5E",
    marginRight: 20,
    fontWeight: "bold",
  },
  text5: {
    fontSize: 26,
    color: "#5E5E5E",
    marginLeft: 10,
    marginTop: 10,
    fontWeight: "bold",
    marginBottom: 10,
  },
  textcard: {
    fontSize: 20,
    color: "#fff",
    marginTop: 5,
    marginLeft: 15,
  },
  textcard2: {
    fontSize: 15,
    color: "#fff",
    marginTop: 5,
    marginLeft: 15,
  },
  viewHead: {
    width: "100%",
    marginLeft: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  line: {
    height: 1,
    backgroundColor: "#000",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },Buttontext2: {
    fontSize: 14 ,
    marginTop: 8,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    color: "#fff",
    textAlign: "center",
    fontWeight : '500',
  },
  buttonStyle2:{
    backgroundColor:'#FF3333',
    borderRadius: 6,
    marginBottom : 5,
    marginTop : 15,
    marginRight:20
  },
});

export default Activity;
