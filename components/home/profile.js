import { Image, NativeModules, Pressable, StyleSheet, Text, View } from "react-native";
import ButtonCallNow from "../ui/profilebutton/callnow";
import ButtonRequiest from "../ui/profilebutton/requist";
import { Colors } from "../../styles/colors";
import { Ionicons, Feather, FontAwesome5 } from "@expo/vector-icons";
import * as SecureStore from "expo-secure-store";

export default function ProfileComponent() {
  async function logout() {
    console.log('logout')
    await SecureStore.deleteItemAsync("secure_token");
    NativeModules.DevSettings.reload();
  }

  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg-5B4QzKAK0n161SAQG8HIKsMeMEbRE1FlQ&usqp=CAU",
          }}
        />
        <Text style={{ margin: 3, fontSize: 24 }}>Fahim Ekan</Text>
        <Text style={{ color: Colors.red400, margin: 3 }}>
          Chigong bangladesh
        </Text>
        <View style={styles.buttonContainer}>
          <ButtonCallNow>Call now</ButtonCallNow>
          <ButtonRequiest>Requist</ButtonRequiest>
        </View>
        <View style={styles.userDetialContainer}>
          <View style={styles.userDetial}>
            <Text style={styles.userDetialText1}>A+</Text>
            <Text style={styles.userDetialText}>Blood Type</Text>
          </View>
          <View style={styles.userDetial}>
            <Text style={styles.userDetialText1}>05</Text>
            <Text style={styles.userDetialText}>Donated</Text>
          </View>
          <View style={styles.userDetial}>
            <Text style={styles.userDetialText1}>02</Text>
            <Text style={styles.userDetialText}>Requisted</Text>
          </View>
        </View>
        <View style={styles.settingContainer}>
          <View style={styles.settingContainerRow}>
            <Feather
              style={{ marginRight: 5 }}
              name="calendar"
              size={24}
              color="black"
            />
            <Text style={styles.settingContainerText}>
              Available for donate
            </Text>
          </View>
        </View>
        <View style={styles.settingContainer}>
          <View style={styles.settingContainerRow}>
            <Feather
              style={{ marginRight: 5 }}
              name="message-circle"
              size={24}
              color="black"
            />
            <Text style={styles.settingContainerText}>Invite a friend</Text>
          </View>
        </View>
        <View style={styles.settingContainer}>
          <View style={styles.settingContainerRow}>
            <Ionicons
              style={{ marginRight: 5 }}
              name="ios-information-circle-outline"
              size={24}
              color="black"
            />
            <Text style={styles.settingContainerText}>Get Help</Text>
          </View>
        </View>
        <View style={styles.settingContainer}>
          <Pressable onPress={()=>logout()}>
            <View style={styles.settingContainerRow}>
              <FontAwesome5
                style={{ marginRight: 5 }}
                name="sign-out-alt"
                size={24}
                color="black"
              />
              <Text style={styles.settingContainerText}>Sign out</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userDetialContainer: {
    flexDirection: "row",
  },
  userDetial: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginTop: 10,
    elevation: 3,
  },
  userDetialText1: {
    fontSize: 24,
    fontWeight: "500",
  },
  userDetialText: {
    color: Colors.red400,
  },
  settingContainer: {
    marginTop: 5,
  },
  settingContainerRow: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    padding: 10,
    width: 300,
    elevation: 3,
  },
  settingContainerText: {
    color: Colors.red400,
  },
});
