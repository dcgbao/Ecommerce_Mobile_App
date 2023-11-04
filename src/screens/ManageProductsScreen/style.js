import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrap: {
    marginVertical: 20,
    paddingHorizontal: 30,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  categories: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },

  category: {
    flex: 1,
    textAlign: 'center',
    paddingVertical: 10,
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
  },

  'selected-category': {
    backgroundColor: 'black',
  },

  posts: {
    marginVertical: 5,
  },

  post: {
    backgroundColor: 'red',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: 'white',
  }
});

export { styles }