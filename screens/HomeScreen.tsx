import { Button, StatusBar, Text, View } from "react-native";

import Header from "../components/Header";

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View>
      <Header />
      <StatusBar />
    </View>
  );
};

export default HomeScreen;
