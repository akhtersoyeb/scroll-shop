
import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    // display: "flex",
    alignItems: "center",
  },
  productList: {
    flex: 1,
    width: Dimensions.get("window").width,
  },
  buyBtn: {
    backgroundColor: "#3C4242",
    paddingVertical: 10,
    width: Dimensions.get("window").width - 50,
    height: 45,
    marginVertical: 30,
    borderRadius: 8,
    alignItems: "center",
  },
  buyBtnText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
});
