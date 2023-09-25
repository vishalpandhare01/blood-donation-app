import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../styles/colors";

export default function ButtonUnfill({ text ,onPress  }) {
  return (
    <Pressable style={style.container} onPress={onPress}>
      <Text style={style.text}>{text}</Text>
    </Pressable>
  );
}

const style = StyleSheet.create({
  container: {
    width: 300,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    alignItems:'center',
    margin: 10,
    borderColor:Colors.red500
  },
  text:{
   marginTop:18,
   color:Colors.red500,
   fontWeight:'500'
  }
});
