#pragma glslify: blendOverlay = require(glsl-blend/overlay)
#pragma glslify: blendAdd = require(glsl-blend/add)
#pragma glslify: blendScreen = require(glsl-blend/screen)
#pragma glslify: blendSoftLight = require(glsl-blend/soft-light)
#pragma glslify: blur9 = require(glsl-fast-gaussian-blur/9)
// #pragma glslify: dither = require(glsl-dither/8x8-bayer)

uniform sampler2D globalEnv;
uniform sampler2D envMap;
uniform sampler2D backfaceMap;
uniform vec2 resolution;
uniform float ior;
uniform float a;
uniform float fresnelPower;


varying vec3 worldNormal;
varying vec3 viewDirection;


vec2 direction = vec2(1.0, 0.0);
vec3 reflectionColor = vec3(0.6863, 0.6863, 0.6863);
vec3 fogColor = vec3(0.6314, 0.6314, 0.6314);

float fresnelFunc(vec3 viewDirection, vec3 worldNormal) {
    return pow(1.0 + dot(viewDirection, worldNormal), fresnelPower);
}

void main() {
	// screen coordinates
	vec2 uv = gl_FragCoord.xy / resolution;
	// sample backface data from texture
	vec3 backfaceNormal = texture2D(backfaceMap, uv).rgb;
	// combine backface and frontface normal
	vec3 normal = worldNormal * (1.0 - a) - backfaceNormal * a;
	// calculate refraction and apply to uv
	vec3 refracted = refract(viewDirection, normal, 1.0/ior);
	uv += refracted.xy;


	// sample environment texture
	vec4 tex = texture2D(envMap, uv)*0.03;
	if(tex===vec4(1.0, 1.0, 1.0, 1.0)){
		tex*=0.8;
	}
	// tex = blur9(tex, uv, resolution, direction);
	vec4 loc = texture2D(globalEnv, uv)*0.005;
	// calculate fresnel with smoothstep
    float fresnel = smoothstep(0.075, 0.95, fresnelFunc(viewDirection, normal));
	vec4 locColor = loc;
	vec4 color = tex;
	// apply fresnel
	locColor.rgb = mix( locColor.rgb, reflectionColor, fresnel);
	color.rgb = mix(color.rgb, reflectionColor, fresnel);
	vec3 finalColor = blendAdd(locColor.rgb, color.rgb);
	vec4 refractedResult = vec4(finalColor, 1.0);
	// refractedResult.a = 0.1;
	gl_FragColor =  refractedResult;
}


