import { Button, StatusBar, StyleSheet, Text, View } from "react-native";

import Header from "../components/Header";
import Product from "../components/Product";

import colors from "../constants/Colors";

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Header />
      <Product />
      <StatusBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default HomeScreen;
