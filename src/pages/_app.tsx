import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import React from "react";
import useStore from "@/helpers/store";
import { useEffect } from "react";
import Header from "@/components/dom/Header";
import Dom from "@/components/layout/dom";
import dynamic from "next/dynamic";
import "@/styles/index.css";

const Canvas = dynamic(() => import("@/components/layout/canvas"), {
  ssr: false,
});

const AppLayout = ({ children }) => {
  // We assume the DOM comes first, then canvas
  // And they can even alternate if they want (DOM, Canvas, DOM, Canvas)
  const newChildren = React.Children.map(children, (child, index) =>
    index % 2 === 0 ? <Dom>{child}</Dom> : <Canvas>{child}</Canvas>
  );

  return newChildren;
};

function App({ Component, pageProps = { title: "index" } }: AppProps) {
  const router = useRouter();
  const { setRouter } = useStore();

  useEffect(() => {
    setRouter(router);
  }, [setRouter, router]);

  // Get the children from each page so we can split them
  //@ts-ignore
  const children = Component(pageProps).props.children;

  return (
    <>
      <Header title={pageProps.title} />
      <AppLayout>{children}</AppLayout>
    </>
  );
}

export default App;
