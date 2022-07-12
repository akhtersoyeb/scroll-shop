import {
  FlatList,
  StatusBar,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { styles } from "./styles";

import { Layout } from "../../constants/Layout";

import Header from "../../components/Header";
import Product from "../../components/Product";

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
      <Header navigation={navigation} />
      <View style={styles.productList}>
        <FlatList
          data={array}
          renderItem={renderProduct}
          decelerationRate="fast"
          snapToInterval={Layout.product.height}
          showsVerticalScrollIndicator={false}
          // snapToAlignment="start"
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

export default HomeScreen;
