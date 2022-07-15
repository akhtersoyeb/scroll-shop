import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { AuthProvider, useAuth } from "./src/contexts/AuthProvider";
import { Spinner } from "./src/components/atoms/Spinner";

import { AppNavigator } from "./src/navigators/AppNavigator";
import { AuthNavigator } from "./src/navigators/AuthNavigator";

/* polyfills */
/** URL polyfill */
import "react-native-url-polyfill/auto";

const App = () => {
  return (
    <AuthProvider>
      <Root />
    </AuthProvider>
  );
};
export default App;

const Root: React.FC = () => {
  const { currentUser, loading } = useAuth();
  console.log(`current user: ${currentUser}, loading: ${loading}`);

  return (
    <NavigationContainer>
      {loading
        ? <LoadingScreen />
        : currentUser !== null
        ? <AppNavigator />
        : <AuthNavigator />}
    </NavigationContainer>
  );
};

export const LoadingScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Spinner />
    </View>
  );
};
