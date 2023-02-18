import { ShaderChunk } from 'three'
import msdfAlphatestFragment from './msdf_alphatest_fragment.glsl'
import msdfAlphatestParsFragment from './msdf_alphatest_pars_fragment.glsl'
import msdfCharUvVertex from './msdf_char_uv_vertex.glsl'
import msdfCharUvParsVertex from './msdf_char_uv_pars_vertex.glsl'

ShaderChunk.msdf_alphatest_fragment = msdfAlphatestFragment
ShaderChunk.msdf_alphatest_pars_fragment = msdfAlphatestParsFragment
ShaderChunk.msdf_char_uv_vertex = msdfCharUvVertex
ShaderChunk.msdf_char_uv_pars_vertex = msdfCharUvParsVertex
