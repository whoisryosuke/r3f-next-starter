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
          position: { lg: "absolute", base: "absolute" },
          top: 0,
          right: { lg: 100, base: 0 },
          w: { lg: "250px", base: "120px" },
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
          position: { lg: "absolute", base: "relative" },

          bottom: { lg: 0, base: "0" },
          left: { lg: 0, base: 0 },
          // boxSize: { lg: "200px" },
          w: { lg: "250px", base: "120px" },
          // h: "100px",
          display: {
            lg: "inline-block",
          },
        }}
      >
        <Image src="/images/perfume4.png" />
      </Box>
    </Box>
  );
};

export default TwoPerfumeImages;
