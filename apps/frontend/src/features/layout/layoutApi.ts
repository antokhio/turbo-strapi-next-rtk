import { Layout, StrapiResponse } from '@repo/shared';
import api from '@store/api';
import { useRouter } from 'next/router';

export const layoutApi = api.injectEndpoints({
  endpoints: (builder) => ({
    layout: builder.query<Layout, void>({
      query: () => ({
        url: '/layout',
        params: {
          populate: '*',
        },
      }),
      transformResponse: ({ data }: StrapiResponse<Layout>) => data,
    }),
  }),
});

const { useLayoutQuery } = layoutApi;

export const useLayout = () => {
  const { isFallback } = useRouter();
  const data = useLayoutQuery(undefined, {
    skip: isFallback,
    selectFromResult: ({ data }) => ({ ...data }),
  });
  return data;
};
