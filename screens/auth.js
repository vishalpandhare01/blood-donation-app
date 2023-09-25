import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import RegisterComponent from "../components/auth/rgister";
import LoginComponent from "../components/auth/login";
import { useState } from "react";
import { Colors } from "../styles/colors";
import ForgetPassword from "../components/auth/forgetpassword";

export default function Authscreen({ isLogin }) {
  const [isRegister, setIsRegister] = useState(isLogin);

  function changeScreen() {
    isRegister ? setIsRegister(false) : setIsRegister(true);
  }

  const [isForgetPassword ,setForgetPassword] = useState(false)
  if(isForgetPassword){
    return <ForgetPassword/>
  }
  
  function openForgetpassTab(){
    setForgetPassword(true)
  }

  return (
    <>
      <KeyboardAvoidingView style={style.container} behavior="padding" enabled>
        <View style={style.container}>
          <View style={style.imageContainer}>
            <Image style={style.image} source={require("../assets/Logo.jpg")} />
            <Text style={style.heading}>Dare To Donate </Text>
          </View>
          <View style={style.inputBody}>
            {isRegister ? <LoginComponent openForgetpassTab={openForgetpassTab} /> : <RegisterComponent />}
          </View>
          <View style={style.lastText}>
            <View style={style.footer}>
              {isRegister ? (
                <>
                  <Text style={style.footerText}>Don't have an account? </Text>
                  <Pressable onPress={changeScreen}>
                    <Text style={style.footerButton}> Register Now.</Text>
                  </Pressable>
                </>
              ) : (
                <>
                  <Text style={style.footerText}>Already have an account?</Text>
                  <Pressable onPress={changeScreen}>
                    <Text style={style.footerButton}> Log In.</Text>
                  </Pressable>
                </>
              )}
            </View>
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
