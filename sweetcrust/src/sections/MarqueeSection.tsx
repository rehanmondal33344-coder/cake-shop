import React, { useRef, useEffect, useState } from 'react';

const marqueeImages = [
  'https://images.unsplash.com/photo-1588195538326-c5b1e9f6a5b8?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1486427944544-d2c246c4df14?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1557925923-33b251dc3296?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1602351447937-745cb7be3ab6?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1578775887804-699de7086ff9?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1562440499-64c9a111f713?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=600&q=80',
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
