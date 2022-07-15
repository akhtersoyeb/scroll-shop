import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Colors from "../constants/Colors";

import HomeScreen from "../screens/home/HomeScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import OrdersScreen from "../screens/orders/OrdersScreen";

export const AppNavigator = () => {
  const Stack = createNativeStackNavigator();
  console.log("running app navigator");

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "My Profile",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontSize: 16,
            fontWeight: "500",
          },
        }}
      />
      <Stack.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          title: "My Orders",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontSize: 16,
            fontWeight: "500",
          },
        }}
      />
    </Stack.Navigator>
  );
};
