import type { Schema, Struct } from "@strapi/strapi";

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: "components_layout_headers";
  info: {
    displayName: "Header";
  };
  attributes: {
    test: Schema.Attribute.String;
  };
}

declare module "@strapi/strapi" {
  export module Public {
    export interface ComponentSchemas {
      "layout.header": LayoutHeader;
    }
  }
}
