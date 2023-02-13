import { Box, Image } from "@chakra-ui/react";
import { useInView } from "@react-spring/three";
import { motion, useAnimation } from "framer-motion";

import React, { useEffect } from "react";

const TwoPerfumeImages = () => {
  const variant1 = {
    start: {
      y: -100,
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
  const variant2 = {
    start: {
      y: 50,
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
    <Box>
      <Box
        as={motion.div}
        variants={variant1}
        initial="start"
        whileInView={"visible"}
        viewport={{ once: true }}
        sx={{
          position: { md: "absolute", base: "absolute" },
          top: 0,
          right: {
            "2xl": "6rem ",
            md: "6vw",

            base: 0,
          },
          w: {
            "3xl": "270px",

            md: "14.5vw",
            // sm: "3vw",
            base: "30vw",
          },
        }}
      >
        <Image src="/images/perfume5.png" />
      </Box>
      <Box
        as={motion.div}
        variants={variant2}
        initial="start"
        // animate={controls}
        whileInView={"visible"}
        viewport={{ once: true }}
        sx={{
          position: { md: "absolute", base: "relative" },

          bottom: { md: 0, base: "0" },
          left: {
            "2xl": "6rem ",
            md: "6vw",

            base: 0,
          },
          // boxSize: { md: "200px" },
          w: {
            "3xl": "270px",
            md: "14.5vw",
            // sm: "3vw",
            base: "30vw",
          },
          // h: "100px",
          display: {
            md: "inline-block",
          },
        }}
      >
        <Image src="/images/perfume4.png" />
      </Box>
    </Box>
  );
};

export default TwoPerfumeImages;
