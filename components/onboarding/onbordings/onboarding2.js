import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Colors } from "../../../styles/colors";

export default function OnbordingComponent2() {
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../../assets/searchman.jpeg")}
        />
        <Text style={styles.heading}>Post A Blood Request</Text>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
            tristique tristique quam in.
          </Text>
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
    color:Colors.red200
  },
  image: {
    width: 280,
    height: 285,
    padding: 8,
    margin: 8,
  },
});
