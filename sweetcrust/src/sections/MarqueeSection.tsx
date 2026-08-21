import React, { useRef, useEffect, useState } from 'react';

const marqueeImages = [
  '/images/cake-2.jpg',
  '/images/cake-3.jpg',
  '/images/cake-4.jpg',
  '/images/cake-5.jpg',
  '/images/cake-6.jpg',
  '/images/cake-7.jpg',
  '/images/cake-8.jpg',
  '/images/cake-9.jpg',
  '/images/cake-10.jpg',
  '/images/cake-11.jpg',
  '/images/cake-12.jpg',
  '/images/cake-13.jpg',
  '/images/cake-14.jpg',
  '/images/cake-15.jpg',
  '/images/cake-16.jpg',
  '/images/cake-17.jpg',
  '/images/cake-18.jpg',
  '/images/cake-19.jpg',
  '/images/cake-20.jpg',
  '/images/cake-21.jpg',
  '/images/cake-22.jpg',
];

const row1Images = marqueeImages.slice(0, 11);
const row2Images = marqueeImages.slice(11);

const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.offsetTop;
      const raw = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(raw);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tripled1 = [...row1Images, ...row1Images, ...row1Images];
  const tripled2 = [...row2Images, ...row2Images, ...row2Images];

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      {/* Row 1 - moves RIGHT */}
      <div
        className="flex gap-3"
        style={{
          transform: `translateX(${offset - 200}px)`,
          willChange: 'transform',
        }}
      >
        {tripled1.map((src, i) => (
          <img
            key={`r1-${i}`}
            src={src}
            alt="Cake"
            loading="lazy"
            className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0"
          />
        ))}
      </div>

      <div className="h-3" />

      {/* Row 2 - moves LEFT */}
      <div
        className="flex gap-3"
        style={{
          transform: `translateX(${-(offset - 200)}px)`,
          willChange: 'transform',
        }}
      >
        {tripled2.map((src, i) => (
          <img
            key={`r2-${i}`}
            src={src}
            alt="Cake"
            loading="lazy"
            className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0"
          />
        ))}
      </div>
    </section>
  );
};

export default MarqueeSection;
