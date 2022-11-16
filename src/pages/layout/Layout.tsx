import Navigation from '@/components/molecules/Navigation';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="layout">
      <Navigation />
      <Outlet />
    </div>
  );
};

export default Layout;
