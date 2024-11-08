import baseConfig from "@app/eslint-config/base";
import strapiConfig from "@app/eslint-config/strapi";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [
      "dist/**",
      ".strapi/**",
      ".tmp/**",
      ".turbo/**",
      "types/generated/**",
    ],
  },
  ...baseConfig,
  ...strapiConfig,
];
