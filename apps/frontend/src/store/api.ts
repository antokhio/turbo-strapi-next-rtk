import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import * as qs from 'qs';

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api`,
    paramsSerializer: (params: unknown) => qs.stringify(params),
  }),
  // eslint-disable-next-line consistent-return
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      // @ts-expect-error too-complex-to-type
      return action.payload[reducerPath];
    }
  },
  endpoints: () => ({}),
});

export default api;
