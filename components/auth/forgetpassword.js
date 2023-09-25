import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { Colors } from "../../styles/colors";
import ForgetPasswordInput from "./forgetpassword/forgetpasswordinput";
import { useState } from "react";

export default function ForgetPassword() {
  const [isOtpTabOpen, setIsOtpTabOpen] = useState(false);

  return (
    <>
      <KeyboardAvoidingView style={style.container} behavior="padding" enabled>
        <View style={style.container}>
          <View style={style.imageContainer}></View>
          <View style={style.inputBody}>
            <ForgetPasswordInput />
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 24,
  },
  imageContainer: {
    alignItems: "center",
    width: 201,
    height: 140,
  },
  heading: {
    textAlign: "center",
    fontSize: 24,
    color: Colors.red200,
    fontWeight: "500",
  },
  image: {
    width: 68,
    height: 102,
  },
  lastText: {
    // marginTop: 20,
  },
  inputBody: {
    height: 500,
  },
  footer: {
    flexDirection: "row",
    alignContent: "space-between",
  },
  footerText: {
    color: Colors.red200,
  },
  footerButton: {
    color: Colors.red500,
    fontWeight: "500",
  },
});
