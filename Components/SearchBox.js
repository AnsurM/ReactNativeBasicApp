import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";

export default function SearchBox({
  term,
  placeholder,
  isLoading,
  onChange,
  onSubmit,
}) {
  return (
    <View style={styles.background}>
      {isLoading ? (
        <AntDesign name="loading1" style={styles.searchIcon} />
      ) : (
        <Feather name="search" style={styles.searchIcon} />
      )}
      <TextInput
        editable={!isLoading}
        style={styles.input}
        placeholder={placeholder}
        value={term}
        onChangeText={onChange}
        onEndEditing={onSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE",
    height: 40,
    borderRadius: 7,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchIcon: {
    alignSelf: "center",
    fontSize: 30,
    marginHorizontal: 15,
  },
  input: {
    flex: 2,
    height: 40,
    fontSize: 18,
  },
});
