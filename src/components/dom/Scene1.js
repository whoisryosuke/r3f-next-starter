import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Scene1 = () => {
  return (
    <Box id='ourstory'
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
          flexDir: "column",
          marginLeft: {
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
          fontWeight="300"
        >
          Unveil the Scent of Success, Our Story.
        </Heading>
        <Text
          fontFamily="gilroy"
          fontSize={{ lg: "18px", base: "14px" }}
          maxW={{ lg: "500", base: "250px" }}
          marginTop="3rem"
          fontWeight="400"
          lineHeight={{ lg: "2.5rem", base: "1.2rem" }}
        >
          the inspiration behind our signature scents to the passion that drives
          us to create the most elegant and sophisticated perfumes, "Our Story"
          takes you on a journey through the evolution of our brand.
        </Text>
      </Box>
    </Box>
  );
};

export default Scene1;
