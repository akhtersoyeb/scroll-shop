import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import colors from "../constants/Colors";

const Product = () => {
  return (
    <View style={styles.container}>
      <View style={styles.product}>
        {/* Product Image */}
        <Image
          source={require("../assets/image/dummy-product1.png")}
        />
        {/* Product Details */}
        {
          /* <View>
          <View>
            <Image
              source={require("../assets/image/dummy-product1.png")}
            />
            <Text>Gardening Pot</Text>
          </View>
          <Text>Cute puppy style pots for gardening</Text>
        </View> */
        }
        {/* Action Buttons */}
        {
          /* <View>
        </View> */
        }
      </View>

      <TouchableHighlight>
        <View style={styles.buyBtn}>
          <Text style={styles.buyBtnText}>Buy Now</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingVertical: 28,
    alignItems: "center",
  },
  product: {
    flex: 1,
  },
  buyBtn: {
    backgroundColor: "#3C4242",
    paddingVertical: 10,
    width: Dimensions.get("window").width - 50,
    borderRadius: 8,
    alignItems: "center",
  },
  buyBtnText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
});

export default Product;
