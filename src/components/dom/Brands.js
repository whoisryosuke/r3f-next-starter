import { Flex, Image, Box, Text, Center } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const visibleVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.75 } },
  hidden: { opacity: 0, scale: 1 },
};

const Brands = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const brands1 = [
    {
      id: 1,
      brand: "Dior",
    },
    {
      id: 2,
      brand: "Tom Ford",
    },
    {
      id: 3,
      brand: "Guerlain",
    },
    {
      id: 4,
      brand: "Chanel",
    },
    {
      id: 5,
      brand: "Hermès",
    },
    {
      id: 6,
      brand: "Giorgio Armani",
    },
    {
      id: 7,
      brand: "Prada",
    },
    {
      id: 8,
      brand: "Paco Rabanne",
    },
    {
      id: 9,
      brand: "Yves Saint Laurent",
    },
    {
      id: 10,
      brand: "Dolce & Gabbana",
    },
  ];
  const brands2 = [
    {
      id: 1,
      brand: "Gucci",
    },
    {
      id: 2,
      brand: "Tom Ford",
    },
    {
      id: 3,
      brand: "Thierry Mugler",
    },
    {
      id: 4,
      brand: "Cartier",
    },
    {
      id: 5,
      brand: "Lancôme",
    },
    {
      id: 6,
      brand: "Versace",
    },
    {
      id: 7,
      brand: "Bulgari",
    },
    {
      id: 8,
      brand: "Christian Dior",
    },
    {
      id: 9,
      brand: "Nina Ricci",
    },
    {
      id: 10,
      brand: "Jean Paul Gaultier",
    },
  ];
  const brands3 = [
    {
      id: 1,
      brand: "Calvin Klein",
    },
    {
      id: 2,
      brand: "Azzaro",
    },
    {
      id: 3,
      brand: "Ralph Lauren",
    },
    {
      id: 4,
      brand: "Bvlgari",
    },
    {
      id: 5,
      brand: "Estée Lauder",
    },
    {
      id: 6,
      brand: "Issey Miyake",
    },
    {
      id: 7,
      brand: "Givenchy",
    },
    {
      id: 8,
      brand: "Ferragamo",
    },
    {
      id: 9,
      brand: "Elie Saab",
    },
    {
      id: 10,
      brand: "Burberry",
    },
  ];

  return (
    // <Box  borderRadius='500px' border='5px solid yellow' ></Box>
    <Center
      id="brands"
      as={motion.div}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={visibleVariants}
      alignItems={"center"}
      justifyContent={"center"}
      flexDir={"column"}
      bgColor={"#FFFFFF"}
      py={{ base: "1.5rem", sm: "4.5rem" }}
      gap={"5rem"}
      boxSizing="border-box"
    >
      {/* For Tablets and Desktops */}

      <Flex
        display={{ base: "none", sm: "flex" }}
        w={"96.75%"}
        flexDir={"column"}
        bg="black"
        rounded={"2rem"}
        p="0.75rem"
        borderRadius="25px"
        // h='400px'
      >
        <Marquee
          pauseOnHover={true}
          speed={15}
          pauseOnClick={true}
          gradient={false}
        >
          <Flex
            bg={"#000"}
            px={"2.5rem"}
            gap={{ base: "2.25rem", lg: "3rem" }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {brands1.map((brand) => {
              return (
                <Text
                  key={brand.id}
                  fontSize={"7.5rem"}
                  letterSpacing={"0.5rem"}
                  fontFamily={"Novara"}
                  textTransform={"uppercase"}
                  lineHeight={"8.62rem"}
                  // lineHeight={"6.62rem"}
                  color={"#FFF"}
                  overflow={"hidden"}
                >
                  {brand.brand}
                </Text>
              );
            })}
          </Flex>
        </Marquee>
        <Marquee
          pauseOnHover={true}
          speed={15}
          gradient={false}
          direction="right"
        >
          <Flex
            bg={"#000"}
            px={"2.5rem"}
            gap={{ base: "2.25rem", lg: "3rem" }}
            justifyContent={"center"}
            alignItems={"center"}
            // borderRadius={"2rem"}
          >
            {brands2.map((brand) => {
              return (
                <Text
                  key={brand.id}
                  fontSize={"7.5rem"}
                  letterSpacing={"0.5rem"}
                  fontFamily={"Novara"}
                  textTransform={"uppercase"}
                  lineHeight={"8.62rem"}
                  // lineHeight={"6.62rem"}
                  color={"#FFF"}
                  overflow={"hidden"}
                >
                  {brand.brand}
                </Text>
              );
            })}
          </Flex>
        </Marquee>
        <Marquee pauseOnHover={true} speed={15} gradient={false}>
          <Flex
            bg={"#000"}
            px={"2.5rem"}
            gap={{ base: "2.25rem", lg: "3rem" }}
            justifyContent={"center"}
            alignItems={"center"}
            // borderRadius={"2rem"}
          >
            {brands3.map((brand) => {
              return (
                <Text
                  key={brand.id}
                  fontSize={"7.5rem"}
                  letterSpacing={"0.5rem"}
                  fontFamily={"Novara"}
                  textTransform={"uppercase"}
                  lineHeight={"8.62rem"}
                  // lineHeight={"6.62rem"}
                  color={"#FFF"}
                  overflow={"hidden"}
                >
                  {brand.brand}
                </Text>
              );
            })}
          </Flex>
        </Marquee>
      </Flex>
      {/* For Mobiles */}
      <Flex
        display={{ base: "flex", sm: "none" }}
        w={"97%"}
        flexDir={"column"}
        bg={"black"}
        rounded={"7px"}
        p="0.25rem"
      >
        <Marquee
          pauseOnHover={true}
          speed={15}
          pauseOnClick={true}
          gradient={false}
        >
          <Flex
            bg={"#000"}
            px={"0.5rem"}
            gap={"0.75rem"}
            justifyContent={"center"}
            alignItems={"center"}
            // borderRadius={"2rem"}
          >
            {brands1.map((brand) => {
              return (
                <Text
                  key={brand.id}
                  fontSize={"1.75rem"}
                  letterSpacing={"0.25rem"}
                  fontFamily={"Novara"}
                  textTransform={"uppercase"}
                  lineHeight={"2.25rem"}
                  color={"#FFF"}
                  overflow={"hidden"}
                >
                  {brand.brand}
                </Text>
              );
            })}
          </Flex>
        </Marquee>
        <Marquee
          pauseOnHover={true}
          speed={15}
          pauseOnClick={true}
          gradient={false}
        >
          <Flex
            bg={"#000"}
            px={"0.5rem"}
            gap={"0.75rem"}
            justifyContent={"center"}
            alignItems={"center"}
            // borderRadius={"2rem"}
          >
            {brands2.map((brand) => {
              return (
                <Text
                  key={brand.id}
                  fontSize={"1.75rem"}
                  letterSpacing={"0.25rem"}
                  fontFamily={"Novara"}
                  textTransform={"uppercase"}
                  lineHeight={"2.25rem"}
                  color={"#FFF"}
                  overflow={"hidden"}
                >
                  {brand.brand}
                </Text>
              );
            })}
          </Flex>
        </Marquee>
        <Marquee
          pauseOnHover={true}
          speed={15}
          pauseOnClick={true}
          gradient={false}
        >
          <Flex
            bg={"#000"}
            px={"0.5rem"}
            gap={"0.75rem"}
            justifyContent={"center"}
            alignItems={"center"}
            // borderRadius={"2rem"}
          >
            {brands3.map((brand) => {
              return (
                <Text
                  key={brand.id}
                  fontSize={"1.75rem"}
                  letterSpacing={"0.25rem"}
                  fontFamily={"Novara"}
                  textTransform={"uppercase"}
                  lineHeight={"2.25rem"}
                  color={"#FFF"}
                  overflow={"hidden"}
                >
                  {brand.brand}
                </Text>
              );
            })}
          </Flex>
        </Marquee>
      </Flex>
    </Center>
  );
};

export default Brands;
