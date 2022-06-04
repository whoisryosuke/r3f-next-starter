import useStore from "@/helpers/store";
import { A11y } from "@react-three/a11y";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useControls } from "leva";

const BoxComponent = ({ route }) => {
  const { router } = useStore();
  // This reference will give us direct access to the THREE.Mesh object
  const mesh = useRef(null);
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  // Optional Leva debug panel for properties
  const { scale } = useControls({ scale: 1 });
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) =>
    mesh.current
      ? (mesh.current.rotation.y = mesh.current.rotation.x += 0.01)
      : null
  );
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <>
      <A11y
        role="button"
        description={`Navigate to next route ${route}`}
        activationMsg="Loading next route"
        actionCall={() => router.push(route)}
      >
        <mesh
          ref={mesh}
          onClick={() => router.push(route)}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
          // When we hover, we scale to 10% more
          scale={hovered ? scale + scale * 0.1 : scale}
        >
          <boxBufferGeometry args={[1, 1, 1]} />
          <meshPhysicalMaterial color={route === "/" ? "orange" : "hotpink"} />
        </mesh>
      </A11y>
      <directionalLight position={[5, 5, 5]} />
      <ambientLight />
    </>
  );
};
export default BoxComponent;
