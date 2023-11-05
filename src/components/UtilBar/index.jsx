import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign"
import { color } from "../../utils/colors";

export function UtilBar({ description }) {
  const [displayFilterOption, setDisplayFilterOption] = useState(false)

  return (
    <View style={style.container}>
      <Text style={style.description}>
        {description}
      </Text>

      <View style={style.filterContainer}>
        <TouchableOpacity 
          style={style.filter}
          onPress={() => setDisplayFilterOption(prev => !prev)}
        >
          <Text style={style.filterText}>{"Lọc"}</Text>
          <Icon name="filter" size={18} color={color.BLACK} />
        </TouchableOpacity>

        <View style={(!displayFilterOption && style.hidden) || style.filterOptionList}>
          <TouchableOpacity style={[style.filterOption, style.chosen]}>
            <Text style={style.filterText}>{"Cũ nhất"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.filterOption}>
            <Text style={style.filterText}>{"Mới nhất"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.filterOption}>
            <Text style={style.filterText}>{"Giá thấp nhất"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.filterOption}>
            <Text style={style.filterText}>{"Giá cao nhất"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100",
    justifyContent: "space-between",
    marginBottom: 24,
  },

  description: {
    fontSize: 16,
    color: color.BLACK,
    fontWeight: "500",
  },

  filterContainer: {
    position: "relative",
  },

  filter: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: color.SILVER,
    borderWidth: 1,
    borderRadius: 4,
    minWidth: 64,
  },

  filterText: {
    fontSize: 14,
    color: color.BLACK,
    marginRight: 16,
  },

  filterOptionList: {
    position: "absolute",
    width: 140,
    right: 0,
    top: "110%",
    zIndex: 1,
    backgroundColor: color.BACKGROUND,
    borderColor: color.SILVER,
    borderWidth: 1,
    borderRadius: 4,
  },

  filterOption: {
    padding: 8,
  },

  chosen: {
    backgroundColor: color.PRIMARY
  },

  hidden: {
    display: "none"
  }
})