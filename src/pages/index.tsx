/** @format */

// import Model from "@/components/canvas/Perfume"
import Loader from "@/components/canvas/Loader";
// import { BrowserRouter, Routes, Route ,Router} from "react-router-dom";
import Text from "@/components/canvas/Text";
import Navbar from "@/components/dom/Navbar";
import useStore from "@/helpers/store";
import dynamic from "next/dynamic";
import Scene1 from "../components/dom/Scene1";
import FirstPage from "../components/dom/FirstPage";
import Scene2 from "../components/dom/Scene2";
import Brands from "../components/dom/Brands";
import Truely from "../components/dom/Truely/Truely";
import MobileTruely from "../components/dom/Truely/MobileTruely";
import MobileFragrances from "../components/dom/MobileFragrances";
import Fragrances from "../components/dom/Fragrances";
import FragrancesZed from "../components/dom/FragrancesZed";
import GetinTouch from "../components/dom/GetinTouch";
import Footer from "../components/dom/Footer";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { useState } from "react";
// import ProductDetailpage from "@/components/dom/ProductDetailspage";
import ProductDetailComponent from "@/components/dom/ProductDetailComponent";
// import ProductDetailComponent from "@/components/dom/ProductDetailComponent";
// import ProductDetail from "./product/[id]";

import { useRouter } from "next/router";
import Qualities from "@/components/dom/Qualities";
import MobileQualities from "@/components/dom/modilequalities";
import Testimonials from "@/components/dom/Testimonials";
import Mobiletestimonial from "@/components/dom/Mobiletestimonials";
// import Shader from '@/components/canvas/ShaderExample/ShaderExample'

// Prefer dynamic import for production builds
// But if you have issues and need to debug in local development
// comment these out and import above instead
// https://github.com/pmndrs/react-three-next/issues/49
const Model = dynamic(() => import("@/components/canvas/Perfume"), {
  ssr: false,
});

// DOM elements here
const DOM = () => {
  const [blueActive, setBlueActive] = useState("#122333");
  const [redActive, setRedActive] = useState("");
  const [whiteActive, setWhiteActive] = useState("");

  let activeBg = "";
  let fontColor = "";
  let imgInvert = "";

  let filter = "";
  if (blueActive) {
    activeBg = "#122333";
    fontColor = "#fff";
  }
  if (redActive) {
    activeBg = "#D24443";
    fontColor = "#fff";
  }

  if (whiteActive) {
    activeBg = "#fff";
    fontColor = "black";
    imgInvert = ' webkitFilter: "invert(1)"';

    filter = "invert(100%)";
  }

  return (
    <>
      <Loader />
      <Navbar />
      <FirstPage
        activeBg={activeBg}
        fontColor={fontColor}
        imgInvert={imgInvert}
        filter={filter}
        setBlueActive={setBlueActive}
        setRedActive={setRedActive}
        setWhiteActive={setWhiteActive}
      />
      <Scene1 />
      <Scene2 />
      <Truely activeBg={activeBg} fontColor={fontColor} />
      <MobileTruely activeBg={activeBg} fontColor={fontColor} />
      <Brands />
      {/* <Fragrances /> */}
      {/* <FragrancesZed /> */}
      <MobileFragrances />
      <GetinTouch activeBg={activeBg} fontColor={fontColor} />
      {/* <ProductDetailComponent /> */}
      {/* <ProductDetailpage /> */}
      <Footer />
    </>
  );
};

// Canvas/R3F components here
// const R3F = () => {
//   // Example of using the router to change pages
//   // It can also be inside R3F component (see `two.tsx` and `Box.tsx`)
//   const { router } = useStore();
//   const handleOnClick = () => {
//     router.push("/two");
//   };

//   return <></>;
// };

export default function Page() {
  return (
    <>
      <DOM />
      {/* <R3F /> */}
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Welcome!",
    },
  };
}
