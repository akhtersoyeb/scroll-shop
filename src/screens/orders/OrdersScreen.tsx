import { ScrollView, Text, View } from "react-native";
import Order from "../../components/Order";

import { styles } from "./styles";

const OrdersScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.list}> */}
      <ScrollView contentContainerStyle={{ paddingVertical: 30 }}>
        <Order
          imagePath="https://picsum.photos/200"
          title="Gardening Pot"
          status="order placed"
          dateOfDelivery="7th Jun"
        />
        <Order
          imagePath="https://picsum.photos/200"
          title="Gardening Pot"
          status="shipped"
          dateOfDelivery="7th Jun"
        />

        <Order
          imagePath="https://picsum.photos/200"
          title="Gardening Pot"
          status="shipped"
          dateOfDelivery="7th Jun"
        />

        <Text style={styles.deliverText}>Delivered</Text>

        <Order
          imagePath="https://picsum.photos/200"
          title="Gardening Pot"
          status="delivered"
          dateOfDelivery="7th Jun"
        />
        <Order
          imagePath="https://picsum.photos/200"
          title="Gardening Pot"
          status="delivered"
          dateOfDelivery="7th Jun"
        />
      </ScrollView>
      {/* </View> */}
    </View>
  );
};

export default OrdersScreen;
