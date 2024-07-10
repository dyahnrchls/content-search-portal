import React from "react";
import {
  Box,
  Flex,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  Image,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import Logo from "../../assets/logo.png";

export interface NavbarProps {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar = ({ keyword, setKeyword }: NavbarProps) => {
  return (
    <>
      <Box bg="black" px={4}>
        <Flex h={16} alignItems={"center"}>
          <Box>
            <Image src={Logo} width={100} />
          </Box>

          <Flex alignItems={"center"} width="100%" justify="center">
            <Stack direction={"row"} spacing={7}>
              <Stack spacing={4}>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Search2Icon color="gray.300" />
                  </InputLeftElement>
                  <Input
                    bgColor="gray.900"
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Search.."
                    width="55vw"
                  />
                </InputGroup>
              </Stack>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
