import { View, StyleSheet, Text } from "react-native";
import { color } from "../../utils/colors";

export function AuthenTitle({ name }) {
  return (
    <View>
      <Text style={style.title}>{name}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  title: {
    marginTop: 18,
    marginBottom: 68,
    fontSize: 32,
    color: color.BLACK,
    textTransform: "uppercase",
    fontWeight: "700",
  },
})