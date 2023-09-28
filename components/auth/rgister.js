import { Alert, Image, StyleSheet, Text, TextInput, View } from "react-native";
import Buttonfill from "../ui/button2";
import { Colors } from "../../styles/colors";
import InputBox from "../ui/inputbox";
import { useForm, Controller } from "react-hook-form";
import { Formik } from "formik";
import { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { Connect, useDispatch, useSelector } from "react-redux";
import createuser, { create_user } from "../../redux/action/actionapi";

export default function RegisterComponent({changeScreen}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [blood_type, setBloodType] = useState("");
  const [address, setLocation] = useState("");

  const dispatch = useDispatch()

  const {createUserdata} = useSelector((state) => state.reducer);

  function registerUserHandler() {
    dispatch(createuser({name, email, password, phone, blood_type, address}))
    console.log('createUserdata',createUserdata)

    if(createUserdata === 201){
      Alert.alert('SUCCESS !' ,'ACOUNT CREADET PLEASE LOGIN')
      changeScreen()
    }
  }

  return (
    <Formik onSubmit={(values) => console.log("submitted", values)}>
      <View>
        <InputBox
          secureText={false}
          Inputtype="givenName"
          text="Name"
          icon={require("../../assets/icon/profile.png")}
          setUserdata={setName}
        />
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
        <InputBox
          secureText={false}
          Inputtype="telephoneNumber"
          text="Phone"
          icon={require("../../assets/icon/phone.png")}
          setUserdata={setPhone}
        />
        <InputBox
          secureText={false}
          Inputtype="none"
          text="Blood group"
          icon={require("../../assets/icon/drop.png")}
          setUserdata={setBloodType}
        />
        <InputBox
          secureText={false}
          Inputtype="location"
          text="location"
          icon={require("../../assets/icon/Vector.png")}
          setUserdata={setLocation}
        />
        <Buttonfill text="REGISTER" onPress={registerUserHandler} />
      </View>
    </Formik>
  );
}
