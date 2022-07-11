import { Button, Text, View } from "react-native";
import React from "react";

const ProfileScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button
        title="Go to Orders"
        onPress={() => navigation.navigate("Orders")}
      />
    </View>
  );
};

export default ProfileScreen;
