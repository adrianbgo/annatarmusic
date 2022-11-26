import { Footer } from '@/components/blocks';
import Navigation from '@/components/molecules/Navigation';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="layout">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
