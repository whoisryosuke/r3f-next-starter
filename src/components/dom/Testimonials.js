import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  Link,
  Image,
} from "@chakra-ui/react";
import React, { useRef, useEffect } from "react";

import TestimonialsComponent from "../dom/TestimonialComponent";
import Marquee from "react-easy-marquee";
// import TestimonialsCompnent from "../dom/TestimonialComponent";
import Testimonialcontent from "../dom/Testimonialcontent";
export default function Testimonials() {
  const marquee = useRef(null);

  useEffect(() => {
    if (marquee.current) {
      console.log(marquee);
    }
  }, [marquee]);

  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      display={{ base: "none", md: "flex" }}
      // filter={"blur(1px)"}
      bgColor={"#203244"}
      position={"relative"}
      // paddingLeft={"80px"}
      // paddingRight={"80px"}
      overflow={"hidden"}
    >
      {/* <Box marginTop={"100px"}>kjqrk; wher;kh</Box> */}

      <Center position={"absolute"} display={"flex"} zIndex={"1"} w={"100%"}>
        <Image
          src="ellipse 43.png"
          width={"100%"}
          // height={"500px"}
          // height={"100%"}
          // transform={"rotate(360deg)"}
          position={"absolute"}
          filter={"blur(100px)"}
          top={"0"}
        ></Image>
        <Box
          // position={""}
          paddingTop={{ lg: "90px", md: "80px", xl: "100px" }}
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          fontStyle={"normal"}
          color={"white"}
          lineHeight={"60px"}
          textAlign={"center"}
          letterSpacing={"0.1em"}
          height={"147px"}
          w={"80%"}
          textShadow={"1px 1px white"}
        >
          <Heading
            fontFamily={"novara"}
            fontSize={{ xl: "56px", lg: "50px", md: "55px" }}
            fontWeight={"400"}
            w={"95%"}
            zIndex={"1000"}
            // maxW={"1000px"}
          >
            don&apos;t take our word for it.
          </Heading>
          <Heading
            fontFamily={"novara"}
            fontSize={{ xl: "56px", lg: "50px", md: "50px" }}
            fontWeight={"400"}
            w={"95%"}
            zIndex={"1000"}
          >
            trust our customers
          </Heading>
        </Box>
      </Center>
      <Center w={"full"}>
        <Box
          className="track"
          display={"flex"}
          flexDir={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={{ md: "20px", lg: "30px", xl: "35px" }}
          width={"90%"}
          maxW={"1150px"}
          position={"relative"}
        >
          <Box
            className="content"
            display={"flex"}
            flexDir={"column"}
            gap={{ md: "20px", lg: "30px", xl: "35px" }}
            position={"relative"}
            top={"-225px"}
          >
            {Testimonialcontent.map((item, index) => {
              return <TestimonialsComponent key={index} {...item} />;
            })}
          </Box>
          <Box
            className="content"
            display={"flex"}
            flexDir={"column"}
            gap={{ md: "20px", lg: "30px", xl: "35px" }}
            position={"relative"}
            top={"-150px"}
          >
            {Testimonialcontent.map((item, index) => {
              return <TestimonialsComponent key={index} {...item} />;
            })}
          </Box>
          <Box
            className="content"
            display={"flex"}
            flexDir={"column"}
            gap={{ md: "20px", lg: "30px", xl: "35px" }}
            position={"relative"}
            top={"-50px"}
          >
            {Testimonialcontent.map((item, index) => {
              return <TestimonialsComponent key={index} {...item} />;
            })}
          </Box>
        </Box>
      </Center>
      {/* </Box> */}

      {/* <Box
        display={"flex"}
        justifyContent={"center"}
        gap={"20px"}
        zIndex={"-10"}
      >
        <Box
          // maxW={"1400px"}
          display={"flex"}
          flexeightDir={"row"}
          maxW={"1500px"}
          gap={"40px"}
          // position={"absolute"}
          justifyContent={"center"}
        >
          <Box className="marquee" direction="up" maxW="450px" height={"90%"}>
            <Box
              display={"flex"}
              flexDir={"column"}
              gap={"30px"}
              // marginBottom={"-10rem"}
            >
              {Testimonialcontent.map((item, index) => {
                return <TestimonialsComponent key={index} {...item} />;
              })}
            </Box>
          </Box> */}
      {/* <marquee
        ref={marquee}
        direction="down"
        maxW="400px"
        height={"2123px"}
        overflow={"hidden"}
      >
        <Box
          display={"flex"}
          flexDir={"column"}
          gap={"30px"}
          // marginBottom={"-10rem"}
        >
          {Testimonialcontent.map((item, index) => {
            return <TestimonialsComponent key={index} {...item} />;
          })}
        </Box>
      </marquee>
      <marquee direction="up" maxW="400px" height={"90%"} overflow={"hidden"}>
        <Box
          display={"flex"}
          flexDir={"column"}
          gap={"30px"}
          marginBottom={"-10rem"}
        >
          {Testimonialcontent.map((item, index) => {
            return <TestimonialsComponent key={index} {...item} />;
          })}
        </Box>
      </marquee> */}
      {/* </Box> */}
      {/* </Box> */}
    </Box>
  );
}
