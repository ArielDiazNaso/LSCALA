import React from 'react';
import { brandConfig } from '../data/brandConfig';
import { MessageCircle, Eye, Images } from 'lucide-react';

export default function ProductCard({ product, onOpenModal }) {
  const mainImage = product.images[0];
  const hasMultipleImages = product.images.length > 1;

  const handleWhatsAppClick = (e) => {
    e.stopPropagation();
    const url = brandConfig.getProductWhatsAppLink(product.name, product.categoryLabel);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <article
      onClick={() => onOpenModal(product)}
      className="group bg-white rounded-2xl overflow-hidden border border-[#EAE4DC] hover:border-[#DEC195] transition-all duration-300 shadow-2xs hover:shadow-xl flex flex-col cursor-pointer"
    >
      {/* Photography Area */}
      <div className="relative aspect-4/5 bg-[#F4EFEA] overflow-hidden">
        <img
          src={mainImage}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center transform group-hover:scale-104 transition-transform duration-500 ease-out"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          {product.badge ? (
            <span className="px-2.5 py-1 rounded-md bg-[#1B1917]/80 text-[#FAF8F5] text-[11px] font-medium tracking-wider uppercase backdrop-blur-xs shadow-xs">
              {product.badge}
            </span>
          ) : (
            <span />
          )}

          {hasMultipleImages && (
            <span className="px-2 py-1 rounded-md bg-white/85 text-[#44403C] text-[11px] font-medium flex items-center gap-1 backdrop-blur-xs shadow-xs">
              <Images className="w-3.5 h-3.5" />
              <span>{product.images.length} fotos</span>
            </span>
          )}
        </div>

        {/* Hover Quick Action Indicator (Desktop) */}
        <div className="hidden md:flex absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-200 items-center justify-center pointer-events-none">
          <span className="px-4 py-2 rounded-full bg-white/95 text-[#1B1917] text-xs font-semibold tracking-wider uppercase shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
            <Eye className="w-3.5 h-3.5 text-[#B58548]" />
            Ver detalles & medidas
          </span>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category breadcrumb */}
          <span className="text-[11px] font-medium uppercase tracking-widest text-[#B58548] block mb-1">
            {product.categoryLabel}
          </span>

          {/* Product Name */}
          <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#1B1917] group-hover:text-[#B58548] transition-colors leading-snug mb-2 line-clamp-2">
            {product.name}
          </h3>

          {/* Short Descriptor */}
          <p className="text-xs sm:text-sm text-[#78716C] line-clamp-2 leading-relaxed mb-4">
            {product.shortDescription}
          </p>
        </div>

        {/* Actions & WhatsApp Conversion */}
        <div className="pt-3 border-t border-[#F4EFEA] flex items-center gap-2">
          {/* Quick WhatsApp button */}
          <button
            type="button"
            onClick={handleWhatsAppClick}
            className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366] text-[#128C7E] hover:text-white text-xs font-semibold tracking-wide transition-all duration-200 active:scale-97 cursor-pointer"
            aria-label={`Consultar por ${product.name} en WhatsApp`}
          >
            <MessageCircle className="w-4 h-4 fill-current shrink-0" />
            <span>Consultar por WhatsApp</span>
          </button>

          {/* Details Eye Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenModal(product);
            }}
            className="p-2.5 rounded-xl bg-[#FAF8F5] hover:bg-[#EAE4DC] text-[#44403C] transition-colors cursor-pointer"
            aria-label={`Ver detalles de ${product.name}`}
            title="Ver detalles completos"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>
    </article>
  );
}
