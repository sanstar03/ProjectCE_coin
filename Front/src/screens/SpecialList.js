import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";

const Aclist = (props) => {
  const Activityname = "Giving Blood 2021";
  const Location = "706";
  const Date = "3/10/2021";
  const Time = "09.00 - 10.00";
  const [modalVisible, setModalVisible] = useState(false);

  const [sp0, setsp0] = useState({
    name: "",
    imgsrc: "",
    price: "",
    location: "",
  });
  const [sp1, setsp1] = useState({
    name: "a",
    imgsrc:
      "img.in.th/images/531a90bc17ec78093e5e2c0c882a5d5a.png?fbclid=IwAR1djB8WIEo6NLca5F90NfWlCk3l3TI1roug9o8xMTNlZ6k7SK16fOGC_Fg",
    price: "",
    location: "",
  });
  const [sp2, setsp2] = useState({
    name: "",
    imgsrc: "",
    price: "",
    location: "",
  });
  const [sp3, setsp3] = useState({
    name: "",
    imgsrc: "",
    price: "",
    location: "",
  });
  const [sp4, setsp4] = useState({
    name: "",
    imgsrc: "",
    price: "",
    location: "",
  });
  const [sp5, setsp5] = useState({
    name: "",
    imgsrc: "",
    price: "",
    location: "",
  });
  const [sp6, setsp6] = useState({
    name: "",
    imgsrc: "",
    price: "",
    location: "",
  });
  const [sp7, setsp7] = useState({
    name: "",
    imgsrc: "",
    price: "",
    location: "",
  });
  let actsend = "";

  const getSpecialAct = async () => {
    const token = await AsyncStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get("https://cecoinserver.ngrok.io/showSpecialActivity", config)
      .then((ret) => {
        if (ret.data.length == 1) {
          setsp0({
            name: ret.data[0].name,
            imgsrc: ret.data[0].imgsrc,
            price: ret.data[0].price,
            location: ret.data[0].location,
          });
        } else if (ret.data.length == 2) {
          setsp0({
            name: ret.data[0].name,
            imgsrc: ret.data[0].imgsrc,
            price: ret.data[0].price,
            location: ret.data[0].location,
          });

          setsp1({
            name: ret.data[1].name,
            imgsrc: ret.data[1].imgsrc,
            price: ret.data[1].price,
            location: ret.data[1].location,
          });
        } else if (ret.data.length == 3) {
          setsp0({
            name: ret.data[0].name,
            imgsrc: ret.data[0].imgsrc,
            price: ret.data[0].price,
            location: ret.data[0].location,
          });

          setsp1({
            name: ret.data[1].name,
            imgsrc: ret.data[1].imgsrc,
            price: ret.data[1].price,
            location: ret.data[1].location,
          });
          setsp2({
            name: ret.data[2].name,
            imgsrc: ret.data[2].imgsrc,
            price: ret.data[2].price,
            location: ret.data[2].location,
          });
        } else if (ret.data.length == 4) {
          setsp0({
            name: ret.data[0].name,
            imgsrc: ret.data[0].imgsrc,
            price: ret.data[0].price,
            location: ret.data[0].location,
          });

          setsp1({
            name: ret.data[1].name,
            imgsrc: ret.data[1].imgsrc,
            price: ret.data[1].price,
            location: ret.data[1].location,
          });
          setsp2({
            name: ret.data[2].name,
            imgsrc: ret.data[2].imgsrc,
            price: ret.data[2].price,
            location: ret.data[2].location,
          });
          setsp3({
            name: ret.data[3].name,
            imgsrc: ret.data[3].imgsrc,
            price: ret.data[3].price,
            location: ret.data[3].location,
          });
        } else if (ret.data.length == 5) {
          setsp0({
            name: ret.data[0].name,
            imgsrc: ret.data[0].imgsrc,
            price: ret.data[0].price,
            location: ret.data[0].location,
          });

          setsp1({
            name: ret.data[1].name,
            imgsrc: ret.data[1].imgsrc,
            price: ret.data[1].price,
            location: ret.data[1].location,
          });
          setsp2({
            name: ret.data[2].name,
            imgsrc: ret.data[2].imgsrc,
            price: ret.data[2].price,
            location: ret.data[2].location,
          });
          setsp3({
            name: ret.data[3].name,
            imgsrc: ret.data[3].imgsrc,
            price: ret.data[3].price,
            location: ret.data[3].location,
          });
          setsp4({
            name: ret.data[4].name,
            imgsrc: ret.data[4].imgsrc,
            price: ret.data[4].price,
            location: ret.data[4].location,
          });
        } else if (ret.data.length == 6) {
          setsp0({
            name: ret.data[0].name,
            imgsrc: ret.data[0].imgsrc,
            price: ret.data[0].price,
            location: ret.data[0].location,
          });

          setsp1({
            name: ret.data[1].name,
            imgsrc: ret.data[1].imgsrc,
            price: ret.data[1].price,
            location: ret.data[1].location,
          });
          setsp2({
            name: ret.data[2].name,
            imgsrc: ret.data[2].imgsrc,
            price: ret.data[2].price,
            location: ret.data[2].location,
          });
          setsp3({
            name: ret.data[3].name,
            imgsrc: ret.data[3].imgsrc,
            price: ret.data[3].price,
            location: ret.data[3].location,
          });
          setsp4({
            name: ret.data[4].name,
            imgsrc: ret.data[4].imgsrc,
            price: ret.data[4].price,
            location: ret.data[4].location,
          });
          setsp5({
            name: ret.data[5].name,
            imgsrc: ret.data[5].imgsrc,
            price: ret.data[5].price,
            location: ret.data[5].location,
          });
        } else if (ret.data.length == 7) {
          setsp6({
            name: ret.data[6].name,
            imgsrc: ret.data[6].imgsrc,
            price: ret.data[6].price,
            location: ret.data[6].location,
          });
        } else if (ret.data.length == 8) {
          setsp0({
            name: ret.data[0].name,
            imgsrc: ret.data[0].imgsrc,
            price: ret.data[0].price,
            location: ret.data[0].location,
          });

          setsp1({
            name: ret.data[1].name,
            imgsrc: ret.data[1].imgsrc,
            price: ret.data[1].price,
            location: ret.data[1].location,
          });
          setsp2({
            name: ret.data[2].name,
            imgsrc: ret.data[2].imgsrc,
            price: ret.data[2].price,
            location: ret.data[2].location,
          });
          setsp3({
            name: ret.data[3].name,
            imgsrc: ret.data[3].imgsrc,
            price: ret.data[3].price,
            location: ret.data[3].location,
          });
          setsp4({
            name: ret.data[4].name,
            imgsrc: ret.data[4].imgsrc,
            price: ret.data[4].price,
            location: ret.data[4].location,
          });
          setsp5({
            name: ret.data[5].name,
            imgsrc: ret.data[5].imgsrc,
            price: ret.data[5].price,
            location: ret.data[5].location,
          });
        } else if (ret.data.length == 7) {
          setsp6({
            name: ret.data[6].name,
            imgsrc: ret.data[6].imgsrc,
            price: ret.data[6].price,
            location: ret.data[6].location,
          });
          setsp7({
            name: ret.data[7].name,
            imgsrc: ret.data[7].imgsrc,
            price: ret.data[7].price,
            location: ret.data[7].location,
          });
        }
      });
  };

  useEffect(() => {
    getSpecialAct();
  }, []);

  return (
    <ScrollView>
      <View style={styles.viewStyle}>
        <View style={styles.viewHead}>
          <Text style={styles.text5}>Special Activity</Text>
        </View>

        {sp0.name == "" ? (
          <View></View>
        ) : (
          <View style={styles.viewStyle1}>
            <View style={styles.viewStyle4}>
              <Image
                style={styles.image}
                source={{
                  uri: sp0.imgsrc,
                }}
              />
            </View>
            <View style={styles.viewStyle2}>
              <Text style={styles.text2}>{sp0.name}</Text>
              <Text style={styles.text1}>{sp0.location}</Text>
              {/* <Text style={styles.text1}>{Date}</Text>
          <Text style={styles.text1}>{Time}</Text> */}
            </View>
            <View style={styles.viewStyle3}>
              <Text style={styles.text3}>{sp0.price}</Text>
              <Text style={styles.text7}>CE COIN</Text>
              <View style={styles.ConButton}>
                <TouchableOpacity
                  style={styles.Conbutt}
                  onPress={() => {
                    actsend = sp0.name;
                    props.navigation.navigate("SpDetail", { actsend });
                  }}
                >
                  <View style={styles.Rowd}>
                    <Text style={styles.Buttontext2}>See More</Text>
                    <AntDesign name="caretright" style={styles.iconstyle} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}

        {sp1.name == "" ? (
          <View></View>
        ) : (
          <View style={styles.viewStyle1}>
            <View style={styles.viewStyle4}>
              <Image
                style={styles.image}
                source={{
                  uri: sp1.imgsrc,
                }}
              />
            </View>
            <View style={styles.viewStyle2}>
              <Text style={styles.text2}>{sp1.name}</Text>
              <Text style={styles.text1}>{sp1.location}</Text>
              {/* <Text style={styles.text1}>{Date}</Text>
          <Text style={styles.text1}>{Time}</Text> */}
            </View>
            <View style={styles.viewStyle3}>
              <Text style={styles.text3}>{sp1.price}</Text>
              <Text style={styles.text7}>CE COIN</Text>
              <View style={styles.ConButton}>
                <TouchableOpacity
                  style={styles.Conbutt}
                  onPress={() => {
                    actsend = sp1.name;
                    props.navigation.navigate("SpDetail", { actsend });
                  }}
                >
                  <View style={styles.Rowd}>
                    <Text style={styles.Buttontext2}>See More</Text>
                    <AntDesign name="caretright" style={styles.iconstyle} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}

        {sp2.name == "" ? (
          <View></View>
        ) : (
          <View style={styles.viewStyle1}>
            <View style={styles.viewStyle4}>
              <Image
                style={styles.image}
                source={{
                  uri: sp2.imgsrc,
                }}
              />
            </View>
            <View style={styles.viewStyle2}>
              <Text style={styles.text2}>{sp2.name}</Text>
              <Text style={styles.text1}>{sp2.location}</Text>
              {/* <Text style={styles.text1}>{Date}</Text>
          <Text style={styles.text1}>{Time}</Text> */}
            </View>
            <View style={styles.viewStyle3}>
              <Text style={styles.text3}>{sp2.price}</Text>
              <Text style={styles.text7}>CE COIN</Text>
              <View style={styles.ConButton}>
                <TouchableOpacity
                  style={styles.Conbutt}
                  onPress={() => {
                    actsend = sp2.name;
                    props.navigation.navigate("SpDetail", { actsend });
                  }}
                >
                  <View style={styles.Rowd}>
                    <Text style={styles.Buttontext2}>See More</Text>
                    <AntDesign name="caretright" style={styles.iconstyle} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}

        {sp3.name == "" ? (
          <View></View>
        ) : (
          <View style={styles.viewStyle1}>
            <View style={styles.viewStyle4}>
              <Image
                style={styles.image}
                source={{
                  uri: sp3.imgsrc,
                }}
              />
            </View>
            <View style={styles.viewStyle2}>
              <Text style={styles.text2}>{sp3.name}</Text>
              <Text style={styles.text1}>{sp3.location}</Text>
              {/* <Text style={styles.text1}>{Date}</Text>
          <Text style={styles.text1}>{Time}</Text> */}
            </View>
            <View style={styles.viewStyle3}>
              <Text style={styles.text3}>{sp3.price}</Text>
              <Text style={styles.text7}>CE COIN</Text>
              <View style={styles.ConButton}>
                <TouchableOpacity
                  style={styles.Conbutt}
                  onPress={() => {
                    actsend = sp3.name;
                    props.navigation.navigate("SpDetail", { actsend });
                  }}
                >
                  <View style={styles.Rowd}>
                    <Text style={styles.Buttontext2}>See More</Text>
                    <AntDesign name="caretright" style={styles.iconstyle} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}

        {sp4.name == "" ? (
          <View></View>
        ) : (
          <View style={styles.viewStyle1}>
            <View style={styles.viewStyle4}>
              <Image
                style={styles.image}
                source={{
                  uri: sp4.imgsrc,
                }}
              />
            </View>
            <View style={styles.viewStyle2}>
              <Text style={styles.text2}>{sp4.name}</Text>
              <Text style={styles.text1}>{sp4.location}</Text>
              {/* <Text style={styles.text1}>{Date}</Text>
          <Text style={styles.text1}>{Time}</Text> */}
            </View>
            <View style={styles.viewStyle3}>
              <Text style={styles.text3}>{sp4.price}</Text>
              <Text style={styles.text7}>CE COIN</Text>
              <View style={styles.ConButton}>
                <TouchableOpacity
                  style={styles.Conbutt}
                  onPress={() => {
                    actsend = sp4.name;
                    props.navigation.navigate("SpDetail", { actsend });
                  }}
                >
                  <View style={styles.Rowd}>
                    <Text style={styles.Buttontext2}>See More</Text>
                    <AntDesign name="caretright" style={styles.iconstyle} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}

        {sp5.name == "" ? (
          <View></View>
        ) : (
          <View style={styles.viewStyle1}>
            <View style={styles.viewStyle4}>
              <Image
                style={styles.image}
                source={{
                  uri: sp5.imgsrc,
                }}
              />
            </View>
            <View style={styles.viewStyle2}>
              <Text style={styles.text2}>{sp5.name}</Text>
              <Text style={styles.text1}>{sp5.location}</Text>
              {/* <Text style={styles.text1}>{Date}</Text>
          <Text style={styles.text1}>{Time}</Text> */}
            </View>
            <View style={styles.viewStyle3}>
              <Text style={styles.text3}>{sp5.price}</Text>
              <Text style={styles.text7}>CE COIN</Text>
              <View style={styles.ConButton}>
                <TouchableOpacity
                  style={styles.Conbutt}
                  onPress={() => {
                    actsend = sp5.name;
                    props.navigation.navigate("SpDetail", { actsend });
                  }}
                >
                  <View style={styles.Rowd}>
                    <Text style={styles.Buttontext2}>See More</Text>
                    <AntDesign name="caretright" style={styles.iconstyle} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}

        {sp6.name == "" ? (
          <View></View>
        ) : (
          <View style={styles.viewStyle1}>
            <View style={styles.viewStyle4}>
              <Image
                style={styles.image}
                source={{
                  uri: sp6.imgsrc,
                }}
              />
            </View>
            <View style={styles.viewStyle2}>
              <Text style={styles.text2}>{sp6.name}</Text>
              <Text style={styles.text1}>{sp6.location}</Text>
              {/* <Text style={styles.text1}>{Date}</Text>
          <Text style={styles.text1}>{Time}</Text> */}
            </View>
            <View style={styles.viewStyle3}>
              <Text style={styles.text3}>{sp6.price}</Text>
              <Text style={styles.text7}>CE COIN</Text>
              <View style={styles.ConButton}>
                <TouchableOpacity
                  style={styles.Conbutt}
                  onPress={() => {
                    actsend = sp6.name;
                    props.navigation.navigate("SpDetail", { actsend });
                  }}
                >
                  <View style={styles.Rowd}>
                    <Text style={styles.Buttontext2}>See More</Text>
                    <AntDesign name="caretright" style={styles.iconstyle} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}

        {sp7.name == "" ? (
          <View></View>
        ) : (
          <View style={styles.viewStyle1}>
            <View style={styles.viewStyle4}>
              <Image
                style={styles.image}
                source={{
                  uri: sp7.imgsrc,
                }}
              />
            </View>
            <View style={styles.viewStyle2}>
              <Text style={styles.text2}>{sp7.name}</Text>
              <Text style={styles.text1}>{sp7.location}</Text>
              {/* <Text style={styles.text1}>{Date}</Text>
          <Text style={styles.text1}>{Time}</Text> */}
            </View>
            <View style={styles.viewStyle3}>
              <Text style={styles.text3}>{sp7.price}</Text>
              <Text style={styles.text7}>CE COIN</Text>
              <View style={styles.ConButton}>
                <TouchableOpacity
                  style={styles.Conbutt}
                  onPress={() => {
                    actsend = sp7.name;
                    props.navigation.navigate("SpDetail", { actsend });
                  }}
                >
                  <View style={styles.Rowd}>
                    <Text style={styles.Buttontext2}>See More</Text>
                    <AntDesign name="caretright" style={styles.iconstyle} />
                  </View>
                </TouchableOpacity>
              </View>
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
  ModalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    elevation: 5,
  },
  viewStyle1: {
    height: 140,
    width: "95%",
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 6,
    elevation: 2,
    marginTop: 5,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  viewStyle2: {
    width: "37%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginRight: 2,
    marginLeft: 2,
  },
  viewStyle3: {
    width: "25%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
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

    borderRadius: 6,
  },

  Buttontext2: {
    fontSize: 14,
    marginTop: 8,
    marginBottom: 10,
    marginLeft: 15,

    color: "#fff",
    textAlign: "center",
    fontWeight: "500",
  },
  Conbutt: {
    backgroundColor: "#333333",
    width: 100,
    borderRadius: 6,
    marginBottom: 5,
    marginTop: 5,
    elevation: 5,
  },
  Canbutt: {
    backgroundColor: "#BBBBBB",
    width: 100,
    borderRadius: 6,
    marginBottom: 5,
    marginTop: 5,
    marginRight: 5,
    elevation: 2,
  },
  text2: {
    fontSize: 20,
    color: "#706F6F",
    fontWeight: "bold",
    marginBottom: 2,
  },
  text1: {
    fontSize: 14,
    color: "#9C9999",
    fontWeight: "400",
    marginLeft: 10,
  },
  text3: {
    fontSize: 36,
    color: "#5E5E5E",
    marginRight: 5,
    fontWeight: "bold",
    marginTop: 2,
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
  },
  text7: {
    fontSize: 15,
    color: "#5E5E5E",
    fontWeight: "500",
    marginBottom: 2,
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
  InputStyle: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 6,
    marginTop: 15,
    marginBottom: 15,
    paddingLeft: 10,
  },
  InputflexStyle: {
    width: "100%",
  },
  iconstyle: {
    fontSize: 12,
    alignSelf: "center",
    margin: 2,
    color: "#fff",
  },
});

export default Aclist;
