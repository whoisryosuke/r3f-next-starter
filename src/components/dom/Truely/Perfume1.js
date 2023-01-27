import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { useInView } from "@react-spring/three";
import { motion, useAnimation } from "framer-motion";
import React, { useRef, useEffect } from "react";

const Perfume1 = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const parentVariant = {
    start: {
      x: "-100",
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
      w="600px"
      ref={ref}
      as={motion.div}
      variants={parentVariant}
      initial="start"
      animate={controls}
    >
      <Box maxW={{ lg: "600px", base: "250px" }} marginTop="2.5vw">
        <Image src="/images/perfume1.png" />
      </Box>
      <Box
        display="flex"
        gap="-100"
        marginLeft="2rem"
        marginTop="1.5rem"
        // border="1px solid white"
        maxW="600px"
      >
        <Heading
          fontFamily="novara"
          fontSize={{ lg: "3.3vw", base: "5vw" }}
          fontWeight="400"
          maxW={{ lg: "15vw", base: "20vw" }}
        >
          Eau de parfum spray
        </Heading>

        <Text
          maxW={{ lg: "300px", base: "220px" }}
          fontFamily="gilroy"
          fontWeight="300"
          marginTop={{ lg: "1rem", base: "0" }}
          fontSize={{ lg: "22px", base: "16px" }}
          lineHeight={{ lg: "1.5rem", base: "1.2rem" }}
          letterSpacing={{ lg: "1.3px", base: "1px" }}
        >
          Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod
          temp incididunt ut labore et dolore magna aliqua.
        </Text>
      </Box>
    </Box>
  );
};

export default Perfume1;
