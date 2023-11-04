import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: '#ffffff'
  },

  form: {
    paddingHorizontal: 30,
    marginVertical: 40,
  },

  field: {
    marginBottom: 20,
  },

  label: {
    fontWeight: '500',
  },

  "select-image": {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#F0F2F1",
    width: '100%',
    height: 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    padding: 10,
    marginTop: 10,
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: "#F0F2F1",
    display: 'flex',
    justifyContent: 'center',
  },

  confirm: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    height: 50
  },

  button: {
    flex: 1,
    backgroundColor: 'red',
    textAlign: 'center',
    color: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    height: '100%',
  }
});

export { styles }