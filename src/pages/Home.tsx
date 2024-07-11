import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Card from "../components/Card/Card";
import { useHomeUtil } from "./Home.util";

const Home: React.FC = () => {
  const { content, loading, error, navbarProps } = useHomeUtil();

  if (loading && !content) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <Stack bgColor="black">
      <Navbar {...navbarProps} />
      <Stack padding={10}>
        <Text fontSize="3xl" as="b" color="white">
          Tigerhall Library
        </Text>
        <Flex padding={5} justifyContent="center">
          <Flex flexWrap="wrap" gap={6} justifyContent="center">
            {content?.map((item, index) => (
              <Card key={index} data={item} loading={loading} />
            ))}
          </Flex>
        </Flex>
      </Stack>
      {loading && <Text>Loading more...</Text>}
    </Stack>
  );
};

export default Home;
