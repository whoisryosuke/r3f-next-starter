import { Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { easeInOut, motion } from "framer-motion";
import { SlowBuffer } from "buffer";
// import { rotate } from "maath/dist/declarations/src/buffer";
// heading
const heading = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
      type: "tween",
    },
  },
};
// left side
const textvariantX = {
  first: {
    x: -600,
  },
  second: {
    x: 0,
    transitionDelay: 1,
    transition: {
      delay: 0.2,
      duration: 1.3,
      ease: easeInOut,
    },
  },
};
// right side
const textvariantY = {
  first: {
    x: 600,
  },
  second: {
    x: 0,
    transitionDelay: 1,
    transition: {
      delay: 0.2,
      duration: 1.3,
    },
  },
};

// line height
const lineheight = {
  initial: {
    scale: 1.1,
  },
  animate: {
    scale: 1,
    transition: {
      delay: 0.2,
      duration: 1.3,
      ease: easeInOut,
    },
  },
};
// image opacity
const imageanimate = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 1.3,
    },
  },
};
// ring rotate
const Ringrotate = {
  initial: {
    rotate: 0,
  },
  animate: {
    rotate: 180,
    transition: {
      duration: 2,
      // repeat: Infinity,
      type: "tween",
      easeIn: "linear",
    },
  },
};

