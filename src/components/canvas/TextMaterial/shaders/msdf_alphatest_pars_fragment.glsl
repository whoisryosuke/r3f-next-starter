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