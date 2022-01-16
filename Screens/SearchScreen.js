import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ResultsContainer from "../Components/Results/ResultsContainer";
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
      </View>
      {results.length > 0 && (
        <ScrollView>
          <ResultsContainer
            title="Cost Effective"
            results={results.filter((result) => result.price === "$")}
          />
          <ResultsContainer
            title="Bit Pricier"
            results={results.filter((result) => result.price === "$$")}
          />
          <ResultsContainer
            title="Premium"
            results={results.filter((result) => result.price === "$$$")}
          />
          <ResultsContainer
            title="Exotic"
            results={results.filter((result) => result.price === "$$$$")}
          />
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    marginHorizontal: 15,
    marginTop: 20,
    marginBottom: 15,
  },
  errorMsg: {
    marginTop: 5,
    color: "red",
  },
});
