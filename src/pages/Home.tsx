import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Card from "../components/Card/Card";
import { useHomeUtil } from "./Home.util";

const Home: React.FC = () => {
  const { content, loading, navbarProps } = useHomeUtil();

  return (
    <Stack bgColor="black">
      <Navbar {...navbarProps} />
      <Stack padding={10}>
        <Text fontSize="3xl" as="b" color="white">
          Tigerhall Library
        </Text>
        <Flex padding={5} justifyContent="center">
          <Flex flexWrap="wrap" gap={6} justifyContent="center">
            {content?.map((item) => (
              <Card key={item} data={item} loading={loading} />
            ))}
          </Flex>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default Home;