import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Link,
  Text,
  Wrap,
} from "@chakra-ui/react";

import Scene1 from "./Scene1";
import Fragrances from "./Fragrances";
import { motion } from "framer-motion";
// import Link from "next/link";
const FirstPage = (props) => {
  const blueBgHandler = () => {
    props.setBlueActive("#122333");
    props.setRedActive("");
    props.setWhiteActive("");
  };
  const redBgHandler = () => {
    props.setRedActive("#D24443");
    props.setBlueActive("");
    props.setWhiteActive("");
  };
  const whiteBghandler = () => {
    props.setWhiteActive("#fff");
    props.setRedActive("");
    props.setBlueActive("");
  };
  return (
    <>
      <Box
        id="/home"
        h="100vh"
        bg={props.activeBg}
        display="felx"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <Box
          display="flex"
          justifyContent="space-evenly"
          paddingTop="1rem"
          h="100px"
          alignItems="center"
        >
          <Box
            color={props.fontColor}
            _hover={{
              cursor: "pointer",
            }}
          >
            <Image filter={props.filter} h={{lg:"70px",base:'40px'}} src="./yousufAbeerLogo.svg" />
          </Box>
          <Box
            minW="50vw"
            fontFamily="novara"
            fontWeight="400"
            color={props.fontColor}
            display={{ lg: "flex", base: "none" }}
            fontSize="26px"
            justifyContent="space-evenly"
          >
            <Link
              _hover={{
                border: "none",
              }}
              href="#home"
            >
              Home
            </Link>
            <Link
              _hover={{
                border: "none",
              }}
              href="#ourstory"
            >
              Our Story
            </Link>
            <Link
              _hover={{
                border: "none",
              }}
              href="#truely"
            >
              Products
            </Link>
            <Link
              _hover={{
                border: "none",
              }}
              href="#brands"
            >
              Testimonials
            </Link>
          </Box>
          <Link
            href="#contact"
            _hover={{
              border: "none",
            }}
            display={{ lg: "flex", base: "none" }}
            s
            color={props.fontColor}
            fontFamily="novara"
            fontSize="26px"
            position="relative"
            padding="16px"
          >
            {" "}
            Contact US{" "}
            <Image
              as={motion.img}
              whileHover={{ scale: 1.02 }}
              position="absolute"
              top="2"
              w="270px"
              left="1"
              filter={props.filter}
              src="./images/border.png"
            />
          </Link>
        </Box>

        <Box
          display={{ lg: "flex", base: "none" }}
          flexDir="column"
          minH="200px"
          justifyContent="space-between"
          position="absolute"
          bottom="100px"
          left="50px"
          color={props.fontColor}
        >
          <Image filter={props.filter} src="/fb.svg" w="50px" />
          <Image filter={props.filter} src="/insta.svg" w="50px" />
          <Image filter={props.filter} src="/twitter.svg" w="50px" />
        </Box>

        <Box
          color="white"
          position="absolute"
          // bottom="100"
          display="flex"
          flexDir={{ lg: "column", base: "row" }}
          gap="1rem"
          bottom={{ lg: "100", base: "200px" }}
          right={{ lg: "400px", base: "100px" }}
          w={{ lg: "inherit", base: "250px" }}
        >
          <Heading
            fontSize={{ lg: "5rem", base: "2rem" }}
            fontFamily="novara"
            fontWeight="400"
            color={props.fontColor}
          >
            500+
          </Heading>
          <Text
            color={props.fontColor}
            fontWeight="400"
            w="250px"
            fontSize={{ lg: "24px", base: "14px" }}
          >
            Positive reviews from celebrities all over the world.
          </Text>
        </Box>

        <Box
          display="flex"
          flexDir={{ lg: "column", base: "row" }}
          gap={{ lg: "0", base: "1rem" }}
          minH="200px"
          justifyContent="space-around"
          position="absolute"
          right={{ lg: "100", base: "180px" }}
          // top="350"
          bottom={{ base: "-40px" , lg:'500px'}}
        >
          <Button
            onClick={blueBgHandler}
            _hover={{
              bg: "#122333",
            }}
            bg="#122333"
            w={{ lg: "50px", base: "25px" }}
            h={{ lg: "50px", base: "40px" }}
            border="1px solid white"
            borderRadius="50%"
          />
          <Button
            onClick={redBgHandler}
            _hover={{
              bg: "#D24443",
            }}
            bg="#D24443"
            w={{ lg: "50px", base: "25px" }}
            h={{ lg: "50px", base: "40px" }}
            border="1px solid white"
            borderRadius="50%"
          />
          <Button
            onClick={whiteBghandler}
            _hover={{
              bg: "white",
            }}
            bg="#fff"
            w={{ lg: "50px", base: "25px" }}
            h={{ lg: "50px", base: "40px" }}
            border="1px solid "
            borderColor={props.fontColor}
            borderRadius="50%"
          />
        </Box>
        <Box  
          display={{ lg: "none", base: "flex" }}
          fontFamily="gilroy"
          fontSize="20px"
          color={props.fontColor}
          w='100%'
          justifyContent='space-around'
          position='absolute'
          bottom='50'
          fontWeight='300'
        >
          <Text>FACEBOOK</Text>
          <Text>INSTAGRAM</Text>
          <Text>TWITTER</Text>
        </Box>
        {/* <Heading color={props.fontColor}>Hello world</Heading> */}
      </Box>
    </>
  );
};

export default FirstPage;
