import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import ApolloProvider from "./ApolloProvider";

ReactDOM.render(
  <ApolloProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
