import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { useInView } from "@react-spring/three";
import { motion, useAnimation } from "framer-motion";
import React, { useRef, useEffect } from "react";

const Perfume3 = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const parentVariant = {
    start: {
      y: "100",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <Box
      ref={ref}
      as={motion.div}
      variants={parentVariant}
      initial="start"
      animate={controls}
      display="flex"
      flexDir={{ md: "row", base: "column" }}
      gap={{ md: "3.25vw", "3xl": "3.25rem", base: "3vw" }}
      pt={{ base: "1rem", sm: "1.3rem" }}
      pr={{ md: 0, base: "7vw" }}
      // position={{ md: "absolute", base: "relative" }}
      // marginTop={{ md: "5rem", base: "10rem" }}
      // bottom={{ md: "100", base: "0" }}
      // right={{ md: "100", base: "0" }}
      // w={{ base: "80%", md: "none" }}
    >
      <Box display="flex" justifyContent="flex-end">
        <Image
          maxW={{ md: "30vw", "3xl": "500px", base: "60%" }}
          maxH={{ base: "190px", md: "230px" }}
          src="/images/perfume3.png"
        />
      </Box>
      <Box
        display={{ md: "block", base: "flex" }}
        w="full"
        justifyContent="flex-end"
        alignItems="flex-start"
        gap={{ base: "1.5vw", md: "" }}
      >
        <Heading
          fontFamily="novara"
<<<<<<< HEAD
          // fontSize={{ base: "34px", md: "2.5vw", xl: "3.5rem" }}
          // fontWeight="500"
          // maxW={{ md: "600px", base: "150px" }}
          pb={{ md: "1.15vh", "3xl": "1.25rem" }}
          fontSize={{ base: "6.15vw", md: "3.15vw", "3xl": "3.5rem" }}
          fontWeight="400"
          lineHeight={{ base: "6.5vw", md: "3.5vw", "3xl": "3.8rem" }}
          letterSpacing={"2px"}
          maxWidth={{
            base: "26.5%",
            md: "32vw",
            "2xl": "450px",
            "3xl": "565px",
          }}
          // maxWidth={{ base: "80%", md: "32vw",  }}
=======
          fontSize={{ base: "34px", lg: "3vw", xl: "4rem" }}
          fontWeight="500"
          maxW={{ lg: "600px", base: "150px" }}
          letterSpacing={"2px"}
>>>>>>> 1b7ab967813b32e16af9824494d55498c6a7ac71
        >
          Eau de parfum spray
        </Heading>
        <Text
          fontWeight="400"
          fontFamily="gilroy"
<<<<<<< HEAD
          // maxW="30ch"
          maxWidth={{ base: "47%", md: "32vw", "3xl": "565px" }}
          fontSize={{ base: "3vw", md: "0.8vw ", "3xl": "1rem" }}
          lineHeight={{ base: "3.5vw", md: "1.46vw", "3xl": "1.7rem" }}
          letterSpacing={{ md: "2.5px", base: "6%" }}
=======
          fontSize={{ lg: "0.8vw", base: "14px" }}
          lineHeight={{ lg: "27px", base: "17px" }}
          // letterSpacing={{ lg: "2.5px", base: "6%" }}
          h={{ base: "150px", lg: "inherit" }}
>>>>>>> 1b7ab967813b32e16af9824494d55498c6a7ac71
        >
          "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod
          temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostru exercitation.
        </Text>
      </Box>
    </Box>
  );
};

export default Perfume3;
