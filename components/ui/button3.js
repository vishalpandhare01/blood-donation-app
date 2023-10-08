import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../styles/colors";

export default function ButtonRounded({ children }) {
  return (
    <>
        <Pressable style={styles.container}>
          <Text style={styles.innerText}>{children}</Text>
        </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    backgroundColor: Colors.red500,
    borderRadius: 90,
  },
  innerText: {
    color: "#ffffff",
    padding: 7,
    fontSize: 20,
    textAlign: "center",
  },
});
