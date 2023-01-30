import { Box, Center, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

export default function Qualities() {
  return (
    <Box width={"1920px"} height={"1082px"} bgColor={"#122333"}>
      <Box>
        <Center
          width={"100vw"}
          display={"flex"}
          flexDir={"row"}
          gap={"1rem"}
          padding={"30px"}
          // marginTop={"30px"}
        >
          <Image
            src="Rectangle 37.png"
            w={"146px"}
            h={"63px"}

            // borderRadius={"30px"}
          ></Image>
          <Box
            fontFamily={"novara"}
            fontWeight={"400"}
            fontSize={"65px"}
            lineHeight={"82px"}
            letterSpacing={"0.07em"}
            color={"white"}
          >
            OUR DISTINCTIVE QUALITIES
          </Box>
        </Center>
        <Center width={"100vw"} alignItems={"center"}>
          <Grid
            templateRows={"repeat(2,1fr)"}
            templateColumns={"repeat(4,1fr)"}
            gap={"2rem"}
          >
            <GridItem rowSpan={1} colSpan={1}>
              <Box
                color={"white"}
                fontFamily={"novara"}
                fontSize={"32px"}
                lineHeight={"82px"}
                textAlign={"right"}
                letterSpacing={"0.09em"}
                fontWeight={"400"}
              >
                long-lasting wear
              </Box>
              <Box
                fontFamily={"gilroy"}
                color={"white"}
                fontSize="22px"
                lineHeight={"32px"}
                width={"461px"}
                height={"190px"}
                fontWeight={"300"}
                letterSpacing={"0.04em"}
                textAlign={"right"}
              >
                Our perfumes are designed to last throughout the day, so you can
                feel confident that your scent will stay with you from morning
                to night.
              </Box>
            </GridItem>
            <GridItem
              rowSpan={2}
              colSpan={2}
              position="relative"
              width={"550px"}
              height={"550px"}
              border={"1px solid white"}
              borderRadius={"50%"}
              alignItems={"center"}
              display={"flex"}
              justifyContent={"center"}
            >
              <Image
                src="Ellipse 44.png"
                width={"500px"}
                height={"500px"}
              ></Image>
              <Box position="absolute" top="0" right="100px">
                <Image src="Ellipse 2.png" />
              </Box>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} color={"white"}>
              <Box
                color={"white"}
                fontFamily={"novara"}
                fontSize={"32px"}
                lineHeight={"82px"}
                // textAlign={"right"}
                letterSpacing={"0.09em"}
                fontWeight={"400"}
              >
                Unique secents
              </Box>
              <Box
                fontFamily={"gilroy"}
                color={"white"}
                fontSize="22px"
                lineHeight={"32px"}
                width={"396px"}
                height={"190px"}
                fontWeight={"300"}
                letterSpacing={"0.04em"}
                // textAlign={"right"}
              >
                Our perfumes are designed to last throughout the day, so you can
                feel confident that your scent will stay with you from morning
                to night.
              </Box>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1}>
              <Box
                color={"white"}
                fontFamily={"novara"}
                fontSize={"32px"}
                lineHeight={"82px"}
                textAlign={"right"}
                letterSpacing={"0.09em"}
                fontWeight={"400"}
              >
                sustainable packaging
              </Box>
              <Box
                fontFamily={"gilroy"}
                color={"white"}
                fontSize="22px"
                lineHeight={"32px"}
                width={"461px"}
                height={"190px"}
                fontWeight={"300"}
                letterSpacing={"0.04em"}
                textAlign={"right"}
              >
                Our perfumes are designed to last throughout the day, so you can
                feel confident that your scent will stay with you from morning
                to night.
              </Box>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1}>
              <Box
                color={"white"}
                fontFamily={"novara"}
                fontSize={"32px"}
                lineHeight={"82px"}
                letterSpacing={"0.09em"}
                fontWeight={"400"}
              >
                Natural ingrdients
              </Box>
              <Box
                fontFamily={"gilroy"}
                color={"white"}
                fontSize="22px"
                lineHeight={"32px"}
                width={"461px"}
                height={"190px"}
                fontWeight={"300"}
                letterSpacing={"0.04em"}
              >
                Our perfumes are designed to last throughout the day, so you can
                feel confident that your scent will stay with you from morning
                to night.
              </Box>
            </GridItem>
          </Grid>
        </Center>
      </Box>
    </Box>
  );
}
