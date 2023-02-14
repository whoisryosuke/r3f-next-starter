import { Box, Center, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { easeInOut, motion } from "framer-motion";
import { SlowBuffer } from "buffer";
import QualitiesGrid from "../dom/QualitiesGrid";

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

export default function Qualities() {
  return (
    <Box
      bgColor={{ md: "#122333", base: "#FFFFFF" }}
      height={"100vh"}
      display={{ md: "flex", base: "none" }}
    >
      <Box>
        <Center
          width={"100vw"}
          display={{ md: "flex" }}
          flexDir={{ md: "row" }}
          gap={{ lg: "2.1rem", md: "1.5rem" }}
          paddingTop={{
            md: "84px",

            // "2xl": "85px"
          }}
        >
          <Image
            src="Rectangle 37.png"
            w={{
              xl: "146px",
              lg: "130px",
              // "2xl": "150px",
              md: "110px",
            }}
            h={{
              xl: "67px",
              lg: "50px",

              md: "40px",
            }}
          ></Image>
          <Box
            as={motion.p}
            variants={heading}
            initial={"initial"}
            animate={"animate"}
            fontFamily={"novara"}
            fontWeight={{ md: "400", base: "" }}
            fontSize={{
              xl: "65px",
              lg: "45px",
              // "2xl": "4.1rem",
              md: "2.5rem",
              // sm: "1.2rem",
            }}
            lineHeight={{
              xl: "82px",
              lg: "70px",
              md: "60px",

              // "2xl": "76px"
            }}
            letterSpacing={{
              md: "0.07em",
            }}
            color="white"
          >
            OUR DISTINCTIVE QUALITIES
          </Box>
        </Center>
        <Center align={"center"}>
          <Grid
            marginTop={{ "2xl": "115px", xl: "100", lg: "85", md: "70" }}
            display={{ md: "grid", base: "none" }}
            templateRows={{ md: "repeat(2,1fr)" }}
            templateColumns={{ md: "repeat(4,1fr)" }}
            gridGap={{ xl: "10px", md: "20px" }}
            rowGap={{
              "2xl": "135px",
              xl: "3.5rem",
              lg: "3rem",
              md: "2rem",
            }}
            alignItems={"center"}
            maxW={"1560px"}
            paddingLeft={"30px"}
            paddingRight={"30px"}
          >
            {/* grid item 1 */}
            <GridItem
              rowSpan={{ lg: 1, md: 1 }}
              colSpan={{ lg: 1, md: 1 }}
              textAlign={{ md: "right", base: "left" }}
              maxW={"400px"}
            >
              <QualitiesGrid
                firsttext={"long-lasting wear"}
                secondtext={
                  "Our perfumes are designed to last throughout the day, so you can feel confident that your scent will stay with you from morning to night."
                }
              />
            </GridItem>
            {/* grid item 2 image */}
            <GridItem rowSpan={2} colSpan={2}>
              <Box position="relative" alignItems={"center"} padding={"10px"}>
                <Center>
                  <Image
                    as={motion.img}
                    variants={Ringrotate}
                    initial="initial"
                    animate="animate"
                    src="group 190.png"
                    width={{
                      lg: "480px",
                      xl: "600px",
                      "2xl": "645px",

                      md: "350px",
                    }}
                    height={{
                      lg: "470px",
                      xl: "600px",

                      md: "350px",
                      "2xl": "645px",
                    }}
                    position={"absolute"}

                    // left={"60px"}
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
                        lg: "380px",
                        xl: "500px",

                        md: "300px",
                        "2xl": "550px",
                      }}
                      height={{
                        lg: "380px",
                        xl: "500px",
                        "2xl": "550px",

                        md: "300px",
                      }}
                    ></Image>
                  </Box>
                </Center>
              </Box>
            </GridItem>
            {/* grid item 3 */}
            <GridItem
              rowSpan={1}
              colSpan={1}
              textAlign={{ md: "left" }}
              color={"white"}
              // maxW={"400px"}
              // maxW={"370px"}
            >
              <Box>
                <QualitiesGrid
                  textY={" Unique secents"}
                  secondtextY={
                    " because smelling like a million bucks just isn't good enough for the elite. Our perfumes are made with the finest ingredients."
                  }
                />
              </Box>
            </GridItem>
            {/* grid item 4 */}
            <GridItem
              rowSpan={1}
              colSpan={1}
              textAlign={{ md: "right", base: "left" }}
              // maxW={"370px"}
            >
              <QualitiesGrid
                firsttext={"sustainable packaging"}
                secondtext={
                  "Our perfumes are designed to last throughout the day, so you can feel confident that your scent will stay with you from morning to night."
                }
              />
            </GridItem>
            {/* grid item 5 */}
            <GridItem
              rowSpan={1}
              colSpan={1}
              textAlign={{ md: "left", base: "right" }}
              // maxW={"400px"}
              // maxW={"370px"}
            >
              <QualitiesGrid
                textY={"Natural ingrdients"}
                secondtextY={
                  "because smelling like a million bucks just isn't good enough for the elite. Our perfumes are made with the finest ingredients."
                }
              />
            </GridItem>
          </Grid>
        </Center>
      </Box>
    </Box>
  );
}
