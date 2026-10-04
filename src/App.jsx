import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryFilter from './components/CategoryFilter';
import ProductGrid from './components/ProductGrid';
import ProductModal from './components/ProductModal';
import CustomFurnitureBanner from './components/CustomFurnitureBanner';
import ShowroomStory from './components/ShowroomStory';
import InstagramShowcase from './components/InstagramShowcase';
import LocationContact from './components/LocationContact';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import MobileBottomNav from './components/MobileBottomNav';
import Footer from './components/Footer';

import { products } from './data/products';
import { brandConfig } from './data/brandConfig';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProduct, setActiveModalProduct] = useState(null);

  // Filter products by category and search query
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category match
      const matchesCategory =
        selectedCategory === 'todos' || product.category === selectedCategory;

      // Search match
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(query) ||
        product.shortDescription.toLowerCase().includes(query) ||
        product.fullDescription.toLowerCase().includes(query) ||
        product.room.toLowerCase().includes(query) ||
        product.categoryLabel.toLowerCase().includes(query) ||
        (product.badge && product.badge.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    const catalogEl = document.getElementById('catalogo');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProductById = (productId) => {
    const found = products.find((p) => p.id === productId);
    if (found) {
      setActiveModalProduct(found);
    }
  };

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1B1917] flex flex-col antialiased selection:bg-[#B58548] selection:text-white">
      {/* Top Header */}
      <Header onSelectCategory={handleSelectCategory} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onExploreClick={() => scrollToSection('catalogo')} />

        {/* Catalog / Digital Showroom Section */}
        <section id="catalogo" className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
          
          {/* Catalog Section Header */}
          <div className="max-w-2xl text-left mb-8 md:mb-12">
            <span className="text-xs font-semibold tracking-widest text-[#B58548] uppercase block mb-2">
              Explorá la Colección
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#1B1917] tracking-tight mb-3">
              El Showroom Digital
            </h2>
            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
              Muebles en madera maciza seleccionada. Tocá cualquier pieza para ver fotos en detalle, terminaciones y consultar directamente con nuestro taller por WhatsApp.
            </p>
          </div>

          {/* Filter Bar & Search */}
          <div className="mb-8 md:mb-10">
            <CategoryFilter
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              totalResults={filteredProducts.length}
            />
          </div>

          {/* Product Grid */}
          <ProductGrid
            products={filteredProducts}
            onOpenModal={(product) => setActiveModalProduct(product)}
            onResetFilter={() => {
              setSelectedCategory('todos');
              setSearchQuery('');
            }}
          />

          {/* Assisted consult note */}
          <div className="mt-12 p-4 sm:p-6 rounded-2xl bg-[#F4EFEA] border border-[#EAE4DC] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="text-sm font-semibold text-[#1B1917]">
                ¿Buscás un modelo en particular o no encontrás lo que necesitás?
              </p>
              <p className="text-xs text-[#78716C] mt-0.5">
                Tenemos más modelos en el taller y fabricamos muebles a pedido en Mar del Plata.
              </p>
            </div>
            <a
              href={brandConfig.getWhatsAppLink("Hola! Quería consultarles si tienen o fabrican un modelo específico de mueble.")}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-5 py-2.5 rounded-xl bg-[#1B1917] hover:bg-[#B58548] text-white text-xs font-semibold tracking-wider uppercase transition-colors"
            >
              Consultar con un asesor
            </a>
          </div>

        </section>

        {/* Custom Furniture Fabricator Section */}
        <CustomFurnitureBanner />

        {/* Showroom Experience & Trust */}
        <ShowroomStory />

        {/* Visual Inspiration from Instagram */}
        <InstagramShowcase onSelectProductById={handleSelectProductById} />

        {/* Location & Contact Section */}
        <LocationContact />
      </main>

      {/* Footer */}
      <Footer onSelectCategory={handleSelectCategory} />

      {/* Interactive Product Modal */}
      {activeModalProduct && (
        <ProductModal
          product={activeModalProduct}
          onClose={() => setActiveModalProduct(null)}
        />
      )}

      {/* Floating WhatsApp for quick conversion */}
      <FloatingWhatsApp />

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav onNavClick={scrollToSection} />
    </div>
  );
}
