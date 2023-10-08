import { Pressable } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../../styles/colors";
import { useState } from "react";

export default function LocationWise() {
  const [openList, setOpenList] = useState(false);

  function ListBlood() {
    if (openList) {
      return (
        <View style={styles.listContainer}>
          <View style={styles.listItem}>
            <Pressable style={styles.listButton}>
              <Text style={styles.listButtonText}>A+</Text>
            </Pressable>
            <Pressable style={styles.listButton}>
              <Text style={styles.listButtonText}>A+</Text>
            </Pressable>
            <Pressable style={styles.listButton}>
              <Text style={styles.listButtonText}>A+</Text>
            </Pressable>
            <Pressable style={styles.listButton}>
              <Text style={styles.listButtonText}>A+</Text>
            </Pressable>
            <Pressable style={styles.listButton}>
              <Text style={styles.listButtonText}>A+</Text>
            </Pressable>
            <Pressable style={styles.listButton}>
              <Text style={styles.listButtonText}>A+</Text>
            </Pressable>
            <Pressable style={styles.listButton}>
              <Text style={styles.listButtonText}>A+</Text>
            </Pressable>
            <Pressable style={styles.listButton}>
              <Text style={styles.listButtonText}>A+</Text>
            </Pressable>
          </View>
        </View>
      );
    }
  }

  return (
    <>
      <View style={styles.container}>
        <View>
          <Pressable
            style={styles.button}
            onPress={() => (openList ? setOpenList(false) : setOpenList(true))}
          >
            <Text>Location </Text>
            <Text>{">"} </Text>
          </Pressable>
        </View>
        <ListBlood />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
      margin: 2,
    },
    textBox: {},
    button: {
      backgroundColor: "#ffffff",
      padding: 10,
      // borderWidth: 0.3,
      borderColor: Colors.red300,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    listContainer: {
      backgroundColor: "#ffffff",
      padding: 16,
      // borderWidth: 0.3,
      borderColor: Colors.red300,
    },
    listItem: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
    },
    listButton: {
      width: 30,
      height: 30,
      margin: 10,
      borderRadius: 25,
      backgroundColor: Colors.red500,
    },
    listButtonText: {
      padding: 5,
      color: "#ffffff",
    },
  });

