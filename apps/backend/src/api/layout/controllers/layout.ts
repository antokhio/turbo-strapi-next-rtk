/**
 * layout controller
 */
import type { Core } from "@strapi/strapi";
import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::layout.layout",
  ({ strapi }: { strapi: Core.Strapi }) => ({
    find: async () => {
      const data = await strapi
        .documents("api::layout.layout")
        .findFirst({ populate: { header: true, image: true } });
      return {
        data,
      };
    },
  }),
);
