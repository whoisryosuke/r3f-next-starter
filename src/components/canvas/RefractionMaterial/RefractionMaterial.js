/** @format */

import * as THREE from "three"
import { extend } from "@react-three/fiber"
import { shaderMaterial } from "@react-three/drei"

import vertex from "./shaders/refraction.vert"
import fragment from "./shaders/refraction.frag"
import { Texture, Vector2 } from "three"
import { useLoader } from "@react-three/fiber"
import { RGBELoader } from "three-stdlib"

// var fragmentShader = "#define USE_MAP\n" + fragment

const RefractionMaterial = shaderMaterial(
	{
		globalEnv: new Texture(),
		envMap: new Texture(),
		backfaceMap: new Texture(),
		resolution: new Vector2(),
		ior: Number,
		a: Number,
		fresnelPower: Number,
	},
	vertex,
	fragment
)

// This is the 🔑 that HMR will renew if this file is edited
// It works for THREE.ShaderMaterial as well as for drei/shaderMaterial
// @ts-ignore
RefractionMaterial.key = THREE.MathUtils.generateUUID()

extend({ RefractionMaterial })

export default RefractionMaterial
