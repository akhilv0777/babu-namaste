import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  nextVitals,
  nextTs,
  globalIgnores([
    ".next/**",
    "out/**",
    "next-env.d.ts",
    "public/theme/**",
    "public/birthday.html",
  ]),
]);

export default eslintConfig;
