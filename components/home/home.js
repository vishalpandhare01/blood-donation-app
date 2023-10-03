import { Image, StyleSheet, View } from "react-native";
import { Text } from "react-native";
import CarouselCards from "../ui/crousel";
import Cardcomponent from "../ui/cards";

export default function HomeComponent() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <CarouselCards />
          <Cardcomponent />
        </View>
        <Text>HOME</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
  },
  imageContainer: {
    // marginRight: 100,
  },
});
