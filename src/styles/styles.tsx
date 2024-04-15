import { StyleSheet } from "react-native";
// link paleta de cores : https://paletadecores.com/paleta/4180ab/ffffff/8ab3cf/bdd1de/e4ebf0/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#e4ebf0",
  },

  container_form: {
    backgroundColor: "#8ab3cf",
    width: 280,
    height: 450,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  title: {
    fontSize: 30,
    fontFamily: "Roboto_900Black",
    color: "blue",
  },

  text: {
    color: "white",
    fontFamily: "Roboto_900Black",
    fontSize: 16,
    marginLeft: 10,
  },

  textError: {
    color: "red",
    fontStyle: "italic",
  },

  input: {
    width: 240,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#fff",
    padding: 10,
  },

  error: {
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 12,
  },

  button: {
    backgroundColor: "blue",
    width: 180,
    height: 35,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  textButton: {
    color: "white",
    fontFamily: "Roboto_900Black",
    fontSize: 16,
  },
});

export { styles };
