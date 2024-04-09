import React from 'react';
import { useLayout } from './layoutApi';

const Layout = (): JSX.Element => {
  const { test } = useLayout();

  return <div>{test}</div>;
};

export default Layout;
