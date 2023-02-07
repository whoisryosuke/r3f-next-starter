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
      bottom={{ lg: "2", base: "40vw" }}
      right={{ lg: "100", base: "50" }}
    >
      <Box
        display="flex"
        justifyContent="flex-end"
        marginRight={{ lg: 0, base: "2rem" }}
      >
        <Image
          maxW={{ lg: "26vw", base: "250px" }}
          h={{ lg: "inherit", base: "110px" }}
          src="/images/perfume3.png"
        />
      </Box>
      <Box display={{ lg: "block", base: "flex" }}>
        <Heading
          fontFamily="novara"
          fontSize={{ lg: "4rem", base: "1.3rem" }}
          fontWeight="500"
          maxW={{ lg: "600px", base: "80px" }}
          marginTop="20px"
        >
          Eau de parfum spray
        </Heading>
        <Text
          maxW={{ lg: "400px", base: "200px" }}
          alignSelf="flex-end"
          fontWeight="300"
          fontFamily="gilroy"
          fontSize={{ lg: "18px ", base: "16px" }}
          lineHeight={{ lg: "18px", base: "17px" }}
          letterSpacing={{ lg: "2px", base: "6%" }}
        >
          Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod
          temp incididunt ut labore et dolore magna aliqua.
        </Text>
      </Box>
    </Box>
  );
};

export default Perfume3;
