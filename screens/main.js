import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FindDonars from "../components/other/finddonr";
import Campaign from "../components/other/campaign";
import OrderBlood from "../components/other/orderblood";
import Donates from "../components/other/donates";
import Report from "../components/other/report";

import { useState } from "react";
import TabHome from "./home";
import Assistant from "../components/other/assitant";
import CreateRequiest from "../components/other/createrequiest";
import Notification from "../components/other/notification";
const Stack = createNativeStackNavigator();

export default function MainScreen() {
  const [otherscreen, setotherscreen] = useState(false);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="tabhome"
        options={{
          headerShown: false,
        }}
        component={TabHome}
      />
      <Stack.Screen
        name="FindDonar"
        options={{
          title: "Find Donar",
        }}
        component={FindDonars}
      />
      <Stack.Screen
        name="Assistant"
        options={{
          title: "Assistant",
        }}
        component={Assistant}
      />
      <Stack.Screen
        name="Campaign"
        options={{
          title: "Campaign",
        }}
        component={Campaign}
      />
      <Stack.Screen
        name="OrderBlood"
        options={{
          title: "Order Blood",
        }}
        component={OrderBlood}
      />
      <Stack.Screen
        name="Donates"
        options={{
          title: "Donates",
        }}
        component={Donates}
      />
      <Stack.Screen
        name="Report"
        options={{
          title: "Report",
        }}
        component={Report}
      />
      <Stack.Screen
        name="createRequiest"
        options={{
          title: "Create A Request",
        }}
        component={CreateRequiest}
      />

      <Stack.Screen
        name="Notification"
        options={{
          title: "Notification",
        }}
        component={Notification}
      />
    </Stack.Navigator>
  );
}
