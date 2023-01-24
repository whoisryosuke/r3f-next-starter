/** @format */

import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

type Props = {};

const navButtonStyles = {
  fontFamily: "Novara",
  fontSize: "20px",
  lineHeight: "20px",
  letterSpacing: "2.5px",
  cursor: "pointer",
  whileHover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      type: "tween",
      ease: [0.45, 0, 0.55, 1],
    },
  },
};

const Navbar = (props: Props) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      width="100vw"
      p={"2rem"}
      zIndex={10}
      position={"fixed"}
      top={0}
      left={0}
      color={"white"}
    >
      <Image src={"/yousufAbeerLogo.svg"} width={"100px"} />
      <Flex
        sx={{
          flexDir: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "3rem",
          width: "100%",
        }}
      >
        <Text as={motion.p} {...navButtonStyles}>
          Home
        </Text>
        <Text as={motion.p} {...navButtonStyles}>
          Our story
        </Text>
        <Text as={motion.p} {...navButtonStyles}>
          Products
        </Text>
        <Text as={motion.p} {...navButtonStyles}>
          Testimonials
        </Text>
      </Flex>
      <Button
        as={motion.p}
        sx={{
          fontSize: "20px",
          fontFamily: "Novara",
          border: "none",
          borderRadius: "50%",
          bg: "transparent",
          padding: "2rem",
          letterSpacing: "3px",
          _hover: {
            border: "1px solid white",
          },
        }}
      >
        contact us
      </Button>
    </Box>
  );
};

export default Navbar;
