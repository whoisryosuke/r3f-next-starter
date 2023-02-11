import { Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      w="full"
      bg="#0B1C2C"
      // h={{ md: "75vh", base: "100vh" }}
      display="flex"
      flexDir="column"
      justifyContent="space-between"
    >
      <Box
        maxW="1920px"
        w="full"
        // padding={{ md: "5rem 0 0 5rem", base: "2rem 0 0 2rem" }}
        color="white"
        margin="auto"
        py={{ base: "3rem", lg: "5.5rem" }}
        pb={{ base: "7rem" }}
      >
        <Image
          src="/yousufAbeerLogo.svg "
          marginTop={{ base: "25px" }}
          paddingLeft={{ base: "5vw", "2xl": "2.5vw" }}
          h={{ base: "50px", md: "64px" }}
        />

        <Flex
          margin="auto"
          flexWrap="wrap"
          // border="1px solid white"

          maxW={{ base: "90vw", lg: "85vw", xl: "80vw", "2xl": "75vw" }}
          // padding={{ md: "20px 0 0 75px", base: "0" }}
          flexDir={{ md: "row", base: "column" }}
          justifyContent={{ md: "space-between" }}
          gap={{ md: "0", lg: "1rem", base: "5rem" }}
          marginTop={{ md: "5rem", base: "4rem" }}
          fontWeight={"300"}
        >
          <Box>
            <Heading
              fontFamily="novara"
              fontWeight="300"
              fontSize={{ base: "", md: "22px", lg: "26px" }}
            >
              Address
            </Heading>

            {/* for border  */}
            <Text
              style={{
                marginTop: "2.5px",
                width: "3rem",
                height: "1px",
                border: "1px solid white",
              }}
            />
            <Text
              maxW={{ base: "15ch", lg: "25ch" }}
              marginTop={{ md: "2rem", base: "10px" }}
              fontFamily="gilroy"
              lineHeight={{ md: "25px", base: "20px" }}
              fontSize={{ md: "inherit", base: "14px" }}
              letterSpacing="1px"
            >
              Excel Solitaire Building #8-2-684/B/P/12&13, Rd no:12 Banjara
              Hills, Hyderabad - 34, Telangana, India
            </Text>
          </Box>
          <Box>
            <Heading
              fontFamily="novara"
              fontWeight="300"
              fontSize={{ base: "", md: "22px", lg: "26px" }}
            >
              Phone
            </Heading>

            {/* for border  */}
            <Text
              style={{
                marginTop: "2.5px",
                width: "3rem",
                height: "1px",
                border: "1px solid white",
              }}
            />
            <Text
              maxW="15ch"
              marginTop={{ md: "2rem", base: "10px" }}
              fontFamily="gilroy"
              lineHeight={{ md: "25px", base: "20px" }}
              fontSize={{ md: "inherit", base: "14px" }}
              letterSpacing="1px"
            >
              +91-8121 55 1613 +91-8121 55 1613
            </Text>
          </Box>
          <Box>
            <Heading
              fontFamily="novara"
              fontWeight="300"
              fontSize={{ base: "", md: "22px", lg: "26px" }}
            >
              Email
            </Heading>

            {/* for border  */}
            <Text
              style={{
                marginTop: "2.5px",
                width: "3rem",
                height: "1px",
                border: "1px solid white",
              }}
            />
            <Text
              maxW={{ base: "15ch", lg: "25ch" }}
              marginTop={{ md: "2rem", base: "10px" }}
              fontFamily="gilroy"
              lineHeight={{ md: "25px", base: "20px" }}
              fontSize={{ md: "inherit", base: "14px" }}
              letterSpacing="1px"
            >
              info@yousufabeer.com
            </Text>
          </Box>
          <Box>
            <Heading
              fontFamily="novara"
              fontWeight="300"
              fontSize={{ base: "", md: "22px", lg: "26px" }}
            >
              Follow Us
            </Heading>

            {/* for border  */}
            <Text
              style={{
                marginTop: "2.5px",
                width: "3rem",
                height: "1px",
                border: "1px solid white",
              }}
            />
            <Text
              maxW="10ch"
              marginTop={{ md: "2rem", base: "10px" }}
              fontFamily="gilroy"
              lineHeight={{ md: "25px", base: "20px" }}
              fontSize={{ md: "inherit", base: "14px" }}
              letterSpacing="1px"
            >
              Facebook Twitter Instagram LinkedIn
            </Text>
          </Box>
        </Flex>

        {/* copyrights */}
      </Box>
      <Center w={"full"} bg="#162A3D">
        <Flex
          w="full"
          maxW={"1920px"}
          flexDir={{ md: "row", base: "column" }}
          h={{ md: "80px", base: "auto" }}
          color="#7295B7"
          bg="#162A3D"
          alignItems="center"
          justifyContent="space-around"
          flexWrap="wrap"
          py={"0.5rem"}
          px={"1rem"}
        >
          <Box fontFamily="gilroy" fontSize={{ md: "18px", base: "16px" }}>
            All Rights Reserved.
          </Box>
          <Box fontFamily="gilroy" fontSize={{ md: "18px", base: "16px" }}>
            Copyright © 2023. YousufAbeer
          </Box>
          <Box fontFamily="gilroy" fontSize={{ md: "18px", base: "16px" }}>
            Created with passion by Websleak
          </Box>
        </Flex>
      </Center>
    </Box>
  );
};

export default Footer;
