import { Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { BottomTabParamList } from "types/types";
import { Ionicons } from "@expo/vector-icons";

const CustomTabBar = ({ navigation, state }: BottomTabBarProps) => {
  return (
    <View style={styles.tabBarContainer}>
      {bottomTabContent.map(({ icon, name }) => {
        const isFocused = state.routeNames[state.index] === name;
        const handleNavigation = () => navigation.navigate(name);
        return (
          <Pressable onPress={handleNavigation} key={name}>
            {icon("black", isFocused)}
          </Pressable>
        );
      })}
    </View>
  );
};

const bottomTabContent: {
  name: keyof BottomTabParamList;
  icon: (color: string, isFocused: boolean) => JSX.Element;
}[] = [
  {
    name: "Home",
    icon: (color, isFocused) => (
      <Ionicons
        name={isFocused ? "home" : "home-outline"}
        size={24}
        color="black"
      />
    ),
  },
  {
    name: "Search",
    icon: (color, isFocused) => (
      <Ionicons
        size={24}
        name={isFocused ? "search-sharp" : "search-outline"}
        color="black"
      />
    ),
  },
  {
    name: "Spaces",
    icon: (color, isFocused) => (
      <Ionicons
        name={isFocused ? "ios-apps" : "ios-apps-outline"}
        size={24}
        style={{ transform: [{ rotate: "45deg" }] }}
        color="black"
      />
    ),
  },
  {
    name: "Notifications",
    icon: (color, isFocused) => (
      <Ionicons
        name={isFocused ? "notifications-sharp" : "notifications-outline"}
        size={24}
        color="black"
      />
    ),
  },
  {
    name: "Messages",
    icon: (color, isFocused) => (
      <Ionicons
        name={isFocused ? "mail" : "mail-outline"}
        size={24}
        color="black"
      />
    ),
  },
];
export default CustomTabBar;

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    paddingVertical: 20,
    backgroundColor: "white",
  },
});
