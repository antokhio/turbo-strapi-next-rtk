import baseConfig from "@app/eslint-config/base";
import nextjsConfig from "@app/eslint-config/next";
import reactConfig from "@app/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
];
