import type { UserConfig } from "vite";
import { mergeConfig } from "vite";

export default (config: UserConfig) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  });
};
