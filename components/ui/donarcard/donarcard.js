import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Colors } from "../../../styles/colors";
import { useState } from "react";
import ButtonCallNow from "../profilebutton/callnow";
import ButtonRequiest from "../profilebutton/requist";
import GestureRecognizer from "react-native-swipe-gestures";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Linking } from "react-native";
export default function DonarCard() {
  const [userProfile, setuserProfile] = useState(false);
  const navigation = useNavigation();

  return (
    <>
      <Pressable onPress={() => setuserProfile(true)}>
        <View style={styles.container}>
          <Image
            style={styles.cardProfileimage}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg-5B4QzKAK0n161SAQG8HIKsMeMEbRE1FlQ&usqp=CAU",
            }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.textname}>Ismail Bhai</Text>
            <View style={{ flexDirection: "row", marginTop: 5 }}>
              <SimpleLineIcons
                name="location-pin"
                size={18}
                color={Colors.red400}
              />
              <Text style={styles.textLocation}>Ahemdabad , kdki</Text>
            </View>
          </View>
          {/* <View style={styles.iconImage}>
            <Image
              source={require("../../../assets/bloodgroup/Bpositive.png")}
            />
          </View> */}
        </View>
      </Pressable>
      <GestureRecognizer onSwipeDown={() => setuserProfile(false)}>
        <Modal animationType="slide" transparent={true} visible={userProfile}>
          <View style={styles.modalContainer}>
            <View style={styles.innerModalConatainer}>
              <View
                style={{
                  marginTop: -50,
                  borderWidth: 3,
                  borderRadius: 10,
                  borderColor: "#ffffff",
                }}
              >
                <Image
                  style={styles.image}
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg-5B4QzKAK0n161SAQG8HIKsMeMEbRE1FlQ&usqp=CAU",
                  }}
                />
              </View>
              <Text style={{ margin: 3, fontSize: 24 }}>Fahim Ekan</Text>
              <Text style={{ color: Colors.red400, margin: 3 }}>
                Chigong bangladesh
              </Text>
              <View style={styles.historyContainer}>
                <Text style={{ padding: 10, color: Colors.red300 }}>
                  6 Time Donated
                </Text>
                <Text style={{ padding: 10, color: Colors.red300 }}>
                  Blood Type AB+
                </Text>
              </View>
              <View style={styles.buttonContainer}>
                <ButtonCallNow
                  onPress={() => Linking.openURL(`tel:${8600244226}`)}
                >
                  Call now
                </ButtonCallNow>
                <ButtonRequiest
                  onPress={() => navigation.navigate("createRequiest")}
                >
                  Requist
                </ButtonRequiest>
              </View>
            </View>
          </View>
        </Modal>
      </GestureRecognizer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    margin: 15,
    padding: 10,
    borderRadius: 14,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  cardProfileimage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    margin: 3,
  },
  textContainer: {
    padding: 10,
    marginTop: 10,
  },
  textname: {
    fontWeight: "500",
    fontSize: 14,
    left: 8,
  },
  textLocation: {
    color: Colors.red400,
  },
  iconImage: {
    padding: 10,
    left: 50,
  },

  modalContainer: {
    height: "70%",
    width: "100%",
    marginTop: "auto",
    backgroundColor: "#ffffff",
    borderRadius: 24,
  },
  userDetial: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginTop: 10,
  },
  userDetialText1: {
    fontSize: 24,
    fontWeight: "500",
  },
  userDetialText: {
    color: Colors.red400,
  },
  historyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  innerModalConatainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
