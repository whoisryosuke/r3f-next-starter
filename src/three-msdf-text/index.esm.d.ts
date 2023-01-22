/// <reference types="three" />
import { BufferGeometry, MeshBasicMaterialParameters, IUniform } from "three";
/**
 * Struct of a char in JSON font files.
 */
type FontChar = {
    id: number;
    index: number;
    char: string;
    xoffset: number;
    yoffset: number;
    width: number;
    height: number;
    x: number;
    y: number;
    xadvance: number;
    page: number;
    chnl: number;
};
/**
 * Struct of a char in a TextGeometry
 */
type TextChar = {
    definition: FontChar;
    x: number;
    y: number;
    lineIndex: number;
    lineCharIndex: number;
};
/**
 * Struct of a line in a TextGeometry
 */
type Line = {
    index: number;
    width: number;
    chars: TextChar[];
};
type AlignX = "left" | "right" | "center";
type AlignY = "top" | "bottom" | "center";
interface FontCommon {
    lineHeight: number;
    base?: number;
    baseline?: number;
    scaleW: number;
    scaleH: number;
    pages: number;
    packed: number;
    alphaChnl: number;
    redChnl: number;
    greenChnl: number;
    blueChnl: number;
}
/**
 * Struct of a char in JSON font files.
 */
interface DistanceField {
    fieldType: string;
    distanceRange: number;
}
/**
 * Struct of a kerning in JSON font files.
 */
interface Kerning {
    first: number;
    second: number;
    amount: number;
}
interface FontDefinition {
    pages: string[];
    chars: FontChar[];
    info: unknown;
    common: FontCommon;
    distanceField: DistanceField;
    kernings: Kerning[];
}
/**
 * Class representation of a JSON font file.
 */
declare class Font {
    pages: string[];
    chars: FontChar[];
    indexedChar: {
        [key: string]: FontChar;
    };
    info: unknown; // no use
    common: FontCommon;
    distanceField: DistanceField;
    kernings: Kerning[];
    constructor(font: FontDefinition);
}
declare const attributesDefinitions: {
    id: {
        size: number;
        default: boolean;
    };
    position: {
        size: number;
        default: boolean;
    };
    charUv: {
        size: number;
        default: boolean;
    };
    uv: {
        size: number;
        default: boolean;
    };
    normal: {
        size: number;
        default: boolean;
    };
    charPosition: {
        size: number;
        default: boolean;
    };
    lineIndex: {
        size: number;
        default: boolean;
    };
    charIndex: {
        size: number;
        default: boolean;
    };
    charSize: {
        size: number;
        default: boolean;
    };
    wordIndex: {
        size: number;
        default: boolean;
    };
    lineCharIndex: {
        size: number;
        default: boolean;
    };
    lineWordIndex: {
        size: number;
        default: boolean;
    };
    lineWordCount: {
        size: number;
        default: boolean;
    };
    lineCharCount: {
        size: number;
        default: boolean;
    };
};
interface LayoutOptions {
    font?: Font | FontDefinition;
    text?: string;
    width?: number | "auto";
    height?: number | "auto";
    alignX?: AlignX;
    alignY?: AlignY;
    size?: number;
    letterSpacing?: number;
    tabSize?: number;
    lineHeight?: number;
    wordSpacing?: number;
    wordBreak?: boolean;
    lineBreak?: boolean;
}
declare class TextLayout {
    font: Font;
    text: string;
    width: number | "auto";
    height: number | "auto";
    alignX: AlignX;
    alignY: AlignY;
    _size: number;
    letterSpacing: number;
    tabSize: number;
    lineHeight: number;
    wordSpacing: number;
    wordBreak: boolean;
    lineBreak: boolean;
    textScale: number;
    lines: Line[];
    computedWidth: number;
    computedHeight: number;
    lineCount: number;
    constructor({ font, text, width, height, alignX, alignY, size, letterSpacing, tabSize, lineHeight, wordSpacing, wordBreak, lineBreak }?: LayoutOptions);
    get size(): number;
    set size(value: number);
    compute(): void;
}
type Attribute = keyof typeof attributesDefinitions;
type ExtraAttributeOptions = Partial<Record<Attribute, boolean>>;
interface TextGeometryOptions extends ExtraAttributeOptions {
    font?: Font | FontDefinition;
    text?: string;
    width?: number | "auto";
    height?: number | "auto";
    alignX?: AlignX;
    alignY?: AlignY;
    size?: number;
    letterSpacing?: number;
    tabSize?: number;
    lineHeight?: number;
    wordSpacing?: number;
    wordBreak?: boolean;
    lineBreak?: boolean;
    widthSegments?: number;
    heightSegments?: number;
}
declare class TextGeometry extends BufferGeometry {
    private charGeometry?;
    layout: TextLayout;
    computedWidth: number;
    computedHeight: number;
    lineCount: number;
    recordedAttributes: Record<Attribute, boolean>;
    constructor({ widthSegments, heightSegments, ...options }?: TextGeometryOptions);
    get text(): string;
    set text(value: string);
    /**
     * Allocate attributes buffer, compute geometry indexes
     */
    private computeGeometry;
    computeLayout(): void;
    populateBuffers(): void;
    computeBoundingBox(): void;
    /**
     * Update buffers with new layout
     */
    resize(width: number | "auto", height?: number | "auto"): void;
    /**
     * Update text and re-compute geometry (like creating new Text)
     */
    updateText(text: string): void;
}
interface Shader {
    defines?: {
        [key: string]: string;
    };
    uniforms: {
        [uniform: string]: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
}
interface MSDFShader extends Shader {
    uniforms: {
        [uniform: string]: IUniform;
        uAtlas: {
            value: THREE.Texture;
        };
        uThreshold?: {
            value: number;
        };
        uStrokeOuterWidth?: {
            value: number;
        };
        uStrokeInnerWidth?: {
            value: number;
        };
    };
}
interface MSDFMaterialOptions extends MeshBasicMaterialParameters {
    atlas?: THREE.Texture;
    threshold?: number;
    stroke?: boolean;
    strokeInnerWidth?: number;
    strokeOuterWidth?: number;
}
type ExtendMSDFMaterial<M extends THREE.Material> = Omit<M, "userData"> & {
    userData: Record<string, any> & {
        shader: MSDFShader;
    };
    strokeOuterWidth: number;
    strokeInnerWidth: number;
    threshold: number;
    isStroke: boolean;
    _strokeOuterWidth: number;
    _strokeInnerWidth: number;
    _threshold: number;
};
type ExtendedMSDFMaterial<M extends THREE.Material> = Omit<ExtendMSDFMaterial<M>, "_strokeOuterWidth" | "_strokeInnerWidth" | "_threshold">;
/**
 * Extend a THREE.Material with MSDF support
 */
declare function extendMSDFMaterial<M extends THREE.Material>(material: any, { atlas, threshold, stroke, strokeInnerWidth, strokeOuterWidth }?: MSDFMaterialOptions): ExtendedMSDFMaterial<M>;
export { Attribute, ExtraAttributeOptions, TextGeometryOptions, TextGeometry, TextChar, Line, AlignX, AlignY, extendMSDFMaterial, Font, FontChar, FontDefinition, DistanceField, FontCommon, Kerning };
