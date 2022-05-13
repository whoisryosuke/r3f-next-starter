import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import useStore from '@/helpers/store'
import { useEffect, useRef } from 'react'

const LControl = () => {
  const dom = useStore((state) => state.dom)
  const control = useRef(null)

  // useEffect(() => {
  //   if (control) {
  //     dom.current.style['touch-action'] = 'none'
  //   }
  // }, [dom, control])
  // @ts-ignore
  return <OrbitControls ref={control} 
    //domElement={dom.current} 
  />
}
const LCanvas = ({ children }) => {
  const dom = useStore((state) => state.dom)

  return (
    <Canvas
      // Is this deprecated or typed wrong? Ignoring for now.
      // @ts-ignore
      mode='concurrent'
      style={{
        position: 'absolute',
        top: 0,
      }}
      // This breaks all interactions (hover, click/press, etc)
      // onCreated={(state) => state.events.connect(dom.current)}
    >
      <LControl />
      <Preload all />
      {children}
    </Canvas>
  )
}

export default LCanvas
