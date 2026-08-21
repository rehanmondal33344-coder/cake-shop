import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import ViewDetailsButton from '../components/ViewDetailsButton';

interface ProjectData {
  number: string;
  flavor: string;
  name: string;
  images: {
    col1Top: string;
    col1Bottom: string;
    col2: string;
  };
}

const projects: ProjectData[] = [
  {
    number: '01',
    flavor: 'Signature',
    name: 'Midnight Chocolate Truffle',
    images: {
      col1Top:
        'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
      col1Bottom:
        'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&q=80',
      col2: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=1200&q=80',
    },
  },
  {
    number: '02',
    flavor: 'Popular',
    name: 'Berry Chantilly Lace',
    images: {
      col1Top:
        'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80',
      col1Bottom:
        'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&w=800&q=80',
      col2: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=80',
    },
  },
  {
    number: '03',
    flavor: 'Wedding',
    name: 'Golden Vanilla Bliss',
    images: {
      col1Top:
        'https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=800&q=80',
      col1Bottom:
        'https://images.unsplash.com/photo-1557925923-33b251dc3296?auto=format&fit=crop&w=800&q=80',
      col2: 'https://images.unsplash.com/photo-1602351447937-745cb7be3ab6?auto=format&fit=crop&w=1200&q=80',
    },
  },
];

interface CardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
  range: [number, number];
  targetScale: number;
}

const Card: React.FC<CardProps> = ({ project, index, range, targetScale }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={containerRef} className="h-[85vh]" style={{ position: 'relative' }}>
      <div className="sticky top-24 md:top-32" style={{ top: `calc(6rem + ${index * 28}px)` }}>
        <motion.div
          className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 origin-top"
          style={{ scale }}
        >
          {/* Top row */}
          <div className="flex items-start justify-between mb-4 sm:mb-6 md:mb-8 flex-wrap gap-4">
            <div className="flex items-baseline gap-4 sm:gap-6 md:gap-8">
              <span
                className="font-black text-[#D7E2EA] leading-none"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {project.number}
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-amber-400 font-medium uppercase tracking-widest text-xs sm:text-sm">
                  {project.flavor}
                </span>
                <h3
                  className="text-[#D7E2EA] font-medium uppercase"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {project.name}
                </h3>
              </div>
            </div>
            <div className="flex-shrink-0">
              <ViewDetailsButton />
            </div>
          </div>

          {/* Image Grid */}
          <div className="flex gap-3 sm:gap-4 md:gap-5">
            {/* Left column - 40% */}
            <div className="w-[40%] flex flex-col gap-3 sm:gap-4 md:gap-5">
              <img
                src={project.images.col1Top}
                alt={`${project.name} detail 1`}
                className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
                style={{ height: 'clamp(130px, 16vw, 230px)' }}
              />
              <img
                src={project.images.col1Bottom}
                alt={`${project.name} detail 2`}
                className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
                style={{ height: 'clamp(160px, 22vw, 340px)' }}
              />
            </div>
            {/* Right column - 60% */}
            <div className="w-[60%]">
              <img
                src={project.images.col2}
                alt={`${project.name} main`}
                className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const BestSellersSection: React.FC = () => {
  return (
    <section className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Featured
        </h2>
      </FadeIn>

      <div className="max-w-7xl mx-auto">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - 1 - i) * 0.03;
          return (
            <Card
              key={project.number}
              project={project}
              index={i}
              totalCards={projects.length}
              range={[i * (1 / projects.length), 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};

export default BestSellersSection;
