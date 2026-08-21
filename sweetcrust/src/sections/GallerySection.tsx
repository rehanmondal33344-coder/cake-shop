import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const galleryImages = [
  'IMG-20260821-WA0007.jpg',
  'IMG-20260821-WA0009.jpg',
  'IMG-20260821-WA0010.jpg',
  'IMG-20260821-WA0011.jpg',
  'IMG-20260821-WA0012.jpg',
  'IMG-20260821-WA0013.jpg',
  'IMG-20260821-WA0014.jpg',
  'IMG-20260821-WA0015.jpg',
  'IMG-20260821-WA0016.jpg',
  'IMG-20260821-WA0017.jpg',
  'IMG-20260821-WA0018.jpg',
  'IMG-20260821-WA0019.jpg',
  'IMG-20260821-WA0020.jpg',
  'IMG-20260821-WA0021.jpg',
  'IMG-20260821-WA0022.jpg',
  'IMG-20260821-WA0023.jpg',
  'IMG-20260821-WA0024.jpg',
  'IMG-20260821-WA0025.jpg',
  'IMG-20260821-WA0026.jpg',
  'IMG-20260821-WA0027.jpg',
  'IMG-20260821-WA0028.jpg',
  'IMG-20260821-WA0029.jpg',
  'IMG-20260821-WA0030.jpg',
  'IMG-20260821-WA0031.jpg',
  'IMG-20260821-WA0032.jpg',
  'IMG-20260821-WA0033.jpg',
  'IMG-20260821-WA0034.jpg',
  'IMG-20260821-WA0035.jpg',
  'IMG-20260821-WA0036.jpg',
  'IMG-20260821-WA0037.jpg',
  'IMG-20260821-WA0038.jpg',
  'IMG-20260821-WA0039.jpg',
  'IMG-20260821-WA0041.jpg',
  'IMG-20260821-WA0042.jpg',
  'IMG-20260821-WA0043.jpg',
  'IMG-20260821-WA0044.jpg',
  'IMG-20260821-WA0045.jpg',
  'IMG-20260821-WA0046.jpg',
  'IMG-20260821-WA0047.jpg',
  'IMG-20260821-WA0048.jpg',
  'IMG-20260821-WA0049.jpg',
  'IMG-20260821-WA0050.jpg',
  'IMG-20260821-WA0051.jpg',
  'IMG-20260821-WA0052.jpg',
  'IMG-20260821-WA0053.jpg',
  'IMG-20260821-WA0054.jpg',
  'IMG-20260821-WA0055.jpg',
  'IMG-20260821-WA0056.jpg',
  'IMG-20260821-WA0057.jpg',
  'IMG-20260821-WA0058.jpg',
  'IMG-20260821-WA0059.jpg',
  'IMG-20260821-WA0060.jpg',
  'IMG-20260821-WA0061.jpg',
  'IMG-20260821-WA0062.jpg',
  'IMG-20260821-WA0063.jpg',
  'IMG-20260821-WA0064.jpg',
  'IMG-20260821-WA0065.jpg',
  'IMG-20260821-WA0066.jpg',
  'IMG-20260821-WA0067.jpg',
  'IMG-20260821-WA0068.jpg',
  'IMG-20260821-WA0070.jpg',
  'IMG-20260821-WA0071.jpg',
  'IMG-20260821-WA0072.jpg',
  'IMG-20260821-WA0073.jpg',
  'IMG-20260821-WA0074.jpg',
  'IMG-20260821-WA0075.jpg',
  'IMG-20260821-WA0076.jpg',
  'IMG-20260821-WA0077.jpg',
  'IMG-20260821-WA0078.jpg',
  'IMG-20260821-WA0079.jpg',
  'IMG-20260821-WA0080.jpg',
  'IMG-20260821-WA0081.jpg',
  'IMG-20260821-WA0082.jpg',
  'IMG-20260821-WA0083.jpg',
  'IMG-20260821-WA0084.jpg',
  'IMG-20260821-WA0085.jpg',
  'IMG-20260821-WA0086.jpg',
  'IMG-20260821-WA0087.jpg',
  'IMG-20260821-WA0088.jpg',
  'IMG-20260821-WA0089.jpg',
  'IMG-20260821-WA0090.jpg',
  'IMG-20260821-WA0091.jpg',
  'IMG-20260821-WA0092.jpg',
  'IMG-20260821-WA0094.jpg',
  'IMG-20260821-WA0095.jpg',
  'IMG-20260821-WA0096.jpg',
  'IMG-20260821-WA0097.jpg',
  'IMG-20260821-WA0098.jpg',
  'IMG-20260821-WA0099.jpg',
  'IMG-20260821-WA0100.jpg',
  'IMG-20260821-WA0101.jpg',
  'IMG-20260821-WA0102.jpg',
  'IMG-20260821-WA0103.jpg',
  'IMG-20260821-WA0104.jpg',
  'IMG-20260821-WA0105.jpg',
  'IMG-20260821-WA0106.jpg',
  'IMG-20260821-WA0107.jpg',
  'IMG-20260821-WA0108.jpg',
  'IMG-20260821-WA0109.jpg',
  'IMG-20260821-WA0110.jpg',
  'IMG-20260821-WA0111.jpg',
  'IMG-20260821-WA0112.jpg',
  'IMG-20260821-WA0113.jpg',
  'IMG-20260821-WA0114.jpg',
  'IMG-20260821-WA0115.jpg',
  'IMG-20260821-WA0116.jpg',
  'IMG-20260821-WA0117.jpg',
  'IMG-20260821-WA0118.jpg',
  'IMG-20260821-WA0119.jpg',
  'IMG-20260821-WA0120.jpg',
  'IMG-20260821-WA0121.jpg',
  'IMG-20260821-WA0122.jpg',
  'IMG-20260821-WA0123.jpg',
  'IMG-20260821-WA0124.jpg',
  'IMG-20260821-WA0125.jpg',
  'IMG-20260821-WA0127.jpg',
  'IMG-20260821-WA0128.jpg',
  'IMG-20260821-WA0129.jpg',
  'IMG-20260821-WA0130.jpg',
  'IMG-20260821-WA0131.jpg',
  'IMG-20260821-WA0132.jpg',
  'IMG-20260821-WA0133.jpg',
  'IMG-20260821-WA0135.jpg',
  'IMG-20260821-WA0136.jpg',
  'IMG-20260821-WA0137.jpg',
  'IMG-20260821-WA0138.jpg',
  'IMG-20260821-WA0139.jpg',
  'IMG-20260821-WA0140.jpg',
  'IMG-20260821-WA0141.jpg',
  'IMG-20260821-WA0142.jpg',
  'IMG-20260821-WA0143.jpg',
  'IMG-20260821-WA0144.jpg',
  'IMG-20260821-WA0145.jpg',
  'IMG-20260821-WA0146.jpg',
  'IMG-20260821-WA0147.jpg',
  'IMG-20260821-WA0148.jpg',
  'IMG-20260821-WA0149.jpg',
  'IMG-20260821-WA0150.jpg',
  'IMG-20260821-WA0151.jpg',
  'IMG-20260821-WA0152.jpg',
  'IMG-20260821-WA0153.jpg',
  'IMG-20260821-WA0155.jpg',
  'IMG-20260821-WA0156.jpg',
  'IMG-20260821-WA0158.jpg',
  'IMG-20260821-WA0159.jpg',
  'IMG-20260821-WA0160.jpg',
  'IMG-20260821-WA0161.jpg',
  'IMG-20260821-WA0162.jpg',
  'IMG-20260821-WA0164.jpg',
  'IMG-20260821-WA0166.jpg',
  'IMG-20260821-WA0168.jpg',
  'IMG-20260821-WA0169.jpg',
  'IMG-20260821-WA0171.jpg',
  'IMG-20260821-WA0173.jpg',
  'IMG-20260821-WA0174.jpg',
  'IMG-20260821-WA0175.jpg',
  'IMG-20260821-WA0177.jpg',
  'IMG-20260821-WA0178.jpg',
  'IMG-20260821-WA0180.jpg',
  'IMG-20260821-WA0182.jpg',
  'IMG-20260821-WA0184.jpg',
  'IMG-20260821-WA0185.jpg',
  'IMG-20260821-WA0186.jpg',
  'IMG-20260821-WA0188.jpg',
  'IMG-20260821-WA0189.jpg',
  'IMG-20260821-WA0190.jpg',
  'IMG-20260821-WA0191.jpg',
  'IMG-20260821-WA0192.jpg',
  'IMG-20260821-WA0193.jpg',
  'IMG-20260821-WA0195.jpg',
  'IMG-20260821-WA0197.jpg',
  'IMG-20260821-WA0199.jpg',
  'IMG-20260821-WA0201.jpg',
  'IMG-20260821-WA0203.jpg',
  'IMG-20260821-WA0204.jpg',
  'IMG-20260821-WA0206.jpg',
  'IMG-20260821-WA0208.jpg',
  'IMG-20260821-WA0210.jpg',
  'IMG-20260821-WA0211.jpg',
  'IMG-20260821-WA0212.jpg',
  'IMG-20260821-WA0213.jpg',
  'IMG-20260821-WA0214.jpg',
  'IMG-20260821-WA0215.jpg',
  'IMG-20260821-WA0216.jpg',
  'IMG-20260821-WA0218.jpg',
  'IMG-20260821-WA0219.jpg',
  'IMG-20260821-WA0221.jpg',
  'IMG-20260821-WA0222.jpg',
  'IMG-20260821-WA0223.jpg',
  'IMG-20260821-WA0225.jpg',
  'IMG-20260821-WA0227.jpg',
  'IMG-20260821-WA0228.jpg',
  'IMG-20260821-WA0229.jpg',
  'IMG-20260821-WA0230.jpg',
  'IMG-20260821-WA0231.jpg',
  'IMG-20260821-WA0232.jpg',
];

