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
      flexDir={{ lg: "row", base: "column" }}
      gap={{ lg: "10", base: "0" }}
      position="absolute"
      // marginTop={{ lg: "5rem", base: "10rem" }}
      bottom={{ lg: "0vw", base: "350px" }}
      right={{ lg: "100", base: "-10" }}
    >
      <Box>
        <Image maxW="26vw" src="/images/perfume3.png" />
      </Box>
      <Box>
        <Heading
          fontFamily="novara"
          fontSize="3.3vw"
          fontWeight="500"
          maxW="600px"
          marginTop="20px"
        >
          Eau de parfum spray
        </Heading>
        <Text
          maxW="600px"
          fontFamily="gilroy"
          fontWeight="lighter"
          fontSize="0.93vw"
          lineHeight="1vw"
          letterSpacing="1px"
        >
          Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod
          temp incididunt ut labore et dolore magna aliqua.
        </Text>
      </Box>
    </Box>
  );
};

export default Perfume3;
