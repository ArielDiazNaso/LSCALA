import React, { useState, useEffect } from 'react';
import { brandConfig } from '../data/brandConfig';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear after user scrolls down 150px
      if (window.scrollY > 150) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Contacto directo por WhatsApp"
      className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-40 flex flex-col items-end pointer-events-auto"
    >
      {/* Tooltip bubble on desktop */}
      {!tooltipDismissed && (
        <div className="hidden md:flex items-center gap-2 mb-2 px-3.5 py-2 rounded-xl bg-white text-[#1B1917] text-xs shadow-lg border border-[#EAE4DC] animate-bounce-gentle">
          <span>¿Buscás medidas o stock? Te asesoramos en el momento</span>
          <button
            type="button"
            onClick={() => setTooltipDismissed(true)}
            className="text-[#78716C] hover:text-[#1B1917] p-0.5"
            aria-label="Cerrar sugerencia"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={brandConfig.getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Consultar por WhatsApp con Lscala Muebles"
        className="group flex items-center gap-3 px-4 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform active:scale-95"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline font-semibold text-xs tracking-wider uppercase pr-1">
          Consultar por WhatsApp
        </span>
      </a>
    </aside>
  );
}
