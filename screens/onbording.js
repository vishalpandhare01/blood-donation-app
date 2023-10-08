import { StyleSheet, Text, View, Image } from "react-native";
import Onboarding from "../components/onboarding/onbording";
import { NavigationContainer } from "@react-navigation/native";
import { isAuthuenticated } from "../middleware/authenticated";
import MainScreen, { OtherScreen } from "./main";

export default function OnboardingScreen() {
  return (
    <NavigationContainer>
      {isAuthuenticated().then((res) => {
        console.log(res)
       return res
        
        }) ? <Onboarding /> : <MainScreen /> }     
    </NavigationContainer>
  );
}
