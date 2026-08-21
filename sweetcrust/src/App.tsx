import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import StorySection from './sections/StorySection';
import CategoriesSection from './sections/CategoriesSection';
import BestSellersSection from './sections/BestSellersSection';
import GallerySection from './sections/GallerySection';

function App() {
  return (
    <div className="bg-[#0C0C0C] font-kanit" style={{ overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <StorySection />
      <CategoriesSection />
      <BestSellersSection />
      <GallerySection />
    </div>
  );
}

export default App;
