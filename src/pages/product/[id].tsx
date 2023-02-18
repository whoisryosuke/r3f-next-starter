import { Box, ChakraBaseProvider } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import ProductDetailCom from "../../components/dom/ProductDetailComponent";
import MobileProductDetailCom from "../../components/dom/MobileProductDetailspage";

const DOM = ({ productData }) => {
  const data = productData;

  return (
    <>
      {/* <ProductDetail /> */}
      <ChakraBaseProvider>
        <ProductDetailCom productData={data} />
        <MobileProductDetailCom productData={data} />
      </ChakraBaseProvider>
    </>
  );
};

// Canvas/R3F components here
const R3F = () => {
  // Example of using the router to change pages
  // It can also be inside R3F component (see `two.tsx` and `Box.tsx`)

  return <></>;
};

export default function ProductDetail() {
  const { query } = useRouter();

  const [productData, setProductData] = useState();

  useEffect(() => {
    if (query.id) {
      axios
        .get(`http://localhost:3000/api/product/${query?.id}`)
        .then((a) => {
          setProductData(a.data.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }

    return;
  }, [query]);

  return (
    <>
      <DOM productData={productData} />
      {/* <R3F /> */}
    </>
  );
}
