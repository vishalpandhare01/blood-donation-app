import { StyleSheet, View } from "react-native";
import BlooBank from "./searchfilterbutton/bloodBank";
import BloodDonars from "./searchfilterbutton/bloodDonars";
import BloodTypes from "./searchfilterbutton/bloodType";
import LocationWise from "./searchfilterbutton/location";

export default function SearchFilter() {
  return (
    <>
      <BloodTypes />
      <LocationWise />
      <BlooBank />
      <BloodDonars />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    
  },
});
