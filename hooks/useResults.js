import React, { useState, useEffect } from "react";
import { getBusinesses } from "../apis/yelp";

export const useResults = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [results, setResults] = useState([]);

  const onSearchApi = async (term = "") => {
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

  return [isLoading, errorMessage, results, onSearchApi];
};
