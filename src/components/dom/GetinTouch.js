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
      w={{ md: "24vw", base: "200px" }}
      marginTop={{ md: "5px", base: "00" }}
      fontSize={{ md: "1.25vw", "3xl": "1.5rem" }}
      marginBottom={{ md: "2vw", "3xl": "3rem", base: "0.5rem" }}
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
      fontSize={{ md: "1.5vw", "3xl": "1.8rem", base: "18px" }}
      margin="0"
      fontFamily="gilroy"
      lineHeight={"1.5rem"}
      fontWeight="400"
      marginTop={{ md: "1.5vw", "3xl": "2rem", base: "10px" }}
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
      w={{ md: "18vw", "3xl": "22.5rem", base: "200px" }}
      h={{ md: "3.5vw", "3xl": "", base: "40px" }}
      marginTop={{ md: "1.5vw", "3xl": "30px" }}
      marginLeft={{ base: "0", md: "2.75vw", "3xl": "3rem" }}
      fontSize={{ md: "1.7vw", "3xl": "2rem" }}
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
      // h={{ md: "auto", base: "auto" }}
      w="100%"
    >
      <Box
        maxW="1920px"
        color={props.fontColor}
        p={{ md: "7vw", "3xl": "100px" }}
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
          fontSize={{ "3xl": "4rem", md: "3.35vw", base: "2rem" }}
        >
          Get in touch! we’d love to hear from you
        </Heading>
        <Text
          fontFamily="gilroy"
          fontSize={{ md: "1.75vw", "3xl": "2rem", base: "18px" }}
          fontWeight="300"
          marginTop={{ md: "1.25vw", "3xl": "22px", base: "0" }}
          letterSpacing={{ md: "2px", base: "inherit" }}
        >
          Fill out the quick form and we will be in touch with lightening speed.{" "}
        </Text>
        <Box
          display="flex"
          w={"full"}
          maxW={{ md: "1600px", base: "inherit" }}
          marginTop={{ md: "4.5vw", "3xl": "100px", base: "2rem" }}
          justifyContent="space-between"
        >
          <FormControl
            as={motion.div}
            viewport={{ once: true }}
            variants={formControlVariant}
            initial="hidden"
            whileInView="visible"
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
            alignSelf={"center"}
            whileInView={{
              opacity: 1,
              x: "0",
              transition: { duration: "0.8" },
            }}
            viewport={{ once: true }}
            display={{ md: "inline-block", base: "none" }}
            // marginTop="160px"
            w={{ md: "39vw", "3xl": "750px" }}
            // h="auto"
            // h={{ md: "32vh", "3xl": "400px" }}
            maxH="400px"
            src="/images/perfume6.png"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default GetinTouch;
