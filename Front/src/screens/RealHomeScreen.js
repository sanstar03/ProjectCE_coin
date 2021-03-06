import React, { useState, useEffect, useRef } from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import { set } from "mongoose";
const RealHomeScreen = (props) => {
  const Amount = "200";


const [name,setname] = useState('');
const [balance,setbalance] = useState('');

const ladasaid = async () => {
  const token = await AsyncStorage.getItem("token");
    const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
  axios.get('http://127.0.0.1:8000/api/getUser',config).then(res => setname(res.data))
}

const getBalance = async () => {
  const token = await AsyncStorage.getItem("token");
  const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
  axios.get('http://127.0.0.1:8000/api/getBalance',config).then(res => setbalance(res.data))
  
}


ladasaid();
getBalance();

  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewStyle1}>
        <Text style={styles.text}>{name}</Text>
      </View>

      <View style={styles.viewStyle2}>
        <Text style={styles.textcard}>{balance}</Text>
        <Text style={styles.textcard}>Reward Coin</Text>

        <View style={styles.loginScreenButton}>
          <TouchableOpacity style={styles.buttonShadow}>
            <MaterialIcons.Button
              name="account-box"
              color="#9B9B9B"
              style={styles.buttonStyle}
            >
              <Text style={styles.Buttontext1}>Account</Text>
            </MaterialIcons.Button>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.viewButton}>
        <View style={styles.MenuButton}>
          <TouchableOpacity style={styles.buttonShadow}>
            <FontAwesome5.Button
              name="gift"
              color="#fff"
              style={styles.buttonStyle1}
              onPress={() => props.navigation.navigate("Tran")}
            >
              <Text style={styles.Buttontext}>Reward</Text>
            </FontAwesome5.Button>
          </TouchableOpacity>
        </View>
        <View style={styles.MenuButton}>
          <TouchableOpacity style={styles.buttonShadow}>
            <FontAwesome5.Button
              name="exchange-alt"
              color="#fff"
              style={styles.buttonStyle2}
              onPress={() => props.navigation.navigate("Tran")}
            >
              <Text style={styles.Buttontext}>Transfer</Text>
            </FontAwesome5.Button>
          </TouchableOpacity>
        </View>
        <View style={styles.MenuButton}>
          <TouchableOpacity style={styles.buttonShadow} onPress={() => getName}>
            <FontAwesome5.Button
              name="camera"
              color="#fff"
              style={styles.buttonStyle3}
            >
              <Text style={styles.Buttontext}>Check-in</Text>
            </FontAwesome5.Button>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.viewStyle1}>
        <Text style={styles.text}>Activity for you</Text>
      </View>
      <View style={styles.viewStyle3}>
        <Text style={styles.text1}>Activity Coming Soon</Text>
      </View>
      <View style={styles.viewStyle3}>
        <Text style={styles.text1}>Activity Coming Soon</Text>
      </View>
      <View style={styles.viewStyle3}>
        <Text style={styles.text1}>Activity Coming Soon</Text>
      </View>
      <View style={styles.viewStyle3}>
        <Text style={styles.text1}>Activity Coming Soon</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },
  viewStyle1: {
    marginLeft: 15,
  },
  viewStyle2: {
    height: "19%",
    alignItems: "flex-end",
    backgroundColor: "#FF6F07",
    borderRadius: 6,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    shadowRadius: 1,
    shadowOffset: { width: 2, height: 2 },
    margin: 15,
  },
  viewStyle3: {
    backgroundColor: "#F8F8F8",
    height: "10%",
    margin: 10,
  },
  viewButton: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  loginScreenButton: {
    width: "42%",
    margin: 10,
  },
  MenuButton: {
    width: "30%",
    margin: 5,
  },
  buttonShadow: {
    borderRadius: 6,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    shadowRadius: 1,
    shadowOffset: { width: 2, height: 2 },
  },
  buttonStyle: { backgroundColor: "#fff" },
  buttonStyle1: { backgroundColor: "#FF6838" },
  buttonStyle2: { backgroundColor: "#FFA133" },
  buttonStyle3: { backgroundColor: "#FF7817" },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#464646",
    marginTop: 10,
  },
  text1: {
    fontSize: 16,
    color: "#B0AEAD",
    margin: 10,
  },
  textcard: {
    fontSize: 25,
    color: "#fff",
    marginTop: 5,
    marginRight: 15,
  },
  Buttontext: {
    fontSize: 14,
    marginRight: 8,
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
  },
  Buttontext1: {
    fontSize: 16,
    marginLeft: 16,
    textAlign: "center",
    fontWeight: "bold",
    color: "#9B9B9B",
  },
});

export default RealHomeScreen;
