import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../../styles/colors";
import { useState } from "react";

export default function InputBox({ text, icon, Inputtype, secureText ,setUserdata }) { 

  return (
    <View style={style.inputBox}>
      <Image style={style.icon} source={icon} />
      <TextInput
        secureTextEntry={secureText}
        textContentType={Inputtype}
        style={style.inputField}
        placeholder={text}
        onChangeText={setUserdata}
      />
    </View>
  );
}

const style = StyleSheet.create({
  inputBox: {
    flexDirection: "row",
    backgroundColor: Colors.red100,
    margin: 5,
    height: 55,
    width: 300,
  },
  icon: {
    backgroundColor: Colors.red100,
    marginTop: 16,
    marginLeft: 10,
    
  },
  inputField: {
    margin: 5,
    width:250
  },
});
