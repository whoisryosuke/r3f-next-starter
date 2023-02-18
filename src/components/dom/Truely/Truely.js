/** @format */

import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
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

  // const [greaterthan2xl] = () => useMediaQuery("(min-width: 1536px)");

  // const mobileheadingVariant = {
  //   start: {
  //     lineHeight: "5rem",
  //     opacity: 0,
  //   },
  //   visible: {
  //     lineHeight: "2rem",
  //     opacity: 1,
  //     transition: {
  //       duration: 0.6,
  //       type: "tween",
  //       ease: [0.45, 0, 0.55, 1],
  //     },
  //   },
  // };

  const titleVarients = {
    start: {
      lineHeight: "7vw",
      opacity: 0,
    },
    visible: {
      lineHeight: "4.25vw",
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
        w: "100%",
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
        w="100%"
        px={{
          "2xl": "6rem ",
          md: "6vw",
          base: "2rem",
        }}
        pt={{
          "2xl": "5.5rem ",
          md: "5.5vw",
          base: "1rem",
        }}
        // paddingTop={{ md: "3rem", base: "0.5rem" }}
        pb={{
          "2xl": "4.5rem ",
          md: "4.5vw",
          base: "1rem",
        }}
        maxW="1920px"
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
            fontSize={{
              md: "3.5vw",
              xl: "3.6vw",
              // "2xl": "3.5rem",
              "3xl": "4.5rem",
            }}
            maxW={{ md: "35ch" }}
            fontWeight="400"
            pb={"3.5rem"}
          >
            a truly timeless eau de parfum became one of the most beloved
            perfumes.
          </Text>

          <Box>
            <Grid
              maxW={"1650px"}
              templateRows={"repeat(450px, 250px)"}
              templateColumns={"repeat(2, 1fr)"}
              gap={5}
            >
              <GridItem
                // pr={20}
                rowSpan={1}
                colSpan={1}
              >
                <Perfume1 />
              </GridItem>
              <GridItem
                // pl={15}
                rowSpan={1}
                colSpan={1}
                justifySelf={"center"}
                alignSelf={"start"}
              >
                <Perfume2 />
              </GridItem>
              <GridItem justifySelf={"end"} alignSelf={"center"} colSpan={2}>
                <Perfume3 />
              </GridItem>
            </Grid>

            <TwoPerfumeImages />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Truely;
