/** @format */

// import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import {
	useRef,
	useEffect,
	useMemo,
	useLayoutEffect,
} from "react"
import { Mesh, RGBA_ASTC_10x10_Format } from "three"
import { Suspense } from "react"
import { useFrame, useLoader } from "@react-three/fiber"
import { FontLoader } from "three-stdlib"
import { TextureLoader } from "three"

import {
	TextGeometry,
	extendMSDFMaterial,
} from "@/three-msdf-text"
import vertex from "./TextMaterial/shaders/text.vert"
import fragment from "./TextMaterial/shaders/text.frag"
// @ts-ignore
import font from "../../Novara-msdf.json"
import { useControls } from "leva"
import { shaderMaterial } from "@react-three/drei"
import { extend } from "react-three-fiber"
import { easing } from "maath"

const Text = () => {
	// This reference will give us direct access to the mesh
	const mesh = useRef<Mesh>()

	// const fnt = useLoader(
	// 	FontLoader,
	// 	"/Novara-msdf/Novara-msdf.fnt"
	// )

	const shaderControls = useControls("shader controls", {
		progress: { value: 0.5, min: 0, max: 3.5, step: 0.01 },
	})

	const fontTex = useLoader(
		TextureLoader,
		"/Novara-msdf/Novara.png"
	)

	const easeOutQuint = (x: number): number => {
		if (x < 0) {
			return Math.pow(1 + x, 10) - 1
		}
		return 1 - Math.pow(1 - x, 10)
	}

	const geometry = new TextGeometry({
		font: font,
		text: "scent-sational\n luxury          for\n royalty.",
		size: 50,
		lineHeight: 1.2,
		letterSpacing: 0.07,
		lineCharCount: true,
		uv: true,
	})

	const TextShader = new THREE.ShaderMaterial({
		uniforms: {
			progress: { value: shaderControls.progress },
			uAtlas: { value: fontTex },
		},
		defines: {
			USE_MSDF_GEOMETRY: "1.0",
			USE_THRESHOLD: "1.0",
		},
		transparent: true,
		vertexShader: vertex,
		fragmentShader: fragment,
	})

	extend({ TextShader })

	// useLayoutEffect(() => {
	// 	if (mRef.current) {
	// 		// mRef.current.uniforms.progress =
	// 		// 	shaderControls.progress
	// 		console.log(mRef.current)
	// 	}
	// }, [shaderControls.progress])

	const lerp = (
		value1: number,
		value2: number,
		amount: number
	) => {
		amount = amount < 0 ? 0 : amount
		amount = amount > 1 ? 1 : amount
		return value1 + (value2 - value1) * amount
	}

	useFrame((state, delta) => {
		// if (text.current !== undefined) {
		// 	text.current.rotation.x =
		// 		text.current.rotation.y += 0.01
		// }
		// if (mRef.current) {
		// 	mRef.current.uniformsNeedUpdate = true
		if (mRef.current.uniforms.progress.value < 1.1) {
			if (state.clock.getElapsedTime() < 3) {
				return
			}
			// mRef.current.uniforms.progress.value += easeOutQuint(
			// 	delta * 0.1
			// )
			mRef.current.uniforms.progress.value += lerp(
				0,
				1.1,
				delta * 0.1
			)
		}

		// }
		// text.current.geometry.scale = 0.5
		// console.log(text.current.material.uniforms)
	})

	const text = useRef()
	const mRef = useRef(null)

	// useEffect(() => {
	// 	if (mRef !== null) {
	// 		mRef.current.uniformsNeedUpdate = true
	// 		console.log(mRef.current)
	// 	}
	// }, [mRef])
	console.log(mRef.current)

	console.log(shaderControls.progress)

	return (
		<>
			<Suspense fallback={<></>}>
				<mesh
					ref={text}
					geometry={geometry}
					// rotation={[0, Math.PI / 2, 0]}
					position={[-3, 0.8, 3]}
					scale={[0.01, 0.01, 0.01]}
					// material={TextShader}
					// material-uniforms-progress={
					// 	shaderControls.progress
					// }
					// material-uniformsNeedUpdate-value={true}
					// material-uniforms-progress-value={
					// 	shaderControls.progress
					// }
					// material-needsUpdate={true}
				>
					<shaderMaterial
						ref={mRef}
						uniformsNeedUpdate={true}
						attach="material"
						args={[
							{
								uniforms: {
									progress: {
										value: shaderControls.progress,
									},
									uThreshold: { value: 0.47 },
									uAtlas: { value: fontTex },
									stroke: { value: true },
									uStrokeInnerWidth: { value: 0.0 },
									uStrokeOuterWidth: { value: 0.3 },
								},
								vertexShader: vertex,
								fragmentShader: fragment,
								defines: {
									USE_MSDF_GEOMETRY: "1.0",
									USE_THRESHOLD: "1.0",
									USE_STROKE: "1.0",
								},
								transparent: true,
							},
						]}
						// uniforms={{ progress: shaderControls.progress }}
					/>
					{/* <textShader /> */}
				</mesh>
			</Suspense>
		</>
	)
}

export default Text