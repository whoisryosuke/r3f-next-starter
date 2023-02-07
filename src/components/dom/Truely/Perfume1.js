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
      paddingLeft={{ lg: 0, base: "10px" }}
      display="flex"
      flexDir="column"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Box
        // maxW={{ lg: "31.25vw", base: "250px" }}
        maxW={{ lg: "650px", base: "300px" }}
        marginTop={{ lg: "4rem", base: "0" }}
        paddingLeft={{ lg: 0, base: "20px" }}
      >
        <Image h={{ lg: "230px", base: "100px" }} src="/images/perfume1.png" />
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
          fontSize={{ base: "34px", lg: "3vw", xl: "4rem" }}
          fontWeight="400"
          maxWidth={{ base: "150px", lg: "250px" }}
        >
          Eau de parfum spray
        </Heading>

        <Text
          maxW={{ lg: "15.6vw", base: "220px" }}
          fontFamily="gilroy"
          fontWeight="400"
          marginTop={{ lg: "1rem", base: "0" }}
          fontSize={{ lg: "0.8vw", base: "14px" }}
          lineHeight={{ lg: "1vw", base: "17px" }}
          letterSpacing={{ lg: "2px", base: "6%" }}
        >
          Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod
          temp incididunt ut labore et dolore magna aliqua.
        </Text>
      </Box>
    </Box>
  );
};

export default Perfume1;
