import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeComponent from "../components/home/home";
import ProfileComponent from "../components/home/profile";
import ReportComponent from "../components/home/reaport";
import SearchComponent from "../components/home/search";
import RequestComponent from "../components/home/request";


import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Colors } from "../styles/colors";
import { Image, Text } from "react-native";
const Tab = createBottomTabNavigator();
const stack = createNativeStackNavigator();

export default function MainScreen() {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: Colors.red500,
          tabBarStyle: {
            margin: 10,
            borderRadius: 20,
            paddingTop: 12,
            borderColor: Colors.red100,
            shadowOffset:0
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeComponent}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ focused, color, size }) =>
              focused ? (
                <>
                  <Ionicons name="home" color={color} size={size} />
                  <Text style={{ color: color, fontWeight: "bold" }}>.</Text>
                </>
              ) : (
                <>
                  <Ionicons name="home" color={color} size={size} />
                  <Text style={{ color: color, fontWeight: "bold" }}></Text>
                </>
              ),
            headerTitle: "",
            headerLeft: () => (
              <Ionicons
                name="menu"
                size={30}
                color={Colors.red500}
                style={{ margin: 5 }}
              />
            ),
            headerRight: () => (
              <Feather
                name="bell"
                size={30}
                color={Colors.red500}
                style={{ margin: 5 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchComponent}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ focused, color, size }) =>
              focused ? (
                <>
                  <Ionicons name="search" color={color} size={size} />
                  <Text style={{ color: color, fontWeight: "bold" }}>.</Text>
                </>
              ) : (
                <>
                  <Ionicons name="search" color={color} size={size} />
                  <Text style={{ color: color, fontWeight: "bold" }}></Text>
                </>
              ),
          }}
        />

        <Tab.Screen
          name="Report"
          component={ReportComponent}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require("../assets/TabDrop.png")}
                style={{
                  position: "absolute",
                  bottom: -15, // space from bottombar
                  borderRadius: 68,
                  width: 100,
                  height: 100,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Request"
          component={RequestComponent}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ focused, color, size }) =>
              focused ? (
                <>
                  <Ionicons name="document-outline" color={color} size={size} />
                  <Text style={{ color: color, fontWeight: "bold" }}>.</Text>
                </>
              ) : (
                <>
                  <Ionicons name="document-outline" color={color} size={size} />
                  <Text style={{ color: color, fontWeight: "bold" }}></Text>
                </>
              ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileComponent}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ focused, color, size }) =>
              focused ? (
                <>
                  <Feather name="user" color={color} size={size} />
                  <Text style={{ color: color, fontWeight: "bold" }}>.</Text>
                </>
              ) : (
                <>
                  <Feather name="user" color={color} size={size} />
                  <Text style={{ color: color, fontWeight: "bold" }}></Text>
                </>
              ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
