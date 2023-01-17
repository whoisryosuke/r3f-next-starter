/** @format */

import { useRef, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { A11yAnnouncer } from "@react-three/a11y"
import {
	Effects,
	Environment,
	Lightformer,
	OrbitControls,
	PerspectiveCamera,
	Preload,
	Stats,
} from "@react-three/drei"
import Model from "../canvas/Perfume"
import {
	EffectComposer,
	DepthOfField,
	Bloom,
	Noise,
	Vignette,
	SSR,
	BrightnessContrast,
	ToneMapping,
} from "@react-three/postprocessing"

const Controls = () => {
	const control = useRef(null)
	return <OrbitControls ref={control} />
}
const CanvasWrapper = ({ children }) => {
	const [mCoord, setMCoord] = useState({
		x: 0,
		y: 0,
	})

	const [isMouse, setIsMouse] = useState(false)

	const canvas = useRef(null)
	// console.log(canvas.current?.clientWidth)

	const handlePointerMove = (e: any) => {
		if (isMouse == true && canvas.current) {
			let w = canvas.current?.clientWidth
			let h = canvas.current?.clientHeight
			let x = e.pageX
			let y = e.pageY

			x = (x - w / 2) / w
			y = (y - h / 2) / h

			setMCoord({
				x: x,
				y: y,
			})
		}
	}

	return (
		<>
			<Canvas
				// Is this deprecated or typed wrong? Ignoring for now.
				ref={canvas}
				// @ts-ignore
				mode="concurrent"
				style={{
					position: "absolute",
					top: 0,
					// background: "green",
				}}
				gl={{
					powerPreference: "high-performance",
					alpha: false,
					antialias: false,
					stencil: false,
					depth: false,
				}}
				// @ts-ignore
				onPointerOver={() => setIsMouse(true)}
				// @ts-ignore
				onPointerMove={handlePointerMove}
				// @ts-ignore
				onPointerLeave={() => setIsMouse(false)}
			>
				<color
					attach="background"
					args={["#283846"]}
				/>
				<Stats />
				<Model mCoords={mCoord} />
				<EffectComposer
					multisampling={10}
					disableNormalPass={true}
				>
					<Bloom
						luminanceThreshold={0.05}
						luminanceSmoothing={0.9}
						height={200}
						opacity={0.2}
					/>
					<DepthOfField
						focusDistance={0.007}
						focalLength={0.02}
						bokehScale={1.1}
						height={480}
					/>
					<BrightnessContrast
						brightness={-0.05} // brightness. min: -1, max: 1
						contrast={0.08} // contrast: min -1, max: 1
					/>
				</EffectComposer>
				{/* <Controls /> */}
				<Preload all />
				{children}
			</Canvas>
			<A11yAnnouncer />
		</>
	)
}

export default CanvasWrapper
