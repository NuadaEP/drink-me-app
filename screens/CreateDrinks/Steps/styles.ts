import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: Colors.light.background,
  },

  titleContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
  },

  inputContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },

  inputText: {
    borderBottomColor: "rgba(0, 0, 0, 0.2)",
    borderBottomWidth: 1.2,
    width: "100%",
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 10,
  },

  buttomContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 28,
  },

  buttom: {
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 25,
    backgroundColor: Colors.light.backgroundPurple,
    width: "100%",
  },

  buttomLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.light.background,
  },
});

export default styles;
