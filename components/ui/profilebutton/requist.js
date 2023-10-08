import { Pressable, StyleSheet, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../../styles/colors";
export default function ButtonRequiest({ children ,onPress }) {
  return (
    <>
      <View>
        <Pressable style={styles.container} onPress={onPress}>
          <Ionicons name="share-outline" color="white" size={30} />
          <Text style={styles.text}>{children}</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 50,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: Colors.red500,
    alignItems:'center',
    padding:10,
    margin:3
  },
  text:{
    color:'#ffffff',
    alignItems:'center',
    fontWeight:'500',
  }
});
