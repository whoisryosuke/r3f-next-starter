'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var three = require('three');

const attributesDefinitions = {
    id: { size: 1, default: true },
    position: { size: 3, default: true },
    charUv: { size: 2, default: true },
    uv: { size: 2, default: false },
    normal: { size: 3, default: false },
    charPosition: { size: 3, default: false },
    lineIndex: { size: 1, default: false },
    charIndex: { size: 1, default: false },
    charSize: { size: 2, default: false },
    wordIndex: { size: 1, default: false },
    lineCharIndex: { size: 1, default: false },
    lineWordIndex: { size: 1, default: false },
    lineWordCount: { size: 1, default: false },
    lineCharCount: { size: 1, default: false },
};

/**
 * Class representation of a JSON font file.
 */
class Font {
    pages;
    chars;
    indexedChar = {};
    info; // no use
    common;
    distanceField;
    kernings;
    constructor(font) {
        this.pages = font.pages;
        this.chars = font.chars;
        this.common = font.common;
        this.info = font.info;
        this.common = font.common;
        this.distanceField = font.distanceField;
        this.kernings = font.kernings;
        if (this.distanceField.fieldType !== 'msdf') {
            console.warn('three-msdf-text(font.distanceField): fieldType should be "msdf"');
        }
        // Index font chars per key for better accessibility
        font.chars.forEach((d) => (this.indexedChar[d.char] = d));
    }
}

function getKernPairOffset(font, id1, id2) {
    for (let i = 0; i < font.kernings.length; i++) {
        const k = font.kernings[i];
        if (k.first < id1)
            continue;
        if (k.second < id2)
            continue;
        if (k.first > id1)
            return 0;
        if (k.first === id1 && k.second > id2)
            return 0;
        return k.amount;
    }
    return 0;
}

const newline = /\n/;
const whitespace = /\s/;
const tabulation = /\t/;

class TextLayout {
    font;
    text;
    width;
    height;
    alignX;
    alignY;
    _size;
    letterSpacing;
    tabSize;
    lineHeight;
    wordSpacing;
    wordBreak;
    lineBreak;
    textScale;
    lines;
    computedWidth;
    computedHeight;
    lineCount;
    constructor({ font, text, width = 'auto', height = 'auto', alignX = 'left', alignY = 'top', size = 1, letterSpacing = 0, tabSize = 4, lineHeight = 1, wordSpacing = 0, wordBreak = false, lineBreak = true, } = {}) {
        this.font = font instanceof Font ? font : new Font(font);
        this.text = text;
        this.width = width;
        this.height = height;
        this.alignX = alignX;
        this.alignY = alignY;
        this.size = size;
        this.letterSpacing = letterSpacing;
        this.tabSize = tabSize;
        this.lineHeight = lineHeight;
        this.wordSpacing = wordSpacing;
        this.wordBreak = wordBreak;
        this.lineBreak = lineBreak;
        this.compute();
    }
    get size() {
        return this._size;
    }
    set size(value) {
        this._size = value;
        this.textScale =
            this._size /
                (this.font.common.lineHeight ||
                    this.font.common.baseline ||
                    this.font.common.base);
    }
    compute() {
        this.lines = [];
        const maxTimes = 100;
        let cursor = 0;
        let wordCursor = 0;
        let wordWidth = 0;
        const newLine = () => {
            const line = {
                index: this.lines.length,
                width: 0,
                chars: [],
            };
            this.lines.push(line);
            wordCursor = cursor;
            wordWidth = 0;
            return line;
        };
        let line = newLine();
        let count = 0;
        while (cursor < this.text.length && count < maxTimes) {
            const char = this.text[cursor];
            let advance = 0;
            count++;
            // Detect \n char
            if (newline.test(char)) {
                cursor++;
                line = newLine();
                continue;
            }
            // Skip whitespace at start of line
            if (!line.width && whitespace.test(char) && !tabulation.test(char)) {
                cursor++;
                wordCursor = cursor;
                wordWidth = 0;
                continue;
            }
            const charDef = this.font.indexedChar[char] || this.font.indexedChar[' '];
            if (!charDef)
                throw new Error(`Missing glyph "${char}"`);
            // Find any applicable kern pairs
            if (line.chars.length && charDef) {
                const prevGlyph = line.chars[line.chars.length - 1].definition;
                const kern = getKernPairOffset(this.font, charDef.id || 0, prevGlyph.id) *
                    this.textScale;
                line.width += kern;
                wordWidth += kern;
            }
            // add char to line
            line.chars.push({
                definition: charDef,
                x: line.width,
                y: 0,
                lineIndex: line.index,
                lineCharIndex: line.chars.length,
            });
            // Handle whitespace, tabulation and others text advances
            if (tabulation.test(char)) {
                wordCursor = cursor;
                wordWidth = 0;
                advance +=
                    this.font.indexedChar['o'].width * this.textScale * this.tabSize;
            }
            else if (whitespace.test(char)) {
                wordCursor = cursor;
                wordWidth = 0;
                advance += this.wordSpacing * this.size;
            }
            else {
                advance += this.letterSpacing * this.size;
            }
            advance += charDef.xadvance * this.textScale;
            line.width += advance;
            wordWidth += advance;
            // If strict width defined
            if (this.width !== 'auto' && line.width > this.width && this.lineBreak) {
                // If can break words, undo latest glyph if line not empty. Then create new line
                if (this.wordBreak && line.chars.length > 1) {
                    line.width -= advance;
                    line.chars.pop();
                    line = newLine();
                    continue;
                    // If not first word, undo current word and cursor and create new line
                }
                else if (!this.wordBreak && wordWidth !== line.width) {
                    const numGlyphs = cursor - wordCursor + 1;
                    line.chars.splice(-numGlyphs, numGlyphs);
                    cursor = wordCursor;
                    line.width -= wordWidth;
                    line = newLine();
                    continue;
                }
            }
            cursor++;
            // Reset infinite loop catch
            count = 0;
        }
        // Remove last line if empty
        if (!line.width)
            this.lines.pop();
        this.lineCount = this.lines.length;
        // Compute boundaries
        this.computedHeight = this.lineCount * this.size * this.lineHeight;
        this.computedWidth = Math.max(...this.lines.map((line) => line.width));
    }
}

