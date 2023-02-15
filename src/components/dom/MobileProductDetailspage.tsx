import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
export default function ProductDetailpage({ productData }) {
  return (
    <Box
      display={{ base: "flex", md: "none" }}
      flexDir={"column"}
      width={"100vw"}
      // height={"100vh"}
      padding={"10px"}
    >
      <Box
        display={"flex"}
        flexDir={"row"}
        justifyContent={"space-between"}
        paddingTop={"20px"}
      >
        <Text
          w="full"
          fontFamily={"novara"}
          fontStyle={"normal"}
          fontWeight={"400"}
          fontSize={{ base: "24px", sm: "30px" }}
          lineHeight={"27px"}
          letterSpacing={"0.07em"}
          width={{ base: "200px", sm: "250px" }}
          justifyItems={"start"}
        >
          {productData?.productName}
        </Text>
        <Text
          // border="1px solid black"
          paddingTop={"10px"}
          fontFamily={"gilroy"}
          fontStyle={"normal"}
          fontWeight={"500"}
          fontSize={{ base: "18px", sm: "20px" }}
          lineHeight={"0.04em"}
          justifyItems={"flex-end"}
          // position={"absolute"}
          // left={"356px"}
        >
          {productData?.price}
        </Text>
      </Box>
      <Image
        src={productData?.src}
        margin="auto"
        w="95%"
        maxH="450px"
        objectFit="cover"
        paddingTop={"10px"}
      ></Image>
      <Text
        // width={"306px"}
        fontFamily={"gilroy"}
        fontWeight={"400"}
        fontSize={{ base: "12px", sm: "14px" }}
        lineHeight={"19px"}
        letterSpacing={"7%"}
        paddingTop={"10px"}
      >
        {productData?.productDiscription}
      </Text>
      <Box display="flex" paddingTop={"35px"} gap="2rem" alignItems="center">
        <label style={{ fontSize: "18px" }} className="container">
          50 ml/1.7 oz
          <input
            style={{ border: "5px solid black" }}
            type="radio"
            checked
            name="radio"
          />
          <span className="checkmark"></span>
        </label>
        <label style={{ fontSize: "18px" }} className="container">
          100 ml/3.4 oz
          <input type="radio" name="radio" />
          <span className="checkmark"></span>
        </label>
      </Box>
      <Text
        fontFamily={"gilroy"}
        fontWeight={"500"}
        fontSize={{ base: "13px", sm: "15px" }}
        lineHeight={"13px"}
        letterSpacing={"9.5%"}
        paddingTop={"20px"}
      >
        Available Notes
      </Text>
      <Flex
        flexDir={"row"}
        gap={"0.5rem"}
        fontFamily={"gilroy"}
        paddingTop={"20px"}
      >
        <Button
          fontWeight={"400"}
          fontSize={{ base: "8.5px", sm: "10px" }}
          lineHeight={"17px"}
          letterSpacing={"10%"}
          border={"1px solid black"}
          borderRadius={"20px"}
          height="25px"
          width={{ base: "60px", sm: "70px" }}
          bgColor={"white"}
          _hover={{ bgColor: "black", color: "white" }}
        >
          Top Note
        </Button>
        <Button
          fontWeight={"400"}
          fontSize={{ base: "8.5px", sm: "10px" }}
          lineHeight={"17px"}
          letterSpacing={"10%"}
          border={"1px solid black"}
          borderRadius={"20px"}
          height="25px"
          width={{ base: "75px", sm: "85px" }}
          bgColor={"white"}
          _hover={{ bgColor: "black", color: "white" }}
        >
          Medium Note
        </Button>
        <Button
          fontWeight={"400"}
          fontSize={{ base: "8.5px", sm: "10px" }}
          lineHeight={"17px"}
          letterSpacing={"10%"}
          border={"1px solid black"}
          borderRadius={"20px"}
          height="25px"
          width={{ base: "60px", sm: "70px" }}
          bgColor={"white"}
          _hover={{ bgColor: "black", color: "white" }}
        >
          Base Note
        </Button>
      </Flex>
      <Flex flexDir={"row"} gap={"rem"} paddingTop={"30px"}>
        <Button
          bgColor={"white"}
          // borderBottom={"1px solid black"}
          // borderRadius={"1x"}
          fontFamily={"novara"}
          fontStyle={"normal"}
          fontWeight={"500"}
          fontSize={"22px"}
          lineHeight={"12px"}
          letterSpacing={"0.185em"}
          textDecorationLine={"underline"}
          margin="auto"
          paddingRight="2rem"
        >
          CONTACT STORE
          <Image
            marginLeft="2rem"
            src={"/images/ArrowIcon.png"}
            width={"23px"}
            height={"11px"}
            margin="auto"
          />
        </Button>
      </Flex>
    </Box>
  );
}
