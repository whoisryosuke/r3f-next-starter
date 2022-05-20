export default function Instructions() {
  return (
    <div
      style={{
        // position: 'absolute',
        // top: 8,
        padding: "32px",
        maxWidth: "calc(100% - 28px)",
        font: "Open Sans, Helvetica, Noto Sans, Arial, sans-serif",
        fontSize: "18px",
        lineHeight: "24px",
      }}
    >
      <p className="hidden mb-8 md:block">
        This is a minimal starter for Nextjs + Threejs. Click on the cube to
        navigate to the `/box` page. OrbitControls is enabled by default.
      </p>
      <div className="tracking-wider">
        Step 1 - <span style={{ color: "rgb(84, 90, 114)" }}>update:</span>
        <span style={{ color: "rgb(95, 170, 232)", fontWeight: "bold" }}>
          {" "}
          @/pages/index{" "}
        </span>
        <br />
        Step 2 - <span style={{ color: "rgb(84, 90, 114)" }}>update:</span>
        <span style={{ color: "rgb(95, 170, 232)", fontWeight: "bold" }}>
          {" "}
          @/components/canvas/Shader/Shader{" "}
        </span>
        <br />
        Step 3 - <span style={{ color: "rgb(84, 90, 114)" }}>delete:</span>
        <span style={{ color: "rgb(95, 170, 232)", fontWeight: "bold" }}>
          {" "}
          @/pages/box{" "}
        </span>
        <br />
        Step 4 -{" "}
        <span style={{ color: "rgb(84, 90, 114)" }}>update header:</span>
        <span style={{ color: "rgb(95, 170, 232)", fontWeight: "bold" }}>
          {" "}
          @/config{" "}
        </span>
        <br />
        Step 5 - <span style={{ color: "rgb(84, 90, 114)" }}>delete:</span>
        <span style={{ color: "rgb(95, 170, 232)", fontWeight: "bold" }}>
          {" "}
          @/components/dom/Instructions
        </span>
      </div>
    </div>
  );
}
