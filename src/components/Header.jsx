import React, { useState, useEffect } from 'react';
import { brandConfig } from '../data/brandConfig';
import { MessageCircle, Menu, X, MapPin, Clock, Phone } from 'lucide-react';

export default function Header({ onSelectCategory }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId, categoryId = null) => {
    setMobileMenuOpen(false);
    if (categoryId && onSelectCategory) {
      onSelectCategory(categoryId);
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'editorial-glass shadow-xs border-b border-[#EAE4DC] py-3.5'
            : 'bg-[#FAF8F5]/90 md:bg-transparent py-4 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#"
              className="group flex flex-col focus:outline-hidden"
              aria-label="Lscala Muebles - Inicio"
            >
              <span className="font-serif text-2xl md:text-3xl tracking-[0.2em] font-semibold text-[#1B1917] uppercase group-hover:text-[#B58548] transition-colors">
                LSCALA
              </span>
              <span className="text-[10px] md:text-[11px] tracking-[0.25em] text-[#78716C] uppercase -mt-0.5">
                Muebles · Mar del Plata
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-[#44403C]">
              <button
                onClick={() => handleNavClick('catalogo', 'todos')}
                className="hover:text-[#B58548] transition-colors cursor-pointer py-1"
              >
                Catálogo Showroom
              </button>
              <button
                onClick={() => handleNavClick('catalogo', 'mesas')}
                className="hover:text-[#B58548] transition-colors cursor-pointer py-1"
              >
                Mesas
              </button>
              <button
                onClick={() => handleNavClick('catalogo', 'sillas')}
                className="hover:text-[#B58548] transition-colors cursor-pointer py-1"
              >
                Sillas
              </button>
              <button
                onClick={() => handleNavClick('catalogo', 'guardado')}
                className="hover:text-[#B58548] transition-colors cursor-pointer py-1"
              >
                Cómodas & Vajilleros
              </button>
              <button
                onClick={() => handleNavClick('a-medida')}
                className="hover:text-[#B58548] transition-colors cursor-pointer py-1"
              >
                Muebles a Medida
              </button>
              <button
                onClick={() => handleNavClick('showroom')}
                className="hover:text-[#B58548] transition-colors cursor-pointer py-1"
              >
                El Showroom
              </button>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href={brandConfig.getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1B1917] hover:bg-[#B58548] text-[#FAF8F5] text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-sm active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Consultar por WhatsApp</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center space-x-2">
              <a
                href={brandConfig.getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Escribir por WhatsApp"
                className="p-2.5 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-[#1B1917] hover:bg-[#EAE4DC] transition-colors focus:outline-hidden"
                aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative ml-auto w-full max-w-xs bg-[#FAF8F5] h-full shadow-2xl flex flex-col p-6 overflow-y-auto">
            <div className="flex items-center justify-between pb-6 border-b border-[#EAE4DC]">
              <div>
                <span className="font-serif text-xl tracking-[0.2em] font-semibold text-[#1B1917]">
                  LSCALA
                </span>
                <p className="text-[10px] text-[#78716C] uppercase tracking-widest">
                  Showroom Mar del Plata
                </p>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#44403C] hover:text-[#1B1917]"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="py-6 flex flex-col space-y-4 text-base font-medium text-[#292524]">
              <button
                onClick={() => handleNavClick('catalogo', 'todos')}
                className="text-left py-2 hover:text-[#B58548] border-b border-[#F4EFEA]"
              >
                Ver Todo el Showroom
              </button>
              <button
                onClick={() => handleNavClick('catalogo', 'mesas')}
                className="text-left py-2 hover:text-[#B58548] border-b border-[#F4EFEA]"
              >
                Mesas de Comedor
              </button>
              <button
                onClick={() => handleNavClick('catalogo', 'sillas')}
                className="text-left py-2 hover:text-[#B58548] border-b border-[#F4EFEA]"
              >
                Sillas & Banquetas
              </button>
              <button
                onClick={() => handleNavClick('catalogo', 'guardado')}
                className="text-left py-2 hover:text-[#B58548] border-b border-[#F4EFEA]"
              >
                Cómodas & Vajilleros
              </button>
              <button
                onClick={() => handleNavClick('catalogo', 'mesasdeluz')}
                className="text-left py-2 hover:text-[#B58548] border-b border-[#F4EFEA]"
              >
                Mesas de Luz
              </button>
              <button
                onClick={() => handleNavClick('catalogo', 'sillones')}
                className="text-left py-2 hover:text-[#B58548] border-b border-[#F4EFEA]"
              >
                Sillones & Divanes
              </button>
              <button
                onClick={() => handleNavClick('catalogo', 'cocinas')}
                className="text-left py-2 hover:text-[#B58548] border-b border-[#F4EFEA]"
              >
                Cocinas a Medida
              </button>
              <button
                onClick={() => handleNavClick('a-medida')}
                className="text-left py-2 hover:text-[#B58548] border-b border-[#F4EFEA]"
              >
                Fabricación a Medida
              </button>
              <button
                onClick={() => handleNavClick('showroom')}
                className="text-left py-2 hover:text-[#B58548]"
              >
                Ubicación & Horarios
              </button>
            </div>

            {/* Bottom info in drawer */}
            <div className="mt-auto pt-6 border-t border-[#EAE4DC] space-y-4">
              <a
                href={brandConfig.getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white font-medium text-sm shadow-md"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Escribinos por WhatsApp</span>
              </a>

              <div className="text-xs text-[#78716C] space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#B58548] shrink-0" />
                  <span>{brandConfig.location.address}, Mar del Plata</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#B58548] shrink-0" />
                  <span>{brandConfig.contact.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
