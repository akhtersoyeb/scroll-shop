import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

interface OrderProps {
  imagePath: string;
  title: string;
  status: "order placed" | "shipped" | "delivered";
  dateOfDelivery: string;
}

const Order = (props: OrderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.productDetails}>
        <Image
          style={styles.productImg}
          source={{ uri: props.imagePath }}
          resizeMode="contain"
          resizeMethod="resize"
        />
        <View style={{ width: 8 }} />
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={styles.orderDetails}>
        <Text style={styles.status}>{props.status}</Text>
        <View style={{ height: 4 }} />
        <Text style={styles.date}>
          {props.status === "delivered"
            ? "Delivered On "
            : "Expected delivery "}
          {props.dateOfDelivery}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondaryBackground,
    width: "90%",
    alignSelf: "center",
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    marginBottom: 10,
  },
  productDetails: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  productImg: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 16,
    color: "white",
    width: 79,
  },
  orderDetails: {
    alignItems: "center",
  },
  status: {
    color: "white",
    fontSize: 12,
    fontWeight: "700",
    textTransform: "capitalize",
    width: 100,
    textAlign: "center",
  },
  date: {
    color: "#C0C0C0",
    fontSize: 10,
    width: 100,
    textAlign: "center",
    textTransform: "capitalize",
  },
});

export default Order;
