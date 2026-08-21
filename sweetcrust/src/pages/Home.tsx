import React from 'react';
import HeroSection from '../sections/HeroSection';
import MarqueeSection from '../sections/MarqueeSection';
import StorySection from '../sections/StorySection';
import BestSellersSection from '../sections/BestSellersSection';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <StorySection />
      <BestSellersSection />
    </>
  );
};

export default Home;