class TextGeometry extends three.BufferGeometry {
    charGeometry;
    layout;
    computedWidth;
    computedHeight;
    lineCount;
    recordedAttributes;
    constructor({ widthSegments = 1, heightSegments = 1, ...options } = {}) {
        super();
        this.layout = new TextLayout(options);
        this.charGeometry = new three.PlaneGeometry(1, 1, widthSegments, heightSegments);
        this.recordedAttributes = Object.keys(attributesDefinitions).reduce((acc, value) => {
            const isGenerated = attributesDefinitions[value].default || options[value];
            acc[value] = isGenerated;
            return acc;
        }, {});
        this.computeGeometry();
    }
    get text() {
        return this.layout.text;
    }
    set text(value) {
        this.layout.text = value;
    }
    /**
     * Allocate attributes buffer, compute geometry indexes
     */
    computeGeometry() {
        // Strip spaces and newlines to get actual character length for buffers
        const chars = this.layout.text.replace(/[ \n]/g, '');
        const attr = this.recordedAttributes;
        const cc = chars.length; // char count
        const vcc = this.charGeometry.attributes.position.count; // vertices per char count
        const icc = this.charGeometry.index.count; // indexes per char count
        const indexArray = new Uint32Array(cc * icc);
        // Create output buffers
        Object.keys(attr).forEach((name) => {
            if (attr[name]) {
                const size = attributesDefinitions[name].size;
                this.setAttribute(name, new three.BufferAttribute(new Float32Array(cc * vcc * size), size));
            }
        });
        // Set values for buffers that don't require calculation
        for (let i = 0; i < cc; i++) {
            if (this.charGeometry) {
                const ids = new Array(vcc);
                for (let j = 0, l = ids.length; j < l; j++)
                    ids[j] = i;
                this.attributes.id.array.set(ids, i * vcc);
                const indexes = new Array(icc);
                for (let j = 0, l = indexes.length; j < l; j++)
                    indexes[j] = i * vcc + this.charGeometry.index.array[j];
                indexArray.set(indexes, i * icc);
                continue;
            }
            this.attributes.id.array.set([i, i, i, i], i * 4);
            // Geometry index
            indexArray.set([i * 4, i * 4 + 2, i * 4 + 1, i * 4 + 1, i * 4 + 2, i * 4 + 3], i * 6);
        }
        this.setIndex(Array.from(indexArray));
        this.computeLayout();
        this.populateBuffers();
    }
    computeLayout() {
        this.layout.compute();
    }
    populateBuffers() {
        const l = this.layout;
        const vcc = this.charGeometry.attributes.position.count; // vertices per char count
        this.charGeometry.index.count; // indexes per char count
        const charUvs = this.charGeometry.attributes.uv.array;
        // Interpolation methods for subdivied geometries (vec2)
        const populateAttrSize2 = (attr, xMin, yMin, xMax, yMax, offset) => {
            const target = this.attributes[attr].array;
            for (let i = 0, l = vcc * 2; i < l; i += 2) {
                target[offset + i] = charUvs[i] * (xMax - xMin) + xMin;
                target[offset + i + 1] = charUvs[i + 1] * (yMax - yMin) + yMin;
            }
        };
        // Interpolation methods for subdivied geometries (vec3)
        const populateAttrSize3 = (attr, xMin, yMin, xMax, yMax, offset, defaultZ = 0) => {
            const target = this.attributes[attr].array;
            for (let i = 0, j = 0, l = vcc * 3; i < l; i += 3, j += 2) {
                target[offset + i] = charUvs[j] * (xMax - xMin) + xMin;
                target[offset + i + 1] = charUvs[j + 1] * (yMax - yMin) + yMin;
                target[offset + i + 2] = defaultZ;
            }
        };
        const texW = l.font.common.scaleW;
        const texH = l.font.common.scaleH;
        const cH = l.computedHeight;
        const cW = l.computedWidth;
        const tW = l.width !== 'auto' ? l.width : cW;
        const tH = l.height !== 'auto' ? l.height : cH;
        let y = -(l.lineHeight * l.size - l.size) / 2;
        let x = 0;
        let j = 0;
        let offsetHeight = 0;
        let uy, ux;
        // Initialize counters
        const c = {
            lineIndex: 0,
            charIndex: 0,
            wordIndex: 0,
            lineCharIndex: 0,
            lineWordIndex: 0,
            lineWordCount: 0,
            lineCharCount: 0,
        };
        // Apply y alignment offset
        if (l.alignY === 'center') {
            offsetHeight = l.computedHeight / 2;
        }
        else if (l.alignY === 'bottom') {
            offsetHeight = l.computedHeight;
        }
        y += offsetHeight;
        for (c.lineIndex = 0; c.lineIndex < l.lines.length; c.lineIndex++) {
            const line = l.lines[c.lineIndex];
            // Initialize counters
            c.lineCharIndex = c.lineWordIndex = c.lineWordCount = 0;
            c.lineCharCount = line.chars.length;
            // Count words per line for optional attribute
            if (this.recordedAttributes.lineWordCount) {
                c.lineWordCount = line.chars.reduce((acc, value, index) => {
                    const isWhitespace = whitespace.test(value.definition.char);
                    const isInMiddle = index !== 0 && index !== line.chars.length - 1;
                    if (isWhitespace && isInMiddle) {
                        acc++;
                    }
                    return acc;
                }, 1);
            }
            for (let i = 0; i < line.chars.length; i++) {
                const glyph = line.chars[i].definition;
                // Current vertex
                const vertexIndex = j * vcc;
                // If space, don't add to geometry
                if (whitespace.test(glyph.char)) {
                    c.wordIndex++;
                    c.lineWordIndex++;
                    continue;
                }
                // Each letter is a quad. axis bottom left
                const w = glyph.width * l.textScale;
                const h = glyph.height * l.textScale;
                x = line.chars[i].x;
                // Apply char sprite offsets
                x += glyph.xoffset * l.textScale;
                y -= glyph.yoffset * l.textScale;
                // Compute global uv top-left corner
                ux = x;
                uy = y - offsetHeight;
                // Apply x alignment offset
                if (l.alignX === 'center') {
                    ux = tW * 0.5 - line.width * 0.5 + x;
                    x -= line.width * 0.5;
                }
                else if (l.alignX === 'right') {
                    ux = tW - line.width + x;
                    x -= line.width;
                }
                // Compute char uv
                const u = glyph.x / texW;
                const uw = glyph.width / texW;
                const v = 1.0 - glyph.y / texH;
                const vh = glyph.height / texH;
                // Populate needed attributes
                populateAttrSize3('position', x, y - h, x + w, y, vertexIndex * 3);
                populateAttrSize2('charUv', u, v - vh, u + uw, v, vertexIndex * 2);
                // Populate optional UV attribute
                if (this.recordedAttributes.uv) {
                    populateAttrSize2('uv', ux / tW, 1 - (uy - h) / -tH, (ux + w) / tW, 1 - uy / -tH, vertexIndex * 2);
                }
                // Populate optional charPosition attribute
                if (this.recordedAttributes.charPosition) {
                    populateAttrSize3('charPosition', x + w / 2, y - h / 2, x + w / 2, y - h / 2, vertexIndex * 3);
                }
                // Populate optional normal attribute
                if (this.recordedAttributes.normal) {
                    populateAttrSize3('normal', 0, 0, 0, 0, vertexIndex * 3, 1);
                }
                // Populate optional charSize attribute
                if (this.recordedAttributes.charSize) {
                    populateAttrSize2('charSize', w, h, w, h, vertexIndex * 2);
                }
                // Populate optionals counter attributes
                for (let key in c) {
                    if (this.recordedAttributes[key]) {
                        for (let i = 0; i < vcc; i++) {
                            this.attributes[key].array[vertexIndex * 4] = c[key];
                        }
                    }
                }
                // Reset cursor to baseline
                y += glyph.yoffset * l.textScale;
                j++;
                c.charIndex++;
                c.lineCharIndex++;
            }
            c.wordIndex++;
            // Jump to next line
            y -= l.size * l.lineHeight;
        }
        this.computeBoundingBox();
    }
    computeBoundingBox() {
        const { alignX, alignY, computedWidth, computedHeight } = this.layout;
        if (!this.boundingBox)
            this.boundingBox = new three.Box3();
        this.boundingBox.min.setScalar(0);
        this.boundingBox.max.setScalar(0);
        if (alignX === 'center') {
            this.boundingBox.min.x = -computedWidth / 2;
            this.boundingBox.max.x = computedWidth / 2;
        }
        if (alignY === 'center') {
            this.boundingBox.min.y = -computedHeight / 2;
            this.boundingBox.max.y = computedHeight / 2;
        }
        if (alignX === 'left')
            this.boundingBox.max.x = computedWidth;
        if (alignX === 'right')
            this.boundingBox.min.x = -computedWidth;
        if (alignY === 'bottom')
            this.boundingBox.max.y = computedHeight;
        if (alignY === 'top')
            this.boundingBox.min.y = -computedHeight;
        if (isNaN(computedWidth) || isNaN(computedHeight)) {
            console.error('THREE.TextGeometry.computeBoundingBox(): Computed min/max have NaN values. The layout may be corrupted.', this);
        }
    }
    /**
     * Update buffers with new layout
     */
    resize(width, height = 'auto') {
        this.layout.width = width;
        this.layout.height = height;
        this.computeGeometry();
    }
    /**
     * Update text and re-compute geometry (like creating new Text)
     */
    updateText(text) {
        this.layout.text = text;
        this.computeGeometry();
    }
}

