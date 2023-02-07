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
      position={{ lg: "absolute", base: "relative" }}
      // marginTop={{ lg: "5rem", base: "10rem" }}
      bottom={{ lg: "100", base: "0" }}
      right={{ lg: "100", base: "0" }}
    >
      <Box
        display="flex"
        justifyContent="flex-end"
        marginRight={{ lg: 0, base: "2rem" }}
      >
        <Image
          maxW={{ lg: "600px", base: "250px" }}
          h={{ lg: "250px", base: "inherit" }}
          src="/images/perfume3.png"
        />
      </Box>
      <Box
        display={{ lg: "block", base: "flex" }}
        justifyContent={"flex-end"}
        alignItems="flex-start"
        marginTop="20px"
      >
        <Heading
          fontFamily="novara"
          fontSize={{ base: "34px", lg: "3vw", xl: "4rem" }}
          fontWeight="500"
          maxW={{ lg: "600px", base: "150px" }}
        >
          Eau de parfum spray
        </Heading>
        <Text
          maxW={{ lg: "350px", base: "200px" }}
          alignSelf="flex-end"
          fontWeight="300"
          fontFamily="gilroy"
          fontSize={{ lg: "0.8vw", base: "14px" }}
          lineHeight={{ lg: "1vw", base: "17px" }}
          letterSpacing={{ lg: "2.5px", base: "6%" }}
          h={{ base: "150px", lg: "inherit" }}
        >
          Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod
          temp incididunt ut labore et dolore magna aliqua.
        </Text>
      </Box>
    </Box>
  );
};

export default Perfume3;
