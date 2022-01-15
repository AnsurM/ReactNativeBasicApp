import React from "react";
import { StyleSheet, View } from "react-native";
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
    flex: 1,
  },
});
