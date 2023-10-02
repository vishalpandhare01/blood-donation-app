import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeComponent from "../components/home/home";

const Tab = createBottomTabNavigator();
const stack = createNativeStackNavigator();

export default function MainScreen() {
  return (
    <>
      <Tab.Navigator screenOptions={{
        tabBarStyle:{
          // alignItems:'center',
          // width:374,
          borderRadius:20,
          // marginHorizontal:10,
          marginBottom:10,
          right:20,
          // left:20,
          borderColor:'black'        
        }
      }}>
        <Tab.Screen name="Home" options={{
          
        }} component={HomeComponent} />
        <Tab.Screen name="Search" component={HomeComponent} />
        <Tab.Screen name="Profile" component={HomeComponent} />
        <Tab.Screen name="Request" component={HomeComponent} />
      </Tab.Navigator>
    </>
  );
}
