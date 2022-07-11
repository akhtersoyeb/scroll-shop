import { useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";

import colors from "../constants/Colors";
import { Layout } from "../constants/Layout";

const Product = () => {
  const [lastTap, setLastTap] = useState(0);

  const handleDoubleTap = () => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (lastTap && (now - lastTap) < DOUBLE_PRESS_DELAY) {
      // Double tap happened
      handleLikeButton();
    }
    setLastTap(now);
  };

  const handleLikeButton = () => {
    console.log("like button clicked");
  };

  const handleReviewButton = () => {
    console.log("review button clicked");
  };

  const handleShareButton = () => {
    console.log("share button clicked");
  };

  // const handleBuyButton = () => {
  //   console.log("buy now button clicked");
  // };

  return (
    <View style={styles.container}>
      <View style={styles.product}>
        {/* Product Image */}
        <TouchableWithoutFeedback onPress={handleDoubleTap}>
          <Image
            style={styles.productImg}
            source={require("../assets/image/dummy-product1.png")}
            resizeMode="contain"
            resizeMethod="resize"
          />
        </TouchableWithoutFeedback>
        {/* Product Details */}
        <View style={styles.productDetailsContainer}>
          <View style={styles.productBrand}>
            <Image
              style={styles.brandImg}
              source={require("../assets/image/dummy-product1.png")}
              resizeMode="contain"
              resizeMethod="resize"
            />
            <View style={{ width: 6 }} />
            <Text style={styles.brandTitle}>Gardening Pot</Text>
          </View>
          <Text style={styles.productDescription}>
            Cute puppy style pots for gardening
          </Text>
        </View>
        {/* Action Buttons */}
        <View style={styles.actionBtnContainer}>
          <TouchableWithoutFeedback onPress={handleLikeButton}>
            <View style={styles.actionBtn}>
              <Icon
                name="heart"
                size={30}
                color="#F8F8F8"
              />
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={handleReviewButton}>
            <View style={styles.actionBtn}>
              <Icon
                name="star"
                size={30}
                color="#F8F8F8"
              />
              <Text
                style={{ color: "white", fontSize: 12, textAlign: "center" }}
              >
                4.3
              </Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={handleShareButton}>
            <View style={styles.actionBtn}>
              <Icon
                name="share"
                size={30}
                color="#F8F8F8"
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>

      {
        /* <TouchableWithoutFeedback onPress={handleBuyButton}>
        <View style={styles.buyBtn}>
          <Text style={styles.buyBtnText}>Buy Now</Text>
        </View>
      </TouchableWithoutFeedback> */
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Layout.product.height,
    width: Dimensions.get("window").width,
    backgroundColor: colors.background,
    paddingTop: 28,
    alignItems: "center",
  },
  product: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 69,
  },
  productImg: {
    width: 300,
    height: 350,
  },
  productDetailsContainer: {
    position: "absolute",
    bottom: 5,
  },
  productBrand: {
    display: "flex",
    flexDirection: "row",
  },
  brandImg: {
    width: 20,
    height: 20,
    borderRadius: 20,
  },
  brandTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  productDescription: {
    color: "white",
    fontSize: 12,
  },
  actionBtnContainer: {
    position: "absolute",
    bottom: 5,
    right: 0,
  },
  actionBtn: {
    paddingTop: 20,
  },
});

export default Product;
