import Icon from "react-native-vector-icons/FontAwesome5";
import { Button, Image, ScrollView, Text, View } from "react-native";
import MenuButton from "../../components/MenuButton";

import { styles } from "./styles";

const ProfileScreen = ({ navigation }: { navigation: any }) => {
  const handleOrdersButton = () => {
    navigation.navigate("Orders");
  };
  const handleLogoutButton = () => {
    console.log("logout button clicked");
  };
  const handleDeleteAccountButton = () => {
    console.log("delete account clicked");
  };
  const handleNotificationsButton = () => {
    console.log("notifications button clicked");
  };
  const handleSupportButton = () => {
    console.log("support button clicked");
  };
  const handleTermsButton = () => {
    console.log("terms button clicked");
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <View style={styles.profilePictureWrapper}>
            <Image
              style={styles.profilePicture}
              source={require("../../assets/image/dummy-profile.jpg")}
              resizeMode="contain"
              resizeMethod="resize"
            />
          </View>
          <View style={{ height: 12 }} />
          <Text style={styles.username}>Sisa Roy</Text>
          <View style={{ height: 4 }} />
          <Text style={styles.phonenumber}>+91 8509908943</Text>
        </View>

        <View>
          <MenuButton
            type="primary"
            iconName="box"
            title="My Orders"
            handlePress={handleOrdersButton}
          />

          <View style={{ height: 16 }} />
          <View style={styles.menuContainer}>
            <View style={styles.menuHeader}>
              <Icon
                name="user"
                size={20}
                color="white"
              />
              <View style={{ width: 16 }} />
              <Text style={styles.menuTitle}>Account</Text>
            </View>
            <MenuButton
              type="secondary"
              iconName="none"
              title="Log Out"
              handlePress={handleLogoutButton}
            />
            <MenuButton
              type="danger"
              iconName="none"
              title="Delete My Account"
              handlePress={handleDeleteAccountButton}
            />
          </View>

          <View style={{ height: 16 }} />
          <View style={styles.menuContainer}>
            <View style={styles.menuHeader}>
              <Icon
                name="bars"
                size={20}
                color="white"
              />
              <View style={{ width: 16 }} />
              <Text style={styles.menuTitle}>Other</Text>
            </View>
            <MenuButton
              type="secondary"
              iconName="none"
              title="Notifications"
              handlePress={handleNotificationsButton}
            />
            <MenuButton
              type="secondary"
              iconName="none"
              title="Support"
              handlePress={handleSupportButton}
            />
            <MenuButton
              type="secondary"
              iconName="none"
              title="Terms & Services"
              handlePress={handleTermsButton}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