var msdfAlphatestFragment = "#define GLSLIFY 1\n#define SQRT2DIV2 0.7071067811865476\n#ifdef USE_MSDF_GEOMETRY\nvec3 msdfTexel=texture2D(uAtlas,vCharUv).rgb;float signedDist=max(min(msdfTexel.r,msdfTexel.g),min(max(msdfTexel.r,msdfTexel.g),msdfTexel.b))-0.5;float msdfD=fwidth(signedDist);\n#ifdef USE_THRESHOLD\nfloat msdfTest=smoothstep(uThreshold-SQRT2DIV2,uThreshold+SQRT2DIV2,signedDist);\n#else\nfloat msdfTest=smoothstep(-msdfD,msdfD,signedDist);\n#endif\nif(msdfTest<0.01)discard;float signedDistOutset=signedDist+uStrokeOuterWidth*0.5;float signedDistInset=signedDist-uStrokeInnerWidth*0.5;\n#ifdef USE_THRESHOLD\nfloat outerAlpha=smoothstep(uThreshold-SQRT2DIV2,uThreshold+SQRT2DIV2,signedDistOutset);float innerAlpha=1.0;\n#ifdef USE_STROKE\ninnerAlpha-=smoothstep(uThreshold-SQRT2DIV2,uThreshold+SQRT2DIV2,signedDistInset);\n#endif\n#else\nfloat outerAlpha=clamp(signedDistOutset/fwidth(signedDistOutset)+0.5,0.0,1.0);float innerAlpha=1.0;\n#ifdef USE_STROKE\ninnerAlpha-=clamp(signedDistInset/fwidth(signedDistInset)+0.5,0.0,1.0);\n#endif\n#endif\ndiffuseColor.a*=outerAlpha*innerAlpha;\n#endif\n"; // eslint-disable-line

