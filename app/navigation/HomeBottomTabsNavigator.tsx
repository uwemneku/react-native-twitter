import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabParamList } from "types/types";
import {
  Home,
  Messages,
  Notifications,
  Search,
  Spaces,
} from "screens/HomeTabs";
import { CustomTabBar, CustomTabBarHeader } from "components/navigation";

const { Navigator, Screen } = createBottomTabNavigator<BottomTabParamList>();

const HomeBottomTabsNavigator = () => {
  return (
    <Navigator
      screenOptions={{ headerShown: true, header: CustomTabBarHeader }}
      tabBar={CustomTabBar}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Messages" component={Messages} />
      <Screen name="Notifications" component={Notifications} />
      <Screen name="Search" component={Search} />
      <Screen name="Spaces" component={Spaces} />
    </Navigator>
  );
};

export default HomeBottomTabsNavigator;
