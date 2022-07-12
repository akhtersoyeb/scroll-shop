import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import Logo from "../assets/svg/s-shop.svg";
import colors from "../constants/Colors";

const Header = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Logo />
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Profile")}>
        <Image
          style={styles.profileImage}
          source={require("../assets/image/dummy-profile.jpg")}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
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
