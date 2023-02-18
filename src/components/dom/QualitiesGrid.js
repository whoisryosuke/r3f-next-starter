import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const textvariantX = {
  first: {
    x: -40,
    opacity: 0.8,
  },
  second: {
    x: 0,
    opacity: 1,
    // transitionDelay: 1,
    transition: {
      delay: 0.2,
      duration: 1,
      // ease: easeInOut,
    },
  },
};
// right side
const textvariantY = {
  first: {
    x: 40,
    opacity: 0.8,
  },
  second: {
    x: 0,
    opacity: 1,
    type: "sprin",

    // transitionDelay: 1,
    transition: {
      delay: 0.2,
      duration: 1,
    },
  },
};
// line height
const lineheight = {
  initial: {
    lineHeight: "40px",
    opacity: 0.7,
  },
  animate: {
    lineHeight: "36px",
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.5,
      type: "tween",
      ease: [0.45, 0, 0.55, 1],
      // ease: [50, 0.2],
    },
  },
};
// const staggerVariants = {
//   inital: {
//     opacity: 0,
//   },
//   visible: {
//     opacity: 1,
//     transition: {
//       // delay: 2,
//       // duration: 2,
//       staggerChildren: 0.8,
//     },
//   },
// };

export default function QualitiesGrid({
  firsttext,
  secondtext,
  textY,
  secondtextY,
}) {
  return (
    <Box
      // border="1px solid white"
      as={motion.div}
      // variants={staggerVariants}
      inital="intial"
      whileInView="visible"
    >
      {/* grid item 1 and 3 */}
      <Box
        as={motion.div}
        viewport={{ once: true }}
        variants={textvariantX}
        initial={"first"}
        whileInView={"second"}
        color="white"
        fontFamily={"novara"}
        fontStyle={{ base: "normal" }}
        fontSize={{
          "3xl": "31.5px",
          md: "1.6vw",
          // xl: "1.6rem",
          // lg: "1.3rem",

          // "2xl": "2rem",
        }}
        lineHeight={{
          "3xl": "70px",
          md: "2.5vw",
          // xl: "70px",
          // lg: "55px",

          // "2xl": "80px",
        }}
        letterSpacing={"2.4px"}
        fontWeight={"400"}
        // paddingTop={"10px"}
      >
        {firsttext}
      </Box>
      <Text
        as={motion.div}
        viewport={{ once: true }}
        variants={lineheight}
        initial={"initial"}
        whileInView={"animate"}
        fontFamily={"gilroy"}
        color={"white"}
        fontSize={{
          "3xl": "22px",
          md: "1.15vw",
          // xl: "18px",
          // lg: "14px",
        }}
        lineHeight={{
          "3xl": "37.5px",
          md: "1.9vw",
          // xl: "30px",
          // lg: "30px",
        }}
        fontWeight={"300"}
        // maxH={"150px"}
        // maxW={"500px"}

        letterSpacing={{ xl: "0.01em", md: "0.02em" }}
      >
        {secondtext}
      </Text>
      <Box>
        {/* grid item 4 and 5 */}
        <Box
          as={motion.div}
          viewport={{ once: true }}
          variants={textvariantY}
          initial={"first"}
          whileInView={"second"}
          color="white"
          fontFamily={"novara"}
          fontStyle={{ base: "normal" }}
          fontSize={{
            "3xl": "31.5px",
            md: "1.6vw",
            // "2xl": "31.5px",
            // xl: "1.6rem",
            // lg: "1.3rem",
            // md: "1rem",
            // "2xl": "2rem",
          }}
          lineHeight={{
            "3xl": "70px",
            md: "3vw",
            // "2xl": "65px",

            // xl: "70px",
            // lg: "55px",

            // md: "50px",
            // "2xl": "80px",
          }}
          letterSpacing={"2.4px"}
          fontWeight={"400"}
        >
          {textY}
        </Box>
        <Text
          as={motion.div}
          variants={lineheight}
          initial={"initial"}
          whileInView={"animate"}
          fontFamily={"gilroy"}
          color={"white"}
          fontSize={{
            "3xl": "22px",
            md: "1.15vw",
            // "2xl": "22px",
            // xl: "18px",
            // lg: "14px",

            // md: "12px",
          }}
          lineHeight={{
            "3xl": "37.5px",
            md: "1.9vw",
            // "2xl": "37.5px",
            // xl: "30px",
            // lg: "30px",
            // md: "17px",
          }}
          fontWeight={"hairline"}
          // maxH={"150px"}
          // maxW={"500px"}

          letterSpacing={{ xl: "0.01em", md: "0.02em" }}
        >
          {secondtextY}
        </Text>
      </Box>
    </Box>
  );
}
