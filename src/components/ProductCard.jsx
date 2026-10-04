import React from 'react';
import { brandConfig } from '../data/brandConfig';
import { MessageCircle, Eye, Images, Sparkles, Ruler } from 'lucide-react';

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
      className="group relative bg-white rounded-3xl overflow-hidden border border-[#EAE4DC] hover:border-[#DEC195] transition-all duration-300 shadow-sm hover:shadow-2xl hover:-translate-y-1 flex flex-col cursor-pointer"
    >
      {/* Photography Area */}
      <div className="relative aspect-4/5 bg-[#F4EFEA] overflow-hidden">
        <img
          src={mainImage}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center transform group-hover:scale-106 transition-transform duration-700 ease-out"
        />

        {/* Top Floating Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-10">
          {product.badge ? (
            <span className="px-3 py-1 rounded-full bg-[#1B1917]/90 text-[#FAF8F5] text-[11px] font-semibold tracking-wider uppercase backdrop-blur-md shadow-sm border border-white/10 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B58548]" />
              {product.badge}
            </span>
          ) : (
            <span />
          )}

          {hasMultipleImages && (
            <span className="px-2.5 py-1 rounded-full bg-white/90 text-[#44403C] text-[11px] font-medium flex items-center gap-1.5 backdrop-blur-md shadow-sm border border-[#EAE4DC]">
              <Images className="w-3.5 h-3.5 text-[#B58548]" />
              <span>{product.images.length} fotos</span>
            </span>
          )}
        </div>

        {/* Subtle bottom gradient inside photo */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Hover Quick Action Indicator (Desktop) */}
        <div className="hidden md:flex absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center pointer-events-none">
          <span className="px-4 py-2.5 rounded-full bg-white/95 backdrop-blur-md text-[#1B1917] text-xs font-bold tracking-wider uppercase shadow-xl flex items-center gap-2 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 border border-[#EAE4DC]">
            <Eye className="w-4 h-4 text-[#B58548]" />
            Ver detalles & medidas
          </span>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-5 flex-1 flex flex-col justify-between text-left">
        <div>
          {/* Category & Room Tag */}
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#B58548]">
              {product.categoryLabel}
            </span>
            <span className="text-[11px] text-[#A8A29E] font-medium">
              {product.room}
            </span>
          </div>

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
        <div className="pt-3.5 border-t border-[#F4EFEA] flex items-center gap-2">
          {/* Quick WhatsApp button */}
          <button
            type="button"
            onClick={handleWhatsAppClick}
            className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-xl bg-[#25D366]/12 hover:bg-[#25D366] text-[#0F6B56] hover:text-white text-xs font-bold tracking-wide transition-all duration-200 active:scale-97 cursor-pointer shadow-2xs hover:shadow-md"
            aria-label={`Consultar por ${product.name} en WhatsApp`}
          >
            <MessageCircle className="w-4 h-4 fill-current shrink-0" />
            <span>Consultar stock</span>
          </button>

          {/* Details Eye Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenModal(product);
            }}
            className="p-2.5 rounded-xl bg-[#FAF8F5] hover:bg-[#EAE4DC] text-[#44403C] hover:text-[#1B1917] transition-all cursor-pointer border border-[#EAE4DC]"
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
