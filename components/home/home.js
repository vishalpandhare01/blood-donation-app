import { Image, StyleSheet, View, ScrollView } from "react-native";
import { Text } from "react-native";
import CarouselCards from "../ui/crousel";
import Cardcomponent from "../ui/cards";
import DonationCard from "../ui/donationcard";
import { Colors } from "../../styles/colors";

export default function HomeComponent() {
  return (
    <>
      <ScrollView >
        <View style={styles.container}>
          <CarouselCards />
          <Cardcomponent />
          <Text style={styles.text}>Donation Request</Text>
          <DonationCard />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor:'#ffffff'
  },
  text: {
    color:Colors.red500,
    fontWeight:'500',
    fontSize:17,
    margin:20,
    marginBottom:4,
    marginTop:6
  },
});
