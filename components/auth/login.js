import { Formik } from "formik";
import { Pressable, StyleSheet, Text, View } from "react-native";
import InputBox from "../ui/inputbox";
import { useState } from "react";
import Buttonfill from "../ui/button2";
import { Colors } from "../../styles/colors";

export default function LoginComponent({openForgetpassTab}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  function handleForm() {
    console.log(email, password);
  }
  
 

  return (
    <>
      <Formik onSubmit={(values) => console.log("submitted", values)}>
        <View style={style.container}>
          <InputBox
            secureText={false}
            Inputtype="emailAddress"
            text="Email"
            icon={require("../../assets/icon/mail.png")}
            setUserdata={setEmail}
          />
          <InputBox
            secureText={true}
            Inputtype="newPassword"
            text="password"
            icon={require("../../assets/icon/password.png")}
            setUserdata={setPassword}
          />
          <View style={style.buttoncontainer}>
            <Buttonfill text="LOG IN" onPress={handleForm} />
          </View>
        </View>
      </Formik>
      <View style={style.footer}>
        <Pressable onPress={openForgetpassTab}>
          <Text style={style.forgetpasswordText}>Forgot Password?</Text>
        </Pressable>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 24,
  },
  footer: {
    alignItems: "center",
  },
  forgetpasswordText: {
    color: Colors.red500,
    fontWeight: "500",
  },
  buttoncontainer:{
    marginTop:10,
    marginBottom:-10
  }
});
