import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Colors from "./constants/Colors";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Open up App.tsx to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  paragraph: {
    color: "white",
  },
});
