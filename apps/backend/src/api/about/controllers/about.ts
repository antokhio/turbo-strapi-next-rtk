/**
 * about controller
 */

import type { Core } from "@strapi/strapi";
import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::about.about",
  ({ strapi }: { strapi: Core.Strapi }) => ({
    find: async () => {
      const data = await strapi.documents("api::about.about").findFirst();

      return {
        data,
      };
    },
  }),
);
