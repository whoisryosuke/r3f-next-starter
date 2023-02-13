import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import Perfume1 from "./Perfume1";
import Perfume3 from "./Perfume3";
import TwoPerfumeImages from "./TwoPerfumeImages";

const MobileTruely = (props) => {
  return (
    <Box
      display={{ md: "none", base: "flex" }}
      flexDir="column"
      w="100vw"
      // h="100vh"
      bg={props.activeBg}
      fontFamily="novara"
      gap="1.25rem"
      position="relative"
      color={props.fontColor}
    >
      <Text
        as={motion.p}
        // variants={mobileheadingVariant}
        initial="start"
        // animate={mobileControls}
        pl={{ base: "5vw", sm: "2.25rem" }}
        pt={{ base: "24.5vw" }}
        fontFamily="novara"
        fontSize="6vw"
        maxW={"25ch"}
        lineHeight={{ base: "8vw" }}
        fontWeight="400"
        letterSpacing={"5%"}
      >
        a truly timeless eau de parfum became one of the most beloved perfumes.
      </Text>
      <Perfume1 />
      <Perfume3 />
      <TwoPerfumeImages />
    </Box>
  );
};

export default MobileTruely;
