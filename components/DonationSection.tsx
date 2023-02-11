import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import PayPalButton from "./PayPalButton";

const DonationSection = () => (
  <Box
    position={{ base: "relative", md: "fixed" }}
    bottom={0}
    width="100%"
    bg="blue.500"
    py={5}
    textAlign="center"
    as={Flex}
    justifyContent="center"
    flexDir="column"
    alignItems="center"
  >
    <Text color="white" mb={4} fontSize={{ base: "12px", md: "16px" }}>
      Please consider donating{" "}
      <u>
        <strong>1€</strong>
      </u>{" "}
      to support the app
    </Text>
    <PayPalButton />
  </Box>
);

export default DonationSection;
