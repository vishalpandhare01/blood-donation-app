import { Image, StyleSheet, View } from "react-native";
import { Text } from "react-native";
import { Colors } from "../../styles/colors";

export default function Cardcomponent() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image source={require("../../assets/card/find.png")} />
          <Text style={styles.text}>Find Donors</Text>
        </View>
        <View style={styles.card}>
          <Image source={require("../../assets/card/donats.png")} />
          <Text style={styles.text}>Donates</Text>
        </View>
        <View style={styles.card}>
          <Image source={require("../../assets/card/orderblood.png")} />
          <Text style={styles.text}>Order Bloods</Text>
        </View>
        <View style={styles.card}>
          <Image source={require("../../assets/card/assistant.png")} />
          <Text style={styles.text}>Assistant</Text>
        </View>
        <View style={styles.card}>
          <Image source={require("../../assets/card/report.png")} />
          <Text style={styles.text}>Report</Text>
        </View>
        <View style={styles.card}>
          <Image source={require("../../assets/card/campign.png")} />
          <Text style={styles.text}>Campaign</Text>
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
    justifyContent:'center',
    padding:10,
    shadowOffset:5,
    shadowOpacity:5,
    shadowColor:Colors.red500
  },
  text:{
    color:Colors.red300,
    fontSize:14
  }
});
