import React from 'react';

const OrderButton: React.FC = () => {
  return (
    <button
      className="rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base text-white font-medium uppercase tracking-widest cursor-pointer hover:brightness-110 transition-all duration-200"
      style={{
        background: 'linear-gradient(123deg, #4A1C00 7%, #D97706 37%, #F59E0B 72%, #FCD34D 100%)',
        boxShadow: '0px 4px 4px rgba(217, 119, 6, 0.25), 4px 4px 12px #F59E0B inset',
        outline: '2px solid white',
        outlineOffset: '-3px',
      }}
    >
      Order Now
    </button>
  );
};

export default OrderButton;
