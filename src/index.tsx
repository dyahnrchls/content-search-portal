import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import ApolloProvider from "./ApolloProvider";

const theme = extendTheme({
  colors: {
    tigerOrange: {
      50: "#FFF9F6",
      400: "#FFA97A",
      600: "#FF5900",
    },
  },
});

ReactDOM.render(
  <ApolloProvider>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
