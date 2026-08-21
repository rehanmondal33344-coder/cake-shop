import React from 'react';
import FadeIn from '../components/FadeIn';
import OrderButton from '../components/OrderButton';
import Magnet from '../components/Magnet';

const navLinks = ['Menu', 'Categories', 'Best Sellers', 'Order Now'];

const HeroSection: React.FC = () => {
  return (
    <section className="h-screen flex flex-col relative" style={{ overflowX: 'clip' }}>
      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav className="flex justify-between px-6 md:px-10 pt-6 md:pt-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
            >
              {link}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <FadeIn delay={0.15} y={40} className="overflow-hidden mt-6 sm:mt-4 md:-mt-5">
        <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] px-6 md:px-10">
          artisan cakes
        </h1>
      </FadeIn>

      {/* Hero Image */}
      <FadeIn delay={0.6} y={30} className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <img
            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800"
            alt="Artisan chocolate cake"
            className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] rounded-full object-cover shadow-2xl"
          />
        </Magnet>
      </FadeIn>

      {/* Bottom Bar */}
      <div className="flex-1" />
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a premium bakery driven by crafting striking and unforgettable flavor experiences
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <OrderButton />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
