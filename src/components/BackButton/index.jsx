import { TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign"
import { color } from "../../utils/colors";
import { style } from "./style";

export function BackButton({
  action
}) {
  return (
    <TouchableOpacity 
      style={style.container}
      onPress={action && action}
    >
      <Icon
        name="left"
        size={24}
        color={color.BLACK}
      />
    </TouchableOpacity>
  )
}

