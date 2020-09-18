import { StatusBar } from "expo-status-bar";
import React from "react";
import {  SafeAreaView, Text, Alert } from "react-native";
import { Input, Button } from "react-native-elements";
import { Header } from "react-native-elements";


export default function App() {
  const handlePress = () => false;
  console.log("app executed");
  return (
    <div>
      <Header
        centerComponent={{
          text: "Account",
          style: { color: "#fff", fontSize: 20, fontWeight: "bold" },
        }}
        rightComponent={{
          text: "CE COIN",
          style: { color: "#fff", fontSize: 15, fontWeight: "bold" },
        }}
        containerStyle={{
          backgroundColor: "#333333",
          justifyContent: "space-around",
        }}
      />
      <img src="./bank.jpg"></img>
      <text>Natthaphong Wattaninkul</text>
    </div>
  );
}


