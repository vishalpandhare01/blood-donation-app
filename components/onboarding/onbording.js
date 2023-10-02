import { Pressable, StyleSheet, Text, View } from "react-native";
import OnbordingComponent1 from "./onbordings/onboarding1";
import OnbordingComponent2 from "./onbordings/onboarding2";
import { Colors } from "../../styles/colors";
import { useLayoutEffect, useState } from "react";
import OnbordingComponent3 from "./onbordings/onboarding3";
import { useDispatch, useSelector } from "react-redux";
import { serverStart } from "../../redux/action/actionapi";

export default function Onboarding() {
  const [page2, setPage2] = useState(false);
  const [page3, setPage3] = useState(false);

  function NextpageHandller() {
    dispatch(serverStart())
    if (!page2) {
      setPage2(true);
    } else if (page2) {
      setPage3(true);
    }
  }

 function SkipageHnadler(){
   dispatch(serverStart())
  setPage3(true);
 }

const dispatch = useDispatch()
const {serverData} = useSelector((state)=>state.reducer)
useLayoutEffect(()=>{
  dispatch(serverStart())
  console.log(serverData.data)
},[])

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
