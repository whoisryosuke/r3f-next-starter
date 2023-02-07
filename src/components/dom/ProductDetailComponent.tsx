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
      <Box w="40%" py="4rem" px="2rem">
        <Image boxSize="840px" src={productData?.src} />
      </Box>
      <Box w="50vw">
        <Heading
          fontSize="5rem"
          py="4rem"
          px="2rem"
          fontFamily="novara"
          w="600px"
        >
          {productData?.productName}
        </Heading>
        <Text fontSize="1.2rem" fontFamily="gilroy" lineHeight="1.8rem">
          {productData?.productDiscription}
        </Text>
        <RadioGroup defaultValue="2" marginTop="2rem" marginBottom="2rem">
          <Stack spacing={5} direction="row">
            <Radio colorScheme="gray" value="1">
              50 ml/1.7 oz
            </Radio>
            <Radio colorScheme="green" value="2">
              100 ml/3.38 oz
            </Radio>
          </Stack>
        </RadioGroup>
        <Heading fontFamily="gilroy">Available notes</Heading>
        <Box
          marginTop="1rem"
          display="flex"
          fontFamily="gilroy"
          w="300px"
          flexWrap="wrap"
          gap="5"
        >
          <Text
            border="1px solid black"
            px="1.5rem"
            py="1rem"
            borderRadius="50px"
          >
            Top Note
          </Text>{" "}
          <Text
            border="1px solid black"
            px="1.5rem"
            py="1rem"
            borderRadius="50px"
          >
            Medium Note
          </Text>{" "}
          <Text
            bg="black"
            color="white"
            px="2rem"
            py="1rem"
            borderRadius="50px"
          >
            Base Note
          </Text>
        </Box>
        <Box
          marginTop="2rem"
          w="100%"
          h="6rem"
          bg="black"
          color="white"
          textAlign="center"
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          fontSize="3.5rem"
          fontFamily="novara"
          p="1rem"
        >
          Contact store
          <Image src="/images/whiteArrow.png" color="white" />
        </Box>
      </Box>
      <Box>
        <Text fontFamily="gilroy" fontSize="36px" py="4rem">
          {productData?.price}
        </Text>
      </Box>
    </Box>
  );
};

export default ProductDetailComponent;
