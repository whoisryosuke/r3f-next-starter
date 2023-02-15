import {
  Box,
  chakra,
  FormControl,
  Heading,
  Image,
  Link,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { link } from "fs";
import { button } from "leva";
import React from "react";

const ProductDetailComponent = ({ productData }) => {
  console.log(productData);

  return (
    <Box
      w="100vw"
      h="100vh"
      position="relative"
      display={{ md: "flex", base: "none" }}
    >
      <Box
        w="45%"
        h="100%"
        px="2rem"
        py="2rem"
        display={{ md: "flex", base: "none" }}
      >
        <Image w="800px" maxH="100%" objectFit="cover" src={productData?.src} />
      </Box>
      <Box
        // maxW="800px"
        maxW="45vw"
        h="95vh"
        display="flex"
        flexDir="column"
        justifyContent="space-between"
      >
        <Heading
          fontSize="4.1vw"
          py="2rem"
          px="2rem"
          fontFamily="novara"
          w="41vw"
        >
          {productData?.productName}
        </Heading>

        <Text fontSize="18px" fontFamily="gilroy" lineHeight="30px">
          {productData?.productDiscription}
        </Text>

        <Box
          display="flex"
          fontSize="24px"
          marginTop="1rem"
          gap="2rem"
          alignItems="center"
        >
          <label className="container">
            50 ml/1.7 oz
            <input type="radio" checked name="radio" />
            <span style={{ marginTop: "2px" }} className="checkmark"></span>
          </label>
          <label className="container">
            100 ml/3.4 oz
            <input type="radio" name="radio" />
            <span style={{ marginTop: "2px" }} className="checkmark"></span>
          </label>
        </Box>
        <Heading fontFamily="gilroy" fontSize="32px" fontWeight="600">
          Available Notes
        </Heading>
        <Box
          // marginTop="1rem"
          display="flex"
          fontFamily="gilroy"
          fontSize="16px"
          w="300px"
          flexWrap="wrap"
          gap="4"
          cursor="pointer"
        >
          <Text
            _hover={{
              bg: "black",
              color: "white",
            }}
            border="1px solid black"
            p="1rem 1.5rem"
            borderRadius="50px"
          >
            Top Note
          </Text>
          <Text
            _hover={{
              bg: "white",
              color: "black",
            }}
            border="1px solid black"
            bg="black"
            color="white"
            p="1rem 1.5rem"
            borderRadius="50px"
          >
            Medium Note
          </Text>{" "}
          <Text
            _hover={{
              bg: "white",
              color: "black",
            }}
            bg="black"
            border="1px solid black"
            color="white"
            p="1rem 1.5rem"
            borderRadius="50px"
          >
            Base Note
          </Text>
        </Box>
        <Box
          as={Link}
          href="/#contact"
          // marginTop="2rem"
          w="100%"
          h="5vw"
          bg="black"
          color="white"
          textAlign="center"
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          fontSize="3.2vw"
          fontFamily="novara"
          p="1rem"
          cursor="pointer"
        >
          Contact store
          <Image
            display={{ lg: "inline", base: "none" }}
            src="/images/whiteArrow.png"
            color="white"
          />
          <Image
            w="40px"
            display={{ lg: "none", base: "inline" }}
            src="/images/arrowIcon.png"
            color="white"
          />
        </Box>
      </Box>

      <Text
        position="absolute"
        top="0"
        right={{ xl: "100", md: "-50" }}
        fontFamily="gilroy"
        fontSize="36px"
        py="4rem"
        paddingRight="5rem"
        fontWeight="500"
      >
        {productData?.price}
      </Text>
    </Box>
  );
};

export default ProductDetailComponent;
