import React from 'react';
import { brandConfig } from '../data/brandConfig';
import { Home, Layers, Ruler, MapPin, MessageCircle } from 'lucide-react';

export default function MobileBottomNav({ onNavClick }) {
  return (
    <nav
      aria-label="Navegación inferior móvil"
      className="md:hidden fixed bottom-0 left-0 right-0 z-30 editorial-glass border-t border-[#EAE4DC] px-2 py-1.5 pb-[max(0.375rem,env(safe-area-inset-bottom))]"
    >
      <div className="grid grid-cols-5 items-center text-center">
        
        {/* Inicio */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex flex-col items-center justify-center py-1 text-[#78716C] hover:text-[#1B1917] active:scale-95 transition-all"
        >
          <Home className="w-5 h-5 mb-0.5 stroke-[1.75]" />
          <span className="text-[10px] font-medium tracking-tight">Inicio</span>
        </button>

        {/* Catálogo */}
        <button
          type="button"
          onClick={() => onNavClick('catalogo')}
          className="flex flex-col items-center justify-center py-1 text-[#78716C] hover:text-[#1B1917] active:scale-95 transition-all"
        >
          <Layers className="w-5 h-5 mb-0.5 stroke-[1.75]" />
          <span className="text-[10px] font-medium tracking-tight">Catálogo</span>
        </button>

        {/* A Medida */}
        <button
          type="button"
          onClick={() => onNavClick('a-medida')}
          className="flex flex-col items-center justify-center py-1 text-[#78716C] hover:text-[#1B1917] active:scale-95 transition-all"
        >
          <Ruler className="w-5 h-5 mb-0.5 stroke-[1.75]" />
          <span className="text-[10px] font-medium tracking-tight">A Medida</span>
        </button>

        {/* Showroom */}
        <button
          type="button"
          onClick={() => onNavClick('showroom')}
          className="flex flex-col items-center justify-center py-1 text-[#78716C] hover:text-[#1B1917] active:scale-95 transition-all"
        >
          <MapPin className="w-5 h-5 mb-0.5 stroke-[1.75]" />
          <span className="text-[10px] font-medium tracking-tight">Showroom</span>
        </button>

        {/* WhatsApp Highlight */}
        <a
          href={brandConfig.getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 text-[#25D366] active:scale-95 transition-all"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 mb-0.5 fill-current" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#25D366] rounded-full animate-ping" />
          </div>
          <span className="text-[10px] font-bold text-[#128C7E] tracking-tight">WhatsApp</span>
        </a>

      </div>
    </nav>
  );
}
