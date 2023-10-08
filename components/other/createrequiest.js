import { StyleSheet, View } from "react-native";
import InputBox from "../ui/inputbox";
import ButtonRoundedSqure from "../ui/button4";

export default function CreateRequiest() {
  return (
    <>
      <View style={styles.container}>
        <InputBox
          secureText={false}
          Inputtype="givenName"
          text="City"
          icon={require("../../assets/icon/location.png")}
        />
        <InputBox
          secureText={false}
          Inputtype="givenName"
          text="Hospital"
          icon={require("../../assets/icon/hospital.png")}
        />
        <InputBox
          secureText={false}
          Inputtype="givenName"
          text="Blood Type"
          icon={require("../../assets/icon/drop.png")}
        />
        <InputBox
          secureText={false}
          Inputtype="givenName"
          text="Mobile"
          icon={require("../../assets/icon/phone.png")}
        />
        <InputBox
          secureText={false}
          Inputtype="givenName"
          text="Add Note"
          icon={require("../../assets/icon/mail.png")}
        />
        <View style={styles.buttoncontainer}>
          <ButtonRoundedSqure>Requiest</ButtonRoundedSqure>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#ffffff'
  },
  buttoncontainer:{
    marginTop:80
  }
});
