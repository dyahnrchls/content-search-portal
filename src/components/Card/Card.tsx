import React from "react";
import {
  CardBody,
  Card as CardComponent,
  CardFooter,
  Flex,
  Image,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { RiProgress3Line } from "react-icons/ri";
import { IoMdHeadset } from "react-icons/io";
import { IoTimeOutline } from "react-icons/io5";

export const Card = ({ data, loading }) => {
  return loading ? (
    <CardComponent width={244} height={272}>
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
    <CardComponent width={244}>
      <Stack position="relative">
        <Flex
          bgColor={"#FFF9F6"}
          position="absolute"
          padding={2}
          borderTopLeftRadius={4}
          borderBottomRightRadius={4}
          gap={1}
        >
          <RiProgress3Line color="#FFA97A" />
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
            bgColor="#FF5900"
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
      <CardFooter bgColor="white" justify="flex-end" flexWrap="wrap" gap={3}>
        <CiShare2 size={24} color="#FF5900" />
        <CiBookmark size={24} color="#FF5900" />
      </CardFooter>
    </CardComponent>
  );
};

export default Card;
