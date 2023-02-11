import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import React from "react";
export default function TestimonialsComponent(props) {
  return (
    <Box
      // gap={"10px"}
      boxSizing="border-box"
      // bgGradient="linear(to-r, gray.300, blue.400, pink.200)"
      // height="500px"
      className={"testimonials"}
      overflowWrap="break-word"
      display={"flex"}
      gap={{ md: "1rem", base: "10px" }}
      maxW={{ md: "440px", base: "300px" }}
      // maxW={"440px"}
      padding={{ md: "20px", base: "10px" }}
      color={"white"}
      borderRadius={{ base: "15px" }}
      // bg="gray"
      // border={"1px ##89A2B8"}
    >
      <Box
        display={"flex"}
        flexDir={"column"}
        gap={{ md: "0.9rem", lg: "1.2rem", xl: "1.5rem", base: "1rem" }}
        // bg="red"
        // maxW="500px"
      >
        <Box display={"flex"} gap={{ md: "1rem", base: "10px" }}>
          <Image
            src={props.pics}
            height={{ xl: "50px", lg: "45px", md: "40px", base: "20px" }}
          ></Image>
          <Box flexDir={"column"} fontFamily={"gilroy"} fontWeight={"400"}>
            <Text
              fontSize={{ xl: "25px", lg: "20px", md: "15px", base: "10px" }}
              lineHeight={{ md: "29px", base: "11px" }}
              letterSpacing={"0.1em"}
            >
              {props.name}
            </Text>
            <Text fontWeight={"400"} fontSize={{ base: "8px" }}>
              <Link color="#8BB6DF" href="#">
                {props.profile}
              </Link>
            </Text>
          </Box>
        </Box>
        <Box>
          <Text
            // w="100px"

            fontSize={{ md: "9px", lg: "12px", xl: "14px", base: "8px" }}
            lineHeight={{ xl: "31px", lg: "25px", md: "20px", base: "12px" }}
            color={"white"}
          >
            {props.discription.firsttext}
            <Text color={"blue"} display={"inline"}>
              {props.discription.spantext}
            </Text>
            {props.discription.secondtext}
          </Text>
        </Box>

        <Box fontSize={{ xl: "15px", lg: "13px", md: "10px", base: "6px" }}>
          {props.time}
        </Box>
      </Box>
    </Box>
  );
}
