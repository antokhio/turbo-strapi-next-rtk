import Layout from '@features/layout/Layout';
import { layoutApi } from '@features/layout/layoutApi';
import api from '@store/api';
import { wrapper } from '@store/store';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return <Layout />;
};

export default Home;

export const getStaticProps = wrapper.getStaticProps((store) => async (ctx) => {
  store.dispatch(layoutApi.endpoints.layout.initiate(undefined));

  await Promise.all(store.dispatch(api.util.getRunningQueriesThunk()));

  return {
    props: {},
    revalidate: 300,
  };
});
