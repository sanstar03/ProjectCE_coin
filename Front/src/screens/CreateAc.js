import React, { useState, Component, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Platform,
  Alert,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
// import DatePicker from 'react-native-datepicker'
import AsyncStorage from "@react-native-community/async-storage";
import {navigate} from "../navigationRef"
import axios from "axios";

const CreateAc = (props) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const [sub, setsub] = useState("");
  const [location, setlocation] = useState("");
  const [name, setname] = useState("");
  const [dateda, setdateda] = useState("");
  const [price, setprice] = useState("");
  let datedata = "";
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

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    // setdateda(date.toDateString())
  };

  // My function
  const getSubject = async () => {
    const token = await AsyncStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    await axios
      .get("https://cecoinserver.ngrok.io/getSubjectByTeacher", config)
      .then((ret) => {
        if (ret.data.length == 1) {
          itemsub.push({
            label: ret.data[0].subject,
            value: ret.data[0].subject,
          });
          // itemsub[0] = [{ label: ret.data[0].subject, value: ret.data[0].subject }]
        } else if (ret.data.length == 2) {
          itemsub.push({
            label: ret.data[0].subject,
            value: ret.data[0].subject,
          });
          itemsub.push({
            label: ret.data[1].subject,
            value: ret.data[1].subject,
          });
        } else if (ret.data.length == 3) {
          itemsub.push({
            label: ret.data[0].subject,
            value: ret.data[0].subject,
          });
          itemsub.push({
            label: ret.data[1].subject,
            value: ret.data[1].subject,
          });
          itemsub.push({
            label: ret.data[2].subject,
            value: ret.data[2].subject,
          });
        } else if (ret.data.length == 4) {
          itemsub.push({
            label: ret.data[0].subject,
            value: ret.data[0].subject,
          });
          itemsub.push({
            label: ret.data[1].subject,
            value: ret.data[1].subject,
          });
          itemsub.push({
            label: ret.data[2].subject,
            value: ret.data[2].subject,
          });
          itemsub.push({
            label: ret.data[3].subject,
            value: ret.data[3].subject,
          });
        } else if (ret.data.length == 5) {
          itemsub.push({
            label: ret.data[0].subject,
            value: ret.data[0].subject,
          });
          itemsub.push({
            label: ret.data[1].subject,
            value: ret.data[1].subject,
          });
          itemsub.push({
            label: ret.data[2].subject,
            value: ret.data[2].subject,
          });
          itemsub.push({
            label: ret.data[3].subject,
            value: ret.data[3].subject,
          });
          itemsub.push({
            label: ret.data[4].subject,
            value: ret.data[4].subject,
          });
        } else if (ret.data.length == 6) {
          itemsub.push({
            label: ret.data[0].subject,
            value: ret.data[0].subject,
          });
          itemsub.push({
            label: ret.data[1].subject,
            value: ret.data[1].subject,
          });
          itemsub.push({
            label: ret.data[2].subject,
            value: ret.data[2].subject,
          });
          itemsub.push({
            label: ret.data[3].subject,
            value: ret.data[3].subject,
          });
          itemsub.push({
            label: ret.data[4].subject,
            value: ret.data[4].subject,
          });
          itemsub.push({
            label: ret.data[5].subject,
            value: ret.data[5].subject,
          });
        } else if (ret.data.length == 7) {
          itemsub.push({
            label: ret.data[0].subject,
            value: ret.data[0].subject,
          });
          itemsub.push({
            label: ret.data[1].subject,
            value: ret.data[1].subject,
          });
          itemsub.push({
            label: ret.data[2].subject,
            value: ret.data[2].subject,
          });
          itemsub.push({
            label: ret.data[3].subject,
            value: ret.data[3].subject,
          });
          itemsub.push({
            label: ret.data[4].subject,
            value: ret.data[4].subject,
          });
          itemsub.push({
            label: ret.data[5].subject,
            value: ret.data[5].subject,
          });
          itemsub.push({
            label: ret.data[6].subject,
            value: ret.data[6].subject,
          });
        } else if (ret.data.length == 8) {
          itemsub.push({
            label: ret.data[0].subject,
            value: ret.data[0].subject,
          });
          itemsub.push({
            label: ret.data[1].subject,
            value: ret.data[1].subject,
          });
          itemsub.push({
            label: ret.data[2].subject,
            value: ret.data[2].subject,
          });
          itemsub.push({
            label: ret.data[3].subject,
            value: ret.data[3].subject,
          });
          itemsub.push({
            label: ret.data[4].subject,
            value: ret.data[4].subject,
          });
          itemsub.push({
            label: ret.data[5].subject,
            value: ret.data[5].subject,
          });
          itemsub.push({
            label: ret.data[6].subject,
            value: ret.data[6].subject,
          });
          itemsub.push({
            label: ret.data[7].subject,
            value: ret.data[7].subject,
          });
        }
      });
  };

  const createAc = async () => {
    const token = await AsyncStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    await axios
      .post(
        "https://cecoinserver.ngrok.io/createActivity",
        {
          activityname: name,
          location: location,
          subject: sub,
          date: dateda,
          price: price,
        },
        config
      )
      .then((ret) => {
        Alert.alert("Result:", ret.data.message, [{text:'Ok',onPress:()=>navigate('THome')}]);
      });
  };

  useEffect(() => {
    getSubject();
    datedata = date.toDateString();
    setdateda(datedata);
  }, [itemsub]);

  const ID = "60010317";
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewStyle1}>
        <Text style={styles.text1}>Activity Name</Text>
        <View style={styles.InputflexStyle}>
          <TextInput
            style={styles.InputStyle}
            placeholder="Input Activity Name"
            value={name}
            onChangeText={(name) => setname(name)}
          />
        </View>
      </View>

      <View style={styles.viewStyle1}>
        <Text style={styles.text1}>Location</Text>
        <View style={styles.InputflexStyle}>
          <TextInput
            style={styles.InputStyle}
            placeholder="Input Location"
            value={location}
            onChangeText={(location) => setlocation(location)}
          />
        </View>
      </View>
      <View style={styles.viewStyle1}>
        <Text style={styles.text1}>Subject</Text>
      </View>

      <DropDownPicker
        items={itemsub}
        onChangeItem={(item) => {
          setsub(item.value);
        }}
        containerStyle={{
          height: 50,
          width: "89%",
          marginLeft: 21,
          marginRight: 7,
          marginTop: 10,
        }}
        itemStyle={{
          justifyContent: "flex-start",
        }}
        dropDownStyle={{ backgroundColor: "#fafafa" }}
      />
      <View style={styles.viewStyle1}>
        <Text style={styles.text1}>Date</Text>
      </View>
      <View style={styles.viewStyle2}>
        {/* <View >
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
              </View> */}
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          minDate={new Date()}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      </View>

      <View style={styles.viewStyle1}>
        <Text style={styles.text1}>CE COIN</Text>
        <View style={styles.InputflexStyle}>
          <TextInput
            style={styles.InputStyle}
            placeholder="Input Amout of CE COIN "
            value={price}
            onChangeText={(price) => {
              setprice(price);
            }}
          />
        </View>
      </View>

      <View style={styles.viewStyle4}>
        <View style={styles.ConButton}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => createAc()}
          >
            <Text style={styles.Buttontext}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#FBFBFB",
  },
  InputStyle: {
    height: 50,
    borderColor: "#EAEAEA",
    borderWidth: 1,
    borderRadius: 6,
    margin: 10,
    paddingLeft: 10,
    backgroundColor: "#fff",
  },
  InputflexStyle: {
    width: "95%",
  },
  InputflexStyle1: {
    width: "85%",
  },
  viewStyle1: {
    marginLeft: 15,
  },
  viewStyle5: {
    marginLeft: 15,
    marginBottom: 50,
  },
  viewStyle4: {
    alignItems: "center",
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  ConButton: {
    width: "50%",
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: "#FF4D15",
    borderRadius: 6,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    shadowRadius: 1,
    shadowOffset: { width: 2, height: 2 },
  },
  viewStyle2: {
    marginTop: 10,
    marginLeft: 21,
    marginRight: 10,
    marginBottom: 5,
  },
  viewStyle5: {
    justifyContent: "center",
    alignItems: "center",
  },
  textcard: {
    fontSize: 25,
    color: "#fff",
    marginTop: 5,
    marginRight: 15,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#464646",
    marginTop: 10,
  },
  text1: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#464646",
    marginTop: 10,
  },
  text2: {
    fontSize: 12,
    color: "#464646",
  },
  NextButton: {
    width: "40%",
    margin: 10,
  },
  Buttontext: {
    fontSize: 16,
    margin: 8,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default CreateAc;
