import { Formik } from "formik";
import {  StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Buttonfill from "../../ui/button2";
import InputBox from "../../ui/inputbox";
import { Colors } from "../../../styles/colors";
import OtpScreen from "./otpcompnent";

export default function ForgetPasswordInput({ openForgetpassTab }) {
  const [email, setEmail] = useState("");
  const [otpScreenOpen , setOtpScreenOpen ] = useState(false)

  function handleForm() {
    console.log(email);
    setOtpScreenOpen(true)
  }

  if(otpScreenOpen){
    return <OtpScreen setOtpScreenOpen={setOtpScreenOpen}/>
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
    flexDirection:'row',
    justifyContent: "center",
    fontWeight: "500",
  },
  text: {
    margin:10,
    textAlign:'center',
    paddingHorizontal:10,
    color: Colors.red400,
    fontWeight:'400'
  },
  buttoncontainer: {
    marginTop: 10,
    marginBottom: -10,
  },
});
