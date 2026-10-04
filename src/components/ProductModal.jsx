import React, { useState, useEffect } from 'react';
import { brandConfig } from '../data/brandConfig';
import {
  X,
  MessageCircle,
  MapPin,
  CheckCircle2,
  Ruler,
  Share2,
  ChevronLeft,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

export default function ProductModal({ product, onClose }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [product]);

  // Lock body scroll while modal is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!product) return null;

  const currentImage = product.images[activeImageIndex] || product.images[0];
  const whatsappUrl = brandConfig.getProductWhatsAppLink(product.name, product.categoryLabel);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${product.name} | Lscala Muebles`,
        text: `Mirá este mueble de madera maciza en el showroom de Lscala Muebles (Mar del Plata)`,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
      className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-2 sm:p-4 md:p-6"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card Container */}
      <div className="relative bg-[#FAF8F5] w-full max-w-4xl rounded-2xl sm:rounded-3xl shadow-2xl border border-[#EAE4DC] overflow-hidden my-auto z-10 max-h-[92vh] flex flex-col">
        
        {/* Floating Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 sm:p-2.5 rounded-full bg-[#1B1917]/70 hover:bg-[#1B1917] text-white backdrop-blur-md transition-all shadow-md active:scale-95 cursor-pointer"
          aria-label="Cerrar detalle del producto"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-4 sm:p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
            
            {/* Left: Gallery & Main Image (7 cols on md) */}
            <div className="md:col-span-7 flex flex-col space-y-3">
              {/* Main Active Image */}
              <div className="relative aspect-4/5 sm:aspect-5/6 rounded-2xl overflow-hidden bg-[#E8E1D5] shadow-inner group">
                <img
                  src={currentImage}
                  alt={`${product.name} - Vista ${activeImageIndex + 1}`}
                  className="w-full h-full object-cover object-center transition-all duration-300"
                />

                {/* Next / Prev buttons if multiple images */}
                {product.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveImageIndex((prev) =>
                          prev === 0 ? product.images.length - 1 : prev - 1
                        )
                      }
                      className="absolute left-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-[#1B1917] shadow-md transition-all"
                      aria-label="Foto anterior"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveImageIndex((prev) =>
                          prev === product.images.length - 1 ? 0 : prev + 1
                        )
                      }
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-[#1B1917] shadow-md transition-all"
                      aria-label="Foto siguiente"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}

                {/* Badge Tag */}
                {product.badge && (
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-md bg-[#1B1917]/85 text-white text-xs font-medium tracking-wider uppercase backdrop-blur-xs">
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Thumbnails row if multiple images */}
              {product.images.length > 1 && (
                <div className="flex items-center gap-2.5 overflow-x-auto py-1">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                        activeImageIndex === idx
                          ? 'border-[#B58548] shadow-md scale-102'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Miniatura ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                  <span className="text-[11px] text-[#78716C] pl-2">
                    Tocá cada foto para ver ángulos y detalles de ensamble.
                  </span>
                </div>
              )}

              {/* Workshop provenance banner */}
              <div className="bg-[#FAF8F5] border border-[#EAE4DC] p-3.5 rounded-xl flex items-center gap-3 text-xs text-[#57534E]">
                <ShieldCheck className="w-5 h-5 text-[#B58548] shrink-0" />
                <span>
                  Fotografía real tomada en nuestro showroom de <strong>Mar del Plata</strong>. El producto que ves es el que producimos en nuestro taller.
                </span>
              </div>
            </div>

            {/* Right: Product Details & Direct Conversion (5 cols on md) */}
            <div className="md:col-span-5 flex flex-col space-y-5 text-left">
              
              <div>
                <span className="text-xs uppercase tracking-widest text-[#B58548] font-semibold">
                  {product.categoryLabel} · {product.room}
                </span>
                <h2
                  id="modal-product-title"
                  className="font-serif text-2xl sm:text-3xl font-semibold text-[#1B1917] leading-tight mt-1"
                >
                  {product.name}
                </h2>
              </div>

              {/* Full Description */}
              <div className="text-sm text-[#57534E] leading-relaxed space-y-2">
                <p>{product.fullDescription}</p>
              </div>

              {/* Key Features Bullets */}
              <div className="space-y-2.5 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#1B1917]">
                  Características destacadas
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-[#44403C]">
                  {product.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#B58548] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Custom Sizing Note */}
              <div className="bg-[#FAF8F5] border border-[#DEC195]/60 p-3.5 rounded-xl text-xs text-[#5D3B23] space-y-1">
                <div className="flex items-center gap-1.5 font-semibold text-[#1B1917]">
                  <Ruler className="w-4 h-4 text-[#B58548]" />
                  <span>¿Necesitás otras medidas?</span>
                </div>
                <p className="text-[12px] leading-relaxed text-[#78716C]">
                  {product.dimensionsNote || 'Como fabricamos muebles en Mar del Plata, podemos ajustar el largo, ancho y terminación según tu ambiente.'}
                </p>
              </div>

              {/* Conversion Buttons: Main WhatsApp Action */}
              <div className="pt-2 space-y-2.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all active:scale-98"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Consultar por este mueble en WhatsApp</span>
                </a>

                <div className="flex items-center gap-2">
                  <a
                    href={brandConfig.location.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white hover:bg-[#F3EFE8] border border-[#EAE4DC] text-[#44403C] text-xs font-medium transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#B58548]" />
                    <span>Ver en Showroom</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleShare}
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-xl bg-white hover:bg-[#F3EFE8] border border-[#EAE4DC] text-[#44403C] text-xs font-medium transition-colors cursor-pointer"
                    title="Compartir mueble"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>{copiedLink ? '¡Copiado!' : 'Compartir'}</span>
                  </button>
                </div>
              </div>

              {/* Showroom Direct Notice */}
              <p className="text-[11px] text-[#A8A29E] text-center">
                Atención personalizada sin intermediarios · Mar del Plata
              </p>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
