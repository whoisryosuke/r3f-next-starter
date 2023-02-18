import React, { useEffect, useState, useRef } from "react";
import { Box, Button, Heading, Image, Link, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import MagicSliderDots from "react-magic-slider-dots";
import ReactDOM from "react-dom";
import ReactSwipe from "react-swipe";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-magic-slider-dots/dist/magic-dots.css";
import SimpleImageSlider from "react-simple-image-slider";
// import Link from "next/link";

const MobileFragrances = (props) => {
  const [dotIndex, setDotIndex] = useState(0);

  const ref = useRef(0);
  console.log(ref.current);
  const settings = {
    dots: true,
    color: "white",
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => {
      return <MagicSliderDots dots={dots} numDotsToShow={5} dotWidth={30} />;
    },
  };

  const perfumes = [
    {
      id: 0,
      productName: "Chanel No",
      src: "/images/one.jpg",
      productDiscription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus risus, porta vitae est vitae, finibus vulputate turpis. Nam lectus urna, dictum id nisi quis, convallis feugiat urna. Nam bibendum felis dui, vitae imperdiet magna .",
      price: "$200",
      color: "white",
    },
    {
      id: 1,
      productName: "Le Labo Santal ",
      src: "/images/two.jpg",
      productDiscription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus risus, porta vitae est vitae, finibus vulputate turpis. Nam lectus urna, dictum id nisi quis, convallis feugiat urna. Nam bibendum felis dui, vitae imperdiet magna .",
      price: "$500",
      color: "white",
    },
    {
      id: 2,
      productName: "Thierry Mugler Angel.",
      src: "/images/three.jpg",
      productDiscription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus risus, porta vitae est vitae, finibus vulputate turpis. Nam lectus urna, dictum id nisi quis, convallis feugiat urna. Nam bibendum felis dui, vitae imperdiet magna .",
      price: "$50000",
      color: "black",
    },
    {
      id: 3,
      productName: "Engage L'amante Aqua",
      src: "/images/four.jpg",
      productDiscription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus risus, porta vitae est vitae, finibus vulputate turpis. Nam lectus urna, dictum id nisi quis, convallis feugiat urna. Nam bibendum felis dui, vitae imperdiet magna .",
      price: "$10000",
      color: "black",
    },
    {
      id: 4,
      productName: "Zed",
      src: "/images/four.jpg",
      productDiscription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus risus, porta vitae est vitae, finibus vulputate turpis. Nam lectus urna, dictum id nisi quis, convallis feugiat urna. Nam bibendum felis dui, vitae imperdiet magna .",
      price: "$3000000",
      color: "black",
    },
  ];

  let reactSwipeEl;
  const dotArr = [0, 1, 2, 3, 4];

  return (
    <Box
      w="100vw"
      h="100vh"
      bg=" #122333"
      // display={{ base: "felx", lg: "none" }}
      // h="100vh"
      flexDir="colunm"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        display="flex"
        flexDir="colunm"
        alignItems="center"
        justifyContent="center"
      >
        <Heading
          color="white"
          fontFamily="novara"
          paddingTop="50px"
          fontWeight="400"
          textAlign="center"
        >
          the fragrance difference{" "}
        </Heading>
        <Box margin="auto" textAlign="center">
          <Image display="inline-block" w="100px" src="/images/perfume1.png" />
        </Box>
      </Box>

      <Slider {...settings}>
        {perfumes.map((item, index) => {
          // console.log(item.id);
          return (
            <Link
              // as={motion.link}
              // as={`/product/${item.id}`}
              exit={{ opacity: 0 }}
              key={item.id}
              href={`/product/${item.id}`}
              passHref
            >
              {/* <Link
              href={`/product/[id]`}
              as={`/product/${item.id}`}
              passHref
            > */}
              <Box
                as={motion.div}
                key={index}
                ref={ref}
                marginTop="100px"
                display="flex"
                flexDir="column"
                alignItems="center"
                w="300px"
                color="white"
                // border="1px solid white"
                position="relative"
              >
                <Heading
                  as={motion.p}
                  position="absolute"
                  top="40%"
                  left="50px"
                  mixBlendMode=" exclusion"
                  fontFamily="novara"
                  fontSize="3rem"
                  w="300px"
                  textAlign="center"
                  textShadow="2px 5px solid black"
                  fontWeight="400"
                >
                  {item.productName}
                </Heading>
                <Image
                  margin="auto"
                  // href={`/product/${item.id}`}
                  display="inline"
                  borderRadius="300px"
                  w="300px"
                  h="450px"
                  // sx={{
                  //   filter: "saturate(60%)",
                  //   backdgroundFilter: "brightness(0.5)",
                  // }}
                  src={item.src}
                />
              </Box>
            </Link>
          );
        })}
      </Slider>
    </Box>
  );
};
export default MobileFragrances;
