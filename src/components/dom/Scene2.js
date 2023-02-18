import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Scene2 = () => {
  return (
    <Box
      sx={{
        w: "100vw",
        h: "100vh",
        bg: "black",
        color: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          textAlign: "right",
          flexDir: "column",
          marginRight: {
            lg: "5rem",
            base: "1rem",
          },
          // marginTop: "5rem",
          // border: "1px solid white",
        }}
      >
        <Heading
          fontFamily="novara"
          marginTop={{
            lg: "5rem",
            base: "1rem",
          }}
          fontSize={{ lg: "100px", md: "50px", base: "34px" }}
          maxW={{ lg: "800px", md: "500px", base: "250px" }}
          fontWeight="400"
        >
          Creating the Perfect Scent, The Art of Perfumery.
        </Heading>
        <Text
          fontFamily="gilroy"
          fontSize={{ lg: "18px", base: "14px" }}
          maxW={{ lg: "500", base: "250px" }}
          marginTop="3rem"
          lineHeight={{ lg: "2.5rem", base: "1.2rem" }}
        >
          From the sourcing of the finest ingredients to the art of blending and
          perfumery, we pour our hearts and souls into every bottle of our
          exclusive fragrances.
        </Text>
      </Box>
    </Box>
  );
};

export default Scene2;
