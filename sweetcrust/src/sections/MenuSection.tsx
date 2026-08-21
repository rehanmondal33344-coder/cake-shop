import React from 'react';
import FadeIn from '../components/FadeIn';

const MenuSection: React.FC = () => {
  return (
    <section className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 flex flex-col items-center">
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-12 sm:mb-16 md:mb-20"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Our Menu
        </h2>
      </FadeIn>
      <FadeIn delay={0.2} y={40} className="w-full max-w-4xl mx-auto rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden shadow-2xl border-2 border-[#D7E2EA]/20">
        <img
          src="/images/cake_menu.jpeg"
          alt="SweetCrust Cake Menu"
          className="w-full h-auto object-contain"
        />
      </FadeIn>
    </section>
  );
};

export default MenuSection;
