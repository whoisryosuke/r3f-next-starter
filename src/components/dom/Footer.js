import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      w="100vw"
      bg="#0B1C2C"
      h={{ lg: "75vh", base: "100vh" }}
      display="flex"
      flexDir="column"
      justifyContent="space-between"
    >
      <Box
        maxW="1800px"
        w="100vw"
        // padding={{ lg: "5rem 0 0 5rem", base: "2rem 0 0 2rem" }}
        color="white"
        margin="auto"
      >
        <Image
          src="/yousufAbeerLogo.svg "
          paddingLeft={{ lg: "0 ", base: "35px" }}
          h={{ base: "50px", lg: "64px" }}
        />

        <Flex
          margin="auto"
          flexWrap="wrap"
          // border="1px solid white"
          minH={{ lg: "inherit", base: "70vh" }}
          maxW="80vw"
          padding={{ lg: "20px 0 0 75px", base: "0" }}
          flexDir={{ lg: "row", base: "column" }}
          justifyContent="space-between"
          // gap={{ lg: "0rem", base: "2.5rem" }}
          marginTop={{ lg: "5rem", base: "4rem" }}
        >
          <Box>
            <Heading fontFamily="novara" fontWeight="300" fontSize="26px">
              Address
            </Heading>

            {/* for border  */}
            <Text
              style={{
                marginTop: "10px",
                width: "50px",
                height: "1px",
                border: "1px solid white",
              }}
            />
            <Text
              maxW="170px"
              marginTop={{ lg: "2rem", base: "10px" }}
              fontFamily="gilroy"
              lineHeight={{ lg: "25px", base: "20px" }}
              fontSize={{ lg: "inherit", base: "14px" }}
              letterSpacing="1px"
            >
              Excel Solitaire Building #8-2-684/B/P/12&13, Rd no:12 Banjara
              Hills, Hyderabad - 34, Telangana, India
            </Text>
          </Box>
          <Box>
            <Heading fontFamily="novara" fontWeight="300" fontSize="26px">
              Phone
            </Heading>
            <Text
              style={{
                marginTop: "10px",
                width: "50px",
                height: "1px",
                border: "1px solid white",
              }}
            />
            <Text
              maxW="150px"
              marginTop={{ lg: "2rem", base: "10px" }}
              fontFamily="gilroy"
              lineHeight="25px"
              letterSpacing="1px"
            >
              +91-8121 55 1613 +91-8121 55 1613
            </Text>
          </Box>
          <Box>
            <Heading fontFamily="novara" fontWeight="300" fontSize="26px">
              Emial
            </Heading>
            <Text
              style={{
                marginTop: "10px",
                width: "50px",
                height: "1px",
                border: "1px solid white",
              }}
            />
            <Text
              maxW="190px"
              marginTop={{ lg: "26px ", base: "10px" }}
              fontFamily="gilroy"
              lineHeight="25px"
              letterSpacing="1px"
            >
              info@yousufabeer.com
            </Text>
          </Box>
          <Box>
            <Heading fontFamily="novara" fontWeight="300" fontSize="26px">
              Follows us
            </Heading>
            <Text
              style={{
                marginTop: "10px",
                width: "50px",
                height: "1px",
                border: "1px solid white",
              }}
            />
            <Text
              maxW="100px"
              marginTop={{ lg: "2rem", base: "10px" }}
              fontFamily="gilroy"
              lineHeight="25px"
              letterSpacing="1px"
            >
              Facebook Twitter Instagram LinkedIn
            </Text>
          </Box>
        </Flex>

        {/* copyrights */}
      </Box>
      <Flex
        w="100vw"
        flexDir={{ lg: "row", base: "column" }}
        h={{ lg: "80px", base: "auto" }}
        bg="#162A3D"
        marginTop={{ lg: "5rem", base: "0" }}
        color="#7295B7"
        alignItems="center"
        justifyContent="space-around"
        flexWrap="wrap"
      >
        <Box fontFamily="gilroy" fontSize={{ lg: "18px", base: "16px" }}>
          All Rights Reserved.
        </Box>
        <Box fontFamily="gilroy" fontSize={{ lg: "18px", base: "16px" }}>
          Copyright © 2023. YousufAbeer
        </Box>
        <Box fontFamily="gilroy" fontSize={{ lg: "18px", base: "16px" }}>
          Created with passion by Websleak
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
