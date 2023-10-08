import { Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../styles/colors";

export default function DonationCard() {
  return (
    <View style={styles.container}>
      <View style={styles.detials}>
        <Text style={styles.headerText}>Name</Text>
        <Text style={styles.text}>vishal p</Text>
        <Text style={styles.headerText}>Location</Text>
        <Text style={styles.text}>jalgoan</Text>
        <Text style={styles.headerText}>5 min ago</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/bloodgroup/Bpositive.png")}
        />
        <Text style={styles.donateText}>Donate</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 12,
    padding: 18,
    paddingTop: 8,
    backgroundColor: "#ffffff",
    borderRadius: 5,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  detials: {
    width: 200,
  },
  headerText: {
    // fontFamily:'Poppins',
    fontSize: 14,
    color: Colors.red300,
    marginTop: 3,
    fontWeight:'400'
  },
  text: {
    // fontFamily:'Poppins',
    fontSize: 14,
    color: Colors.red500,
    fontWeight:'500'
  },
  imageContainer: {
    justifyContent: "flex-end",
  },
  image: {
    alignItems: "center",
    width: 38,
    // height:55
  },
  donateText: {
    marginTop: 10,
    color:Colors.red500,
    fontWeight:'500'
  },
});
