import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import Perfume1 from "./Perfume1";
import Perfume3 from "./Perfume3";
import TwoPerfumeImages from "./TwoPerfumeImages";

const MobileTruely = () => {
  return (
    <Box
      display={{ lg: "none", md: "flex" }}
      flexDir="column"
      w="100vw"
      // h="100vh"
      bg="#122333"
      fontFamily="novara"
      gap="24px"
      position="relative"
      color="white"
    >
      <Text
        as={motion.p}
        // variants={mobileheadingVariant}
        initial="start"
        // animate={mobileControls}
        p="105px 0 30px 30px"
        fontFamily="novara"
        fontSize="32px"
        maxW={{ base: "350px", md: "450px" }}
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
