import axios from "axios";

const yelp = axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  timeout: 4000,
  headers: {
    Authorization:
      "Bearer 16v_uqLa1xsrfAu3m8QtpeLewOjQWr4qYwO2q3FDse3i33cy4LaWllZd5QW_te4XjaEp1e4FnWYXYWGXvrToLAoCuwg79sVW4JxH2AbVThukwJsN-bw7fG9bxENuXnYx",
  },
});

export const getBusinesses = (params) => yelp.get("/search", { params });

export default yelp;
