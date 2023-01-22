/** @format */

import * as THREE from "three"
import {
	ShaderMaterial,
	Vector2,
	GLSL3,
	Texture,
	DoubleSide,
} from "three"
import { extend } from "@react-three/fiber"
// import { shaderMaterial } from "@react-three/drei"
import {
	TextGeometry,
	extendMSDFMaterial,
} from "../../../three-msdf-text/index.js"
import { forwardRef } from "react"
import vertex from "./shaders/text.vert"
import fragment from "./shaders/text.frag"
import { useLoader } from "@react-three/fiber"
import { RGBELoader } from "three-stdlib"

// // This is the 🔑 that HMR will renew if this file is edited
// // It works for THREE.ShaderMaterial as well as for drei/shaderMaterial
// // @ts-ignore
// TextMaterial.key = THREE.MathUtils.generateUUID()

// extend({ TextMaterial })

// // eslint-disable-next-line react/display-name
// const TextShaderMaterial = props => {
// 	return (
// 		<textMaterial
// 			key={TextMaterial.key}
// 			{...props}
// 			attach="material"
// 		/>
// 	)
// }

// export default TextShaderMaterial
