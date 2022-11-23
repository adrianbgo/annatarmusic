import React from 'react';
import { RouteObject } from 'react-router-dom';
import Layout from '@/pages/Layout';
import Main from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import LicensingOptions from '@/pages/LicensingOptions/LicensingOptions';

export default [
  {
    path: '/',
    element: <Layout />,
    children: [{ index: true, element: <Main /> }],
  },
  {
    path: '/licensing-options',
    element: <Layout />,
    children: [{ index: true, element: <LicensingOptions /> }],
  },
  {
    path: '/*',
    element: <NotFound />,
  },
] as RouteObject[];
