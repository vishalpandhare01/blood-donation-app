import { Pressable, StyleSheet, Text, View } from "react-native";
import OnbordingComponent1 from "./onbordings/onboarding1";
import OnbordingComponent2 from "./onbordings/onboarding2";
import { Colors } from "../../styles/colors";
import { useState } from "react";
import OnbordingComponent3 from "./onbordings/onboarding3";

export default function Onboarding() {
  const [page2, setPage2] = useState(false);
  const [page3, setPage3] = useState(false);

  function NextpageHandller() {
    if (!page2) {
      setPage2(true);
    } else if (page2) {
      setPage3(true);
    }
  }

 function SkipageHnadler(){
  setPage3(true);
 }

  if (page3) {
    return <OnbordingComponent3 />;
  } else {
    return (
      <>
        {!page2 ? <OnbordingComponent1 /> : <OnbordingComponent2 />}

        <View style={styles.footer}>
          <Pressable onPress={SkipageHnadler}>
            <Text style={styles.footerButton}>Skip</Text>
          </Pressable>
          <Pressable onPress={NextpageHandller}>
            <Text style={styles.footerButton}>Next</Text>
          </Pressable>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    margin: 10,
  },
  footerButton: {
    color: Colors.red300,
  },
});
