import { Formik } from "formik";
import InputBox from "../../ui/inputbox";
import Buttonfill from "../../ui/button2";
import { Colors } from "../../../styles/colors";
import { useState } from "react";
import FinishScreen from "./finish";
import { StyleSheet, Text, View } from "react-native";
import {useDispatch,useSelector} from 'react-redux'
import { passwordUpdateapi } from "../../../redux/action/actionapi";
import * as SecureStore from 'expo-secure-store';

export default function PasswordChangesceen(){
const [loginPage ,setLoginPage] = useState(false)
const [password,setPasseword] = useState("")
const [password2,setPasseword2] = useState("")

const dispatch = useDispatch()
const { passwordUpdateData } = useSelector((state) => state.reducer);
   async function handlesubmitForm(){
      if(password === password2){
        const userId = await SecureStore.getItemAsync('userId')
        dispatch(passwordUpdateapi({password,userId}))
        if(passwordUpdateData.status === 200){
          setLoginPage(true)
          await SecureStore.deleteItemAsync('userId')
        }
      }
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
            setUserdata={setPasseword}
          />
          <InputBox
            secureText={false}
            Inputtype="newPassword"
            text="password"
            icon={require("../../../assets/icon/password.png")}
            setUserdata={setPasseword2}
          />
      </View>
      <Text style={{textAlign:'center'}}>{password === password2 ?'':'Password Not Matched'}</Text>
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