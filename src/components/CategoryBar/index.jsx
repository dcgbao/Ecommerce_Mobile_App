import { StyleSheet, View, Text, Image } from "react-native";
import { color } from "../../utils/colors";

export function CategoryBar() {
  return (
    <View style={style.container}>
      <Text style={style.title}>
        {"Khám phá danh mục"}
      </Text>

      <View style={style.list}>

        <View style={style.item}>
          <Image style={style.image} source={require("../../../assets/images/clothing.png")} />
          <Text style={style.name}>{"Quần áo"}</Text>
        </View>

        <View style={style.item}>
          <Image style={style.image} source={require("../../../assets/images/education.png")} />
          <Text style={style.name}>{"Giáo dục"}</Text>
        </View>

        <View style={style.item}>
          <Image style={style.image} source={require("../../../assets/images/electric.png")} />
          <Text style={style.name}>{"Điện tử"}</Text>
        </View>

        <View style={style.item}>
          <Image style={style.image} source={require("../../../assets/images/sport.png")} />
          <Text style={style.name}>{"Thể thao"}</Text>
        </View>

        <View style={style.item}>
          <Image style={style.image} source={require("../../../assets/images/other.png")} />
          <Text style={style.name}>{"Tất cả"}</Text>
        </View>

      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    marginBottom: 48,
  },

  title: {
    color: color.BLACK,
    fontSize: 14,
    fontWeight: "500", 
    marginBottom: 14,
  },

  list: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },

  item: {
    display: "flex",
    alignItems: "center"
  },

  image: {
    height: 40,
    width: 40,
    marginBottom: 6,
  },

  name: {
    color: color.SILVER,
    fontSize: 12,
    fontWeight: "400",
  }
})