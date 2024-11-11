import type { Data } from "@strapi/types";

export type Layout = Data.ContentType<"api::layout.layout">;
export type LayoutHeader = Data.Component<"layout.header">;
