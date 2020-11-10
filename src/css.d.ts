// WARNING: this currently does not match
declare module '*.css' {
  const styles: { [selector: string]: string };
  export default styles;
}
