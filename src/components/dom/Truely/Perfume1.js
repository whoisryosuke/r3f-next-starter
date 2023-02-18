import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const Perfume1 = () => {
  const parentVariant = {
    start: {
      x: "-100px",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      type: "spring",
      transition: {
        delay: "0.15",

        duration: 1,
      },
    },
  };
  return (
    <Box
      w={{ base: "80%", md: "37vw", "2xl": "600px", "3xl": "675px" }}
      // ref={ref}
      as={motion.div}
      viewport={{ once: true }}
      variants={parentVariant}
      initial="start"
      whileInView="visible"
      paddingLeft={{ md: 0, base: "9vw" }}
      // pb={{ md: "15vw", "2xl": "13.5rem" }}
      display="flex"
      flexDir="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      gap={{ base: "3vw", md: "1.5vw" }}
    >
      <Box
        // maxW={{ md: "31.25vw", base: "250px" }}
        maxW={{ md: "full", base: "80%" }}
        // marginTop={{ md: "4rem", base: "0" }}
        // paddingLeft={{ md: 0, base: "20px" }}
      >
        <Image w={"full"} src="/images/perfume1.png" />
      </Box>
      <Box
        display="flex"
        // border="1px solid white"
        alignItems={"flex-start"}
        justifyContent={"flex-end"}
        w={"full"}
        gap={"1rem"}
      >
        <Heading
          fontFamily="novara"
          display={"flex"}
          fontSize={{ base: "6.15vw", md: "3.35vw", "2xl": "3.35rem" }}
          fontWeight="400"
          lineHeight={{ base: "6.5vw", md: "3.8vw", "2xl": "3.8rem" }}
          maxWidth={{ base: "150px", md: "13vw", "2xl": "200px" }}
          // justifySelf={"flex-end"}
          // alignSelf={"flex-end"}
        >
          Eau de parfum spray
        </Heading>

        <Text
          maxW={{ md: "30ch", base: "75%" }}
          fontFamily="gilroy"
          fontWeight="400"
          // marginTop={{ md: "0.7rem", base: "0" }}
          fontSize={{ "2xl": "1rem", md: "0.925vw", base: "3vw" }}
          lineHeight={{ "2xl": "1.85rem", md: "1.6vw", base: "3.5vw" }}
          letterSpacing={{ md: "2px", base: "6%" }}
        >
          Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiubaseod
          temp incididunt ut labore et dolore magna aliqua.
          <Text as={"span"} display={{ base: "block", md: "none" }}>
            {" "}
            temp incididunt ut labore et dolore magna aliqua.
          </Text>
        </Text>
      </Box>
    </Box>
  );
};

export default Perfume1;
