import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ResultItem({ result }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.description}>
        {result.rating} Rating, {result.review_count} Reviews
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
  },
  image: {
    width: 200,
    height: 160,
    borderRadius: 5,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 5,
  },
  description: {
    marginTop: 1,
  },
});
