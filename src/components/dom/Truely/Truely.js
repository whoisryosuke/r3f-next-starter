import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { useInView } from "@react-spring/three";
import { motion, useAnimation } from "framer-motion";
import React, { useRef, useEffect } from "react";
import Perfume1 from "./Perfume1";
import Perfume2 from "./Perfume2";
import Perfume3 from "./Perfume3";
import TwoPerfumeImages from "./TwoPerfumeImages";
const Truely = () => {
  const mobileControls = useAnimation();
  const [refmobile, mobileinView] = useInView();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  // const controls = useAnimation();
  // const [ref, inView] = useInView();

  useEffect(() => {
    if (mobileinView) {
      mobileControls.start("visible");
    }
  }, [mobileControls, mobileinView]);

  const mobileheadingVariant = {
    start: {
      lineHeight: "5rem",
      opacity: 0,
    },
    visible: {
      lineHeight: "2rem",
      opacity: 1,
      transition: {
        duration: 0.6,
        type: "tween",
        ease: [0.45, 0, 0.55, 1],
      },
    },
  };

  const titleVarients = {
    start: {
      lineHeight: "7vw",
      opacity: 0,
    },
    visible: {
      lineHeight: "4rem",
      opacity: 1,
      transition: {
        duration: 0.8,
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
        position: "relative",
      }}
    >
      <Box
        w="100vw"
        h="100vh"
        marginLeft={{ lg: "5rem ", base: "2rem" }}
        paddingTop="3rem"
        maxW="1800px"
        margin="auto"
        // border="1px solid white"
        position="relative"
      >
        {/* desktop heading */}
        <Box>
          <Text
            as={motion.p}
            viewport={{ once: true }}
            variants={titleVarients}
            initial="start"
            whileInView="visible"
            fontFamily="novara"
            fontSize={{ lg: "4rem", base: "2rem" }}
            maxW="1400px"
            fontWeight="400"
            display={{ lg: "block", base: "none" }}
          >
            a truly timeless eau de parfum became one of the most beloved
            perfumes.
          </Text>
          <Text
            ref={refmobile}
            as={motion.p}
            variants={mobileheadingVariant}
            initial="start"
            animate={mobileControls}
            fontFamily="novara"
            fontSize={{ lg: "4rem", base: "2rem" }}
            maxW="1400px"
            fontWeight="400"
            display={{ lg: "none", base: "inline-block" }}
          >
            a truly timeless eau de parfum became one of the most beloved
            perfumes.
          </Text>

          <Box>
            <Perfume1 />
            <Perfume2 />
            <Perfume3 />

            <TwoPerfumeImages />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Truely;
