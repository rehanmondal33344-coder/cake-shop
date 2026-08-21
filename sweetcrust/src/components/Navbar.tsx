import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';

const leftLinks = [
  { name: 'Menu', path: '/menu' },
  { name: 'Categories', path: '/categories' },
];

const rightLinks = [
  { name: 'Gallery', path: '/gallery' },
  { name: 'Services', path: '/services' },
];

const Navbar: React.FC = () => {
  return (
    <FadeIn delay={0} y={-20} className="w-full z-50 absolute top-0 left-0 right-0">
      <nav className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 w-full max-w-7xl mx-auto">
        <div className="flex-1 flex gap-4 sm:gap-6 md:gap-8 justify-start items-center">
          {leftLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <div className="flex-shrink-0 mx-4">
          <Link to="/">
            <img 
              src="/images/logo.jpeg" 
              alt="SweetCrust Logo" 
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-[#D7E2EA]/20 shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </div>

        <div className="flex-1 flex gap-4 sm:gap-6 md:gap-8 justify-end items-center">
          {rightLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </FadeIn>
  );
};

export default Navbar;
