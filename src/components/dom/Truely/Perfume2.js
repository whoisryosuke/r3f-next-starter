import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useInView } from "@react-spring/three";
import { motion, useAnimation } from "framer-motion";
import React, { useRef, useEffect } from "react";

const Perfume2 = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const parentVariant = {
    start: {
      x: "100",
      opacity: 0,
    },
    visible: {
      x: 0,
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
      display={{ md: "flex", base: "none" }}
      gap={{ md: "3vw", "2xl": "3rem" }}
    >
      <Box>
        <Image
          w={{ md: "16vw", "2xl": "250px", "3xl": "280px" }}
          src="/images/perfume2.png"
        />
      </Box>
      <Flex flexDir={"column"} gap={{ md: "0.85vw", "2xl": "1rem" }}>
        <Heading
          fontFamily="novara"
          fontSize={{ md: "3.25vw", "2xl": "3.5rem" }}
          fontWeight="400"
          lineHeight={{ md: "3.8vw", "2xl": "3.8rem" }}
          maxWidth={{ md: "15vw", "2xl": "250px" }}
        >
          Eau de parfum spray
        </Heading>
        <Text
          fontFamily="gilroy"
          maxW="30ch"
          fontSize={{ md: "0.85vw ", "2xl": "1.025rem" }}
          lineHeight={{ md: "1.46vw", "2xl": "1.75rem" }}
          letterSpacing={{ md: "2.5px" }}
        >
          Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod
          temp incididunt ut labore et dolore magna aliqua.
        </Text>
      </Flex>
    </Box>
  );
};

export default Perfume2;
