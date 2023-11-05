import { View, StyleSheet, Text } from "react-native"
import { SearchBar } from "../../components/SearchBar"
import { CartButton } from "../../components/CartButton"
import { NotificationButton } from "../../components/NotificationButton"
import { UtilBar } from "../../components/UtilBar"
import { color } from "../../utils/colors"
import { ProductList } from "../../components/ProductList"

export function ProductScreen() {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <SearchBar />
        <CartButton />
        <NotificationButton />
      </View>

      <UtilBar description={"Sản phẩm đang rao bán"}/>

      <ProductList />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: color.BACKGROUND,
    paddingHorizontal: 16,
  },

  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
})