var msdfAlphatestParsFragment = "#define GLSLIFY 1\n#ifdef USE_MSDF_GEOMETRY\nvarying vec2 vCharUv;uniform sampler2D uAtlas;\n#ifdef USE_THRESHOLD\nuniform float uThreshold;\n#endif\n#ifdef USE_STROKE\nuniform float uStrokeOuterWidth;uniform float uStrokeInnerWidth;\n#else\nfloat uStrokeOuterWidth=0.0;float uStrokeInnerWidth=1.0;\n#endif\n#endif\n"; // eslint-disable-line

var msdfCharUvVertex = "#define GLSLIFY 1\n#ifdef USE_MSDF_GEOMETRY\nvCharUv=charUv;\n#endif\n"; // eslint-disable-line

var msdfCharUvParsVertex = "#define GLSLIFY 1\n#ifdef USE_MSDF_GEOMETRY\nattribute vec2 charUv;varying vec2 vCharUv;\n#endif\n"; // eslint-disable-line

three.ShaderChunk.msdf_alphatest_fragment = msdfAlphatestFragment;
three.ShaderChunk.msdf_alphatest_pars_fragment = msdfAlphatestParsFragment;
three.ShaderChunk.msdf_char_uv_vertex = msdfCharUvVertex;
three.ShaderChunk.msdf_char_uv_pars_vertex = msdfCharUvParsVertex;

