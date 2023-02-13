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
    y: "20px",
  },
  visible: {
    opacity: 1,
    y: "0",
    // transition: {
    //   // duration: 1.5,
    //   // delay: 0.5,
    //   type:'tween',
    //   staggerChildren: 0.25,
    // },
    // transition:{ type: "spring", stiffness: 1000000},
  },
};
const childVariant = {
  hidden: {
    opacity: 0,
    x: "-20px",
  },
  visible: {
    opacity: 1,
    x: "0",
    // transition: {
    //   stype:'',
    //   duration:'1.2',
    //   ease: "easeInOut",
    // },
    transition: {
      type: "tween",
      stiffness: 100,
      ease: "easeInOut",
      delay: "0.3",
    },
  },
};
const Inputt = ({ fontColor }) => {
  return (
    <Input
      // as={motion.input}
      // variants={childVariant}
      // initial={{ borderBottom: " 0 " }}
      // whileInView={{
      //   borderBottom: "2px solid white",
      // }}
      variant="unstyled"
      // borderBottom ={` 1px solid ${fontColor}`}
      borderBottom="2px solid "
      borderBottomColor={fontColor}
      borderRadius="2px"
      w={{ lg: "430px", base: "200px" }}
      marginTop={{ lg: "5px", base: "00" }}
      fontSize="1.5rem"
      marginBottom={{ lg: "49px", base: "0.5rem" }}
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
      marginBottom={{ lg: "0px", base: "0" }}
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
      marginTop="30px"
      marginLeft={{ base: "0", lg: "36px" }}
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
    <Box
      id="contact"
      bg={props.activeBg}
      h={{ lg: "auto", base: "auto" }}
      w="100vw"
    >
      <Box
        maxW="2000px"
        color={props.fontColor}
        p="3rem"
        display="flex"
        flexDir="column"
        fontWeight="300"
        justifyContent="center"
        alignItems="center"
        margin="auto"
      >
        <Heading
          fontFamily="novara"
          fontWeight="300"
          letterSpacing="1.6px"
          fontSize={{ lg: "60px", base: "2rem" }}
          textAlign="center"
        >
          Get in touch! we’d love to hear from you
        </Heading>
        <Text
          fontFamily="gilroy"
          fontSize={{ lg: "32px", base: "18px" }}
          fontWeight="300"
          marginTop={{ lg: "22px", base: "0" }}
          letterSpacing={{ lg: "2px", base: "inherit" }}
        >
          Fill out the quick form and we will be in touch with lightening speed.{" "}
        </Text>
        <Box
          display="flex"
          minW={{ lg: "82vw", base: "inherit" }}
          justifyContent="space-around"
        >
          <FormControl
            as={motion.div}
            viewport={{ once: true }}
            variants={formControlVariant}
            initial="hidden"
            whileInView="visible"
            marginTop={{ lg: "48px", base: "2rem" }}
          >
            <Label>Name</Label>
            <Inputt fontColor={props.fontColor} />

            <Label>Contact number</Label>
            <Inputt />
            <Label>Email address</Label>
            <Inputt />
            <Label>Your message</Label>
            <Inputt />

            <Btn>Submit </Btn>
          </FormControl>

          <Image
            as={motion.img}
            initial={{ opacity: 0, x: "300px" }}
            whileInView={{
              opacity: 1,
              x: "0",
              transition: { duration: "0.8" },
            }}
            viewport={{ once: true }}
            display={{ xl: "inline-block", base: "none" }}
            marginTop="160px"
            w="750px"
            h="400px"
            src="/images/perfume6.png"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default GetinTouch;
