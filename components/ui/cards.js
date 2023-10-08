import { Image, Pressable, StyleSheet, View } from "react-native";
import { Text } from "react-native";
import { Colors } from "../../styles/colors";
import { useNavigation } from "@react-navigation/native";

export default function Cardcomponent() {
  const navigation = useNavigation();
  // Campaign
  // Report
  return (
    <>
      <View style={styles.container}>
        <View style={styles.card}>
          <Pressable onPress={() => navigation.navigate("FindDonar")}>
            <Image source={require("../../assets/card/find.png")} />
            <Text style={styles.text}>Find Donors</Text>
          </Pressable>
        </View>
        <View style={styles.card}>
          <Pressable onPress={() => navigation.navigate("Donates")}>
            <Image source={require("../../assets/card/donats.png")} />
            <Text style={styles.text}>Donates</Text>
          </Pressable>
        </View>
        <View style={styles.card}>
          <Pressable onPress={() => navigation.navigate("OrderBlood")}>
            <Image source={require("../../assets/card/orderblood.png")} />
            <Text style={styles.text}>Order Bloods</Text>
          </Pressable>
        </View>
        <View style={styles.card}>
          <Pressable onPress={() => navigation.navigate("Assistant")}>
            <Image source={require("../../assets/card/assistant.png")} />
            <Text style={styles.text}>Assistant</Text>
          </Pressable>
        </View>
        <View style={styles.card}>
          <Pressable onPress={() => navigation.navigate("Report")}>
            <Image source={require("../../assets/card/report.png")} />
            <Text style={styles.text}>Report</Text>
          </Pressable>
        </View>
        <View style={styles.card}>
          <Pressable onPress={() => navigation.navigate("Campaign")}>
            <Image source={require("../../assets/card/campign.png")} />
            <Text style={styles.text}>Campaign</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    width: 95,
    height: 95,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    margin: 4,
    justifyContent: "center",
    padding: 10,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    shadowColor: Colors.red500,
  },
  text: {
    color: Colors.red300,
    fontSize: 14,
  },
});
