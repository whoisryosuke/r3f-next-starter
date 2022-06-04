/**
 * This lets you import shader file types without TS errors
 */
declare module "*.vert" {
  const content: string;
  export default content;
}

declare module "*.frag" {
  const content: string;
  export default content;
}
declare module "*.vs" {
  const content: string;
  export default content;
}

declare module "*.fs" {
  const content: string;
  export default content;
}
/**
 * "Pixel" (aka fragment) shader
 */
declare module "*.ps" {
  const content: string;
  export default content;
}

declare module "*.glsl" {
  const content: string;
  export default content;
}
