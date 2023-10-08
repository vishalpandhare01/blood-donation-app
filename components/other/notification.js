import { ScrollView } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Colors } from "../../styles/colors";

export default function Notification() {
  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.card}>
            <Text style={styles.cardText}>A+ blood group require at Shree Hospital</Text>
             <Text style={styles.cardTextTime}>Sun Oct 08 2023 10:20:23</Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  card:{
    elevation:2,
    shadowOpacity:0.5,
    backgroundColor:'#ffffff',
    padding:20,
    borderRadius:5
  },
  cardText:{
    alignItems:'center',
    color:Colors.red500
  },
  cardTextTime:{
    alignItems:'center',
    color:Colors.red400,
    fontSize:12

  }
});
