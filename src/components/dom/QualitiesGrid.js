import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const textvariantX = {
  first: {
    x: -600,
  },
  second: {
    x: 0,
    transitionDelay: 1,
    transition: {
      delay: 0.2,
      duration: 1.3,
      // ease: easeInOut,
    },
  },
};
// right side
const textvariantY = {
  first: {
    x: 600,
  },
  second: {
    x: 0,
    transitionDelay: 1,
    transition: {
      delay: 0.2,
      duration: 1.3,
    },
  },
};
// line height
const lineheight = {
  initial: {
    scale: 1.2,
  },
  animate: {
    scale: 1,
    transition: {
      delay: 0.2,
      duration: 1.3,
      // ease: easeInOut,
    },
  },
};
export default function QualitiesGrid({
  firsttext,
  secondtext,
  textY,
  secondtextY,
}) {
  return (
    <Box>
      {/* grid item 1 and 3 */}
      <Box
        as={motion.div}
        variants={textvariantX}
        initial={"first"}
        animate={"second"}
        color="white"
        fontFamily={"novara"}
        fontStyle={{ base: "normal" }}
        fontSize={{
          "2xl": "31.5px",
          xl: "1.6rem",
          lg: "1.3rem",
          md: "1rem",
          // "2xl": "2rem",
        }}
        lineHeight={{
          "2xl": "65px",
          // xl: "70px",
          lg: "55px",

          md: "50px",
          // "2xl": "80px",
        }}
        letterSpacing={"2.4px"}
        fontWeight={"400"}
        paddingTop={"10px"}
      >
        {firsttext}
      </Box>
      <Text
        as={motion.div}
        variants={lineheight}
        initial={"initial"}
        animate={"animate"}
        fontFamily={"gilroy"}
        color={"white"}
        fontSize={{
          "2xl": "22px",
          xl: "18px",
          lg: "14px",

          md: "12px",
        }}
        lineHeight={{
          "2xl": "37.5px",
          xl: "30px",
          lg: "30px",
          md: "17px",
        }}
        fontWeight={"hairline"}
        maxH={"150px"}
        // maxW={"500px"}

        letterSpacing={{ xl: "0.01em", md: "0.02em" }}
      >
        {secondtext}
      </Text>
      <Box>
        {/* grid item 4 and 5 */}
        <Box
          as={motion.div}
          variants={textvariantY}
          initial={"first"}
          animate={"second"}
          color="white"
          fontFamily={"novara"}
          fontStyle={{ base: "normal" }}
          fontSize={{
            "2xl": "31.5px",
            xl: "1.6rem",
            lg: "1.3rem",
            md: "1rem",
            // "2xl": "2rem",
          }}
          lineHeight={{
            "2xl": "65px",
            // xl: "70px",
            lg: "55px",

            md: "50px",
            // "2xl": "80px",
          }}
          letterSpacing={"2.4px"}
          fontWeight={"400"}
          paddingTop={"10px"}
        >
          {textY}
        </Box>
        <Text
          as={motion.div}
          variants={lineheight}
          initial={"initial"}
          animate={"animate"}
          fontFamily={"gilroy"}
          color={"white"}
          fontSize={{
            "2xl": "22px",
            xl: "18px",
            lg: "14px",

            md: "12px",
          }}
          lineHeight={{
            "2xl": "37.5px",
            xl: "30px",
            lg: "30px",
            md: "17px",
          }}
          fontWeight={"hairline"}
          maxH={"150px"}
          // maxW={"500px"}

          letterSpacing={{ xl: "0.01em", md: "0.02em" }}
        >
          {secondtextY}
        </Text>
      </Box>
    </Box>
  );
}
