import { NativeModules } from "react-native";
import {
  RefreshControl,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import Buttonfill from "../../ui/button2";
import { Colors } from "../../../styles/colors";
import { useState } from "react";

export default function FinishScreen() {
  function handleRestart() {
    NativeModules.DevSettings.reload();
  }

  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <Image
          style={style.image}
          source={require("../../../assets/mobile.jpeg")}
        />
      </View>
      <View style={style.buttoncontainer}>
        <Buttonfill text="Finish" onPress={handleRestart} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 24,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    fontWeight: "500",
  },
  image: {
    width: 300,
    height: 300,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttoncontainer: {
    marginTop: 10,
    marginBottom: -10,
  },
});
