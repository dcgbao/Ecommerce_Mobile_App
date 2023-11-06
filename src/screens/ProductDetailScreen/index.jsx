import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { BackButton } from "../../components/BackButton";
import { screenName } from "../../utils/screenName";
import { CartButton } from "../../components/CartButton";
import { color } from "../../utils/colors";
import { getPriceFormat } from "../../utils/getPriceFormat";

export function ProductDetailScreen({ navigation }) {
  return (
    <ScrollView style={style.container}>
      <View style={style.header}>
        <BackButton action={() => navigation.navigate(screenName.PRODUCT)} />
        <Text style={style.title}>
          {"Chi tiết sản phẩm"}
        </Text>
        <CartButton />
      </View>

      <Image style={style.productImage} source={require("../../../assets/images/product.png")} />
      <Text style={style.productName}>{"Tai nghe Apple pro vip đì đà đì đùng"}</Text>
      <Text style={style.productPrice}>{getPriceFormat(1000000)}</Text>
      <View style={style.sellerContainer}>
        <View style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}>
          <Image style={style.sellerImage} source={require("../../../assets/images/user.png")} />
          <Text style={style.sellerName}>{"Đức Anh"}</Text>
        </View>
        <TouchableOpacity style={style.sellerButton}>{"Xem"}</TouchableOpacity>
      </View>
      <Text style={style.title}>{"Mô tả sản phẩm"}</Text>
      <Text style={style.productInfo}>{"Đã đăng từ: "}<Text style={style.info}>{"22/12/2022"}</Text></Text>
      <Text style={style.productInfo}>{"Địa chỉ: "}<Text style={style.info}>{" Cách Mạng Tháng Tám, phường 11, quận 3, thành phố Hồ Chí Minh"}</Text></Text>
      <Text style={style.productInfo}>{"Thông tin chi tiết: "}
      </Text>
      <Text style={{
        fontWeight: "500",
        textAlign: "justify"
      }}>
        {"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."}
      </Text>

      <View style={style.buttonBar}>
        <TouchableOpacity style={style.filledButton}>{"Thêm vào giỏ hàng"}</TouchableOpacity>
        <TouchableOpacity style={style.outlineButton}>{"Gọi"}</TouchableOpacity>
        <TouchableOpacity style={style.outlineButton}>{"Nhắn tin"}</TouchableOpacity>
      </View>

      <View style={style.reportBar}>
        <TouchableOpacity style={style.reportButton}>{"Sản phẩm đã bán ?"}</TouchableOpacity>
        <TouchableOpacity style={style.reportButton}>{"Tin đăng không hợp lệ ?"}</TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: color.BACKGROUND
  },

  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },

  title: {
    fontSize: 16,
    color: color.BLACK,
    fontWeight: "500",
  },

  productImage: {
    height: 240,
    width: "100%",
    marginBottom: 8,
  },

  productName: {
    fontSize: 16,
    fontWeight: "500",
    color: color.BLACK,
    marginBottom: 4,
  },

  productPrice: {
    fontSize: 18,
    fontWeight: "500",
    color: color.PRIMARY,
    marginBottom: 16,
  },

  sellerContainer: {
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: color.SILVER,
    borderBottomWidth: 1,
    borderBottomColor: color.SILVER,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 18,
  },

  sellerImage: {
    height: 50,
    width: 50,
    borderRadius: "50%",
    marginRight: 12,
  },

  sellerName: {
    fontSize: 16,
    fontWeight: "500",
    color: color.BLACK,
  },

  sellerButton: {
    width: 94,
    height: 38,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: color.SILVER,
    borderRadius: 4,
  },

  productInfo: {
    marginTop: 12,
    fontSize: 14,
    fontWeight: "400",
    color: color.BLACK,
    lineHeight: 20,
  },

  info: {
    marginLeft: 8,
    fontWeight: "500",
  },

  buttonBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 28,
    marginTop: 14,
    borderTopColor: color.SILVER,
    borderTopWidth: 1,
    paddingTop: 14,
  },

  reportBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: 28,
  },

  reportButton: {
    height: 20,
    color: color.RED,
    fontSize: 14,
    fontWeight: "500",
  },

  outlineButton: {
    padding: 15,
    color: color.BLACK,
    fontSize: 16,
    fontWeight: "500",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: color.SILVER,
    backgroundColor: color.BACKGROUND_DARKER
  },

  filledButton: {
    padding: 15,
    color: color.WHITE,
    fontSize: 16,
    fontWeight: "500",
    borderRadius: 4,
    backgroundColor: color.PRIMARY,
    borderWidth: 1,
    borderColor: color.PRIMARY,
  }
})