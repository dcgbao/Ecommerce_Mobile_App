import { View, StyleSheet, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import { getPriceFormat } from "../../utils/getPriceFormat";
import { color } from "../../utils/colors";

export function ProductList() {
  return (
    <ScrollView style={style.container}>
      <View style={style.list}>

        <TouchableOpacity style={style.item}>
          <Image style={style.image} source={require("../../../assets/images/product.png")} />
          <View style={style.infoContainer}>
            <Text style={style.name}>{"something"}</Text>
            <Text style={style.price}>
              {getPriceFormat(1000000)}
            </Text>
            <Text style={style.address}>{"something"}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={style.item}>
          <Image style={style.image} source={require("../../../assets/images/product.png")} />
          <View style={style.infoContainer}>
            <Text style={style.name}>{"something"}</Text>
            <Text style={style.price}>
              {getPriceFormat(1000000)}
            </Text>
            <Text style={style.address}>{"something"}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={style.item}>
          <Image style={style.image} source={require("../../../assets/images/product.png")} />
          <View style={style.infoContainer}>
            <Text style={style.name}>{"something"}</Text>
            <Text style={style.price}>
              {getPriceFormat(1000000)}
            </Text>
            <Text style={style.address}>{"something"}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={style.item}>
          <Image style={style.image} source={require("../../../assets/images/product.png")} />
          <View style={style.infoContainer}>
            <Text style={style.name}>{"something"}</Text>
            <Text style={style.price}>
              {getPriceFormat(1000000)}
            </Text>
            <Text style={style.address}>{"something"}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={style.item}>
          <Image style={style.image} source={require("../../../assets/images/product.png")} />
          <View style={style.infoContainer}>
            <Text style={style.name}>{"something"}</Text>
            <Text style={style.price}>
              {getPriceFormat(1000000)}
            </Text>
            <Text style={style.address}>{"something"}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={style.item}>
          <Image style={style.image} source={require("../../../assets/images/product.png")} />
          <View style={style.infoContainer}>
            <Text style={style.name}>{"something"}</Text>
            <Text style={style.price}>
              {getPriceFormat(1000000)}
            </Text>
            <Text style={style.address}>{"something"}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={style.item}>
          <Image style={style.image} source={require("../../../assets/images/product.png")} />
          <View style={style.infoContainer}>
            <Text style={style.name}>{"something"}</Text>
            <Text style={style.price}>
              {getPriceFormat(1000000)}
            </Text>
            <Text style={style.address}>{"something"}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={style.item}>
          <Image style={style.image} source={require("../../../assets/images/product.png")} />
          <View style={style.infoContainer}>
            <Text style={style.name}>{"something"}</Text>
            <Text style={style.price}>
              {getPriceFormat(1000000)}
            </Text>
            <Text style={style.address}>{"something"}</Text>
          </View>
        </TouchableOpacity>

      </View>

    </ScrollView>
  )
}

const style = StyleSheet.create({
  container: {
  },

  list: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  item: {
    width: "48%",
    height: 194,
    backgroundColor: color.BACKGROUND_DARKER,
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 8,
  },

  image: {
    height: 112,
    width: "100%",
  },

  infoContainer: {
    padding: 13,
  },

  name: {
    fontSize: 14,
    color: color.BLACK,
    width: "100%",
    height: 16,
    overflow: "hidden",
    fontWeight: "500",
    marginBottom: 4,
  },

  price: {
    fontSize: 14,
    fontWeight: "600",
    color: color.PRIMARY,
    marginBottom: 4,
  },

  address: {
    fontSize: 12,
    color: color.BLACK,
    width: "100%",
    height: 16,
    overflow: "hidden"
  },
})
