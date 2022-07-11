import {
  Button,
  Dimensions,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import Header from "../components/Header";
import Product from "../components/Product";

import colors from "../constants/Colors";
import { Layout } from "../constants/Layout";

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const renderProduct = ({ item, index }: { item: any; index: number }) => {
    return (
      <View style={{ flex: 1 }}>
        <Product />
      </View>
    );
  };

  const handleBuyButton = () => {
    console.log("buy now button clicked");
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.productList}>
        <FlatList
          data={array}
          renderItem={renderProduct}
          // snapToAlignment="start"
          decelerationRate="fast"
          snapToInterval={Layout.product.height}
          // showsVerticalScrollIndicator={false}
          // alwaysBounceVertical
        />
      </View>
      <TouchableWithoutFeedback onPress={handleBuyButton}>
        <View style={styles.buyBtn}>
          <Text style={styles.buyBtnText}>Buy Now</Text>
        </View>
      </TouchableWithoutFeedback>
      <StatusBar />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default HomeScreen;
