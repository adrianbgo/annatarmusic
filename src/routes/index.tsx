import React from 'react';
import { RouteObject } from 'react-router-dom';
import Layout from '@/pages/Layout';
import Main from '@/pages/Home';
import NotFound from '@/pages/NotFound';

export default [
  {
    path: '/',
    element: <Layout />,
    children: [{ index: true, element: <Main /> }],
  },
  {
    path: '/*',
    element: <NotFound />,
  },
] as RouteObject[];
