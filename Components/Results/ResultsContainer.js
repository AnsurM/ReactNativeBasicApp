import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ResultItem from "./ResultItem";

export default function ResultsContainer({ title, results }) {
  if (!results.length) return null;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(result) => result.id}
        data={results}
        renderItem={({ item }) => <ResultItem result={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 7,
    marginHorizontal: 15,
  },
});
