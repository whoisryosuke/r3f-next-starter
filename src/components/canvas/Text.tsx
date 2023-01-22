/** @format */

// import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { useRef, useEffect } from "react"
import { Mesh } from "three"
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

const Text = () => {
	// This reference will give us direct access to the mesh
	const mesh = useRef<Mesh>()

	// const fnt = useLoader(
	// 	FontLoader,
	// 	"/Novara-msdf/Novara-msdf.fnt"
	// )
	const fontTex = useLoader(
		TextureLoader,
		"/Novara-msdf/Novara.png"
	)

	const geometry = new TextGeometry({
		font: font,
		text: "FUCKTHIS",
		size: 40,
		alignY: "center",
		alignX: "center",
		lineHeight: 1,
		height: 10,
		width: 10,
	})

	console.log(geometry)

	const material = new THREE.ShaderMaterial({
		vertexShader: vertex,
		fragmentShader: fragment,
		uniforms: {
			uAtlas: { value: fontTex },
			uThreshold: { value: 0.5 },
		},
		transparent: true,
		defines: {
			USE_MSDF_GEOMETRY: "1.0",
			USE_THRESHOLD: "1.0",
		},
	})

	// Rotate mesh every frame
	// You should be able to autocomplete `mesh.current`
	// with other properties like `scale` or `position`

	useFrame(() => {
		// if (text.current !== undefined) {
		// 	text.current.rotation.x =
		// 		text.current.rotation.y += 0.01
		// }
	})

	const text = useRef()

	useEffect(() => {
		if (text.current) {
			console.log(text.current)
		}
	}, [text])

	return (
		<>
			{/* <mesh
				ref={mesh}
				position={[0, 0, 2]}
			>
				<planeBufferGeometry args={[1, 1, 1]} />
				<TextMaterial />
			</mesh> */}
			<Suspense fallback={<></>}>
				<mesh
					ref={text}
					geometry={geometry}
					// rotation={[0, Math.PI / 2, 0]}
					position={[0, 0, 0]}
					scale={[0.05, 0.05, 0.05]}
					material={material}
				></mesh>
			</Suspense>
		</>
	)
}

export default Text