function hydrateMSDFLib(shader) {
    shader.fragmentShader = shader.fragmentShader.replace(`#include <alphatest_pars_fragment>`, `#include <alphatest_pars_fragment>\n#include <msdf_alphatest_pars_fragment>`);
    shader.fragmentShader = shader.fragmentShader.replace(`#include <alphatest_fragment>`, `#include <alphatest_fragment>\n#include <msdf_alphatest_fragment>`);
    shader.vertexShader = shader.vertexShader.replace(`#include <uv_pars_vertex>`, `#include <uv_pars_vertex>\n#include <msdf_char_uv_pars_vertex>`);
    shader.vertexShader = shader.vertexShader.replace(`#include <uv_vertex>`, `#include <uv_vertex>\n#include <msdf_char_uv_vertex>`);
}

/**
 * Define a new uniform and his acessors to manipulate uniforms
 */
function defineUniformProperty(material, name, initialValue) {
    const privateName = `_${name}`;
    const uniformName = `u${name[0].toUpperCase() + name.substring(1)}`;
    material[privateName] = initialValue;
    Object.defineProperty(material, name, {
        get: () => material[privateName],
        set(value) {
            material[privateName] = value;
            if (material.userData.shader) {
                material.userData.shader.uniforms[uniformName].value = value;
            }
        },
    });
}
let cacheIndex = 0;
/**
 * Extend a THREE.Material with MSDF support
 */
function extendMSDFMaterial(material, { atlas, threshold, stroke, strokeInnerWidth = 0.5, strokeOuterWidth = 0.0, } = {}) {
    const m = material;
    cacheIndex++;
    material.customProgramCacheKey = () => String(cacheIndex);
    const state = {
        userCallback: null,
        msdfCallback: (shader, renderer) => {
            const s = shader;
            hydrateMSDFLib(shader);
            if (!s.defines)
                s.defines = {};
            if (!s.uniforms)
                s.uniforms = {};
            const USE_THRESHOLD = threshold !== undefined;
            const USE_STROKE = !!stroke;
            s.defines.USE_MSDF_GEOMETRY = '';
            s.uniforms.uAtlas = { value: atlas };
            if (USE_THRESHOLD) {
                s.defines.USE_THRESHOLD = '';
                s.uniforms.uThreshold = { value: m.threshold || 0.0 };
            }
            if (USE_STROKE) {
                s.defines.USE_STROKE = '';
                s.uniforms.uStrokeOuterWidth = { value: m.strokeOuterWidth };
                s.uniforms.uStrokeInnerWidth = { value: m.strokeInnerWidth };
            }
            material.userData.shader = shader;
            if (state.userCallback)
                state.userCallback(shader, renderer);
        },
    };
    Object.defineProperty(m, 'isStroke', {
        get: () => stroke,
        set: () => {
            console.warn('Cannot set property "isStroke"');
        },
    });
    defineUniformProperty(m, 'strokeOuterWidth', strokeOuterWidth);
    defineUniformProperty(m, 'strokeInnerWidth', strokeInnerWidth);
    defineUniformProperty(m, 'threshold', threshold);
    Object.defineProperty(material, 'onBeforeCompile', {
        get() {
            return state.msdfCallback;
        },
        set(v) {
            state.userCallback = v;
        },
    });
    return material;
}

exports.Font = Font;
exports.TextGeometry = TextGeometry;
exports.extendMSDFMaterial = extendMSDFMaterial;
