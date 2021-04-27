import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
const Redeemed = (props) => {
  const Rewardname = "Mouse Gaming";
  const Price = "10";
  const Date = "10/10/2021";

  const [rew0, setrew0] = useState({ reward: "", imgsrc: "", price: "" });
  const [rew1, setrew1] = useState({ reward: "", imgsrc: "", price: "" });
  const [rew2, setrew2] = useState({ reward: "", imgsrc: "", price: "" });
  const [rew3, setrew3] = useState({ reward: "", imgsrc: "", price: "" });
  const [rew4, setrew4] = useState({ reward: "", imgsrc: "", price: "" });
  const [rew5, setrew5] = useState({ reward: "", imgsrc: "", price: "" });
  const [rew6, setrew6] = useState({ reward: "", imgsrc: "", price: "" });
  const [rew7, setrew7] = useState({ reward: "", imgsrc: "", price: "" });

  const showReward = async () => {
    const token = await AsyncStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    await axios
      .get("https://cecoinserver.ngrok.io/showRewardById", config)
      .then((ret) => {
        if (ret.data.length == 1) {
          setrew0({
            reward: ret.data[0].reward,
            imgsrc: ret.data[0].imgsrc,
            price: ret.data[0].price,
          });
        } else if (ret.data.length == 2) {
          setrew0({
            reward: ret.data[0].reward,
            imgsrc: ret.data[0].imgsrc,
            price: ret.data[0].price,
          });
          setrew1({
            reward: ret.data[1].reward,
            imgsrc: ret.data[1].imgsrc,
            price: ret.data[1].price,
          });
        } else if (ret.data.length == 3) {
          setrew0({
            reward: ret.data[0].reward,
            imgsrc: ret.data[0].imgsrc,
            price: ret.data[0].price,
          });
          setrew1({
            reward: ret.data[1].reward,
            imgsrc: ret.data[1].imgsrc,
            price: ret.data[1].price,
          });
          setrew2({
            reward: ret.data[2].reward,
            imgsrc: ret.data[2].imgsrc,
            price: ret.data[2].price,
          });
        } else if (ret.data.length == 4) {
          setrew0({
            reward: ret.data[0].reward,
            imgsrc: ret.data[0].imgsrc,
            price: ret.data[0].price,
          });
          setrew1({
            reward: ret.data[1].reward,
            imgsrc: ret.data[1].imgsrc,
            price: ret.data[1].price,
          });
          setrew2({
            reward: ret.data[2].reward,
            imgsrc: ret.data[2].imgsrc,
            price: ret.data[2].price,
          });
          setrew3({
            reward: ret.data[3].reward,
            imgsrc: ret.data[3].imgsrc,
            price: ret.data[3].price,
          });
        } else if (ret.data.length == 5) {
          setrew0({
            reward: ret.data[0].reward,
            imgsrc: ret.data[0].imgsrc,
            price: ret.data[0].price,
          });
          setrew1({
            reward: ret.data[1].reward,
            imgsrc: ret.data[1].imgsrc,
            price: ret.data[1].price,
          });
          setrew2({
            reward: ret.data[2].reward,
            imgsrc: ret.data[2].imgsrc,
            price: ret.data[2].price,
          });
          setrew3({
            reward: ret.data[3].reward,
            imgsrc: ret.data[3].imgsrc,
            price: ret.data[3].price,
          });
          setrew4({
            reward: ret.data[4].reward,
            imgsrc: ret.data[4].imgsrc,
            price: ret.data[4].price,
          });
        } else if (ret.data.length == 6) {
          setrew0({
            reward: ret.data[0].reward,
            imgsrc: ret.data[0].imgsrc,
            price: ret.data[0].price,
          });
          setrew1({
            reward: ret.data[1].reward,
            imgsrc: ret.data[1].imgsrc,
            price: ret.data[1].price,
          });
          setrew2({
            reward: ret.data[2].reward,
            imgsrc: ret.data[2].imgsrc,
            price: ret.data[2].price,
          });
          setrew3({
            reward: ret.data[3].reward,
            imgsrc: ret.data[3].imgsrc,
            price: ret.data[3].price,
          });
          setrew4({
            reward: ret.data[4].reward,
            imgsrc: ret.data[4].imgsrc,
            price: ret.data[4].price,
          });
          setrew5({
            reward: ret.data[5].reward,
            imgsrc: ret.data[5].imgsrc,
            price: ret.data[5].price,
          });
        } else if (ret.data.length == 7) {
          setrew0({
            reward: ret.data[0].reward,
            imgsrc: ret.data[0].imgsrc,
            price: ret.data[0].price,
          });
          setrew1({
            reward: ret.data[1].reward,
            imgsrc: ret.data[1].imgsrc,
            price: ret.data[1].price,
          });
          setrew2({
            reward: ret.data[2].reward,
            imgsrc: ret.data[2].imgsrc,
            price: ret.data[2].price,
          });
          setrew3({
            reward: ret.data[3].reward,
            imgsrc: ret.data[3].imgsrc,
            price: ret.data[3].price,
          });
          setrew4({
            reward: ret.data[4].reward,
            imgsrc: ret.data[4].imgsrc,
            price: ret.data[4].price,
          });
          setrew5({
            reward: ret.data[5].reward,
            imgsrc: ret.data[5].imgsrc,
            price: ret.data[5].price,
          });
          setrew6({
            reward: ret.data[6].reward,
            imgsrc: ret.data[6].imgsrc,
            price: ret.data[6].price,
          });
        } else if (ret.data.length == 8) {
          setrew0({
            reward: ret.data[0].reward,
            imgsrc: ret.data[0].imgsrc,
            price: ret.data[0].price,
          });
          setrew1({
            reward: ret.data[1].reward,
            imgsrc: ret.data[1].imgsrc,
            price: ret.data[1].price,
          });
          setrew2({
            reward: ret.data[2].reward,
            imgsrc: ret.data[2].imgsrc,
            price: ret.data[2].price,
          });
          setrew3({
            reward: ret.data[3].reward,
            imgsrc: ret.data[3].imgsrc,
            price: ret.data[3].price,
          });
          setrew4({
            reward: ret.data[4].reward,
            imgsrc: ret.data[4].imgsrc,
            price: ret.data[4].price,
          });
          setrew5({
            reward: ret.data[5].reward,
            imgsrc: ret.data[5].imgsrc,
            price: ret.data[5].price,
          });
          setrew6({
            reward: ret.data[6].reward,
            imgsrc: ret.data[6].imgsrc,
            price: ret.data[6].price,
          });
          setrew7({
            reward: ret.data[7].reward,
            imgsrc: ret.data[7].imgsrc,
            price: ret.data[7].price,
          });
        }
      });
  };

  useEffect(() => {
    showReward();
  }, []);
  return (
    <ScrollView>
      <View style={styles.viewStyle}>
        <View style={styles.viewHead}>
          <Text style={styles.text5}>Your Reward</Text>
        </View>

        {rew0.reward == "" ? (
          <View></View>
        ) : (
          <View style={styles.viewStyle1}>
            <View style={styles.viewStyle4}>
              <Image
                style={styles.image}
                source={{
                  uri: rew0.imgsrc,
                }}
              />
            </View>
            <View style={styles.viewStyle2}>
              <Text style={styles.text7}>{rew0.reward}</Text>
              <Text style={styles.text6}>{rew0.price}</Text>
              <Text style={styles.text1}>CE COIN</Text>
            </View>

            <View style={styles.viewStyle5}>
              <Text style={styles.text4}>Redeemed</Text>
            </View>
          </View>
        )}

        {rew1.reward == "" ? (
          <View></View>
        ) : (
          <View style={styles.viewStyle1}>
            <View style={styles.viewStyle4}>
              <Image
                style={styles.image}
                source={{
                  uri: rew1.imgsrc,
                }}
              />
            </View>
            <View style={styles.viewStyle2}>
              <Text style={styles.text7}>{rew1.reward}</Text>
              <Text style={styles.text6}>{rew1.price}</Text>
              <Text style={styles.text1}>CE COIN</Text>
            </View>

            <View style={styles.viewStyle5}>
              <Text style={styles.text4}>Redeemed</Text>
            </View>
          </View>
        )}

        {rew2.reward == "" ? (
          <View></View>
        ) : (
          <View style={styles.viewStyle1}>
            <View style={styles.viewStyle4}>
              <Image
                style={styles.image}
                source={{
                  uri: rew2.imgsrc,
                }}
              />
            </View>
            <View style={styles.viewStyle2}>
              <Text style={styles.text7}>{rew2.reward}</Text>
              <Text style={styles.text6}>{rew2.price}</Text>
              <Text style={styles.text1}>CE COIN</Text>
            </View>

            <View style={styles.viewStyle5}>
              <Text style={styles.text4}>Redeemed</Text>
            </View>
          </View>
        )}

        {rew3.reward == "" ? (
          <View></View>
        ) : (
          <View style={styles.viewStyle1}>
            <View style={styles.viewStyle4}>
              <Image
                style={styles.image}
                source={{
                  uri: rew3.imgsrc,
                }}
              />
            </View>
            <View style={styles.viewStyle2}>
              <Text style={styles.text7}>{rew3.reward}</Text>
              <Text style={styles.text6}>{rew3.price}</Text>
              <Text style={styles.text1}>CE COIN</Text>
            </View>

            <View style={styles.viewStyle5}>
              <Text style={styles.text4}>Redeemed</Text>
            </View>
          </View>
        )}

        {rew4.reward == "" ? (
          <View></View>
        ) : (
          <View style={styles.viewStyle1}>
            <View style={styles.viewStyle4}>
              <Image
                style={styles.image}
                source={{
                  uri: rew4.imgsrc,
                }}
              />
            </View>
            <View style={styles.viewStyle2}>
              <Text style={styles.text7}>{rew4.reward}</Text>
              <Text style={styles.text6}>{rew4.price}</Text>
              <Text style={styles.text1}>CE COIN</Text>
            </View>

            <View style={styles.viewStyle5}>
              <Text style={styles.text4}>Redeemed</Text>
            </View>
          </View>
        )}

        {rew5.reward == "" ? (
          <View></View>
        ) : (
          <View style={styles.viewStyle1}>
            <View style={styles.viewStyle4}>
              <Image
                style={styles.image}
                source={{
                  uri: rew5.imgsrc,
                }}
              />
            </View>
            <View style={styles.viewStyle2}>
              <Text style={styles.text7}>{rew5.reward}</Text>
              <Text style={styles.text6}>{rew5.price}</Text>
              <Text style={styles.text1}>CE COIN</Text>
            </View>

            <View style={styles.viewStyle5}>
              <Text style={styles.text4}>Redeemed</Text>
            </View>
          </View>
        )}

        {rew6.reward == "" ? (
          <View></View>
        ) : (
          <View style={styles.viewStyle1}>
            <View style={styles.viewStyle4}>
              <Image
                style={styles.image}
                source={{
                  uri: rew6.imgsrc,
                }}
              />
            </View>
            <View style={styles.viewStyle2}>
              <Text style={styles.text7}>{rew6.reward}</Text>
              <Text style={styles.text6}>{rew6.price}</Text>
              <Text style={styles.text1}>CE COIN</Text>
            </View>

            <View style={styles.viewStyle5}>
              <Text style={styles.text4}>Redeemed</Text>
            </View>
          </View>
        )}

        {rew7.reward == "" ? (
          <View></View>
        ) : (
          <View style={styles.viewStyle1}>
            <View style={styles.viewStyle4}>
              <Image
                style={styles.image}
                source={{
                  uri: rew7.imgsrc,
                }}
              />
            </View>
            <View style={styles.viewStyle2}>
              <Text style={styles.text7}>{rew7.reward}</Text>
              <Text style={styles.text6}>{rew7.price}</Text>
              <Text style={styles.text1}>CE COIN</Text>
            </View>

            <View style={styles.viewStyle5}>
              <Text style={styles.text4}>Redeemed</Text>
            </View>
          </View>
        )}
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
    backgroundColor: "#F8F8F8",
  },
  viewStyle1: {
    height: 140,
    width: "95%",
    flexDirection: "row",
    backgroundColor: "#D3D3D3",
    borderRadius: 6,
    elevation: 2,
    marginTop: 5,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  viewStyle2: {
    width: "35%",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 2,
    marginLeft: 2,
  },
  viewStyle4: {
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 2,
    marginLeft: 2,
  },
  viewStyle5: {
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 2,
    marginTop: 2,
    borderRadius: 6,
    backgroundColor: "#787878",
    marginRight: 2,
    marginLeft: 2,
  },
  viewHead: {
    width: "100%",
    marginLeft: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  image: {
    width: 100,
    height: 100,

    borderRadius: 6,
  },

  Buttontext2: {
    fontSize: 14,
    marginTop: 8,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    color: "#fff",
    textAlign: "center",
    fontWeight: "500",
  },
  buttonStyle2: {
    backgroundColor: "#FF3333",
    width: "100%",
    borderRadius: 6,
    marginBottom: 5,
    marginTop: 5,
    marginRight: 5,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    shadowRadius: 1,
    shadowOffset: { width: 2, height: 2 },
  },
  text2: {
    fontSize: 18,
    color: "#5E5E5E",
    marginLeft: 20,
    marginTop: 10,
    fontWeight: "500",
  },
  text1: {
    fontSize: 14,
    color: "#5E5E5E",
    fontWeight: "bold",
  },
  text3: {
    fontSize: 26,
    color: "#5E5E5E",
    fontWeight: "bold",
    marginBottom: 5,
  },
  text6: {
    fontSize: 36,
    color: "#5E5E5E",
    fontWeight: "bold",
  },
  text4: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "500",
    marginTop: 5,
    textAlign: "center",
    marginBottom: 5,
  },
  text7: {
    fontSize: 17,
    color: "#5E5E5E",
    fontWeight: "bold",
  },
  text5: {
    fontSize: 26,
    color: "#5E5E5E",
    marginTop: 10,
    fontWeight: "bold",
    marginBottom: 10,
  },
  Rowd: {
    flexDirection: "row",
  },
});

export default Redeemed;
