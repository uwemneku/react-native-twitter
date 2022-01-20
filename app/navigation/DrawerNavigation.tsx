import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { RootStackParamList } from "../types/types";
import HomeBottomTabsNavigator from "./HomeBottomTabsNavigator";
import { Ionicons } from "@expo/vector-icons";

const { Navigator, Screen } = createDrawerNavigator<RootStackParamList>();

const DrawerNavigation = () => {
  return (
    <Navigator
      drawerContent={CustomDrawerContent}
      screenOptions={{ headerShown: false }}
    >
      <Screen name="HomeTabs" component={HomeBottomTabsNavigator} />
    </Navigator>
  );
};

const CustomDrawerContent = ({
  descriptors,
  navigation,
  state,
}: DrawerContentComponentProps) => {
  return <View></View>;
};

export default DrawerNavigation;
const drawerContent: { name: keyof RootStackParamList; icon: JSX.Element }[] = [
  {
    name: "Profile",
    icon: <Ionicons name="person-outline" size={24} color="black" />,
  },
  {
    name: "List",
    icon: <Ionicons name="md-list-outline" size={24} color="black" />,
  },
  {
    name: "Topics",
    icon: <Ionicons name="chatbubble-outline" size={24} color="black" />,
  },
  {
    name: "Bookmarks",
    icon: <Ionicons name="bookmark-outline" size={24} color="black" />,
  },
  {
    name: "Moments",
    icon: <Ionicons name="flash-outline" size={24} color="black" />,
  },
  {
    name: "Monetization",
    icon: <Ionicons name="cash-outline" size={24} color="black" />,
  },
];

const styles = StyleSheet.create({});
