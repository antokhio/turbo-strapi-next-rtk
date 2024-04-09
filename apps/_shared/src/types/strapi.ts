import { Attribute, Common } from '@strapi/strapi';

export type Modify<T, R> = Omit<T, keyof R> & R;

/**
 * @param {T} T Strapi content type Uid
 * @param {U} U Schema overrides
 */
export type StrapiContentType<T extends Common.UID.Schema, U extends object = {}> = Modify<
  Attribute.GetValues<T, Attribute.GetKeys<T>>,
  U
>;

/**
 * @param {T} T Strapi component Uid
 * @param {U} U Schema overrides
 * @param {R} R Repatable, should be `false` - has issues
 */
export type StrapiComponent<
  T extends Common.UID.Component,
  U extends object = {},
  R extends Attribute.BooleanValue = false,
> = Modify<Attribute.GetValue<Attribute.Component<T, R>>, U>;

export type StrapiResponse<T = any, R = any> = {
  data: T;
  meta?: StrapiMeta<R>;
};

export type StrapiQuery<T = any> = {
  sort?: string | string[];
  filters?: any;
  populate?: StrapiPopulate;
  fields?: any;
  pagination?: {
    start?: number | string;
    limit?: number | string;
    page?: number | string;
    pageSize?: number | string;
    withCount?: boolean;
  };
  publicationState?: 'live' | 'preview';
  locales?: string[];
} & {
  [P in keyof T]: T[P];
};

export type StrapiPopulate =
  | {}
  | '*'
  | string[]
  | boolean
  | ({
      populate?: StrapiPopulate | boolean;
    } & {
      [key: string]: boolean;
    });

export type StrapiLocale = {
  id: number | null;
  code: string | null;
  [key: string]: any;
};

export type StrapiMeta<T = any> = {
  pagination?: StrapiPagination;
} & {
  [P in keyof T]: T[P];
};

export type StrapiPagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
  offset?: number;
  limit?: number;
};

export type StrapiMedia = {
  id: number;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number | null;
  height: number | null;
  formats?: StrapiMediaFormats | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: null | string;
  createdAt: string;
  updatedAt: string;
};

export type StrapiMediaFormats = {
  large?: StrapiMediaFormat;
  small?: StrapiMediaFormat;
  medium?: StrapiMediaFormat;
  thumbnail?: StrapiMediaFormat;
};

export type StrapiMediaFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
};

export type StrapiError = {
  status: number;
  data: {
    error: {
      status: number;
      name: string;
      message: string;
      details?: any;
    };
  };
};