const GallerySection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    document.body.style.overflow = '';
  }, []);

  const goNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % galleryImages.length : null
    );
  }, []);

  const goPrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null
        ? (prev - 1 + galleryImages.length) % galleryImages.length
        : null
    );
  }, []);

  return (
    <section className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Our Creations
        </h2>
      </FadeIn>

      {/* Subtitle */}
      <FadeIn delay={0.1} y={20}>
        <p
          className="text-[#D7E2EA]/60 font-light text-center uppercase tracking-widest mb-12 sm:mb-16 md:mb-20"
          style={{ fontSize: 'clamp(0.75rem, 1.2vw, 1.1rem)' }}
        >
          {galleryImages.length} handcrafted masterpieces — tap to explore
        </p>
      </FadeIn>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-3 sm:gap-4">
        {galleryImages.map((filename, i) => (
          <FadeIn key={filename} delay={Math.min(i * 0.02, 0.6)} y={20}>
            <motion.div
              className="mb-3 sm:mb-4 break-inside-avoid cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl group relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.25 }}
              onClick={() => openLightbox(i)}
            >
              <img
                src={`/gallery/${filename}`}
                alt={`SweetCrust cake creation ${i + 1}`}
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white/80 text-xs font-medium uppercase tracking-wider">
                  #{String(i + 1).padStart(3, '0')}
                </span>
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
              onClick={closeLightbox}
            />

            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-10 text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              <X size={32} />
            </button>

            {/* Counter */}
            <div className="absolute top-6 left-6 z-10 text-white/50 font-medium text-sm uppercase tracking-widest">
              {selectedIndex + 1} / {galleryImages.length}
            </div>

            {/* Previous button */}
            <button
              onClick={goPrev}
              className="absolute left-4 sm:left-8 z-10 text-white/50 hover:text-white transition-colors cursor-pointer p-2"
            >
              <ChevronLeft size={40} />
            </button>

            {/* Image */}
            <motion.img
              key={selectedIndex}
              src={`/gallery/${galleryImages[selectedIndex]}`}
              alt={`SweetCrust cake ${selectedIndex + 1}`}
              className="relative z-10 max-h-[85vh] max-w-[90vw] object-contain rounded-3xl shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            />

            {/* Next button */}
            <button
              onClick={goNext}
              className="absolute right-4 sm:right-8 z-10 text-white/50 hover:text-white transition-colors cursor-pointer p-2"
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
