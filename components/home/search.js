import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
  ScrollView,
} from "react-native";
import { Colors } from "../../styles/colors";
import { Ionicons } from "@expo/vector-icons";
import SearchFilter from "../ui/searchfilter";
import ButtonRounded from "../ui/button3";
import { useState } from "react";
import DonarCard from "../ui/donarcard/donarcard";

export default function SearchComponent() {
  const [filter,setFiletr] = useState(false)
  function FilterOrSearch() {
    if(filter){
      return (
        <>
          <View style={styles.filterContainer}>
            <SearchFilter />
            <View style={styles.applyButton}>
              <View style={styles.buttonContainer}>
                <ButtonRounded>Apply</ButtonRounded>
              </View>
            </View>
          </View>
        </>
      );
    }
  }

  return (
    <>
      <View>
        <View style={styles.SearchBoxcontainer}>
          <TextInput style={styles.searchbox} placeholder="Search" />
          <Pressable style={styles.filter} onPress={()=>filter ? setFiletr(false):setFiletr(true)}>
            <Ionicons
              name="filter"
              style={{ marginLeft: 8 }}
              color="#ffffff"
              size={35}
            />
          </Pressable>
        </View>

        <FilterOrSearch />
        <ScrollView>
          <DonarCard />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  SearchBoxcontainer: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 12,
  },
  searchbox: {
    width: 290,
    height: 48,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    marginRight: 3,
  },
  filter: {
    width: 48,
    height: 48,
    backgroundColor: Colors.red500,
  },
  filterContainer: {
    margin: 10,
  },
  applyButton: {
    backgroundColor: "#ffffff",
    borderColor: Colors.red300,
    padding: 10,
    paddingTop: 100,
    margin:2
  },
  buttonContainer: {
    alignItems: "center",
    padding: 16,
  },
});
