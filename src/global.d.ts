declare namespace JSX {
  interface IntrinsicElements {
    'tgs-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  }
}

declare module '*.tgs' {
  const value: string;
  export default value;
}