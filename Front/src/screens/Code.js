import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
// import { get } from "../../../testBlockchain/testTruffle/routes/joinCheckin";

const Code = (props) => {
  const Name = "Nattaphong Wattaninkul";
  const ID = "60010317";
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
  const [codesend, setcode] = useState("");
  const [subsend, setsubsend] = useState("");
  // let subsend = "";
  let codetosend = "";

  useEffect(() => {
    getSubject();
  }, []);

  const getSubject = async () => {
    const token = await AsyncStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    await axios
      .get("https://cecoinserver.ngrok.io/getSubject", config)
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

  const joinCheckin = async () => {
    const token = await AsyncStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    await axios
      .post(
        "https://cecoinserver.ngrok.io/joinCheckin",
        { code: codesend, subject: subsend },
        config
      )
      .then(async (response) => {
        Alert.alert("Result:", response.data.message, [{ text: "Ok" }]);
        console.log(subsend);
        console.log(codetosend);
      });
  };

  const joinSpecial = async () => {
    const token = await AsyncStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    await axios
      .post(
        "https://cecoinserver.ngrok.io/joinSpecial",
        { code: codesend },
        config
      )
      .then(async (response) => {
        Alert.alert("Result:", response.data.message, [{ text: "Ok" }]);
        console.log(subsend);
        console.log(codetosend);
      });
  };
  return (
    <View style={styles.viewStyle}>
      <ScrollView>
        <View style={styles.viewHead}>
          <Text style={styles.text5}>Get coin by code</Text>
        </View>
        <View style={styles.viewStyle1}>
          <AntDesign name="checksquare" style={styles.iconstyle3} />
          <Text style={styles.text}>Class Check-in</Text>
          <View style={styles.viewStyle3}>
            <DropDownPicker
              items={itemsub}
              containerStyle={{ height: 50, width: "100%" }}
              itemStyle={{
                justifyContent: "flex-start",
              }}
              dropDownStyle={{ backgroundColor: "#fafafa" }}
              onChangeItem={async (item) => {
                await setsubsend(item.value);
                console.log(subsend);
              }}
            />
            <View style={styles.InputflexStyle}>
              <TextInput
                style={styles.InputStyle}
                onChangeText={async (ret) => await setcode(ret)}
                placeholder="Input CE COIN Code"
              />
            </View>
            <View style={styles.viewStyle4}>
              <View style={styles.ConButton}>
                <TouchableOpacity
                  style={styles.buttonStyle2}
                  onPress={() => joinCheckin()}
                >
                  <Text style={styles.Buttontext2}>Get Coin</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.viewStyle7}>
          <Ionicons name="school" style={styles.iconstyle3} />
          <Text style={styles.text}>Special Activity</Text>
          <View style={styles.viewStyle3}>
            <View style={styles.InputflexStyle}>
              <TextInput
                style={styles.InputStyle}
                onChangeText={async (ret) => await setcode(ret)}
                placeholder="Input CE COIN Code"
              />
            </View>
            <View style={styles.viewStyle4}>
              <View style={styles.ConButton}>
                <TouchableOpacity
                  style={styles.buttonStyle2}
                  onPress={() => joinSpecial()}
                >
                  <Text style={styles.Buttontext2}>Get Coin</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#F2F2F2",
  },
  viewHead: {
    width: "100%",
    marginLeft: 20,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  image: {
    height: "60%",
    width: "60%",
  },
  viewStyle1: {
    alignItems: "center",
    backgroundColor: "#FF4D15",
    margin: 15,
    borderRadius: 6,
    elevation: 2,
  },
  viewStyle4: {
    alignItems: "flex-end",
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
  viewStyle7: {
    alignItems: "center",
    backgroundColor: "#FFAA05",
    margin: 15,
    borderRadius: 6,
    elevation: 2,
  },
  InputStyle: {
    height: 50,

    borderRadius: 6,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: "#fff",
  },
  InputflexStyle: {
    width: "100%",
  },
  LogButton: {
    width: "100%",
  },
  ConButton: {
    width: "40%",
  },
  Buttontext: {
    fontSize: 20,
    margin: 10,
    color: "#fff",
    textAlign: "center",
    fontWeight: "500",
  },
  Buttontext2: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    fontWeight: "500",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
    marginBottom: 20,
  },
  text1: {
    fontSize: 18,
    fontWeight: "500",
    color: "#464646",
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
  text5: {
    fontSize: 26,
    color: "#5E5E5E",
    marginTop: 10,
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttonStyle: {
    backgroundColor: "#FF4D15",
  },
  buttonStyle2: {
    backgroundColor: "#333333",
    borderRadius: 6,
    marginBottom: 15,
    height: 40,
    justifyContent: "center",
  },
  line: {
    height: 1,
    backgroundColor: "#CFCFCF",
    marginTop: 25,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  iconstyle3: {
    marginTop: 15,
    fontSize: 45,
    alignSelf: "center",
    margin: 10,
    color: "#fff",
  },
});

export default Code;
