import { StyleSheet } from "react-native"
import { color } from "../../utils/colors"

export const style = StyleSheet.create({
  container: {
    width: "100%",
    height: 64,
    backgroundColor: color.WHITE,
    marginBottom: 12,
    paddingHorizontal: 20,
    paddingVertical: 12,
    position: 'relative',
    borderRadius: 4,
  },

  invalid: {
    borderColor: color.RED,
    borderWidth: 1,
  },

  label: {
    fontSize: 12,
    color: color.SILVER,
    marginBottom: 2,
  },

  input: {
    width: "100%",
    fontSize: 14,
    color: color.BLACK,
    letterSpacing: 1.1,
    marginRight: 44,
  },

  icon: {
    position: 'absolute',
    right: 20,
    top: 20,
  },

  warning: {
    color: color.RED,
  },
})