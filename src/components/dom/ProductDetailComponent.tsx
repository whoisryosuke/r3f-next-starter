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
import { motion } from "framer-motion";

const ProductDetailComponent = ({ productData }) => {
  console.log(productData);

  const easing = [0.6, -0.05, 0.01, 0.99];
  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.6,
        ease: easing,
      },
    },
  };
  const stagger = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 2,
        delay: 1,
        delayChildren: 2,
        duration: 1,
        // when: "beforeChildren", //use this instead of delay
      },
    },
  };
  return (
    <Box
      // as={motion.div}
      // variants={stagger}
      // initial="initial"
      // animate="animate"
      w="100vw"
      maxW={"1920px"}
      mx={"auto"}
      h="100vh"
      position="relative"
      display={{ md: "flex", base: "none" }}
      gap={"2rem"}
    >
      <Box
        as={motion.div}
        initial={{ x: -200, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            delay: 0.2,
            duration: 0.5,
          },
        }}
        w="45%"
        h="100%"
        px="2rem"
        py="2rem"
        display={{ md: "flex", base: "none" }}
      >
        <Image w="800px" maxH="100%" objectFit="cover" src={productData?.src} />
      </Box>
      <Box
        as={motion.div}
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        // maxW="800px"
        maxW="45vw"
        h="95vh"
        display="flex"
        flexDir="column"
        justifyContent={{ xl: "space-around", md: "space-around" }}
      >
        <Box display="flex" w={"full"} justifyContent="space-between">
          <Heading
            as={motion.h1}
            variants={fadeInUp}
            fontSize={{ md: "5vw", "2xl": "96px" }}
            py="2rem"
            // px="2rem"
            fontFamily="novara"
            // w="41vw"
          >
            {productData?.productName}
          </Heading>
          <Text
            // position="absolute"
            // top="0"
            // right={{ xl: "100", md: "-50" }}
            fontFamily="gilroy"
            fontSize={{ md: "1.85vw", "2xl": "36px" }}
            py="2.5rem"
            // paddingRight="5rem"
            fontWeight="500"
          >
            {productData?.price}
          </Text>
        </Box>

        <Text
          as={motion.p}
          // variants={fadeInUp}
          fontSize={{ md: "1.8vw", "2xl ": "18px" }}
          fontFamily="gilroy"
          lineHeight="30px"
        >
          {productData?.productDiscription}
        </Text>

        <Box
          as={motion.p}
          variants={fadeInUp}
          display="flex"
          marginTop="1rem"
          fontSize={{ md: "1.8vw", "2xl ": "18px" }}
          gap="2rem"
          alignItems="center"
        >
          <Text as={"label"} className="container">
            50 ml/1.7 oz
            <input type="radio" checked name="radio" />
            <span style={{ marginTop: "2px" }} className="checkmark"></span>
          </Text>
          <label className="container">
            100 ml/3.4 oz
            <input type="radio" name="radio" />
            <span style={{ marginTop: "2px" }} className="checkmark"></span>
          </label>
        </Box>
        <Heading
          as={motion.p}
          variants={fadeInUp}
          fontFamily="gilroy"
          fontSize={{ md: "2vw", "2xl": "32px" }}
          fontWeight="600"
        >
          Available Notes
        </Heading>
        <Box
          as={motion.div}
          // variants={fadeInUp}
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
          // as={Link}
          as={motion.a}
          variants={fadeInUp}
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
          background="linear-gradient(to right, white 50%, black 50%)"
          backgroundSize="200% 100%"
          backgroundPosition="right"
          _hover={{
            backgroundPosition: "left",
            color: "black",
          }}
          transition="all 0.5s cubic-bezier(0.22, 1, 0.36, 1)"
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
    </Box>
  );
};

export default ProductDetailComponent;
