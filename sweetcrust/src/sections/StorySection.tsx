import React from 'react';
import { Cake, Cherry, IceCreamCone, CupSoda } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import OrderButton from '../components/OrderButton';

const storyText =
  'With more than five years of experience in the art of baking, we focus on organic ingredients, stunning presentation, and unforgettable flavors. We truly enjoy crafting centerpiece cakes for celebrations that aim to stand out. Let\'s bake something incredible together!';

const iconStyle = {
  filter: 'drop-shadow(0 0 20px rgba(245, 158, 11, 0.5)) drop-shadow(0 0 40px rgba(245, 158, 11, 0.25))',
};

const StorySection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 relative overflow-hidden">
      {/* Decorative Icons */}
      {/* Top-left */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%]"
      >
        <Cake
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto text-amber-400/30"
          style={iconStyle}
          strokeWidth={1}
        />
      </FadeIn>

      {/* Bottom-left */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]"
      >
        <Cherry
          className="w-[100px] sm:w-[140px] md:w-[180px] h-auto text-amber-400/30"
          style={iconStyle}
          strokeWidth={1}
        />
      </FadeIn>

      {/* Top-right */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%]"
      >
        <IceCreamCone
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto text-amber-400/30"
          style={iconStyle}
          strokeWidth={1}
        />
      </FadeIn>

      {/* Bottom-right */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]"
      >
        <CupSoda
          className="w-[130px] sm:w-[170px] md:w-[220px] h-auto text-amber-400/30"
          style={iconStyle}
          strokeWidth={1}
        />
      </FadeIn>

      {/* Content */}
      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 z-10">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Our Story
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText
            text={storyText}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
          <FadeIn delay={0.2} y={20}>
            <OrderButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
