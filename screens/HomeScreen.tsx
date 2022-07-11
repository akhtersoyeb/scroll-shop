import { Button, Text, View } from "react-native";

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
};

export default HomeScreen;
