import React, { useEffect, useReducer, useState, useContext } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
} from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { navigate } from "../navigationRef";
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import { Context as AuthContext } from "../context/AuthContext";
const ShopHome = (props) => {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const Amount = "200";
  const [id, setid] = useState("");
  const [bal, setbal] = useState("");
  const { state, signout } = useContext(AuthContext);
  const [x, setx] = useState(0);

  const getId = async () => {
    const token = await AsyncStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get("https://cecoinserver.ngrok.io/getId", config)
      .then((res) => setid(res.data));
  };

  const getBalance = async () => {
    const token = await AsyncStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get("https://cecoinserver.ngrok.io/getBalance", config)
      .then((res) => setbal(res.data));
  };

  useEffect(() => {
    getId();
    getBalance();
  }, [x]);
  return (
    <SafeAreaView style={styles.viewStyle}>
      <View style={styles.viewStyle1}>
        <Text style={styles.text}>ID : {id}</Text>
      </View>

      <View style={styles.viewStyle2}>
        <View style={styles.viewStyle4}>
          <Image
            style={styles.image}
            source={require("./../../assets/Shop.png")}
          ></Image>
        </View>
        <View style={styles.col}>
          <View style={styles.viewStyle6}>
            <Text style={styles.textcard}>{bal}</Text>

            <TouchableOpacity
              style={styles.viewStyle5}
              onPress={() => setx(x + 1)}
            >
              <FontAwesome name="refresh" style={styles.iconstyle2} />
            </TouchableOpacity>
          </View>

          <Text style={styles.textcard1}>CE COIN</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.card2} onPress={() => navigate("Tran")}>
        <FontAwesome name="exchange" style={styles.iconstyle3} />
        <Text style={styles.Buttontext1}>Transfer</Text>
      </TouchableOpacity>

      <View style={styles.cen}>
        <Entypo name="shop" size={250} color="#F0F0F0" />
      </View>

      <View style={styles.viewbottom}>
        <View style={styles.LogButton}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => signout()}
          >
            <Text style={styles.Buttontext}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#FBFBFB",
    maxHeight: "100%",
  },
  viewStyle1: {
    marginLeft: 10,
  },
  LogButton: {
    width: "100%",
  },
  cen: {
    justifyContent: "center",
    alignItems: "center",
  },
  viewStyle2: {
    height: 180,
    width: "95%",
    alignItems: "flex-start",
    backgroundColor: "#FF6F07",
    borderRadius: 6,
    elevation: 10,
    margin: 10,
    flexDirection: "row",
  },
  viewStyle4: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
  },
  card2: {
    height: 50,
    alignItems: "flex-end",
    backgroundColor: "#FFAA05",
    borderRadius: 6,
    elevation: 2,
    margin: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  viewStyle5: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: "60%",
    marginRight: 15,
    marginTop: 10,
    marginBottom: 5,
    borderRadius: 6,
    elevation: 2,
  },
  viewStyle6: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  viewStyle7: {
    height: "100%",
  },
  image: {
    width: 140,
    height: 140,
    marginLeft: 10,
  },
  col: {
    width: "50%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  viewStyle10: {
    flex: 1,
  },
  viewbottom: {
    alignItems: "center",
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  viewStyle3: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FBFBFB",
    height: "15%",
    marginRight: 15,
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 6,
    flexDirection: "row",
    elevation: 2,
  },
  buttonStyle: {
    backgroundColor: "#333333",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#464646",
    marginTop: 10,
  },
  text2: {
    fontSize: 16,
    fontWeight: "500",
    color: "#464646",
    marginBottom: 5,
    marginTop: 5,
  },
  text1: {
    fontSize: 16,
    color: "#B0AEAD",
    margin: 10,
  },
  textcard: {
    fontSize: 35,
    color: "#fff",
    marginTop: 5,
    marginRight: 15,
  },
  textcard1: {
    fontSize: 25,
    color: "#fff",
    marginTop: 5,
    marginRight: 15,
    fontWeight: "500",
  },
  Buttontext: {
    fontSize: 20,
    margin: 10,
    color: "#fff",
    textAlign: "center",
    fontWeight: "500",
  },
  Buttontext1: {
    fontSize: 20,
    margin: 10,
    color: "#fff",
    textAlign: "center",
    fontWeight: "500",
  },
  Buttontext2: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#464646",
    marginTop: 5,
    marginBottom: 5,
  },
  iconstyle: {
    fontSize: 25,
    alignSelf: "center",
    marginRight: 10,
    color: "#4A3939",
  },
  iconstyle2: {
    fontSize: 15,
    alignSelf: "center",
    margin: 10,
    color: "#9B9B9B",
  },
  iconstyle3: {
    fontSize: 24,
    alignSelf: "center",
    margin: 10,
    color: "#fff",
  },
  viewStyle7: {
    alignContent: "center",
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "row",
    width: "100%",
  },
  viewStyle8: {
    flexDirection: "column",
    width: "47%",
    margin: 1,
  },
});

export default ShopHome;
