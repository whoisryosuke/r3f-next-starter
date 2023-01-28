import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Inputt = () => {
  return (
    <Input
      variant="unstyled"
      borderBottom="2px solid white"
      borderRadius="2px"
      w={{ lg: "430px", base: "200px" }}
      marginTop="5px"
      fontSize="1.5rem"
    />
  );
};

const Label = ({ children }) => {
  return (
    <FormLabel
      color="#585757"
      fontSize={{ lg: "1.8rem", base: "18px" }}
      margin="0"
      fontFamily="gilroy"
      lineHeight="1.5rem"
      fontWeight="400"
      marginTop={{ lg: "1rem", base: "10px" }}
    >
      {children}
    </FormLabel>
  );
};

const Btn = ({ children }) => {
  return (
    <Button
      display="block"
      bg=" #D9D9D9"
      borderRadius="0"
      fontFamily="novara"
      w={{ lg: "360px", base: "100px" }}
      h={{ lg: "70px", base: "40px" }}
      marginTop="2rem"
      fontSize="2rem"
      letterSpacing="3px"
      color="#0F0D0E"
      fontWeight="500"
    >
      {children}
    </Button>
  );
};
const GetinTouch = (props) => {
  return (
    <Box bg="#122333" w="100vw" h="100vh">
      <Box
        color="white"
        p="3rem"
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading fontFamily="novara" fontSize={{ lg: "4rem", base: "2rem" }}>
          Get in touch! we’d love to hear from you
        </Heading>
        <Text
          fontFamily="gilroy"
          fontSize="1.5rem"
          marginTop={{ lg: "5rem", base: "0" }}
        >
          Fill out the quick form and we will be in touch with lightening speed.{" "}
        </Text>
        <Box display="flex">
          <FormControl marginTop={{ lg: "5rem", base: "2rem" }}>
            <Label>Name</Label>
            <Inputt />

            <Label>Contact number</Label>
            <Inputt />
            <Label>Email address</Label>
            <Inputt />
            <Label>Your message</Label>
            <Inputt />

            <Btn>Submit </Btn>
          </FormControl>
          <Image></Image>
        </Box>
      </Box>
    </Box>
  );
};

export default GetinTouch;
