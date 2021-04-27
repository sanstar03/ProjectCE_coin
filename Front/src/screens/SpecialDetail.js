import React, { useEffect } from "react";
import { Text, StyleSheet, Image, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
const SpDetail = (props) => {
  const [detail, setdetail] = useState({
    name: "",
    imgsrc: "qw112313",
    price: "",
    location: "",
    date: "",
    time: "",
    dt: "",
  });

  let nameget = "";

  useEffect(() => {
    nameget = props.navigation.getParam("actsend");
    getSpecialAct();
  }, [detail.name]);

  const getSpecialAct = async () => {
    const token = await AsyncStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    await axios
      .post(
        "https://cecoinserver.ngrok.io/showSpecialActivityByName",
        { name: nameget },
        config
      )
      .then((ret) => {
        // console.log(ret.data)
        setdetail({
          name: ret.data.name,
          imgsrc: ret.data.imgsrc,
          price: ret.data.price,
          location: ret.data.location,
          date: ret.data.date,
          time: ret.data.time,
          dt: ret.data.detail,
        });
      });
  };
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewStyle1}>
        <Image
          style={styles.image}
          source={{
            uri: detail.imgsrc,
          }}
        ></Image>
      </View>

      <View style={styles.viewStyle2}>
        <Text style={styles.textcard}>{detail.name}</Text>
      </View>
      <View style={styles.viewStyle3}>
        <Text style={styles.text1}>Location {detail.location}</Text>
        <Text style={styles.text1}>
          From {detail.date.replace("GMT+0700 (Indochina Time)", "")}
        </Text>
        <Text style={styles.text1}>
          To {detail.time.replace("GMT+0700 (Indochina Time)", "")}
        </Text>

        <Text style={styles.text2}>Detail :</Text>
        <View style={styles.line}></View>
        <Text style={styles.text5}>{detail.dt}</Text>
        <View style={styles.viewStyle5}>
          <View style={styles.box2}>
            <Text style={styles.text4}>CE COIN x {detail.price}</Text>
          </View>
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
    backgroundColor: "#F8F8F8",
  },
  viewStyle1: {
    height: "30%",
  },
  viewStyle2: {
    height: 55,
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#FF6F07",
    borderRadius: 6,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    shadowRadius: 1,
    shadowOffset: { width: 2, height: 2 },
    margin: 10,
  },
  image: {
    height: "100%",
    width: "100%",
    flex: 1,
  },
  viewStyle3: {
    backgroundColor: "#fff",
    height: "60%",
  },
  line: {
    height: 1,
    backgroundColor: "#D1D1D1",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  viewStyle5: {
    alignItems: "center",
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  box: {
    width: "50%",
    alignItems: "center",
    backgroundColor: "#D1D1D1",
    margin: 10,
  },
  box2: {
    width: 350,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    backgroundColor: "#333333",
    marginBottom: 20,
  },
  text1: {
    fontSize: 16,
    color: "#000",
    marginLeft: 15,
    marginTop: 7,
  },
  text2: {
    fontSize: 16,
    color: "#000",
    marginLeft: 15,
    marginTop: 7,
    fontWeight: "bold",
  },
  text3: {
    fontSize: 40,
    color: "#5E5E5E",
    margin: 10,
    fontWeight: "bold",
  },
  text4: {
    fontSize: 20,
    color: "#fff",
    margin: 10,
    fontWeight: "500",
  },
  textcard: {
    fontSize: 22,
    color: "#fff",
    marginLeft: 15,
    fontWeight: "bold",
  },
  text5: {
    fontSize: 16,
    color: "#000",
    marginLeft: 15,
    marginTop: 7,
    marginRight: 15,
  },
  textcard2: {
    fontSize: 15,
    color: "#fff",
    marginTop: 5,
    marginLeft: 15,
  },
  NextButton: {
    width: "40%",
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
  buttonStyle2: {
    backgroundColor: "#FFA133",
    borderRadius: 6,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    shadowRadius: 1,
    shadowOffset: { width: 2, height: 2 },
  },
  Buttontext: {
    fontSize: 16,
    margin: 8,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default SpDetail;
