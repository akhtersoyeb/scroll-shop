import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Colors from "../constants/Colors";

interface MenuButtonProps {
  type: "primary" | "secondary" | "danger";
  iconName: string;
  title: string;
  handlePress: () => void;
}

const MenuButton = (
  { type, iconName, title, handlePress }: MenuButtonProps,
) => {
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View
        style={type === "primary"
          ? defaultStyles.container
          : secondaryStyles.container}
      >
        <View style={defaultStyles.leftside}>
          {type === "primary" && (
            <Icon name={iconName} size={20} color="white" />
          )}
          {type === "primary" && <View style={{ width: 16 }} />}

          <Text
            style={type !== "danger" ? defaultStyles.title : dangerStyles.title}
          >
            {title}
          </Text>
        </View>
        {type === "primary" && (
          <Icon name={"chevron-right"} size={15} color="white" />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const defaultStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondaryBackground,
    width: "90%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    borderRadius: 8,
    alignSelf: "center",
  },
  leftside: {
    display: "flex",
    flexDirection: "row",
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

const secondaryStyles = StyleSheet.create({
  container: {
    backgroundColor: "#4E5555",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    alignSelf: "center",
  },
});

const dangerStyles = StyleSheet.create({
  title: {
    color: Colors.redTint,
    fontSize: 16,
    fontWeight: "600",
  },
});

export default MenuButton;
