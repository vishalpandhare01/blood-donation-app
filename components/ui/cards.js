import { StyleSheet, View } from "react-native";
import { Text } from "react-native";

export default function Cardcomponent() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text>card</Text>
        </View>
        <View style={styles.card}>
          <Text>card</Text>
        </View>
        <View style={styles.card}>
          <Text>card</Text>
        </View>
        <View style={styles.card}>
          <Text>card</Text>
        </View>
        <View style={styles.card}>
          <Text>card</Text>
        </View>
        <View style={styles.card}>
          <Text>card</Text>
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
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    margin: 3,
  },
});
