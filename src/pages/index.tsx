/** @format */

// import Model from "@/components/canvas/Perfume"
import Loader from "@/components/canvas/Loader";
import Text from "@/components/canvas/Text";
import Navbar from "@/components/dom/Navbar";
import useStore from "@/helpers/store";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Qualities from "@/components/dom/Qualities";
import MobileQualities from "@/components/dom/modilequalities";
import Testimonials from "@/components/dom/Testimonials";
import Mobiletestimonial from "@/components/dom/Mobiletestimonials";
import ProductDetailpage from "@/components/dom/ProductDetailspage";
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
  return (
    <>
      {/* <Loader />
      <Navbar /> */}
      {/* <Qualities />
      <MobileQualities /> */}
      {/* <Testimonials /> */}
      {/* <Mobiletestimonial /> */}
      <ProductDetailpage />
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
