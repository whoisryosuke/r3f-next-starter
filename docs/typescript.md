# R3F + Typescript

Examples and snippets for common workflows using R3F and types.

You can browse [the official ThreeJS types here](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/three).

> Make sure `@types/three` is installed in your project or you won't get intellisense activated for the ThreeJS classes.

## Props

Most of the common ThreeJS elements (like `<mesh>`) have classes you can reference for their properties as React props.

```tsx
import { MeshProps } from "@react-three/fiber";
type Props = Pick<MeshProps, "position" | "scale" | "rotation">;
const YourComponent = (props: Props) => {
  return <mesh {...props} />;
};
```

You can also create your own component with custom props. The Partial basically says to make all MeshProps properties optional:

```tsx
import { MeshProps } from "@react-three/fiber";

type Props = Partial<MeshProps> & {
  pageTitle: string;
};

const YourComponent = ({ pageTitle, ...props }: Props) => {
  console.log("pageTitle", pageTitle);
  return <mesh {...props} />;
};
```

You can often get away with just using the Mesh class as a base for props - but you'll find this gives you issues if you try extending from it:

```tsx
const YourComponent = (props: Mesh) => {
  return <mesh {...props} />;
};
```

### @react-three/cannon

When you use [@react-three/cannon](https://www.npmjs.com/package/@react-three/cannon), you can import their props from the package:

```tsx
import { BoxProps } from "@react-three/cannon";

const YourComponent = (props: BoxProps) => {
  const [ref, api] = useBox(() => ({ mass: 1 }));
  return <mesh ref={ref} {...props} />;
};
```

## Refs

You can use the `Mesh` class from ThreeJS as a ref.

```tsx
import { Mesh } from "three";

const YourComponent = () => {
  // This reference will give us direct access to the mesh
  const mesh = useRef<Mesh>();

  // Rotate mesh every frame
  // You should be able to autocomplete `mesh.current`
  // with other properties like `scale` or `position`
  useFrame(() => {
    if (mesh.current !== undefined) {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    }
  });

  return <mesh ref={mesh}></mesh>;
};
```
