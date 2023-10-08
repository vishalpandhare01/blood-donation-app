import { FlatList, Pressable } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../../styles/colors";
import { useCallback, useState } from "react";
import { NativeModules } from "react-native";
import RloadScreen from "../rload";

export default function BloodTypes() {
  const [openList, setOpenList] = useState(false);
  const [selected, setSelecteType] = useState([]);
  var [isPress, setIsPress] = useState(false);

  const bloodTypes = [
    { type: "A+" },
    { type: "A-" },
    { type: "B+" },
    { type: "B-" },
    { type: "O+" },
    { type: "AB+" },
    { type: "AB-" },
  ];

  let selectedList = [];

  function onclickSelect(select, index) {
    if (selectedList.includes(select)) {
      selectedList.splice(index, 1);
    } else {
      selectedList.push(select);
    }
    console.log(selectedList);
  }

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

 function refreshPage(){
   onRefresh()
 } 

  function ListBlood() {
    if(refreshing){
      return <RloadScreen refreshing={refreshing} onRefresh={onRefresh} />;
    }
    if (openList ) {
      return (
        <View style={styles.listContainer}>
          <View style={styles.listItem}>
            {bloodTypes.map((el, i) => {
              console.log(selectedList.includes(el.type));
              return (
                <Pressable
                  style={({ pressed }) => [
                    selectedList.includes(el.type)
                      ? styles.listButton2
                      : styles.listButton,
                  ]}
                  key={i}
                  onPress={() => onclickSelect(el.type, i)}
                >
                  {({ pressed }) => (
                    <Text
                      style={[
                        selectedList.includes(el.type)
                          ? styles.listButtonText2
                          : styles.listButtonText,
                      ]}
                    >
                      {el.type}
                    </Text>
                  )}
                </Pressable>
              );
            })}
          </View>
          <Pressable onPress={() => refreshPage()}>
            <Text style={{ textAlign: "center", color: Colors.red500 }}>
              Clear
            </Text>
          </Pressable>
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
            <Text>Blood Type </Text>
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
    padding:5
  },
  listButton: {
    width: 30,
    height: 30,
    margin: 10,
    borderRadius: 25,
    backgroundColor: Colors.red500,
  },
  listButtonText: {
    padding: 3,
    color: "#ffffff",
    fontSize: 12,
    textAlign: "center",
  },
  listButton2: {
    width: 30,
    height: 30,
    margin: 10,
    borderRadius: 25,
    backgroundColor: Colors.red100,
  },
  listButtonText2: {
    padding: 3,
    color: Colors.red500,
    fontSize: 12,
    textAlign: "center",
  },
});
