import React from "react";
import {
  CardBody,
  Card as CardComponent,
  CardFooter,
  Flex,
  Icon,
  Image,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { RiProgress3Line } from "react-icons/ri";
import { IoMdHeadset } from "react-icons/io";
import { IoTimeOutline } from "react-icons/io5";
import { Content } from "../../types/content.types";

export interface CardProps {
  data: Content;
  loading: boolean;
}

export const Card = ({ data, loading }: CardProps) => {
  return loading ? (
    <CardComponent width={244} height={272} borderRadius={4}>
      <Stack>
        <Skeleton height={120} />
        <Stack padding={2}>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
      </Stack>
    </CardComponent>
  ) : (
    <CardComponent width={244} borderRadius={4}>
      <Stack position="relative">
        <Flex
          bgColor={"tigerOrange.50"}
          position="absolute"
          padding={2}
          borderTopLeftRadius={4}
          borderBottomRightRadius={4}
          gap={1}
          alignItems="center"
        >
          <Icon as={RiProgress3Line} color="tigerOrange.400" />
          <Text color="black" fontSize={12} as="b">
            30% Completed
          </Text>
        </Flex>
        <Image
          src={data?.image?.uri}
          alt="Green double couch with wooden legs"
          borderTopRadius="lg"
          height={120}
          objectFit="cover"
        />
        <Flex
          position="absolute"
          padding={2}
          borderTopLeftRadius={4}
          borderBottomRightRadius={4}
          gap={1}
          width="100%"
          bottom={0}
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex
            bg="tigerOrange.600"
            borderRadius={100}
            padding={1}
            alignItems="center"
          >
            <IoMdHeadset />
          </Flex>
          <Flex
            bg="rgba(0, 0, 0, 0.7)"
            padding={2}
            gap={1}
            borderRadius={100}
            alignItems="center"
          >
            <IoTimeOutline />
            <Text color="white" fontSize={12} as="b">
              20m
            </Text>
          </Flex>
        </Flex>
      </Stack>
      <CardBody padding={2} bgColor="white" height="fit-content">
        <Stack>
          <Text color="gray" textTransform="uppercase" fontSize={12}>
            {data?.categories?.map((item) => item?.name)?.join(", ")}
          </Text>
          <Text color="black" fontSize={16} as="b" textTransform="capitalize">
            {data?.name}
          </Text>
          <Text color="gray" textTransform="uppercase" fontSize={12}>
            {data?.experts?.map((item) => item?.lastName)?.join(", ")}
          </Text>
          <Text color="gray" textTransform="uppercase" fontSize={12} as="b">
            {data?.experts?.map((item) => item?.company)?.join(", ")}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter
        borderBottomRadius={4}
        bgColor="white"
        justify="flex-end"
        flexWrap="wrap"
        gap={3}
      >
        <Icon as={CiShare2} size={24} color="tigerOrange.600" />
        <Icon as={CiBookmark} size={24} color="tigerOrange.600" />
      </CardFooter>
    </CardComponent>
  );
};

export default Card;
