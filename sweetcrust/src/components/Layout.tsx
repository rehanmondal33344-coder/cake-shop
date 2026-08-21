import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout: React.FC = () => {
  return (
    <div className="bg-[#0C0C0C] font-kanit min-h-screen text-[#D7E2EA] relative" style={{ overflowX: 'clip' }}>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
