import { StrapiContentType } from './strapi';

export type Layout = StrapiContentType<'api::layout.layout'>;

export type Test = StrapiContentType<
  'shared.seo',
  {
    someProp: string;
  }
>;
