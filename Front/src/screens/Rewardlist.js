import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  Modal,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
// import { response } from "express";
const Relist = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const Rewardname = "Mouse Gaming";
  const Price = "10";
  const Left = "9";
  const [password, setpassword] = useState();
  const [rename, setrename] = useState();
  const [rew0, setrew0] = useState({
    rewardname: "",
    imgsrc: "",
    price: "",
    rewardleft: "",
  });

  let pas = "";
  let rena = "";
  const [rew1, setrew1] = useState({
    rewardname: "",
    imgsrc: "",
    price: "",
    rewardleft: "",
  });
  const [rew2, setrew2] = useState({
    rewardname: "",
    imgsrc: "",
    price: "",
    rewardleft: "",
  });
  const [rew3, setrew3] = useState({
    rewardname: "",
    imgsrc: "",
    price: "",
    rewardleft: "",
  });
  const [rew4, setrew4] = useState({
    rewardname: "",
    imgsrc: "",
    price: "",
    rewardleft: "",
  });
  const [rew5, setrew5] = useState({
    rewardname: "",
    imgsrc: "",
    price: "",
    rewardleft: "",
  });
  const [rew6, setrew6] = useState({
    rewardname: "",
    imgsrc: "",
    price: "",
    rewardleft: "",
  });
  const [rew7, setrew7] = useState({
    rewardname: "",
    imgsrc: "",
    price: "",
    rewardleft: "",
  });

  const redeemReward = async () => {
    const token = await AsyncStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .post(
        "https://cecoinserver.ngrok.io/redeemReward",
        { password: password, rewardname: rena },
        config
      )
      .then((response) => {
        Alert.alert("Result:", response.data.message, [{ text: "Ok" }]);
      });
  };

  const showReward = async () => {
    const token = await AsyncStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get("https://cecoinserver.ngrok.io/showReward", config)
      .then((ret) => {
        if (ret.data.length == 1) {
          setrew0({
            rewardname: ret.data[0].rewardname,
            imgsrc: ret.data[0].imgsrc,
            price: ret.data[0].price,
            rewardleft: ret.data[0].rewardleft,
          });
        } else if (ret.data.length == 2) {
          setrew0({
            rewardname: ret.data[0].rewardname,
            imgsrc: ret.data[0].imgsrc,
            price: ret.data[0].price,
            rewardleft: ret.data[0].rewardleft,
          });
          setrew1({
            rewardname: ret.data[1].rewardname,
            imgsrc: ret.data[1].imgsrc,
            price: ret.data[1].price,
            rewardleft: ret.data[1].rewardleft,
          });
        } else if (ret.data.length == 3) {
          setrew0({
            rewardname: ret.data[0].rewardname,
            imgsrc: ret.data[0].imgsrc,
            price: ret.data[0].price,
            rewardleft: ret.data[0].rewardleft,
          });
          setrew1({
            rewardname: ret.data[1].rewardname,
            imgsrc: ret.data[1].imgsrc,
            price: ret.data[1].price,
            rewardleft: ret.data[1].rewardleft,
          });
          setrew2({
            rewardname: ret.data[2].rewardname,
            imgsrc: ret.data[2].imgsrc,
            price: ret.data[2].price,
            rewardleft: ret.data[2].rewardleft,
          });
        } else if (ret.data.length == 4) {
          setrew0({
            rewardname: ret.data[0].rewardname,
            imgsrc: ret.data[0].imgsrc,
            price: ret.data[0].price,
            rewardleft: ret.data[0].rewardleft,
          });
          setrew1({
            rewardname: ret.data[1].rewardname,
            imgsrc: ret.data[1].imgsrc,
            price: ret.data[1].price,
            rewardleft: ret.data[1].rewardleft,
          });
          setrew2({
            rewardname: ret.data[2].rewardname,
            imgsrc: ret.data[2].imgsrc,
            price: ret.data[2].price,
            rewardleft: ret.data[2].rewardleft,
          });
          setrew3({
            rewardname: ret.data[3].rewardname,
            imgsrc: ret.data[3].imgsrc,
            price: ret.data[3].price,
            rewardleft: ret.data[3].rewardleft,
          });
        } else if (ret.data.length == 5) {
          setrew0({
            rewardname: ret.data[0].rewardname,
            imgsrc: ret.data[0].imgsrc,
            price: ret.data[0].price,
            rewardleft: ret.data[0].rewardleft,
          });
          setrew1({
            rewardname: ret.data[1].rewardname,
            imgsrc: ret.data[1].imgsrc,
            price: ret.data[1].price,
            rewardleft: ret.data[1].rewardleft,
          });
          setrew2({
            rewardname: ret.data[2].rewardname,
            imgsrc: ret.data[2].imgsrc,
            price: ret.data[2].price,
            rewardleft: ret.data[2].rewardleft,
          });
          setrew3({
            rewardname: ret.data[3].rewardname,
            imgsrc: ret.data[3].imgsrc,
            price: ret.data[3].price,
            rewardleft: ret.data[3].rewardleft,
          });
          setrew4({
            rewardname: ret.data[4].rewardname,
            imgsrc: ret.data[4].imgsrc,
            price: ret.data[4].price,
            rewardleft: ret.data[4].rewardleft,
          });
        } else if (ret.data.length == 6) {
          setrew0({
            rewardname: ret.data[0].rewardname,
            imgsrc: ret.data[0].imgsrc,
            price: ret.data[0].price,
            rewardleft: ret.data[0].rewardleft,
          });
          setrew1({
            rewardname: ret.data[1].rewardname,
            imgsrc: ret.data[1].imgsrc,
            price: ret.data[1].price,
            rewardleft: ret.data[1].rewardleft,
          });
          setrew2({
            rewardname: ret.data[2].rewardname,
            imgsrc: ret.data[2].imgsrc,
            price: ret.data[2].price,
            rewardleft: ret.data[2].rewardleft,
          });
          setrew3({
            rewardname: ret.data[3].rewardname,
            imgsrc: ret.data[3].imgsrc,
            price: ret.data[3].price,
            rewardleft: ret.data[3].rewardleft,
          });
          setrew4({
            rewardname: ret.data[4].rewardname,
            imgsrc: ret.data[4].imgsrc,
            price: ret.data[4].price,
            rewardleft: ret.data[4].rewardleft,
          });
          setrew5({
            rewardname: ret.data[5].rewardname,
            imgsrc: ret.data[5].imgsrc,
            price: ret.data[5].price,
            rewardleft: ret.data[5].rewardleft,
          });
        } else if (ret.data.length == 7) {
          setrew0({
            rewardname: ret.data[0].rewardname,
            imgsrc: ret.data[0].imgsrc,
            price: ret.data[0].price,
            rewardleft: ret.data[0].rewardleft,
          });
          setrew1({
            rewardname: ret.data[1].rewardname,
            imgsrc: ret.data[1].imgsrc,
            price: ret.data[1].price,
            rewardleft: ret.data[1].rewardleft,
          });
          setrew2({
            rewardname: ret.data[2].rewardname,
            imgsrc: ret.data[2].imgsrc,
            price: ret.data[2].price,
            rewardleft: ret.data[2].rewardleft,
          });
          setrew3({
            rewardname: ret.data[3].rewardname,
            imgsrc: ret.data[3].imgsrc,
            price: ret.data[3].price,
            rewardleft: ret.data[3].rewardleft,
          });
          setrew4({
            rewardname: ret.data[4].rewardname,
            imgsrc: ret.data[4].imgsrc,
            price: ret.data[4].price,
            rewardleft: ret.data[4].rewardleft,
          });
          setrew5({
            rewardname: ret.data[5].rewardname,
            imgsrc: ret.data[5].imgsrc,
            price: ret.data[5].price,
            rewardleft: ret.data[5].rewardleft,
          });
          setrew6({
            rewardname: ret.data[6].rewardname,
            imgsrc: ret.data[6].imgsrc,
            price: ret.data[6].price,
            rewardleft: ret.data[6].rewardleft,
          });
        } else if (ret.data.length == 8) {
          setrew0({
            rewardname: ret.data[0].rewardname,
            imgsrc: ret.data[0].imgsrc,
            price: ret.data[0].price,
            rewardleft: ret.data[0].rewardleft,
          });
          setrew1({
            rewardname: ret.data[1].rewardname,
            imgsrc: ret.data[1].imgsrc,
            price: ret.data[1].price,
            rewardleft: ret.data[1].rewardleft,
          });
          setrew2({
            rewardname: ret.data[2].rewardname,
            imgsrc: ret.data[2].imgsrc,
            price: ret.data[2].price,
            rewardleft: ret.data[2].rewardleft,
          });
          setrew3({
            rewardname: ret.data[3].rewardname,
            imgsrc: ret.data[3].imgsrc,
            price: ret.data[3].price,
            rewardleft: ret.data[3].rewardleft,
          });
          setrew4({
            rewardname: ret.data[4].rewardname,
            imgsrc: ret.data[4].imgsrc,
            price: ret.data[4].price,
            rewardleft: ret.data[4].rewardleft,
          });
          setrew5({
            rewardname: ret.data[5].rewardname,
            imgsrc: ret.data[5].imgsrc,
            price: ret.data[5].price,
            rewardleft: ret.data[5].rewardleft,
          });
          setrew6({
            rewardname: ret.data[6].rewardname,
            imgsrc: ret.data[6].imgsrc,
            price: ret.data[6].price,
            rewardleft: ret.data[6].rewardleft,
          });
          setrew7({
            rewardname: ret.data[7].rewardname,
            imgsrc: ret.data[7].imgsrc,
            price: ret.data[7].price,
            rewardleft: ret.data[7].rewardleft,
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
          <Text style={styles.text5}>Reward</Text>
        </View>

        {rew0.rewardname == "" ? (
          <View></View>
        ) : (
          <View style={styles.viewStyle1}>
            <View style={styles.viewStyle4}>
              <Image style={styles.image} source={{ uri: rew0.imgsrc }} />
            </View>
            <View style={styles.viewStyle2}>
              <Text style={styles.text7}>{rew0.rewardname}</Text>
              <Text style={styles.text6}>{rew0.price}</Text>
              <Text style={styles.text1}>CE COIN</Text>
            </View>
            <View style={styles.viewStyle3}>
              <View style={styles.viewStyle5}>
                <Text style={styles.text4}>Reward Left</Text>
                <Text style={styles.text3}>{rew0.rewardleft}</Text>
              </View>

              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.ModalView}>
                    <Text style={styles.text3}>Enter Password</Text>
                    <View style={styles.InputflexStyle}>
                      <TextInput
                        style={styles.InputStyle}
                        placeholder="Enter Password"
                        value={password}
                        secureTextEntry={true}
                        onChangeText={() => {
                          setpassword(password);
                        }}
                      />
                    </View>
                    <View style={styles.Rowd}>
                      <TouchableOpacity
                        style={[styles.Canbutt]}
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <Text style={styles.Buttontext2}>Cancle</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[styles.Conbutt]}
                        onPress={async () => {
                          await setrename(rew0.rewardname);
                          redeemReward();
                          setModalVisible(!modalVisible);
                        }}
                      >
                        <Text style={styles.Buttontext2}>Confirm</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
              <TouchableOpacity
                style={[styles.buttonStyle2]}
                onPress={() => setModalVisible(true)}
              >
                <Text style={styles.Buttontext2}>Redeem</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {rew1.rewardname == "" ? (
          <View></View>
        ) : (
          <View style={styles.viewStyle1}>
            <View style={styles.viewStyle4}>
              <Image style={styles.image} source={{ uri: rew1.imgsrc }} />
            </View>
            <View style={styles.viewStyle2}>
              <Text style={styles.text7}>{rew1.rewardname}</Text>
              <Text style={styles.text6}>{rew1.price}</Text>
              <Text style={styles.text1}>CE COIN</Text>
            </View>
            <View style={styles.viewStyle3}>
              <View style={styles.viewStyle5}>
                <Text style={styles.text4}>Reward Left</Text>
                <Text style={styles.text3}>{rew1.rewardleft}</Text>
              </View>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.ModalView}>
                    <Text style={styles.text3}>Enter Password</Text>
                    <View style={styles.InputflexStyle}>
                      <TextInput
                        style={styles.InputStyle}
                        placeholder="Enter Password"
                        value={password}
                        secureTextEntry={true}
                        onChangeText={(password) => {
                          setpassword(password);
                        }}
                      />
                    </View>
                    <View style={styles.Rowd}>
                      <TouchableOpacity
                        style={[styles.Canbutt]}
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <Text style={styles.Buttontext2}>Cancle</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[styles.Conbutt]}
                        onPress={async () => {
                          rena = rew1.rewardname;
                          await console.log(rena);
                          await redeemReward();
                          setModalVisible(!modalVisible);
                        }}
                      >
                        <Text style={styles.Buttontext2}>Confirm</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
              <TouchableOpacity
                style={[styles.buttonStyle2]}
                onPress={() => setModalVisible(true)}
              >
                <Text style={styles.Buttontext2}>Redeem</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {rew2.rewardname == "" ? (
          <View></View>
        ) : (
          <View style={styles.viewStyle1}>
            <View style={styles.viewStyle4}>
              <Image style={styles.image} source={{ uri: rew2.imgsrc }} />
            </View>
            <View style={styles.viewStyle2}>
              <Text style={styles.text7}>{rew2.rewardname}</Text>
              <Text style={styles.text6}>{rew2.price}</Text>
              <Text style={styles.text1}>CE COIN</Text>
            </View>
            <View style={styles.viewStyle3}>
              <View style={styles.viewStyle5}>
                <Text style={styles.text4}>Reward Left</Text>
                <Text style={styles.text3}>{rew2.rewardleft}</Text>
              </View>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.ModalView}>
                    <Text style={styles.text3}>Enter Password</Text>
                    <View style={styles.InputflexStyle}>
                      <TextInput
                        style={styles.InputStyle}
                        
                        
                        placeholder="Enter Password"
                        secureTextEntry={true}
                        onChangeText={() => {
                          setpassword(password);
                        }}
                      />
                    </View>
                    <View style={styles.Rowd}>
                      <TouchableOpacity
                        style={[styles.Canbutt]}
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <Text style={styles.Buttontext2}>Cancle</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[styles.Conbutt]}
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <Text style={styles.Buttontext2}>Confirm</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
              <TouchableOpacity
                style={[styles.buttonStyle2]}
                onPress={() => setModalVisible(true)}
              >
                <Text style={styles.Buttontext2}>Redeem</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {rew3.rewardname == "" ? (
          <View></View>
        ) : (
          <View style={styles.viewStyle1}>
            <View style={styles.viewStyle4}>
              <Image style={styles.image} source={{ uri: rew2.imgsrc }} />
            </View>
            <View style={styles.viewStyle2}>
              <Text style={styles.text7}>{rew3.rewardname}</Text>
              <Text style={styles.text6}>{rew3.price}</Text>
              <Text style={styles.text1}>CE COIN</Text>
            </View>
            <View style={styles.viewStyle3}>
              <View style={styles.viewStyle5}>
                <Text style={styles.text4}>Reward Left</Text>
                <Text style={styles.text3}>{rew3.rewardleft}</Text>
              </View>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.ModalView}>
                    <Text style={styles.text3}>Enter Password</Text>
                    <View style={styles.InputflexStyle}>
                      <TextInput
                        style={styles.InputStyle}
                        placeholder="Enter Password"
                        secureTextEntry={true}
                        onChangeText={() => {
                          setpassword(password);
                        }}
                      />
                    </View>
                    <View style={styles.Rowd}>
                      <TouchableOpacity
                        style={[styles.Canbutt]}
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <Text style={styles.Buttontext2}>Cancle</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[styles.Conbutt]}
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <Text style={styles.Buttontext2}>Confirm</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
              <TouchableOpacity
                style={[styles.buttonStyle2]}
                onPress={() => setModalVisible(true)}
              >
                <Text style={styles.Buttontext2}>Redeem</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {rew4.rewardname == "" ? (
          <View></View>
        ) : (
          <View style={styles.viewStyle1}>
            <View style={styles.viewStyle4}>
              <Image style={styles.image} source={{ uri: rew2.imgsrc }} />
            </View>
            <View style={styles.viewStyle2}>
              <Text style={styles.text7}>{rew4.rewardname}</Text>
              <Text style={styles.text6}>{rew4.price}</Text>
              <Text style={styles.text1}>CE COIN</Text>
            </View>
            <View style={styles.viewStyle3}>
              <View style={styles.viewStyle5}>
                <Text style={styles.text4}>Reward Left</Text>
                <Text style={styles.text3}>{rew4.rewardleft}</Text>
              </View>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.ModalView}>
                    <Text style={styles.text3}>Enter Password</Text>
                    <View style={styles.InputflexStyle}>
                      <TextInput
                        style={styles.InputStyle}
                        placeholder="Enter Password"
                        secureTextEntry={true}
                        onChangeText={() => {
                          setpassword(password);
                        }}
                      />
                    </View>
                    <View style={styles.Rowd}>
                      <TouchableOpacity
                        style={[styles.Canbutt]}
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <Text style={styles.Buttontext2}>Cancle</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[styles.Conbutt]}
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <Text style={styles.Buttontext2}>Confirm</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
              <TouchableOpacity
                style={[styles.buttonStyle2]}
                onPress={() => setModalVisible(true)}
              >
                <Text style={styles.Buttontext2}>Redeem</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {rew5.rewardname == "" ? (
          <View></View>
        ) : (
          <View style={styles.viewStyle1}>
            <View style={styles.viewStyle4}>
              <Image style={styles.image} source={{ uri: rew2.imgsrc }} />
            </View>
            <View style={styles.viewStyle2}>
              <Text style={styles.text7}>{rew5.rewardname}</Text>
              <Text style={styles.text6}>{rew5.price}</Text>
              <Text style={styles.text1}>CE COIN</Text>
            </View>
            <View style={styles.viewStyle3}>
              <View style={styles.viewStyle5}>
                <Text style={styles.text4}>Reward Left</Text>
                <Text style={styles.text3}>{rew5.rewardleft}</Text>
              </View>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.ModalView}>
                    <Text style={styles.text3}>Enter Password</Text>
                    <View style={styles.InputflexStyle}>
                      <TextInput
                        style={styles.InputStyle}
                        placeholder="Enter Password"
                        secureTextEntry={true}
                        onChangeText={() => {
                          setpassword(password);
                        }}
                      />
                    </View>
                    <View style={styles.Rowd}>
                      <TouchableOpacity
                        style={[styles.Canbutt]}
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <Text style={styles.Buttontext2}>Cancle</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[styles.Conbutt]}
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <Text style={styles.Buttontext2}>Confirm</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
              <TouchableOpacity
                style={[styles.buttonStyle2]}
                onPress={() => setModalVisible(true)}
              >
                <Text style={styles.Buttontext2}>Redeem</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {rew6.rewardname == "" ? (
          <View></View>
        ) : (
          <View style={styles.viewStyle1}>
            <View style={styles.viewStyle4}>
              <Image style={styles.image} source={{ uri: rew2.imgsrc }} />
            </View>
            <View style={styles.viewStyle2}>
              <Text style={styles.text7}>{rew6.rewardname}</Text>
              <Text style={styles.text6}>{rew6.price}</Text>
              <Text style={styles.text1}>CE COIN</Text>
            </View>
            <View style={styles.viewStyle3}>
              <View style={styles.viewStyle5}>
                <Text style={styles.text4}>Reward Left</Text>
                <Text style={styles.text3}>{rew6.rewardleft}</Text>
              </View>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.ModalView}>
                    <Text style={styles.text3}>Enter Password</Text>
                    <View style={styles.InputflexStyle}>
                      <TextInput
                        style={styles.InputStyle}
                        placeholder="Enter Password"
                        secureTextEntry={true}
                        onChangeText={() => {
                          setpassword(password);
                        }}
                      />
                    </View>
                    <View style={styles.Rowd}>
                      <TouchableOpacity
                        style={[styles.Canbutt]}
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <Text style={styles.Buttontext2}>Cancle</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[styles.Conbutt]}
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <Text style={styles.Buttontext2}>Confirm</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
              <TouchableOpacity
                style={[styles.buttonStyle2]}
                onPress={() => setModalVisible(true)}
              >
                <Text style={styles.Buttontext2}>Redeem</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {rew7.rewardname == "" ? (
          <View></View>
        ) : (
          <View style={styles.viewStyle1}>
            <View style={styles.viewStyle4}>
              <Image style={styles.image} source={{ uri: rew2.imgsrc }} />
            </View>
            <View style={styles.viewStyle2}>
              <Text style={styles.text7}>{rew7.rewardname}</Text>
              <Text style={styles.text6}>{rew7.price}</Text>
              <Text style={styles.text1}>CE COIN</Text>
            </View>
            <View style={styles.viewStyle3}>
              <View style={styles.viewStyle5}>
                <Text style={styles.text4}>Reward Left</Text>
                <Text style={styles.text3}>{rew7.rewardleft}</Text>
              </View>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.ModalView}>
                    <Text style={styles.text3}>Enter Password</Text>
                    <View style={styles.InputflexStyle}>
                      <TextInput
                        style={styles.InputStyle}
                        placeholder="Enter Password"
                        secureTextEntry={true}
                        onChangeText={() => {
                          setpassword(password);
                        }}
                      />
                    </View>
                    <View style={styles.Rowd}>
                      <TouchableOpacity
                        style={[styles.Canbutt]}
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <Text style={styles.Buttontext2}>Cancle</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[styles.Conbutt]}
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <Text style={styles.Buttontext2}>Confirm</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
              <TouchableOpacity
                style={[styles.buttonStyle2]}
                onPress={() => setModalVisible(true)}
              >
                <Text style={styles.Buttontext2}>Redeem</Text>
              </TouchableOpacity>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    alignItems: "center",
    justifyContent: "center",
    marginRight: 2,
    marginLeft: 2,
  },
  viewStyle3: {
    width: "25%",
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
    elevation: 2,
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
  ModalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  Conbutt: {
    backgroundColor: "#FF3333",
    width: 100,
    borderRadius: 6,
    marginBottom: 5,
    marginTop: 5,
    marginRight: 5,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    shadowRadius: 1,
    shadowOffset: { width: 2, height: 2 },
  },
  Canbutt: {
    backgroundColor: "#BBBBBB",
    width: 100,
    borderRadius: 6,
    marginBottom: 5,
    marginTop: 5,
    marginRight: 5,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    shadowRadius: 1,
    shadowOffset: { width: 2, height: 2 },
  },
  InputStyle: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 6,
    marginTop: 15,
    marginBottom: 15,
    paddingLeft: 10,
    // paddingRight:50
  },
  InputflexStyle: {
    width: 200,
  },
});

export default Relist;
