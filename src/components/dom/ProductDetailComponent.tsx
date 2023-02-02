import {
  Box,
  Heading,
  Image,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const ProductDetailComponent = ({ productData }) => {
  console.log(productData);

  return (
    <Box w="100vw" h="100vh" display="flex">
      <Box
        w="40%"
        py="4rem"
        px="2rem"
        display={{ lg: "inline-block", base: "none" }}
      >
        <Image boxSize="840px" src={productData?.src} />
      </Box>
      <Box w={{ lg: "50vw", base: "100vw" }}>
        <Heading
          fontSize={{ lg: "5rem", base: "2rem" }}
          py={{ lg: "4rem", base: "1rem" }}
          px="2rem"
          fontFamily="novara"
          w="600px"
        >
          {productData?.productName}
        </Heading>
        <Box
          py={{ lg: "4rem", base: "1rem" }}
          px={{ lg: "2rem", base: "1rem" }}
          display={{ lg: "none", base: "inline-block" }}
        >
          <Image w="300px" h="400px" src={productData?.src} />
        </Box>
        <Text
          fontSize={{ lg: "1.2rem", base: "0.8rem" }}
          fontFamily="gilroy"
          px={{ lg: "0", base: "1rem" }}
          lineHeight={{ lg: "1.8rem", base: "1rem" }}
        >
          {productData?.productDiscription}
        </Text>
        <RadioGroup
          defaultValue="2"
          marginTop={{ lg: "2rem", base: "10px" }}
          marginBottom={{ lg: "2rem", base: "10px" }}
        >
          <Stack spacing={5} direction="row" px={{ lg: "0", base: "1rem" }}>
            <Radio colorScheme="gray" value="1">
              50 ml/1.7 oz
            </Radio>
            <Radio colorScheme="green" value="2">
              100 ml/3.38 oz
            </Radio>
          </Stack>
        </RadioGroup>
        <Heading fontFamily="gilroy" px={{ lg: "0", base: "1rem" }}>
          Available notes
        </Heading>
        <Box
          marginTop="1rem"
          display="flex"
          fontFamily="gilroy"
          fontSize={{ lg: "16px", base: "10px" }}
          w={{ lg: "300px", base: "100%" }}
          flexWrap="wrap"
          gap={{ lg: "5", base: "2" }}
          px={{ lg: "0", base: "1rem" }}
        >
          <Text
            border="1px solid black"
            p={{ lg: "1rem 1.5rem", base: "0.7rem 0.7rem" }}
            h={{ lg: "inherit", base: "40px" }}
            borderRadius="50px"
          >
            Top Note
          </Text>{" "}
          <Text
            border="1px solid black"
            p={{ lg: "1rem 1.5rem", base: "0.7rem 0.7rem" }}
            h={{ lg: "inherit", base: "40px" }}
            borderRadius="50px"
          >
            Medium Note
          </Text>{" "}
          <Text
            bg="black"
            color="white"
            p={{ lg: "1rem 1.5rem", base: "0.7rem 0.7rem" }}
            h={{ lg: "inherit", base: "40px" }}
            borderRadius="50px"
          >
            Base Note
          </Text>
        </Box>
        <Box
          marginTop="2rem"
          w="100%"
          h={{ lg: "6rem", base: "2rem" }}
          bg={{ lg: "black", base: "white" }}
          color={{ lg: "white", base: "black" }}
          textAlign="center"
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          fontSize={{ lg: "3.5rem", base: "2rem" }}
          fontFamily="novara"
          p="1rem"
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
      <Box display={{ lg: "inline-block", base: "none" }}>
        <Text fontFamily="gilroy" fontSize="36px" py="4rem">
          {productData?.price}
        </Text>
      </Box>
    </Box>
  );
};

export default ProductDetailComponent;
