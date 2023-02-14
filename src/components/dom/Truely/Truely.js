import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { useInView } from "@react-spring/three";
import { motion, useAnimation } from "framer-motion";
import React, { useRef, useEffect } from "react";
import Perfume1 from "./Perfume1";
import Perfume2 from "./Perfume2";
import Perfume3 from "./Perfume3";
import TwoPerfumeImages from "./TwoPerfumeImages";
const Truely = (props) => {
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
      lineHeight: "5rem",
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
      id="truely"
      bg={props.activeBg}
      color={props.fontColor}
      sx={{
        w: "100vw",
        h: { lg: "120vh", base: "100vh" },

        fontFamily: "novara",

        display: { lg: "flex", base: "none" },
        flexDir: "column",
        alignItems: "center",
        justifyContent: "center",
        overflowY: "clip",
        position: "relative",
      }}
    >
      <Box
        // maxW="00px"
        w="100vw"
        h="100%"
        marginLeft={{ lg: "7rem ", base: "2rem" }}
        paddingTop={{ lg: "3rem", base: "0.5rem" }}
        maxW="2000px"
        position="relative"
        // border="1px solid white"
      >
        <Box>
          <Text
            as={motion.p}
            viewport={{ once: true }}
            variants={titleVarients}
            initial="start"
            whileInView="visible"
            fontFamily="novara"
            fontSize={{ lg: "3.3vw", xl: "4rem" }}
            maxW={{ lg: "1400px", md: "400" }}
            fontWeight="400"
            // letterSpacing={"0.04em"}
            // lineHeight={"87px"}
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
