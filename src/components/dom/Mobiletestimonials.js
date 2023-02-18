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
import Marquee from "react-fast-marquee";

export default function Mobiletestimonial() {
  return (
    <Box
      display={{ base: "flex", md: "none" }}
      flexDir={"column"}
      backgroundColor={"#203244"}
      width={"full"}
      gap={"2rem"}
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

      <Box
        display={"flex"}
        flexDir={"column"}
        position={"relative"}
        gap={"10px"}
        mb={"4.5rem"}
      >
        <Marquee
          gradientWidth={"10px"}
          gradientColor={"rgb(137, 153, 160)"}
          speed={25}
          pauseOnHover={true}
          pauseOnClick={true}
        >
          <Box display={"flex"} flexDir={"row"} px={"5px"} gap={"10px"}>
            {Testimonialcontent.map((item, index) => {
              return <TestimonialsComponent key={index} {...item} />;
            })}
          </Box>
        </Marquee>
        <Marquee
          gradientWidth={"10px"}
          gradientColor={"rgb(137, 153, 160)"}
          speed={15}
          pauseOnHover={true}
          pauseOnClick={true}
        >
          <Box
            display={"flex"}
            right={"50%"}
            flexDir={"row"}
            px={"5px"}
            gap={"10px"}
            position={"relative"}
            left={"-110px"}
          >
            {Testimonialcontent.map((item, index) => {
              return <TestimonialsComponent key={index} {...item} />;
            })}
          </Box>
        </Marquee>
        <Marquee
          gradientWidth={"10px"}
          gradientColor={"rgb(137, 153, 160)"}
          speed={20}
          pauseOnHover={true}
          pauseOnClick={true}
        >
          <Box
            display={"flex"}
            flexDir={"row"}
            px={"5px"}
            gap={"10px"}
            position={"relative"}
            left={"-150px"}
          >
            {Testimonialcontent.map((item, index) => {
              return <TestimonialsComponent key={index} {...item} />;
            })}
          </Box>
        </Marquee>
      </Box>
    </Box>
  );
}
