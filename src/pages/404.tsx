// Custom 404 page

import { Box, Heading, Image, Link, Text } from "@chakra-ui/react";
// import Image from "next/image";
import svg404 from "../../public/404500png/404.svg";
import yousufAbeerlogo from "../../public/yousufAbeerLogo.svg";
import pagenotfound from "../../public/404500png/pagenotfound.svg";
import { useStore } from "zustand";

// DOM elements here
const DOM = () => {
  const mainPage = () => {};
  return (
    <>
      <Box
        sx={{
          background: "black",
          w: "100vw",
          h: "100vh",
          fontFamily: "gilroy",
          color: "white",
        }}
      >
        <Box padding={{ lg: "2rem", base: "1rem" }}>
          <Image
            src={"/yousufAbeerlogo.svg"}
            marginLeft="1rem"
            boxSize={{ lg: "150px", base: "100px" }}
          />
        </Box>
        <Box
          sx={{
            maxW: "1600px",
            h: "50%",
            display: "flex",
            flexDir: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            margin: "auto",
            color: "black",
            // WebkitTextStroke: "0.22px gold ",
          }}
        >
          <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image w="20%" src={"images/404.png"} />
          </Box>
          <Image maxW="90%" src={"images/pagenotfound.png"} width="1200px" />
          <Text color="white" fontSize={{ lg: "2rem", base: "1rem" }}>
            Oops, Nothing here...
          </Text>
        </Box>
        <Box
          sx={{
            w: "100%",
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            gap: 7,
            alignItems: "center",
          }}
        >
          <Link
            as={Link}
            href={"/"}
            _hover={{
              border: "none",
              color: "gray",
            }}
            display="inline"
            fontSize={{ lg: "3rem", base: "1.5rem" }}
            borderBottom="1px solid white"
            lineHeight={{ lg: "2.5rem", base: "1.5rem" }}
            marginTop={{ lg: "0px", base: "-5rem" }}
          >
            Go Back
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default function Error404() {
  return (
    <>
      <DOM />
    </>
  );
}
