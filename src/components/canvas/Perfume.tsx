/**
 * /*
 * Auto-generated by: https://github.com/pmndrs/gltfjsx
 *
 * @format
 */

import * as THREE from "three"
import React, {
	useMemo,
	useRef,
	useLayoutEffect,
} from "react"
import {
	useGLTF,
	PerspectiveCamera,
	Environment,
	MeshRefractionMaterial,
	OrbitControls,
	Caustics,
	MeshTransmissionMaterial,
	CubeCamera,
} from "@react-three/drei"
import {
	useFrame,
	useLoader,
	useThree,
} from "@react-three/fiber"
import { GLTF, RGBELoader } from "three-stdlib"
import { useControls } from "leva"
import {
	WebGLRenderTarget,
	Object3D,
	MeshStandardMaterial,
	TextureLoader,
} from "three"
// @ts-ignore
import BackfaceMaterial from "./BackfaceMaterial"
// @ts-ignore
import RefractionMaterial from "./RefractionMaterial/RefractionMaterial"

type GLTFResult = GLTF & {
	nodes: {
		Bottle: THREE.Mesh
		Head: THREE.Mesh
		Liquid: THREE.Mesh
		SprayPipe: THREE.Mesh
		LeftRimLight: THREE.Mesh
		LeftRimLight002: THREE.Mesh
		RimLight: THREE.Mesh
	}
	materials: {
		["Glass.002"]: THREE.MeshPhysicalMaterial
		Head: THREE.MeshStandardMaterial
		Liquid: THREE.MeshPhysicalMaterial
		FrontColor: THREE.MeshStandardMaterial
		["LightMat-5"]: THREE.MeshStandardMaterial
	}
}

