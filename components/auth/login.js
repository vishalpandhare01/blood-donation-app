import { Formik } from "formik";
import { Pressable, StyleSheet, Text, View } from "react-native";
import InputBox from "../ui/inputbox";
import { useState } from "react";
import Buttonfill from "../ui/button2";
import { Colors } from "../../styles/colors";
import { useDispatch, useSelector } from "react-redux";
import {loginuser} from "../../redux/action/actionapi";
import * as SecureStore from 'expo-secure-store';
import {useNavigation} from '@react-navigation/native'

export default function LoginComponent({ openForgetpassTab ,setMainScreen}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const {loginuserData} = useSelector((state) => state.reducer);
  const navigation = useNavigation()

 async function  handleForm() {
    dispatch(loginuser({ email, password }));
    if(loginuserData.status === 200){
     await  SecureStore.setItemAsync('secure_token',loginuserData.data.token);
      console.log('redirect to login screen');
      setMainScreen(true)
    }
  }


  return (
    <>
      <Formik >
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
  buttoncontainer: {
    marginTop: 10,
    marginBottom: -10,
  },
});
