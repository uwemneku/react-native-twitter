import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "navigation/DrawerNavigation";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}
