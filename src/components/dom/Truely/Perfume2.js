import { Box, Heading, Image, Text } from "@chakra-ui/react";
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
      display={{ xl: "flex", lg: "none" }}
      gap="10"
      marginTop="5rem"
      position="absolute"
      right="20%"
      top="20%"
    >
      <Box>
        <Image maxH="20.22vw" src="/images/perfume2.png" />
      </Box>
      <Box>
        <Heading
          fontFamily="novara"
          fontSize={{ base: "34px", lg: "3vw", xl: "4rem" }}
          fontWeight={{ base: "500", md: "1000px", lg: "600px" }}
          maxW="14vw"
        >
          Eau de parfum spray
        </Heading>
        <Text
          maxW="15.5vw"
          fontFamily="gilroy"
          fontSize={{ lg: "0.8vw ", base: "16px" }}
          lineHeight={{ lg: "1vw", base: "17px" }}
          letterSpacing={{ lg: "2.5px", base: "6%" }}
        >
          Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod
          temp incididunt ut labore et dolore magna aliqua.
        </Text>
      </Box>
    </Box>
  );
};

export default Perfume2;
