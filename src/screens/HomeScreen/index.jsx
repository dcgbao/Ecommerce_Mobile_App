import { View, Text, StyleSheet } from "react-native";
import { color } from "../../utils/colors";
import { SearchBar } from "../../components/SearchBar";
import { CartButton } from "../../components/CartButton";
import { NotificationButton } from "../../components/NotificationButton";
import { CategoryBar } from "../../components/CategoryBar";
import { ProductList } from "../../components/ProductList";

export function HomeScreen() {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <SearchBar />
        <CartButton/>
        <NotificationButton/>
      </View>

      <CategoryBar />

      <Text style={style.sectionTitle}>{"Tin đăng mới"}</Text>

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

  sectionTitle: {
    color: color.BLACK,
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 30,
  },
})