import { ScrollView, Text, View } from "react-native";
import DonationCard from "../ui/donationcard";

export default function RequestComponent() {
  return (
    <ScrollView>
      <View>
        <DonationCard/>
        <DonationCard/>
        <DonationCard/>
        <DonationCard/>
        <DonationCard/>
        <DonationCard/>
      </View>
    </ScrollView>
  );
}
