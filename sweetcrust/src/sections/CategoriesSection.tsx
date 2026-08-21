import React from 'react';
import FadeIn from '../components/FadeIn';

const categories = [
  {
    number: '01',
    name: 'Signature Cakes',
    description:
      'Multi-tiered masterpieces tailored to specific celebrations, ideal for weddings, anniversaries, and grand parties.',
  },
  {
    number: '02',
    name: 'Custom Cupcakes',
    description:
      'Bite-sized perfection featuring custom frostings, fillings, and elegant toppings to match any event theme.',
  },
  {
    number: '03',
    name: 'Vegan & Gluten-Free',
    description:
      'Deliciously inclusive options that never compromise on texture, moisture, or our signature rich flavors.',
  },
  {
    number: '04',
    name: 'French Pastries',
    description:
      'Delicate tarts, éclairs, and macarons crafted using traditional techniques for a refined, memorable dessert experience.',
  },
  {
    number: '05',
    name: 'Seasonal Specials',
    description:
      'Limited-edition bakes utilizing the freshest seasonal fruits, spices, and local ingredients.',
  },
];

const CategoriesSection: React.FC = () => {
  return (
    <section className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <h2
        className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Categories
      </h2>

      <div className="max-w-5xl mx-auto">
        {categories.map((cat, i) => (
          <FadeIn key={cat.number} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-6 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12"
              style={{
                borderBottom:
                  i < categories.length - 1
                    ? '1px solid rgba(12, 12, 12, 0.15)'
                    : 'none',
                borderTop: i === 0 ? '1px solid rgba(12, 12, 12, 0.15)' : 'none',
              }}
            >
              <span
                className="font-black text-[#0C0C0C] flex-shrink-0 leading-none"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {cat.number}
              </span>
              <div className="flex flex-col gap-2 sm:gap-3 pt-2 sm:pt-4 md:pt-6">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {cat.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-60"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {cat.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
