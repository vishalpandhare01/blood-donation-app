import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import Buttonfill from "../ui/button2";
import { Colors } from "../../styles/colors";
import InputBox from "../ui/inputbox";
import { useForm, Controller } from "react-hook-form";
import { Formik } from "formik";
import { useState } from "react";
import {KeyboardAvoidingView} from 'react-native';

export default function RegisterComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [location, setLocation] = useState("");

  function handleForm() {
    console.log(name, email, password, phone, bloodType, location);
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
          <View></View>

          <Buttonfill text="REGISTER" onPress={handleForm} />
        </View>
      </Formik>
  );
}


