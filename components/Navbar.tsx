import { Flex, Text, Image, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  const logoSize = useBreakpointValue({ base: 16, md: 14 });

  return (
    <Flex
      bg="black"
      px={6}
      py={{ base: 1, md: 2 }}
      justifyContent="center"
      alignItems="center"
      borderBottom="1px solid"
      borderColor="blackAlpha.300"
      gap={2}
      zIndex={2}
    >
      <Image
        w={logoSize}
        h={logoSize}
        src="/chesslogo.svg"
        alt="chess Logo"
        objectFit="contain"
      />
      <Text fontSize={{ base: "14px", md: "16px" }}>Chess App</Text>
    </Flex>
  );
};

export default Navbar;
