import React from "react";
import { Box, Image, Text, Flex, Button, Link } from "@chakra-ui/react";

const DownloadSection = () => {
  return (
    <Box
      maxW="1200px"
      mx="auto"
      p={{ base: 5, md: 10 }}
      bg="#181818"
      borderRadius={{ base: 0, md: 14 }}
    >
      <Flex flexWrap="wrap">
        <Box width={{ base: "100%", md: "50%" }} p={{ base: 3, md: 5 }}>
          <Text
            fontSize={{ base: "13px", md: "16px" }}
            mb={5}
            textAlign="center"
          >
            This is the unofficial desktop app of the{" "}
            <a href="https://chess.com">
              <u>chess.com</u>
            </a>{" "}
            browser game. At the moment the app runs the default game. Stay
            tuned for future updates.
          </Text>
          <Image src="/chessgame.jpg" />
        </Box>
        <Flex
          direction={{ base: "column", md: "column" }}
          width={{ base: "100%", md: "50%" }}
          p={{ base: 3, md: 5 }}
          gap={6}
          justifyContent="center"
          alignItems="center"
        >
          <Text>Choose your platform and download the app:</Text>

          <Flex direction="column" align="center" gap={5}>
            <Button
              minW="100%"
              width={{ base: "100%", md: "auto" }}
              bg="#3D6CFF"
              color="#FFFFFF"
              _hover={{ bg: "#3C5BFF" }}
            >
              <Flex align="center">
                <Image
                  src="/windows-logo.png"
                  w="24px"
                  h="24px"
                  mr={5}
                  objectFit="contain"
                />
                <Link
                  href="/ChessApp-win32-x64.rar"
                  display="flex"
                  alignItems="center"
                  h="inherit"
                  w="inherit"
                  _hover={{ textDecor: "none" }}
                  target={"_blank"}
                  px={4}
                >
                  Download for Windows
                </Link>
              </Flex>
            </Button>
            <Button
              minW="100%"
              width={{ base: "100%", md: "auto" }}
              bg="#000"
              color="#FFFFFF"
            >
              <Flex align="center">
                <Image
                  src="/mac-logo.png"
                  w="24px"
                  h="24px"
                  mr={5}
                  objectFit="contain"
                />
                <Link
                  href="/ChessApp-macOS.rar"
                  display="flex"
                  alignItems="center"
                  h="inherit"
                  w="inherit"
                  _hover={{ textDecor: "none" }}
                  target={"_blank"}
                  px={4}
                >
                  Download for MacOS
                </Link>
              </Flex>
            </Button>
            <Button
              minW="100%"
              width={{ base: "100%", md: "auto" }}
              bg="#000000"
              color="#FFFFFF"
              _hover={{ bg: "#fff", color: "#000" }}
            >
              <Flex align="center">
                <Image
                  src="/linux-logo.png"
                  w="24px"
                  h="24px"
                  mr={5}
                  objectFit="contain"
                />
                <Link
                  href="/ChessApp-linux-x64.rar"
                  display="flex"
                  alignItems="center"
                  h="inherit"
                  w="inherit"
                  _hover={{ textDecor: "none" }}
                  target={"_blank"}
                  px={4}
                >
                  Download for Linux
                </Link>
              </Flex>
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default DownloadSection;
