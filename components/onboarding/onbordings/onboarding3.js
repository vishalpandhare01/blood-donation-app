import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Colors } from "../../../styles/colors";
import ButtonUnfill from "../../ui/button1";
import Buttonfill from "../../ui/button2";
import { useState } from "react";
import Authscreen from "../../../screens/auth";

export default function OnbordingComponent3() {
  const [authsceen ,setAuthScreen] = useState(false)
  const [isLogin ,setIsLogin] = useState(false)
  
  function LoginScreenHndler(){
    setAuthScreen(true)
    setIsLogin(true)
  }
  
  function RegisterScreenHndler(){
    setAuthScreen(true)
  }

  if(authsceen){
    return <Authscreen isLogin={isLogin} />
  }else{
    return (
      <>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require("../../../assets/Logo.jpg")}
          />
          <Text style={styles.heading}>Dare To Donate</Text>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              You can donate for ones in need and request blood if you need.
            </Text>
          </View>
          <ButtonUnfill onPress={LoginScreenHndler} text="LOG IN" />
          <Buttonfill onPress={RegisterScreenHndler} text="REGISTER"/> 
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    textAlign: "center",
    fontSize: 24,
    margin: 8,
    color: Colors.red200,
    fontWeight: "500",
  },
  textContainer: {
    width: 374,
    height: 109,
  },
  text: {
    textAlign: "center",
    margin: 5,
    fontSize: 20,
    padding: 5,
    color: Colors.red200,
  },
  image: {
    width: 125,
    height: 187,
    padding: 8,
    margin: 8,
  },
});
