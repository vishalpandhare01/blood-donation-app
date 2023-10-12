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
import { useEffect, useState } from "react";
import ButtonCallNow from "../profilebutton/callnow";
import ButtonRequiest from "../profilebutton/requist";
import GestureRecognizer from "react-native-swipe-gestures";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Linking } from "react-native";
export default function DonarCard({data}) {
  const [userProfile, setuserProfile] = useState(false);
  const [userData, setUserData] = useState({});

  const navigation = useNavigation();
  useEffect(()=>{
    setUserData(data)
    console.log(data)
  },[])
  return (
    <>
      <Pressable onPress={() => setuserProfile(true)}>
        <View style={styles.container}>
          <Image
            style={styles.cardProfileimage}
            source={{
              uri:userData.profile_pic,
            }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.textname}>{userData.name}</Text>
            <View style={{ flexDirection: "row", marginTop: 5 }}>
              <SimpleLineIcons
                name="location-pin"
                size={18}
                color={Colors.red400}
              />
              <Text style={styles.textLocation}>{userData.address}</Text>
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
                    uri:userData.profile_pic,
                  }}
                />
              </View>
              <Text style={{ margin: 3, fontSize: 24 }}>{userData.name}</Text>
              <Text style={{ color: Colors.red400, margin: 3 }}>
               {userData.address}
              </Text>
              <View style={styles.historyContainer}>
                <Text style={{ padding: 10, color: Colors.red300 }}>
                  {/* {userData.donated.length} Time Donated */}

                </Text>
                <Text style={{ padding: 10, color: Colors.red300 }}>
                  Blood Type {userData.blood_type}
                </Text>
              </View>
              <View style={styles.buttonContainer}>
                <ButtonCallNow
                  onPress={() => Linking.openURL(`tel:${userData.phone}`)}
                >
                  Call now
                </ButtonCallNow>
                <ButtonRequiest
                  onPress={() => navigation.navigate("createRequiest")}
                  //userData.id
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
