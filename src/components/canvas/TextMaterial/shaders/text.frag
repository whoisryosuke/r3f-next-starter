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
uniform float progress;

varying vec3 worldNormal;
varying vec3 viewDirection;

float rand(float n){return fract(sin(n) * 43758.5453123);}
float rand(vec2 n) { 
	return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}


float noise(float p){
	float fl = floor(p);
  float fc = fract(p);
	return mix(rand(fl), rand(fl + 1.0), fc);
}
	
float noise(vec2 n) {
	const vec2 d = vec2(0.0, 1.0);
  vec2 b = floor(n), f = smoothstep(vec2(0.0), vec2(1.0), fract(n));
	return mix(mix(rand(b), rand(b + d.yx), f.x), mix(rand(b + d.xy), rand(b + d.yy), f.x), f.y);
}



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

float x = floor(vCharUv.x*100.);
float y = floor(vCharUv.y*100.);
float nois = noise(vec2(x,y));
float p0= progress;
p0 = smoothstep(p0,p0-0.5,vCharUv.x );
	
	gl_FragColor =  vec4(vec3(nois)*p0, 1.);
	
	// gl_FragColor =  vec4(1.3, 3.2, 1.4, 1.0);
}