import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
// const theme = extendTheme({
//   colors: {
//     brand: {
//       100: "#f7fafc",
//       // ...
//       900: "#1a202c",
//     },
//   },
// })
const breakpoints = {
  // for mobile and below
  sm: "350px",
  // here starts ipad
  md: "768px",
  // ipad+ size 11 inch plus
  lg: "960px",
  // desktops
  xl: "1200px",
  // desktops+
  "2xl": "1536px",
  // desktops++
  "3xl": "2000px",
};

const theme = extendTheme({
  breakpoints,
});

export default theme;
