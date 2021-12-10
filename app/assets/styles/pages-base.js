import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    marginTop: 40,
    marginBottom: 10,
    height: 66,
    borderBottomWidth: 1,
  },
  logo: {
    width: 66,
    height: 58,
  },
  title: {
    fontSize: 30,
    marginLeft: 10,
  },
  key: {
    fontSize: 15,
    width: "40%",
  },
  value: {
    fontWeight: "bold",
    width: "60%",
  },
  mapBox: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 15,
  },
  buttonBack: {
    fontWeight: "bold",
    fontSize: 20,
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    paddingVertical: 5,
  },

  searchButton: {
    borderWidth: 1,
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    padding: 10,
  },

  input: {
    marginTop: 15,
  },
});

export default styles;
