import { Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather"
import { color } from "../../utils/colors";

export function NotificationButton() {
  return (
    <TouchableOpacity style={style.container}>
      <Text style={style.number}>
        {"2"}
      </Text>
      <Icon name="bell" size={32} color={color.BLACK} />
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  container: {
    position: "relative",
    width: 32,
  },

  number: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: color.RED,
    color: color.WHITE,
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 14,
    position: "absolute",
    zIndex: 1,
    right: 0,
    top: -4,
    overflow: 'hidden',
  },
})