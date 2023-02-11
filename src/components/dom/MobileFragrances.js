import React, { useEffect, useState } from "react";
import { Box, Heading, Image, Link } from "@chakra-ui/react";
import ReactDOM from "react-dom";
import ReactSwipe from "react-swipe";
import { motion } from "framer-motion";

const MobileFragrances = () => {
  const [dotIndex, setDotIndex] = useState("");

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
  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => {
      return <MagicSliderDots dots={dots} numDotsToShow={5} dotWidth={30} />;
    },
  };
  let reactSwipeEl;
  const dotArr = [1, 2, 3, 4, 5, 6, 7];

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
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
        ref={(el) => (reactSwipeEl = el)}
      >
        {perfumes.map((item, index) => {
          // console.log(item.id);
          return (
            <Box
              as={motion.div}
              whileInView={() => setDotIndex(item.id)}
              // whileInView={() => console.log(item.id)}
              key={index}
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
                // as={Link}
                position="absolute"
                // href={`/product/${item.id}`}
                top="40%"
                mixBlendMode=" exclusion"
                fontFamily="novara"
                fontSize="3rem"
                w="300px"
                textAlign="center"
                textShadow="2px 5px solid black"
                fontWeight="400"
                // color={item.color}
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
          );
        })}
      </ReactSwipe>
      <Box
        display="flex"
        justifyContent="center"
        gap="10px"
        alignItems="center"
      >
        {dotIndex &&
          dotArr.map((item, index) => {
            if (index == dotIndex) {
              console.log(index, dotIndex);
            }
            return (
              <Box
                marginTop="20px"
                w={index == dotIndex ? "20px" : "10px"}
                h={index == dotIndex ? "20px" : "10px"}
                bg={index == dotIndex ? "black" : "white"}
                borderRadius="50%"
              />
            );
          })}
      </Box>

      {/* <button onClick={() => reactSwipeEl.next()}>Next</button>
      <button onClick={() => reactSwipeEl.prev()}>Previous</button> */}
    </Box>
  );
};
export default MobileFragrances;

// import React, { Component } from "react";
// import Slider from "react-slick";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";
// import MagicSliderDots from "react-magic-slider-dots";
// import "react-magic-slider-dots/dist/magic-dots.css";
// import { Box } from "@chakra-ui/react";

// function MobileFragrances() {
//   const settings = {
//     dots: true,
//     // arrows: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     appendDots: (dots) => {
//       return <MagicSliderDots dots={dots} numDotsToShow={5} dotWidth={30} />;
//     },
//   };

//   return (
//     <Slider {...settings}>
//       <Box display="inline" w="500px" h="500px" bg="black">
//         <h1>1</h1>
//       </Box>

//       <Box w="500px" h="500px" bg="black"></Box>

//       <Box w="500px" h="500px" bg="black"></Box>

//       <Box w="500px" h="500px" bg="black"></Box>

//       <Box w="500px" h="500px" bg="black"></Box>
//     </Slider>
//   );
// }

// export default MobileFragrances;
