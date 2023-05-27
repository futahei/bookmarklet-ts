import typescript from "@rollup/plugin-typescript";
import { RollupOptions } from "rollup";

const config: RollupOptions = {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "iife",
  },
  plugins: [typescript()],
};

export default config;
