import { StyleSheet } from "react-native"
import { color } from "../../utils/colors"

export const style = StyleSheet.create({
  container: {
    width: '100%',
    height: 48,
    borderRadius: 24,
    backgroundColor: color.PRIMARY,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  disabled: {
    opacity: 0.4
  },

  label: {
    fontSize: 18,
    textTransform: 'uppercase',
    color: color.WHITE,
    fontWeight: "600",
  },
})