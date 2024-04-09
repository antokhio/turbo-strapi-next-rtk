import type { AppInitialProps as NextAppInitialProps, AppProps as NextAppProps } from 'next/app';
import NextApp from 'next/app';
import { Provider } from 'react-redux';
import '@styles/globals.css';
import { wrapper } from '@store/store';

export interface AppProps extends NextAppProps {}

const App = ({ Component, pageProps }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
};

export default App;

App.getInitialProps = wrapper.getInitialAppProps(() => async (ctx): Promise<NextAppInitialProps> => {
  const childrenGip = await NextApp.getInitialProps(ctx);
  return {
    pageProps: {
      ...childrenGip,
    },
  };
});
