import React from 'react';
import { brandConfig } from '../data/brandConfig';
import { MessageCircle, MapPin, Phone, Clock, ArrowUp } from 'lucide-react';

export default function Footer({ onSelectCategory }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1B1917] text-[#FAF8F5] pt-16 pb-28 md:pb-16 border-t border-white/10 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-serif text-2xl tracking-[0.2em] font-semibold text-white uppercase block">
              LSCALA
            </span>
            <p className="text-xs tracking-[0.25em] text-[#DEC195] uppercase -mt-2">
              Muebles · Mar del Plata
            </p>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              Diseño, carpintería tradicional y fabricación de muebles en madera maciza. Visitanos en nuestro showroom o consultanos por WhatsApp para proyectos a medida.
            </p>
            <div className="pt-2">
              <a
                href={brandConfig.getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-semibold tracking-wide transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Escribinos por WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Showroom Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#DEC195]">
              Categorías
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li>
                <button
                  onClick={() => onSelectCategory('mesas')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Mesas de Comedor
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('sillas')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sillas & Banquetas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('guardado')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Cómodas & Vajilleros
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('mesasdeluz')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Mesas de Luz
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('sillones')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sillones & Divanes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('cocinas')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Cocinas a Medida
                </button>
              </li>
            </ul>
          </div>

          {/* Showroom & Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-3 text-xs sm:text-sm text-stone-300">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#DEC195]">
              Showroom & Contacto
            </h4>
            
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B58548] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">{brandConfig.location.address}</p>
                  <p className="text-stone-400 text-xs">{brandConfig.location.postalCode} {brandConfig.location.city}, {brandConfig.location.province}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#B58548] shrink-0 mt-0.5" />
                <div className="text-xs text-stone-400 space-y-0.5">
                  <p>Lun a Vie: 10:00 a 14:00 y 15:00 a 18:00 hs</p>
                  <p>Sábados: 09:00 a 13:00 hs</p>
                  <p>Domingos: Cerrado</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B58548] shrink-0" />
                <p className="text-xs text-stone-300">
                  Tel: {brandConfig.contact.phone} · {brandConfig.contact.phoneAlternative}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} {brandConfig.name}. Todos los derechos reservados. Mar del Plata, Argentina.</p>
          
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors cursor-pointer py-1"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
