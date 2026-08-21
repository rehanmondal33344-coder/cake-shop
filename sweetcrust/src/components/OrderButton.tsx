import React, { useState } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const OrderButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
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

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-[#1A1A1A] border border-[#D7E2EA]/20 rounded-3xl p-6 sm:p-8 max-w-sm w-full shadow-2xl z-10"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-[#D7E2EA]/50 hover:text-[#D7E2EA] transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <h3 className="text-2xl font-medium text-[#D7E2EA] mb-6 uppercase tracking-wider text-center">
                Contact Us
              </h3>
              
              <div className="flex flex-col gap-4">
                <a
                  href="tel:+917029984019"
                  className="flex items-center justify-center gap-3 bg-[#0C0C0C] hover:bg-[#2A2A2A] border border-[#D7E2EA]/10 p-4 rounded-xl transition-colors text-[#D7E2EA]"
                >
                  <Phone className="w-5 h-5 text-[#F59E0B]" />
                  <span className="font-medium tracking-wide">+91 70299 84019</span>
                </a>
                
                <a
                  href="https://wa.me/917029984019"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-[#0C0C0C] hover:bg-[#2A2A2A] border border-[#D7E2EA]/10 p-4 rounded-xl transition-colors text-[#D7E2EA]"
                >
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  <span className="font-medium tracking-wide">WhatsApp Us</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default OrderButton;
