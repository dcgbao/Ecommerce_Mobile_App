import { StyleSheet } from "react-native"
import { color } from "../../utils/colors"

export const style = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    display: 'flex',
  },

  buttonContainer: {
    marginTop: 60
  },

  description: {
    color: color.BLACK,
    fontSize: 14,
    marginBottom: 16,
  }
})