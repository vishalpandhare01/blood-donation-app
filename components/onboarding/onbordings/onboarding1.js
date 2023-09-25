import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Colors } from "../../../styles/colors";

export default function OnbordingComponent1() {
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../../assets/labrtory.jpeg")}
        />
        <Text style={styles.heading}>Find Blood Donors</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
          tristique tristique quam in.
        </Text>
      </View>
      <View>
        <View style={styles.line}>
          <Text>ok</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    textAlign: "center",
    fontSize: 24,
    margin: 5,
    color: Colors.red200,
    fontWeight:'500'
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
    width: 280,
    height: 285,
    padding: 8,
    margin: 8,
  },
  line: {
    width: 71,
    height: 10,
    top: 670,
    left: 172,
    borderRadius: 8,
    color: Colors.red500,
  },
});