export default function MobileQualities() {
  return (
    <Box
      display={{ md: "none", base: "flex" }}
      bgColor={{ md: "#122333", base: "#FFFFFF" }}
      height={"100vh"}
    >
      <Box>
        <Center
          width={"100vw"}
          display={"flex"}
          flexDir={{ md: "row", base: "column-reverse" }}
          gap={{ sm: "0.5rem", base: "0.5rem" }}
          padding={{ base: "20px" }}

          // marginTop={"30px"}
        >
          <Image
            src="Rectangle 37.png"
            w={{
              base: "47px",
              sm: "55px",
            }}
            h={{
              base: "22px",
              height: "20px",
            }}
          ></Image>
          <Box
            fontFamily={"novara"}
            fontWeight={{ xl: "400", base: "400" }}
            fontSize={{
              base: "1rem",
              sm: "1.4rem",
            }}
            lineHeight={{ sm: "35px", base: "30px" }}
            letterSpacing={{ base: "0.07em" }}
            color={{ base: "black" }}
            as={motion.as}
            variants={heading}
            initial={"initial"}
            animate={"animate"}
          >
            OUR DISTINCTIVE QUALITIES
          </Box>
        </Center>
        <Box
          // width={"100vw"}

          align={"center"}
          padding={{ sm: "30px", base: "20px" }}
        >
          <Box
            display={{ md: "none", base: "flex" }}
            flexDir={{ base: "column" }}
            rowGap={{ base: "3rem", sm: "4rem" }}
            color={"black"}
          >
            {/* flex item 1 */}
            <Box textAlign={{ base: "left" }}>
              <Box
                as={motion.div}
                variants={textvariantX}
                initial={"first"}
                animate={"second"}
                color={{ base: "black" }}
                fontFamily={"novara"}
                fontStyle={{ base: "normal" }}
                fontSize={{
                  base: "1rem",
                  sm: "1.4rem",
                }}
                lineHeight={{
                  base: "40px",
                }}
                letterSpacing={"0.08em"}
                fontWeight={"400"}
              >
                long-lasting wear
              </Box>
              <Box
                as={motion.div}
                variants={lineheight}
                initial={"initial"}
                animate={"animate"}
                fontFamily={"gilroy"}
                color={{ base: "black" }}
                fontSize={{
                  base: "9px",
                  sm: "13px",
                }}
                lineHeight={{ base: "15px", sm: "15px" }}
                fontWeight={"300"}
                letterSpacing={{ base: "0.02em" }}
                maxW={{ base: "30ch" }}
              >
                Our perfumes are designed to last throughout the day, so you can
                feel confident that your scent will stay with you from morning
                to night.
              </Box>
            </Box>
            {/* flex item 2 */}

            <Box
              rowSpan={1}
              colSpan={1}
              textAlign={{ lg: "left", base: "right" }}
            >
              <Box
                display="flex"
                flexDirection="column"
                alignItems={"flex-end"}
                textAlign="right"
                // bgColor={{ base: "blue", sm: "red", lg: "green" }}
              >
                <Box
                  as={motion.div}
                  variants={textvariantY}
                  initial={"first"}
                  animate={"second"}
                  color={{ base: "black" }}
                  fontFamily={"novara"}
                  fontStyle={{ base: "normal" }}
                  fontSize={{
                    base: "1rem",
                    sm: "1.4rem",
                  }}
                  lineHeight={{
                    base: "40px",
                  }}
                  letterSpacing={"0.08em"}
                  fontWeight={"400"}
                >
                  Unique secents
                </Box>
                <Text
                  as={motion.div}
                  variants={lineheight}
                  initial={"initial"}
                  animate={"animate"}
                  fontFamily={"gilroy"}
                  color={{ base: "black" }}
                  fontSize={{
                    base: "9px",
                    sm: "13px",
                  }}
                  lineHeight={{ base: "15px", sm: "15px" }}
                  fontWeight={"300"}
                  letterSpacing={{ base: "0.02em" }}
                  maxW={"30ch"}
                  gap={"22px"}
                >
                  because smelling like a million bucks just isn't good enough
                  for the elite. Our perfumes are made with the finest
                  ingredients.
                </Text>
              </Box>
            </Box>
            {/* grid item 3  image*/}
            <Box columnGap={"10px"}>
              <Box position="relative" alignItems={"center"}>
                <Center>
                  <Image
                    as={motion.img}
                    variants={Ringrotate}
                    initial="initial"
                    animate="animate"
                    src="group 19.png"
                    width={{
                      base: "200px",
                      sm: "280px",
                    }}
                    height={{
                      base: "200px",
                      sm: "280px",
                    }}
                    position={"absolute"}
                  ></Image>
                  <Box
                    as={motion.div}
                    variants={imageanimate}
                    initial={"initial"}
                    animate={"animate"}
                    position={"relative"}
                  >
                    <Image
                      src="Ellipse 44.png"
                      width={{
                        base: "165px",
                        sm: "220px",
                      }}
                      height={{
                        base: "165px",
                        sm: "220px",
                      }}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    ></Image>
                  </Box>
                </Center>
              </Box>
            </Box>
            {/* grid item 4 */}
            <Box
              rowSpan={1}
              colSpan={1}
              textAlign={{ lg: "right", base: "left" }}
            >
              <Box
                as={motion.div}
                variants={textvariantX}
                initial={"first"}
                animate={"second"}
                color={{ base: "black" }}
                fontFamily={"novara"}
                fontStyle={{ base: "normal" }}
                fontSize={{
                  base: "1rem",
                  sm: "1.4rem",
                }}
                lineHeight={{
                  base: "40px",
                }}
                letterSpacing={"0.08em"}
                fontWeight={"400"}
              >
                sustainable packaging
              </Box>
              <Box
                as={motion.div}
                variants={lineheight}
                initial={"initial"}
                animate={"animate"}
                fontFamily={"gilroy"}
                color={{ base: "black" }}
                fontSize={{
                  base: "9px",
                  sm: "13px",
                }}
                lineHeight={{ base: "15px", sm: "15px" }}
                fontWeight={"300"}
                letterSpacing={{ base: "0.02em" }}
                maxW={{ base: "30ch" }}
              >
                Our perfumes are designed to last throughout the day, so you can
                feel confident that your scent will stay with you from morning
                to night.
              </Box>
            </Box>
            {/* grid item 5 */}
            <Box
              textAlign={{ base: "right" }}
              display="flex"
              flexDirection="column"
              alignItems={"flex-end"}
            >
              <Box
                as={motion.div}
                variants={textvariantY}
                initial={"first"}
                animate={"second"}
                color={{ base: "black" }}
                fontFamily={"novara"}
                fontStyle={{ base: "normal" }}
                fontSize={{
                  base: "1rem",
                  sm: "1.4rem",
                }}
                lineHeight={{
                  base: "40px",
                }}
                letterSpacing={"0.08em"}
                fontWeight={"400"}
              >
                Natural ingrdients
              </Box>
              <Text
                as={motion.div}
                variants={lineheight}
                initial={"initial"}
                animate={"animate"}
                fontFamily={"gilroy"}
                color={{ base: "black" }}
                fontSize={{
                  base: "9px",
                  sm: "13px",
                }}
                lineHeight={{ base: "15px", sm: "15px" }}
                fontWeight={"300"}
                letterSpacing={{ base: "0.02em" }}
                maxW={"30ch"}
              >
                because smelling like a million bucks just isn't good enough for
                the elite. Our perfumes are made with the finest ingredients.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
