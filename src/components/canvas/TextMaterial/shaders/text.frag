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
    float uStrokeOuterWidth = 1.0;
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

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
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
  float signedDistOutset = signedDist + uStrokeOuterWidth ;
  // Inset
  float signedDistInset = signedDist - uStrokeInnerWidth ;


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


float x = floor(vCharUv.x*1000.);
float y = floor(vCharUv.y*1000.);
float pattern = noise(vec2(x,y));

float w = 0.9;
float p0= progress;
p0= map(p0, 0.,1., -w, 1.);
p0 = smoothstep(p0,p0-w,vCharUv.x );
float mix0 = 2.*p0-pattern;
mix0 = clamp(mix0, 0., 1.);

vec4 l1 = vec4(vec3(1.,0.95,0.43), 0.0);
vec4 l2 = vec4(vec3(1.,0.7,0.3), 0.0);

vec4 layer1 = mix(vec4(1.), l1, 1.-mix0);
vec4 layer2 = mix(layer1, l2, 1.-mix0);



	
	// gl_FragColor =  vec4(vec3(p0_), diffuseColor.b);
	
	gl_FragColor = layer2;
}