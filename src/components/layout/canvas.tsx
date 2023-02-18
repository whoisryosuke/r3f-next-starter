/** @format */
import * as THREE from "three"
import {
	Suspense,
	useEffect,
	useRef,
	useState,
} from "react"
import { Canvas } from "@react-three/fiber"
import { A11yAnnouncer } from "@react-three/a11y"
import {
	AccumulativeShadows,
	Effects,
	Environment,
	Lightformer,
	OrbitControls,
	PerspectiveCamera,
	Preload,
	RandomizedLight,
	SoftShadows,
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
import Text from "../canvas/Text"
import Loader from "../canvas/Loader"
import Admi from "../canvas/Scene"
import { useControls } from "leva"
import { Material } from "three/src/Three"

const Controls = () => {
	const control = useRef(null)
	return <OrbitControls ref={control} />
}
const CanvasWrapper = ({ children }) => {
	const canvas = useRef(null)

	useEffect(() => {
		console.log(canvas)
	}, [canvas])

	return (
		<Suspense fallback={null}>
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
					alpha: true,
					antialias: true,
					stencil: true,
					depth: true,
					outputEncoding: THREE.sRGBEncoding,
					toneMapping: THREE.ACESFilmicToneMapping,
					// renderBufferDirect(
					// 	camera,
					// 	scene,
					// 	geometry,
					// 	material,
					// 	object,
					// 	geometryGroup
					// ) {
					// 	material.needsUpdate = true
					// },
				}}
				// gl={canvas => {
				// 	const renderer = new THREE.WebGLRenderer({
				// 		canvas,
				// 	})
				// 	console.log(renderer.renderBufferDirect)
				// }}
			>
				<color
					attach="background"
					// args={["#283846"]}
					args={["#000"]}
				/>
				<Stats />
				<Model />
				{/* <Admi /> */}
				<Text />
				<EffectComposer
					multisampling={5}
					disableNormalPass={false}
				>
					{/* <Bloom
						luminanceThreshold={0.05}
						luminanceSmoothing={0.9}
						height={200}
						opacity={0.2}
					/> */}
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
		</Suspense>
	)
}

export default CanvasWrapper
