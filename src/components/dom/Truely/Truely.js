import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { useInView } from "@react-spring/three";
import { motion, useAnimation } from "framer-motion";
import React, { useRef, useEffect } from "react";
import Perfume1 from "./Perfume1";
import Perfume2 from "./Perfume2";
import Perfume3 from "./Perfume3";

const Truely = () => {
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
  const headingVariant = {
    start: {
      lineHeight: "7vw",
      opacity: 0,
    },
    visible: {
      lineHeight: "4vw",
      opacity: 1,
      transition: {
        duration: 0.6,
        type: "tween",
        ease: [0.45, 0, 0.55, 1],
      },
    },
  };
  return (
    <Box
      sx={{
        w: "100vw",
        h: "100vh",
        bg: "#122333",
        fontFamily: "novara",
        color: "white",
        display: "flex",
        flexDir: "column",
        alignItems: "center",
        overflowY: "clip",
        // position: "relative",
      }}
    >
      <Box
        w="100vw"
        h="100vh"
        marginLeft="5rem"
        paddingTop="3rem"
        maxW="1800px"
        // margin="auto"
        // border="1px solid white"
        position="relative"
      >
        <Heading
          as={motion.div}
          ref={ref}
          variants={headingVariant}
          initial="start"
          animate={controls}
          fontFamily="novara"
          fontSize={{ lg: "3.3vw", base: "4vw" }}
          letterSpacing="5px"
          maxW={{ lg: "1400px", base: "300px" }}
          fontWeight="400"
        >
          a truly timeless eau de parfum became one of the most beloved
          perfumes.
        </Heading>

        <Box>
          <Perfume1 />
          <Perfume2 />
          <Perfume3 />
        </Box>

        <Box
          as={motion.div}
          ref={ref}
          variants={variant1}
          initial="start"
          animate={controls}
          sx={{
            position: "absolute",
            top: 0,
            right: 100,
            boxSize: "200px",
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
            position: "absolute",
            bottom: -7,
            left: 0,
            boxSize: "200px",
            display: {
              lg: "inline-block",
              base: "none",
            },
          }}
        >
          <Image src="/images/perfume4.png" />
        </Box>
      </Box>
    </Box>
  );
};

export default Truely;
