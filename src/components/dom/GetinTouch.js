import {
  Box,
  Button,
  Flex,
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
      w={{ lg: "430px", base: "90vw", md: "430px" }}
      marginTop={{ lg: "5px", base: "00" }}
      fontSize="1.2rem"
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
      // color="#585757"
      // color={"whiteAlpha.500"}
      filter={"invert(100%)"}
      fontSize={{ lg: "1.5rem", base: "18px" }}
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
      w={{ lg: "430px", base: "90vw", md: "430px" }}
      h={{ lg: "70px", base: "40px" }}
      marginTop="30px"
      // marginLeft={{ base: "0", lg: "36px" }}
      fontSize={{ md: "2rem", base: "20px" }}
      letterSpacing="3px"
      color="#0F0D0E"
      fontWeight="500"
      // _hover={{ backgroundColor: "black", color: "white" }}
      background="linear-gradient(to right, black 50%, white 50%)"
      backgroundSize="200% 100%"
      backgroundPosition="right"
      _hover={{
        backgroundPosition: "left",
        color: "white",
      }}
      transition="all 0.5s cubic-bezier(0.22, 1, 0.36, 1)"
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
      // bgColor={"black"}
      h={{ lg: "auto", base: "auto" }}
      w="100vw"
    >
      <Box
        // maxW="2000px"
        maxW={"1500px"}
        color={props.fontColor}
        p="3rem"
        display="flex"
        flexDir="column"
        fontWeight="300"
        justifyContent="center"
        alignItems="center"
        margin="auto"
      >
        <Box display={{ base: "flex" }} flexDir={"row"}>
          <Image
            src={"rectangle 87.png"}
            justifyContent={"flex-start"}
            position={"absolute"}
            left={"0px"}
            width={{ base: "50px", sm: "70px" }}
            bottom={"690px"}
            display={{ lg: "none" }}
          ></Image>
          <Heading
            fontFamily="novara"
            fontWeight="300"
            letterSpacing="1.6px"
            fontSize={{ lg: "60px", base: "30px", md: "40px" }}
            textAlign="center"
            maxW={{ base: "200px", sm: "fit-content" }}
          >
            Get in touch! we’d love to hear from you
          </Heading>
          <Image
            src={"rectangle.png"}
            position={"absolute"}
            right={"0"}
            bottom={"690px"}
            width={{ base: "50px", sm: "70px" }}
            display={{ lg: "none" }}
          ></Image>
        </Box>
        <Text
          fontFamily="gilroy"
          fontSize={{ lg: "32px", base: "18px" }}
          fontWeight="400"
          marginTop={{ lg: "25px", base: "28px" }}
          letterSpacing={{ lg: "2px", base: "inherit" }}
          textAlign={{ base: "center" }}
        >
          Fill out the quick form and we will be in touch with lightening speed.{" "}
        </Text>
        <Box
          display="flex"
          minW={{ lg: "82vw", base: "inherit" }}
          justifyContent="space-around"
          gap={"2rem"}
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
            maxW={"700px"}
            h="400px"
            src="/images/perfume6.png"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default GetinTouch;
