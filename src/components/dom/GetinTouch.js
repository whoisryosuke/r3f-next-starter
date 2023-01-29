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
import { motion } from "framer-motion";
import React from "react";

const formControlVariant = {
  hidden: {
    opacity: 0,
    y: "100px",
  },
  visible: {
    opacity: 1,
    y: "0",
    transition: {
      // duration: 1.5,
      // delay: 0.5,
      staggerChildren: 0.25,
    },
  },
};
const childVariant = {
  hidden: {
    opacity: 0,
    x: "-100px",
  },
  visible: {
    opacity: 1,
    x: "0",
    transition: {
      ease: "easeInOut",
    },
  },
};
const Inputt = () => {
  return (
    <Input
      // as={motion.input}
      // variants={childVariant}
      // initial={{ borderBottom: " 0 " }}
      // whileInView={{
      //   borderBottom: "2px solid white",
      // }}
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
      as={motion.div}
      viewport={{ once: true }}
      variants={childVariant}
      initial="hidden"
      whileInView="visible"
      color="#585757"
      fontSize={{ lg: "1.8rem", base: "18px" }}
      margin="0"
      fontFamily="gilroy"
      lineHeight="1.5rem"
      fontWeight="400"
      marginTop={{ lg: "2rem", base: "10px" }}
      marginBottom={{ lg: "1rem", base: "10px" }}
    >
      {children}
    </FormLabel>
  );
};

const Btn = ({ children }) => {
  return (
    <Button
      as={motion.div}
      viewport={{ once: true }}
      variants={childVariant}
      initial="hidden"
      whileInView="visible"
      display="flex"
      bg=" #D9D9D9"
      borderRadius="0"
      fontFamily="novara"
      w={{ lg: "360px", base: "200px" }}
      h={{ lg: "70px", base: "40px" }}
      marginTop="4rem"
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
    <Box bg="#122333" h={{ lg: "100vh", base: "auto" }} w="100vw">
      <Box
        maxW="2000px"
        color="white"
        p="3rem"
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        margin="auto"
      >
        <Heading fontFamily="novara" fontSize={{ lg: "4rem", base: "2rem" }}>
          Get in touch! we’d love to hear from you
        </Heading>
        <Text
          fontFamily="gilroy"
          fontSize={{ lg: "30px", base: "18px" }}
          fontWeight="300"
          marginTop={{ lg: "3rem", base: "0" }}
        >
          Fill out the quick form and we will be in touch with lightening speed.{" "}
        </Text>
        <Box display="flex" gap={{ lg: "20rem", base: 0 }}>
          <FormControl
            as={motion.div}
            viewport={{ once: true }}
            variants={formControlVariant}
            initial="hidden"
            whileInView="visible"
            marginTop={{ lg: "1rem", base: "2rem" }}
          >
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

          <Box
            as={motion.div}
            initial={{ opacity: 0, x: "300px" }}
            whileInView={{
              opacity: 1,
              x: "0",
              transition: { duration: "0.8" },
            }}
            viewport={{ once: true }}
            maxW="700px"
            h="350px"
            boxSizing="border-box"
          >
            <Image
              display={{ lg: "inline-block", base: "none" }}
              marginTop="5rem"
              w="5550px"
              h="350px"
              src="/images/perfume6.png"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GetinTouch;
