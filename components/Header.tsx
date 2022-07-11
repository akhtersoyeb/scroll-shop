import { Image, StyleSheet, Text, View } from "react-native";

import Logo from "../assets/svg/s-shop.svg";
import colors from "../constants/Colors";

const Header = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <Image
        style={styles.profileImage}
        source={require("../assets/image/dummy-profile.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 4,
    paddingRight: 28,
    paddingLeft: 3,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default Header;
