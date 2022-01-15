import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { getBusinesses } from "../apis/yelp";
import SearchBox from "../Components/SearchBox";

export default function SearchScreen() {
  const [term, setTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [results, setResults] = useState([]);

  const onSearchApi = async () => {
    setIsLoading(true);

    const response = await getBusinesses({
      term,
      location: "san jose",
    });

    if (response.data?.businesses) setResults(response.data?.businesses);
    else setErrorMessage("Something went wrong, please try later.");

    setIsLoading(false);
  };

  useEffect(() => {
    onSearchApi();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchBox
          term={term}
          placeholder={"What would you like to eat today?"}
          isLoading={isLoading}
          onChange={setTerm}
          onSubmit={onSearchApi}
        />
        {!!errorMessage.length && (
          <Text style={styles.errorMsg}>{errorMessage}</Text>
        )}
        {!!results.length && (
          <TouchableOpacity onPress={() => setResults([])}>
            <Text style={styles.resultsMsg}>
              Search results: {results.length}
            </Text>
          </TouchableOpacity>
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
