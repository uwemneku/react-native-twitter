import { StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import Avatar from "../Avatar";
import { Ionicons } from "@expo/vector-icons";
import { BottomTabParamList } from "types/types";

const CustomTabBarHeader = ({
  navigation,
  layout,
  options,
  route,
}: BottomTabHeaderProps) => {
  const isScreenActive = (name: keyof BottomTabParamList) =>
    route.name === name;
  return (
    <View
      style={[
        styles.container,
        { display: isScreenActive("Messages") ? "none" : "flex" },
      ]}
    >
      <Avatar size={40} />

      {/* ===========Middle content starts here - (render content based on screen in focus)================== */}
      <View style={styles.center}>
        {isScreenActive("Home") && (
          <Ionicons
            name="ios-logo-twitter"
            style={{ alignSelf: "center" }}
            size={25}
          />
        )}
        {isScreenActive("Spaces") && <Text style={styles.title}>Twitter</Text>}
        {isScreenActive("Notifications") && (
          <Text style={styles.title}>Notifications</Text>
        )}
        {isScreenActive("Search") && <SearchBar />}
      </View>
      {/* ===========Middle content starts here================== */}

      <View>
        {isScreenActive("Home") ? (
          <Ionicons name="ios-star-outline" size={23} />
        ) : (
          <Ionicons name="settings-outline" size={23} />
        )}
      </View>
    </View>
  );
};

const SearchBar = () => (
  <View style={styles.searchBar}>
    <Text>Search Twitter</Text>
  </View>
);
export default CustomTabBarHeader;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
  },
  center: {
    flex: 1,
    marginHorizontal: 20,
  },
  searchBar: {
    backgroundColor: "gray",
    borderRadius: 40,
    padding: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
  },
});
