import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.tigerhall.net/v2/",
  cache: new InMemoryCache(),
});

const ApolloProvider = ({ children }) => {
  return <Provider client={client}>{children}</Provider>;
};

export default ApolloProvider;
