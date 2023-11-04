import { StyleSheet } from "react-native";
import { color } from "../../utils/colors";

const styles = StyleSheet.create({
  wrap: {
    marginVertical: 30,
    paddingHorizontal: 20,
  },

  title: {
    fontWeight: "bold",
    fontSize: 30
  },

  product: {
    marginVertical: 16,
    width: '100%',
    height: 120,
    display: 'flex',
    gap: 10,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  select: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 4,
    marginVertical: 8,
  },

  button: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: `${color.PRIMARY}`,
    padding: 10,
    justifyContent: 'center',
    borderRadius: 20,
    marginVertical: 8,
  }
});

export { styles }