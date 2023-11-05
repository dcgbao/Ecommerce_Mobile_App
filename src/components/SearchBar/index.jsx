import {
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'
import { color } from "../../utils/colors";

export function SearchBar() {
  return (
    <View style={style.container}>
      <TouchableOpacity>
        <Icon name='search1' color={color.BLACK} size={20} />
      </TouchableOpacity>

      <TextInput
        style={style.input}
        placeholder="Tìm kiếm"
      />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    width: '75%',
    display: "flex",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: color.SILVER,
    borderRadius: 8,
    alignItems: "center",
    overflow: "hidden",
    position: "relative,"
  },

  input: {
    marginLeft: 14,
    width: "100%",
  },

  historyList: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: color.RED
  },
})