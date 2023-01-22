// msdf_alphatest_pars_fragment
#ifdef USE_MSDF_GEOMETRY
  varying vec2 vCharUv;
  uniform sampler2D uAtlas;

  #ifdef USE_THRESHOLD
    uniform float uThreshold;
  #endif

  #ifdef USE_STROKE
    uniform float uStrokeOuterWidth;
    uniform float uStrokeInnerWidth;
  #else 
    float uStrokeOuterWidth = 0.0;
    float uStrokeInnerWidth = 1.0;
  #endif
#endif

uniform vec2 resolution;

varying vec3 worldNormal;
varying vec3 viewDirection;




void main() {
	// screen coordinates
	vec2 uv = gl_FragCoord.xy / resolution;
  vec4 diffuseColor = vec4(1.0, 1.0, 1.0, 1.0);
  // #include "msdf_alphatest_fragment"
  #define SQRT2DIV2 0.7071067811865476 // Math.sqrt(2) / 2 

#ifdef USE_MSDF_GEOMETRY

  vec3 msdfTexel = texture2D(uAtlas, vCharUv).rgb;
  
  float signedDist = max(
    min(msdfTexel.r, msdfTexel.g),
    min(max(msdfTexel.r, msdfTexel.g), msdfTexel.b)
  ) - 0.5;

  float msdfD = fwidth(signedDist);

  #ifdef USE_THRESHOLD
    float msdfTest = smoothstep(uThreshold - SQRT2DIV2, uThreshold + SQRT2DIV2, signedDist);
  #else
    float msdfTest = smoothstep(-msdfD, msdfD, signedDist);
  #endif

  if (msdfTest < 0.01) discard;


  // Outset
  float signedDistOutset = signedDist + uStrokeOuterWidth * 0.5;
  // Inset
  float signedDistInset = signedDist - uStrokeInnerWidth * 0.5;


  #ifdef USE_THRESHOLD
      float outerAlpha = smoothstep(uThreshold - SQRT2DIV2, uThreshold + SQRT2DIV2, signedDistOutset);  
      float innerAlpha = 1.0;
      
      #ifdef USE_STROKE 
        innerAlpha -= smoothstep(uThreshold - SQRT2DIV2, uThreshold + SQRT2DIV2, signedDistInset);
      #endif
      
  #else
      float outerAlpha = clamp(signedDistOutset / fwidth(signedDistOutset) + 0.5, 0.0, 1.0);
      float innerAlpha = 1.0;
      
      #ifdef USE_STROKE 
        innerAlpha -= clamp(signedDistInset / fwidth(signedDistInset) + 0.5, 0.0, 1.0);
      #endif
  #endif

  diffuseColor.a *= outerAlpha * innerAlpha;
#endif
	
	gl_FragColor =  vec4(1.3, 3.2, 1.4, 1.0);
}