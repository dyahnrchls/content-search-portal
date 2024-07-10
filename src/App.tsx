import { Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Card } from "./components/Card/Card";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          padding: 60,
        }}
      >
        <Text fontSize="3xl" as="b" color="white">
          Tigerhall Library
        </Text>
        <div
          style={{ paddingTop: 20, display: "flex", flexWrap: "wrap", gap: 24 }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((item) => (
            <Card key={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
