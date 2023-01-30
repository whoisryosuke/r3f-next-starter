import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  ScrollerMotion,
  useScrollerMotion,
  ScrollerMotionRef,
} from "scroller-motion";

const OnePerfume = ({ children }) => {
  return (
    <Box
      background="linear-gradient(to right, black 50%, white 50%)"
      backgroundSize="200% 100%"
      backgroundPosition="right"
      _hover={{
        backgroundPosition: "left",
        color: "white",
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
        {children}
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
};

const Fragrances = () => {
  // const [scrollTop, setScrollTop] = useState(null);

  // const scrollTopMemo = useMemo(() => scrollTop, [scrollTop]);

  const scrollDemo = useRef(null);

  const horizontalScroll = useRef(null);

  const scrollTop = useRef(0);
  const scrollerMotion = useRef();
  const scrollY = useMotionValue(0);

  useEffect(() => {
    const unsubscribe = scrollerMotion.current.scrollY.onChange((v) =>
      scrollY.set(v)
    );

    return () => unsubscribe();
  }, [scrollY]);

  const easeInOutQuad = (x) => {
    return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
  };
  function lerp(v0, v1, t) {
    return v0 * (1 - t) + v1 * t;
  }
  useEffect(() => {
    const updateScrollPos = (e) => {
      // console.log(e.target.scrollTop);
      console.log(e.target.scrollTop / scrollDemo.current.clientHeight);
      scrollTop.current = e.target.scrollTop;

      console.log(scrollTop.current);
    };

    scrollDemo.current.addEventListener("scroll", updateScrollPos);

    return () => {
      scrollDemo.current.removeEventListener("scroll", updateScrollPos);
    };
  }, []);

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
    <Box w="100vw" h="100vh">
      <Box display="flex " justifyContent="center" gap="2rem" py="2rem">
        <Image src="/images/perfumeHeading.png" />
        <Heading fontFamily="novara" fontSize="4rem" marginBottom="4rem">
          the fragrance difference
        </Heading>
      </Box>

      <ScrollerMotion ref={scrollerMotion}>
        <Box display="flex" justifyContent="space-between">
          <Box
            height="600px"
            overflow="auto"
            overscrollBehaviorY="none"
            sx={{
              "::-webkit-scrollbar": {
                display: "none",
              },
            }}
            id="scrollDemo"
            ref={scrollDemo}
          >
            <OnePerfume>Engage L'amante Aqua</OnePerfume>
            <OnePerfume>Engage L'amante Aqua</OnePerfume>
            <OnePerfume>Engage L'amante Aqua</OnePerfume>
            <OnePerfume>Engage L'amante Aqua</OnePerfume>
            <OnePerfume>Engage L'amante Aqua</OnePerfume>
            <OnePerfume>Engage L'amante Aqua</OnePerfume>
            <OnePerfume>Engage L'amante Aqua</OnePerfume>
            <OnePerfume>Engage L'amante Aqua</OnePerfume>
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            w="58%"
            // border="1px solid black"
            gap="10"
            overflow="scroll"
            sx={{
              "::-webkit-scrollbar": {
                display: "none",
              },
            }}
            ref={horizontalScroll}
          >
            <Image borderRadius="40%" h="500px" src="/images/unsplash1.png" />
            <Image borderRadius="40%" h="500px" src="/images/unsplash1.png" />
            <Image borderRadius="40%" h="500px" src="/images/unsplash1.png" />
            <Image borderRadius="40%" h="500px" src="/images/unsplash1.png" />
            <Image borderRadius="40%" h="500px" src="/images/unsplash1.png" />
            <Image borderRadius="40%" h="500px" src="/images/unsplash1.png" />
          </Box>
        </Box>
      </ScrollerMotion>

      <Box className="output"></Box>
    </Box>
  );
};

export default Fragrances;
