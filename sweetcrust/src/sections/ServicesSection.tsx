import React from 'react';
import FadeIn from '../components/FadeIn';
import { Cake, Truck, Heart, Calendar } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Cake className="w-8 h-8 md:w-12 md:h-12 text-[#F59E0B]" />,
      title: 'Custom Cake Design',
      description: 'Work directly with our master bakers to design the cake of your dreams for any occasion, personalized to your taste and theme.'
    },
    {
      icon: <Truck className="w-8 h-8 md:w-12 md:h-12 text-[#F59E0B]" />,
      title: 'Specialty Delivery',
      description: 'We offer white-glove delivery services for large tiered cakes and delicate pastries to ensure they arrive in perfect condition.'
    },
    {
      icon: <Calendar className="w-8 h-8 md:w-12 md:h-12 text-[#F59E0B]" />,
      title: 'Event Catering',
      description: 'Elevate your next event with our dessert catering. We provide stunning dessert tables tailored for weddings, corporate events, and parties.'
    },
    {
      icon: <Heart className="w-8 h-8 md:w-12 md:h-12 text-[#F59E0B]" />,
      title: 'Tasting Sessions',
      description: 'Schedule a private tasting session to sample our most popular flavor combinations before making your final wedding or event decision.'
    }
  ];

  return (
    <section className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 min-h-[80vh] flex flex-col justify-center">
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 120px)' }}
        >
          Our Services
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 md:gap-20">
        {services.map((service, idx) => (
          <FadeIn key={service.title} delay={idx * 0.15} y={30} className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
            <div className="flex-shrink-0 p-4 rounded-full bg-[#1A1A1A] border border-[#D7E2EA]/10 shadow-lg">
              {service.icon}
            </div>
            <div>
              <h3 className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xl sm:text-2xl mb-3 sm:mb-4">
                {service.title}
              </h3>
              <p className="text-[#D7E2EA]/70 font-light leading-relaxed text-sm sm:text-base md:text-lg">
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
