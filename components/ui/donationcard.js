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
    marginTop: 5,
    padding: 18,
    paddingTop: 8,
    backgroundColor: "#ffffff",
    borderRadius: 5,
    // height:146
  },
  detials: {
    width: 200,
  },
  headerText: {
    // fontFamily:'Poppins',
    fontSize: 14,
    color: Colors.red400,
    marginTop: 3,
  },
  text: {
    // fontFamily:'Poppins',
    fontSize: 14,
    color: Colors.red500,
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
