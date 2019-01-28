/* eslint import/export: 0 */

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<HTMLOrSVGElement>>;
  export default content;
}

declare module '*.png' {
  const content: any;
  export default content;
}

declare module '*.json' {
  const content: any;
  export default content;
}

declare module 'react-sizes' {
  const content: any;
  export default content;
}

declare module 'lottie-web' {
  const content: any;
  export default content;
}