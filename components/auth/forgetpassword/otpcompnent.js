import { Formik } from "formik";
import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import { useState } from "react";
import Buttonfill from "../../ui/button2";
import { Colors } from "../../../styles/colors";
import PasswordChangesceen from "./passwordchange";

export default function OtpScreen({ setOtpScreenOpen }) {
  const [otp, setOtp] = useState([]);
  const [passwordScreen, setPasswordScreen] = useState(false);

  function setOtpnumber(data) {
    setOtp((current) => [...current, data]);
  }

  function submitForm() {
    console.log(otp.join(""));
    setPasswordScreen(true);
  }

  function ResendOTP() {
    setOtpScreenOpen(false);
  }

  return (
    <>
      {passwordScreen ? (
        <PasswordChangesceen />
      ) : (
        <Formik onSubmit={(values) => console.log("submitted", values)}>
          <View style={style.container}>
            <View style={style.inputBoxContainer}>
              <TextInput
                style={style.inputBox}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={setOtpnumber}
              />
              <TextInput
                style={style.inputBox}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={setOtpnumber}
              />
              <TextInput
                style={style.inputBox}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={setOtpnumber}
              />
              <TextInput
                style={style.inputBox}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={setOtpnumber}
              />
            </View>
            <Pressable style={style.textContainer} onPress={ResendOTP}>
              <Text style={style.text}>Resend Code 49 Sec</Text>
            </Pressable>
            <View style={style.buttoncontainer}>
              <Buttonfill text="VERYFY" onPress={submitForm} />
            </View>
          </View>
        </Formik>
      )}
    </>
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
  text: {
    margin: 10,
    textAlign: "right",
    paddingHorizontal: 10,
    color: Colors.red400,
    fontWeight: "400",
  },
  buttoncontainer: {
    marginTop: 10,
    marginBottom: -10,
  },
  inputBoxContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  inputBox: {
    backgroundColor: Colors.red100,
    margin: 3,
    width: 65,
    height: 65,
    borderRadius: 5,
    textAlign: "center",
    fontSize: 40,
    fontWeight: "400",
    color: Colors.red500,
  },
});
