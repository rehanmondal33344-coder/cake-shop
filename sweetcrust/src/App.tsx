import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import CategoriesPage from './pages/CategoriesPage';
import GalleryPage from './pages/GalleryPage';
import ServicesPage from './pages/ServicesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="services" element={<ServicesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
