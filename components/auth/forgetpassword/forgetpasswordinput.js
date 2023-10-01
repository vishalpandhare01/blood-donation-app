import { Formik } from "formik";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Buttonfill from "../../ui/button2";
import InputBox from "../../ui/inputbox";
import { Colors } from "../../../styles/colors";
import OtpScreen from "./otpcompnent";
import { useDispatch, useSelector } from "react-redux";
import { sendOTPapi } from "../../../redux/action/actionapi";
import * as SecureStore from 'expo-secure-store';

export default function ForgetPasswordInput({ openForgetpassTab }) {
  const [email, setEmail] = useState("");
  const [otpScreenOpen, setOtpScreenOpen] = useState(false);

  const dispatch = useDispatch();
  const { sendOTPdata } = useSelector((state) => state.reducer);

  function handleForm() {
    dispatch(sendOTPapi({ email }));
    console.log(sendOTPdata);
    if (sendOTPdata.status === 200) {
      setOtpScreenOpen(true);
    }
  }
  
  if (otpScreenOpen) {
    return <OtpScreen setOtpScreenOpen={setOtpScreenOpen} email={email} />;
  }

  return (
    <>
      <Formik onSubmit={(values) => console.log("submitted", values)}>
        <View style={style.container}>
          <InputBox
            secureText={false}
            Inputtype="emailAddress"
            text="Email"
            icon={require("../../../assets/icon/mail.png")}
            setUserdata={setEmail}
          />
          <View style={style.textContainer}>
            <Text style={style.text}>
              Your password reset will be send in your registered email address.
            </Text>
          </View>
          <View style={style.buttoncontainer}>
            <Buttonfill text="SEND" onPress={handleForm} />
          </View>
        </View>
      </Formik>
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
    justifyContent: "center",
    fontWeight: "500",
  },
  text: {
    margin: 10,
    textAlign: "center",
    paddingHorizontal: 10,
    color: Colors.red400,
    fontWeight: "400",
  },
  buttoncontainer: {
    marginTop: 10,
    marginBottom: -10,
  },
});
