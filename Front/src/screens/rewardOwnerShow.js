import React from "react";
import { Text, StyleSheet, Image, TouchableOpacity, View } from "react-native";

const showOwnerReward = (props) => {
  const Rewardname = "Mouse Gaming";
  const Price = "10";
  const Date = "10/10/2021";

  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewHead}>
        {" "}
        <Text style={styles.text5}>Your Reward</Text>{" "}
      </View>
      <View style={styles.viewStyle1}>
        <View style={styles.viewStyle4}>
          {" "}
          <Image
            style={styles.image}
            source={{
              uri:
                "https://www.img.in.th/images/df056dcfa2c74995858e8df1d133c4ce.jpg",
            }}
          />{" "}
        </View>
        <View style={styles.viewStyle2}>
          <Text style={styles.text7}>{Rewardname}</Text>
          <Text style={styles.text6}>{Price}</Text>
          <Text style={styles.text1}>CE COIN</Text>
        </View>
        <View style={styles.viewStyle3}>
          <View style={styles.viewStyle5}>
            <Text style={styles.text4}>Redeemed</Text>
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
    alignItems: "center",
    backgroundColor: "#F8F8F8",
  },
  viewStyle1: {
    height: 140,
    width: "95%",
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 6,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    shadowRadius: 1,
    shadowOffset: { width: 2, height: 2 },
    marginTop: 5,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  viewStyle2: {
    width: "37%",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 2,
    marginLeft: 2,
  },
  viewStyle3: {
    width: "25%",
    alignItems: "Flex-start",
    justifyContent: "Flex-start",
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
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 2,
    marginTop: 2,
    borderRadius: 6,
    backgroundColor: "#F8F8F8",
  },
  viewHead: {
    width: "100%",
    marginLeft: 25,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  image: {
    width: 100,
    height: 100,
    flex: 1,
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
    color: "#5E5E5E",
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

export default showOwnerReward;
