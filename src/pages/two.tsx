import dynamic from "next/dynamic";
const Box = dynamic(() => import("@/components/canvas/Box"), {
  ssr: false,
});

// DOM elements here
const DOM = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <h1>Combine your DOM and 3D</h1>
    </div>
  );
};

// Canvas/R3F components here
const R3F = () => {
  return (
    <>
      <gridHelper />
      <axesHelper />
      <Box route="/" />
    </>
  );
};

// We assume first component is DOM
// second component is Canvas/R3F
// You can even add more and just keep alternating if needed
export default function Page() {
  return (
    <>
      <DOM />
      <R3F />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Page two",
    },
  };
}
