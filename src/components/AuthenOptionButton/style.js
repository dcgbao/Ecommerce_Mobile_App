import { StyleSheet } from "react-native"
import { color } from "../../utils/colors"

export const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: 'row',
    marginTop: 43,
    marginBottom: 28,
    position: "relative",
    alignSelf: "flex-end",
  },

  label: {
    color: color.BLACK,
    fontSize: 14,
    marginRight: 4,
  },
})