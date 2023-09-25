import { Formik } from "formik";
import InputBox from "../../ui/inputbox";
import Buttonfill from "../../ui/button2";
import { Colors } from "../../../styles/colors";
import { useState } from "react";
import FinishScreen from "./finish";
import { StyleSheet, View } from "react-native";

export default function PasswordChangesceen(){
const [loginPage ,setLoginPage] = useState(false)

    function handlesubmitForm(){
        setLoginPage(true)
    }

    return loginPage ? <FinishScreen/> :
    <Formik onSubmit={(values) => console.log("submitted", values)}>
    <View style={style.container}>
      <View>
      <InputBox
            secureText={true}
            Inputtype="newPassword"
            text="password"
            icon={require("../../../assets/icon/password.png")}
            // setUserdata={setPassword}
          />
          <InputBox
            secureText={false}
            Inputtype="newPassword"
            text="password"
            icon={require("../../../assets/icon/password.png")}
            // setUserdata={setPhone}
          />
      </View>
      <View style={style.buttoncontainer}>
        <Buttonfill text="SUBMIT" onPress={handlesubmitForm} />
      </View>
    </View>
  </Formik>
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