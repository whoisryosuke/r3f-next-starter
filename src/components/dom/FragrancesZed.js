import {
  Box,
  Button,
  Grid,
  Heading,
  Image,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  ScrollerMotion,
  useScrollerMotion,
  ScrollerMotionRef,
} from "scroller-motion";

const FragrancesZed = (props) => {
  const perfumes = [
    {
      id: "0",
      productName: "Chanel No",
      src: "/images/one.jpg",
      productDiscription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus risus, porta vitae est vitae, finibus vulputate turpis. Nam lectus urna, dictum id nisi quis, convallis feugiat urna. Nam bibendum felis dui, vitae imperdiet magna .",
      price: "$200",
    },
    {
      id: "1",
      productName: "Le Labo Santal ",
      src: "/images/two.jpg",
      productDiscription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus risus, porta vitae est vitae, finibus vulputate turpis. Nam lectus urna, dictum id nisi quis, convallis feugiat urna. Nam bibendum felis dui, vitae imperdiet magna .",
      price: "$500",
    },
    {
      id: "2",
      productName: "Thierry Mugler Angel.",
      src: "/images/three.jpg",
      productDiscription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus risus, porta vitae est vitae, finibus vulputate turpis. Nam lectus urna, dictum id nisi quis, convallis feugiat urna. Nam bibendum felis dui, vitae imperdiet magna .",
      price: "$50000",
    },
    {
      id: "3",
      productName: "Engage L'amante Aqua",
      src: "/images/four.jpg",
      productDiscription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus risus, porta vitae est vitae, finibus vulputate turpis. Nam lectus urna, dictum id nisi quis, convallis feugiat urna. Nam bibendum felis dui, vitae imperdiet magna .",
      price: "$10000",
    },
    {
      id: "4",
      productName: "Zed",
      src: "/images/four.jpg",
      productDiscription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus risus, porta vitae est vitae, finibus vulputate turpis. Nam lectus urna, dictum id nisi quis, convallis feugiat urna. Nam bibendum felis dui, vitae imperdiet magna .",
      price: "$3000000",
    },
    {
      id: "5",
      productName: "Zed",
      src: "/images/four.jpg",
      productDiscription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus risus, porta vitae est vitae, finibus vulputate turpis. Nam lectus urna, dictum id nisi quis, convallis feugiat urna. Nam bibendum felis dui, vitae imperdiet magna .",
      price: "$3000000",
    },
    {
      id: "6",
      productName: "Zed",
      src: "/images/four.jpg",
      productDiscription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus risus, porta vitae est vitae, finibus vulputate turpis. Nam lectus urna, dictum id nisi quis, convallis feugiat urna. Nam bibendum felis dui, vitae imperdiet magna .",
      price: "$3000000",
    },
    {
      id: "7",
      productName: "Zed",
      src: "/images/four.jpg",
      productDiscription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus risus, porta vitae est vitae, finibus vulputate turpis. Nam lectus urna, dictum id nisi quis, convallis feugiat urna. Nam bibendum felis dui, vitae imperdiet magna .",
      price: "$3000000",
    },
    {
      id: "8",
      productName: "Zed",
      src: "/images/four.jpg",
      productDiscription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus risus, porta vitae est vitae, finibus vulputate turpis. Nam lectus urna, dictum id nisi quis, convallis feugiat urna. Nam bibendum felis dui, vitae imperdiet magna .",
      price: "$3000000",
    },
    {
      id: "9",
      productName: "Zed",
      src: "/images/four.jpg",
      productDiscription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus risus, porta vitae est vitae, finibus vulputate turpis. Nam lectus urna, dictum id nisi quis, convallis feugiat urna. Nam bibendum felis dui, vitae imperdiet magna .",
      price: "$3000000",
    },
    {
      id: "10",
      productName: "Zed",
      src: "/images/four.jpg",
      productDiscription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus risus, porta vitae est vitae, finibus vulputate turpis. Nam lectus urna, dictum id nisi quis, convallis feugiat urna. Nam bibendum felis dui, vitae imperdiet magna .",
      price: "$3000000",
    },
  ];

  const scrollDemo = useRef(null);

  const horizontalScroll = useRef(null);

  const scrollTop = useRef(0);

  useEffect(() => {
    const updateScrollPos = (e) => {
      // console.log(e.target.scrollTop);
      console.log(e.target.scrollTop / scrollDemo.current.clientHeight);
      scrollTop.current = e.target.scrollTop;

      // console.log(scrollDemo.current.clientHeight);
    };

    scrollDemo.current.addEventListener("scroll", updateScrollPos);

    return () => {
      scrollDemo.current.removeEventListener("scroll", updateScrollPos);
    };
  }, []);
  function lerp(v0, v1, t) {
    return v0 * (1 - t) + v1 * t;
  }

  const easeInOutQuad = (x) => {
    return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
  };
  useAnimationFrame((time, delta) => {
    scrollDemo.current.scrollTop = scrollTop.current + easeInOutQuad(0.8);
    const verticalScrollProgress =
      scrollTop.current / scrollDemo.current.clientHeight;
    horizontalScroll.current.scrollLeft = lerp(
      horizontalScroll.current.scrollLeft,
      horizontalScroll.current.clientWidth * verticalScrollProgress,
      easeInOutQuad(0.17)
    );
  });
  return (
    <Box w="100vw" h="100vh" display={{ lg: "block", base: "none" }}>
      <Box display="flex " justifyContent="center" gap="2rem" py="2rem">
        <Image w="200px" h="100px" src="/images/perfumeHeading.png" />
        <Heading
          fontFamily="novara"
          fontSize="4rem"
          fontWeight="400"
          marginBottom="4rem"
        >
          the fragrance difference
        </Heading>
      </Box>

      <Box display="flex" justifyContent="space-around">
        <Box
          id="scrollDemo"
          ref={scrollDemo}
          as={motion.div}
          height="600px"
          overflow="auto"
          display={{ lg: "inline-block", base: "none" }}
          overscrollBehaviorY="none"
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {perfumes.map((item, index) => {
            return (
              <Box
                as={Link}
                href={`/product/${item.id}`}
                key={index}
                background="linear-gradient(to right, black 50%, white 50%)"
                backgroundSize="200% 100%"
                backgroundPosition="right"
                _hover={{
                  backgroundPosition: "left",
                  color: "white",
                  border: "0px",
                }}
                transition="all 0.5s ease-out"
                display="flex"
                w="100%"
                py="1rem"
                alignItems="center"
                gap="2rem"
                borderBottom="1px solid gray "
              >
                <Text
                  transition="all 0.2s ease-out"
                  h="6rem"
                  fontFamily="novara"
                  fontSize="4rem"
                  paddingLeft="4rem "
                >
                  {item.productName}
                </Text>
                <Box
                  w="60px"
                  h="60px"
                  display="flex"
                  justifyContent="center"
                  bg="#D9D9D9"
                  alignItems="center"
                  borderRadius="50%"
                >
                  <Image src="/images/ArrowIcon.png" />
                </Box>
              </Box>
            );
          })}
        </Box>

        <Grid
          ref={horizontalScroll}
          // maxW="100vw"
          w="20%"
          templateColumns="repeat(11, 1fr)"
          // justifyContent="center"
          alignItems="center"
          overflow="scroll"
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {perfumes.map((item, index) => {
            return (
              <Box
                onMouseEnter={() => {
                  console.log(index);
                }}
                h={"300px"}
                w="300px"
              >
                <Image borderRadius="200px" src={item.src} key={index} />
              </Box>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};
export default FragrancesZed;
