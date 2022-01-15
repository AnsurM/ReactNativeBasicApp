import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBox from "../Components/SearchBox";
import { useResults } from "../hooks/useResults";

export default function SearchScreen() {
  const [term, setTerm] = useState("");
  const [isLoading, errorMessage, results, onSearchApi] = useResults();

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchBox
          term={term}
          placeholder={"What would you like to eat today?"}
          isLoading={isLoading}
          onChange={setTerm}
          onSubmit={() => onSearchApi(term)}
        />
        {!!errorMessage.length && (
          <Text style={styles.errorMsg}>{errorMessage}</Text>
        )}
        {!!results.length && (
          <Text style={styles.resultsMsg}>
            Search results: {results.length}
          </Text>
        )}
      </View>
      <View style={styles.resultContainer1}></View>
      <View style={styles.resultContainer2}></View>
      <View style={styles.resultContainer3}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    margin: 15,
    marginTop: 40,
  },
  resultContainer1: {
    marginBottom: 10,
    flex: 2,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "orange",
  },
  resultContainer2: {
    marginBottom: 10,
    flex: 2,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "purple",
  },
  resultContainer3: {
    flex: 2,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "black",
  },
  resultsMsg: {
    color: "green",
  },
  errorMsg: {
    color: "red",
  },
});
