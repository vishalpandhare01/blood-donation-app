import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import OnboardingScreen from "./screens/onbording";

import { store } from "./redux/store/store";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import {} from "@react-navigation/bottom-tabs";
import HomeComponent from "./components/home/home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FindDonars from "./components/other/finddonr";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar hidden={true} />
      <Provider store={store}>
        <OnboardingScreen />
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
