import React, { useContext } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import { Context as AuthContext } from "../context/AuthContext";

import { AntDesign } from "@expo/vector-icons";

const GenCode = (props) => {
  const Name = "Nattaphong Wattaninkul";
  const [selectedValue, setSelectedValue] = useState("java");
  const [price, setprice] = useState(0);
  const [code, setcode] = useState("");
  const { state, signout } = useContext(AuthContext);
  const pricegen = (a) => {
    setprice(a);
  };

  const createSpecial = async () => {
    const token = await AsyncStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .post(
        "https://cecoinserver.ngrok.io/createSpecial",
        { price: price },
        config
      )
      .then((response) => {
        setcode(response.data.code);
        Alert.alert("Result:", response.data.message, [{ text: "Ok" }]);
      });
  };

  return (
    <View style={styles.viewStyle}>
      <View style={styles.cen}>
        <Text style={styles.text}>CODE GENERATOR</Text>
      </View>

      <View style={styles.viewStyle1}>
        <Text style={styles.text5}>Special Activity Code</Text>
        <View style={styles.viewStyle3}>
          <View style={styles.line} />
        </View>

        <Text style={styles.text1}>Select Amount CE COIN :</Text>
        <View style={styles.row}>
          <View style={styles.ConButton}>
            <TouchableOpacity
              style={styles.buttonStyle2}
              onPress={() => {
                pricegen(1);
              }}
            >
              <Text style={styles.Buttontext2}>1</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ConButton}>
            <TouchableOpacity
              style={styles.buttonStyle2}
              onPress={() => {
                pricegen(2);
              }}
            >
              <Text style={styles.Buttontext2}>2</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ConButton}>
            <TouchableOpacity
              style={styles.buttonStyle2}
              onPress={() => {
                pricegen(5);
              }}
            >
              <Text style={styles.Buttontext2}>5</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ConButton}>
            <TouchableOpacity
              style={styles.buttonStyle2}
              onPress={() => {
                pricegen(10);
              }}
            >
              <Text style={styles.Buttontext2}>10</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ConButton}>
            <TouchableOpacity
              style={styles.buttonStyle2}
              onPress={() => {
                pricegen(15);
              }}
            >
              <Text style={styles.Buttontext2}>15</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.text1}>Code : {price} Coin</Text>
        <View style={styles.viewStyle5}>
          <Text style={styles.text4}>{code}</Text>
        </View>

        <View style={styles.viewStyle4}>
          <TouchableOpacity
            style={styles.buttonStyle3}
            onPress={() => {
              createSpecial();
            }}
          >
            <Text style={styles.Buttontext3}>Generate</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.cen}>
        <FontAwesome5 name="coins" size={200} color="#F0F0F0" />
      </View>

      <View style={styles.viewStyle2}>
        <View style={styles.LogButton}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              signout();
            }}
          >
            <Text style={styles.Buttontext}>Logout</Text>
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
    backgroundColor: "#fff",
    width: "100%",
  },
  cen: {
    alignItems: "center",
  },
  viewStyle1: {
    alignItems: "center",
    height: 360,
    backgroundColor: "#fff",
    margin: 20,
    borderRadius: 6,
    elevation: 2,
  },
  viewStyle4: {
    marginTop: 10,
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  viewStyle2: {
    alignItems: "center",
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  viewStyle3: {
    width: "90%",
  },
  viewStyle5: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: "20%",
    backgroundColor: "#FBFBFB",
    marginBottom: 5,
  },
  LogButton: {
    width: "100%",
  },
  ConButton: {
    width: 50,
    margin: 3,
  },
  Buttontext: {
    fontSize: 20,
    margin: 10,
    color: "#fff",
    textAlign: "center",
    fontWeight: "500",
  },
  Buttontext2: {
    fontSize: 14,
    margin: 5,
    color: "#000",
    textAlign: "center",
    fontWeight: "500",
  },
  Buttontext3: {
    fontSize: 16,
    margin: 7,
    color: "#fff",
    textAlign: "center",
    fontWeight: "500",
  },
  text: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#464646",
    marginTop: 10,
    marginBottom: 5,
  },
  text5: {
    fontSize: 26,
    fontWeight: "500",
    color: "#636363",
    marginTop: 30,
    marginBottom: 5,
  },
  text4: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#333333",
    alignItems: "center",
  },
  text1: {
    fontSize: 18,
    fontWeight: "500",
    color: "#464646",
    marginBottom: 10,
  },
  text2: {
    fontSize: 16,
    fontWeight: "400",
    color: "#858585",
    margin: 2,
  },
  text3: {
    fontSize: 18,
    fontWeight: "500",
    color: "#464646",
    marginLeft: 5,
  },
  buttonStyle: {
    backgroundColor: "#333333",
  },
  buttonStyle2: {
    backgroundColor: "#EFEFEF",
    borderRadius: 6,
    marginBottom: 15,
    borderColor: "#595959",
    borderWidth: 1,
    elevation : 2
  },
  buttonStyle3: {
    backgroundColor: "#FF4D15",
    width: 150,
    height: 40,
    borderRadius: 6,
    marginBottom: 15,
    justifyContent: "center",
    elevation: 2,
  },
  line: {
    height: 1,
    backgroundColor: "#CFCFCF",
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
  },
  iconstyle3: {
    marginTop: 15,
    fontSize: 45,
    alignSelf: "center",
    margin: 10,
    color: "#000",
  },
});

export default GenCode;
