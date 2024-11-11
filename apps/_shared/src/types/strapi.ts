export type StrapiDbPopulate<T> = {
  select?: (keyof T)[];
  populate?:
    | {
        [P in keyof T]: StrapiDbPopulate<T[P]>;
      }
    | boolean
    | object
    | (keyof T)[];
};

export type StrapiResponse<T = object, R = object> = {
  data: T;
  meta?: StrapiMeta<R>;
};

export type StrapiMeta<T = object> = {
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

export type StrapiError = {
  status: number;
  data: {
    error: {
      status: number;
      name: string;
      message: string;
      details?: unknown;
    };
  };
};