export default function Model(
	mCoords: any,
	{ ...props }: JSX.IntrinsicElements["group"]
) {
	const group = useRef<THREE.Group>()

	const globalEnvMap: any = useLoader(
		RGBELoader,
		"/envMapSmall.hdr"
	)

	const roughnessMap: any = useLoader(
		TextureLoader,
		"/roughnessMap.jpg"
	)

	const gltf: any = useGLTF("/perfume.glb")

	const { nodes, materials } = gltf

	useLayoutEffect(() => {
		Object.keys(materials).map(a => {
			if (materials[a].map !== null) {
				materials[a].map.encoding = THREE.LinearEncoding
			}
		})
	}, [materials])

	// for production use this config for bottle Material
	const bottleConfig = {
		samples: 20,
		resolution: 1024,
		transmission: 1.0,
		roughness: 0.3,
		thickness: 0.44,
		ior: 1.52,
		chromaticAberration: 0.06,
		anisotropy: 0.15,
		distortion: 0.07,
		distortionScale: 0.3,
		temporalDistortion: 0.5,
		attenuationDistance: 0.97,
		attenuationColor: "#ffffff",
		color: "#313131",
		bg: "#ffffff",
	}

	materials["LightMat-5"].emissiveIntensity = 5

	// refraction code

	useMemo(() => nodes.Bottle.geometry.center(), [])

	const { size, gl, scene, camera, clock } = useThree()
	const model = useRef(null)
	const ratio = gl.getPixelRatio()
	const env = useRef(null)
	const perfume = useRef(null)

	console.log(mCoords)

	const [
		envFbo,
		backfaceFbo,
		backfaceMaterial,
		refractionMaterial,
	] = useMemo(() => {
		const envFbo = new WebGLRenderTarget(
			size.width * ratio,
			size.height * ratio
		)
		const backfaceFbo = new WebGLRenderTarget(
			size.width * ratio,
			size.height * ratio
		)
		const backfaceMaterial = new BackfaceMaterial()
		const refractionMaterial = new RefractionMaterial({})
		// @ts-ignore
		refractionMaterial.envMap = envFbo.texture
		// @ts-ignore
		refractionMaterial.backfaceMap = backfaceFbo.texture
		// @ts-ignore
		refractionMaterial.resolution = [
			size.width * ratio,
			size.height * ratio,
		]
		console.log(globalEnvMap)
		// @ts-ignore
		refractionMaterial.globalEnv = globalEnvMap
		// @ts-ignore
		refractionMaterial.ior = 1.5
		// @ts-ignore
		refractionMaterial.a = 0.02
		// @ts-ignore
		refractionMaterial.fresnelPower = 4.7
		//@ts-ignore

		// console.log(refractionMaterial)

		return [
			envFbo,
			backfaceFbo,
			backfaceMaterial,
			refractionMaterial,
		]
	}, [size, ratio])

	useFrame(() => {
		// if (perfume.current != undefined) {
		// 	let currentRot = perfume.current?.rotatation
		// 	// console.log(perfume.current)
		// 	perfume.current?.rotation.set(
		// 		Math.PI * mCoords.y,
		// 		Math.PI * mCoords.x,
		// 		0
		// 	)
		// }
		// camera.layers.set(0)
		// gl.render(scene, camera)
	})

	// useFrame(() => {
	// 	const t = clock.getElapsedTime()

	// 	// perfume.current?.rotation.set(
	// 	// 	0,
	// 	// 	0 + Math.PI * t * 0.01,
	// 	// 	0
	// 	// )

	// 	// gl.autoClear = false
	// 	// camera.layers.set(0)
	// 	// gl.setRenderTarget(envFbo)
	// 	// gl.clearColor()
	// 	// gl.render(scene, camera)
	// 	// gl.clearDepth()
	// 	// camera.layers.set(1)
	// 	// model.current.material = backfaceMaterial
	// 	// gl.setRenderTarget(backfaceFbo)
	// 	// gl.clearDepth()
	// 	// gl.render(scene, camera)
	// 	// camera.layers.set(0)
	// 	// gl.setRenderTarget(null)
	// 	// gl.render(scene, camera)
	// 	// gl.clearDepth()
	// 	camera.layers.set(1)
	// 	// model.current.material = refractionMaterial
	// 	// model.current.material.attach = "material"
	// 	gl.render(scene, camera)
	// }, 1)

	return (
		<group
			ref={group}
			{...props}
			dispose={null}
			rotation={[0, -0.2, 0]}
		>
			<group>
				<group>
					<group
						position={[0.24, 0.68, 13.33]}
						rotation={[1.56, 0, -0.01]}
					>
						<OrbitControls
							makeDefault={false}
							autoRotate
							autoRotateSpeed={0.1}
							minPolarAngle={0}
							maxPolarAngle={Math.PI / 2}
						/>
						<PerspectiveCamera
							makeDefault={true}
							far={1000}
							near={0.1}
							fov={18.9}
							rotation={[-Math.PI / 2, 0, 0]}
						/>
					</group>
					{/* @ts-ignore */}

					<group
						ref={perfume}
						position={[0, -0.6, 0]}
						layers={0}
						onAfterRender={() =>
							console.log("rendering mesh")
						}
					>
						<mesh
							ref={model}
							// layers={0}
							castShadow
							receiveShadow
							position={[0, 0.3, -0.25]}
							geometry={nodes.Bottle.geometry}
							// material={materials["Glass.002"]}
						>
							<meshPhysicalMaterial
								attach="material"
								{...bottleConfig}
							/>
						</mesh>
						<mesh
							// layers={0}
							castShadow
							receiveShadow
							geometry={nodes.Head.geometry}
							material={materials.Head}
						/>
						{/* <mesh
							layers={1}
							castShadow
							receiveShadow
							geometry={nodes.Liquid.geometry}
							// material={materials.Liquid}
						>
							{liquidConfig.meshPhysicalMaterial ? (
								<meshPhysicalMaterial
									attach="material"
									{...liquidConfig}
								/>
							) : (
								<MeshTransmissionMaterial
									attach="material"
									// @ts-ignore
									background={new THREE.Color(liquid.bg)}
									{...liquidConfig}
								/>
							)}
						</mesh> */}
						<mesh
							// layers={1}
							castShadow
							receiveShadow
							geometry={nodes.SprayPipe.geometry}
							material={materials.FrontColor}
						/>
					</group>
					<Environment
						resolution={256}
						blur={5}
						//@ts-ignore
						encoding={THREE.LinearEncoding}
						// background
						// @ts-ignore
						files={"/envMap.hdr"}
					>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.LeftRimLight.geometry}
							material={materials["LightMat-5"]}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.LeftRimLight002.geometry}
							material={materials["LightMat-5"]}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.RimLight.geometry}
							material={materials["LightMat-5"]}
						/>
					</Environment>
				</group>
			</group>
		</group>
	)
}

useGLTF.preload("/perfume.glb")
