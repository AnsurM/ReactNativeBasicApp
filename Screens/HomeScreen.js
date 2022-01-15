import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchScreen from "./SearchScreen";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <SearchScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#3EB489",
    flex: 1,
  },
});
