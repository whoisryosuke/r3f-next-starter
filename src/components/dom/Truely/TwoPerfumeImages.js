import { Box, Image } from "@chakra-ui/react";
import { useInView } from "@react-spring/three";
import { motion, useAnimation } from "framer-motion";

import React, { useEffect } from "react";

const TwoPerfumeImages = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
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
      y: 100,
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
        ref={ref}
        variants={variant1}
        initial="start"
        animate={controls}
        sx={{
          position: { lg: "absolute", base: "relative" },
          top: 0,
          right: 100,
          w: "250px",
          display: {
            lg: "inline-block",
            base: "none",
          },
        }}
      >
        <Image src="/images/perfume5.png" />
      </Box>
      <Box
        as={motion.div}
        ref={ref}
        variants={variant2}
        initial="start"
        animate={controls}
        sx={{
          position: { lg: "absolute", base: "relative" },

          bottom: { lg: 0, base: "0" },
          left: { lg: 0, base: 10 },
          // boxSize: { lg: "200px" },
          w: { lg: "250px", base: "120px" },
          // h: "100px",
          display: {
            lg: "inline-block",
            // base: "none",
          },
        }}
      >
        <Image src="/images/perfume4.png" />
      </Box>
    </Box>
  );
};

export default TwoPerfumeImages;
