import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo"
import { style } from "./style";
import { color } from "../../utils/colors";

export function AuthenOptionButton({
  action,
  label
}) {
  return (
    <TouchableOpacity 
      style={style.container}
      onPress={action}
    >
      <Text style={style.label}>{label}</Text>
      <Icon name="arrow-long-right" size={20} color={color.PRIMARY}/>
    </TouchableOpacity>
  )
}