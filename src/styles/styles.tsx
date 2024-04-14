import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
   flex: 1,
   alignItems:'center',
   justifyContent: 'space-evenly',
   backgroundColor: '#606d80'
  },

  container_form: {
    backgroundColor: "#567ebb",
    width: 280,
    height: 450,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },

  radios: {
    flex: 0,
    alignItems: "center",
    flexDirection: "row",
    justifyContent:'center',
  },

  title: {
    fontSize: 30,
    fontFamily: "Roboto_900Black",
    color: '#fff'
  },

  input: {
    width: 240,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#fff",
    padding: 10,
  },


  button: {
    backgroundColor: "blue",
    width: 200,
    height: 35,
    borderRadius: 12,
    alignItems: "center",
    justifyContent:'center',
  },

  text: {
    color: "white",
    fontFamily: "Roboto_900Black",
    fontSize: 16,
  },
});

export {styles}