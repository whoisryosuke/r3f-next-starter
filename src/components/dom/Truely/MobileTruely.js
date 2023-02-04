import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import Perfume1 from "./Perfume1";
import Perfume3 from "./Perfume3";
import TwoPerfumeImages from "./TwoPerfumeImages";

const MobileTruely = () => {
  return (
    <Box
      display={{ lg: "none", base: "flex" }}
      flexDir="column"
      w="100vw"
      h="100vh"
      bg="#122333"
      fontFamily="novara"
      gap="24px"
      color="white"
    >
      <Text
        as={motion.p}
        // variants={mobileheadingVariant}
        initial="start"
        // animate={mobileControls}
        p="32px 20px"
        fontFamily="novara"
        fontSize="32px"
        maxW="1400px"
        fontWeight="400"
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
