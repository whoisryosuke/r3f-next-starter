import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
  Wrap,
} from "@chakra-ui/react";
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
    <Box
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
        <Box color={props.fontColor}>
          <Image
           
           filter={props.filter}
            h='70px'
            src="./yousufAbeerLogo.svg"
          />
        </Box>
        <Box
          minW="50vw"
          fontFamily="novara"
          fontWeight="400"
          color={props.fontColor}
          display="flex"
          fontSize="26px"
          justifyContent="space-evenly"
        >
          <Text>Home</Text>
          <Text>Our Story</Text>
          <Text>Products</Text>
          <Text>Testimonials</Text>
        </Box>
        <Box
          color={props.fontColor}
          fontFamily="novara"
          fontSize="26px"
          position="relative"
          padding="16px"
        >
          {" "}
          Contact US{" "}
          <Image
            position="absolute"
            top="2"
            w="270px"
            left="1"
            filter={props.filter}
            src="./images/border.png"
          />
        </Box>
      </Box>

      <Box
        display="flex"
        flexDir="column"
        minH="200px"
        justifyContent="space-between"
        position="absolute"
        bottom="100px"
        left="50px"
        color={props.fontColor}
      >
        <Image  filter={props.filter} src="/fb.svg" w="50px" />
        <Image  filter={props.filter} src="/insta.svg" w="50px" />
        <Image  filter={props.filter} src="/twitter.svg" w="50px" />
      </Box>

      <Box color="white" position="absolute" bottom="100" right="400px">
        <Heading
          fontSize="5rem"
          fontFamily="novara"
          fontWeight="400"
          color={props.fontColor}
        >
          500+
        </Heading>
        <Text fontSize="24px " color={props.fontColor} w="250px">
          Positive reviews from celebrities all over the world.
        </Text>
      </Box>

      <Box
        display="flex"
        flexDir="column"
        minH="200px"
        justifyContent="space-around"
        position="absolute"
        right="100"
        top="350"
      >
        <Button
          onClick={blueBgHandler}
          _hover={{
            bg: "#122333",
          }}
          bg="#122333"
          w="50px"
          h="50px"
          border="1px solid white"
          borderRadius="50%"
        />
        <Button
          onClick={redBgHandler}
          _hover={{
            bg: "#D24443",
          }}
          bg="#D24443"
          w="50px"
          h="50px"
          border="1px solid white"
          borderRadius="50%"
        />
        <Button
          onClick={whiteBghandler}
          _hover={{
            bg: "white",
          }}
          bg="#fff"
          w="50px"
          h="50px"
          border="1px solid "
          borderColor={props.fontColor}
          borderRadius="50%"
        />
      </Box>
      {/* <Heading color={props.fontColor}>Hello world</Heading> */}
    </Box>
  );
};

export default FirstPage;
