import React from "react";
import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  Link,
  Image,
} from "@chakra-ui/react";
import TestimonialsComponent from "./TestimonialComponent";
import Testimonialcontent from "./Testimonialcontent";
export default function Mobiletestimonial() {
  return (
    <Box
      display={{ base: "flex", md: "none" }}
      flexDir={"column"}
      backgroundColor={"#203244"}
      width={"100vw"}
      height={"100vh"}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        flexDir={"column"}
        // width={"100vw"}
        align={"center"}
        width={"100vw"}
        // maxW={"250px"}
        fontSize={"20px"}
        lineHeight={"20px"}
        color={"white"}
        padding={"30px"}
        gap={"0px"}
      >
        <Heading
          fontFamily={"novara"}
          fontSize={"20px"}
          // w={"250px"}
          // height={"55px"}
          align={"center"}
          fontWeight={"400"}
          letterSpacing={"0.07em"}
        >
          {" "}
          don&apos;t take our word for it.
        </Heading>
        <Heading
          fontFamily={"novara"}
          fontSize={"20px"}
          fontWeight={"400"}
          width={"250px"}
          letterSpacing={"0.07em"}
          align={"center"}
        >
          {" "}
          trust our customers
        </Heading>
      </Box>

      {/* <Box className="marquee" width={"100vw"}>
        <Box
          className="track"
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"20px"}
        >
          <Box
            className="content"
            gap={"10px"}
            display={"flex"}
            flexDir={"row"}
            width={"200px"}
            // height={"200px"}
          >
            {Testimonialcontent.map((item, index) => {
              return <TestimonialsComponent key={index} {...item} />;
            })}
          </Box>
          <Box className="content" display={"flex"} flexDir={"row"}>
            {Testimonialcontent.map((item, index) => {
              return <TestimonialsComponent key={index} {...item} />;
            })}
          </Box>
          <Box className="content" display={"flex"} flexDir={"row"}>
            {Testimonialcontent.map((item, index) => {
              return <TestimonialsComponent key={index} {...item} />;
            })}
          </Box>
        </Box>
      </Box> */}
      {/* <Box display={"flex"} flexDir={"column"}>
        <marquee height={"200px"}>
          <Box display={"flex"} flexDir={"row"} gap={"10px"}>
            {Testimonialcontent.map((item, index) => {
              return <TestimonialsComponent key={index} {...item} />;
            })}
          </Box>
        </marquee> */}
      {/* <Box display={"flex"} flexDir={"row"}>
            {Testimonialcontent.map((item, index) => {
              return <TestimonialsComponent key={index} {...item} />;
            })}
          </Box>
          <Box display={"flex"} flexDir={"row"}>
            {Testimonialcontent.map((item, index) => {
              return <TestimonialsComponent key={index} {...item} />;
            })}
          </Box>
        </marquee> */}
      {/* </Box> */}
    </Box>
  );
}
