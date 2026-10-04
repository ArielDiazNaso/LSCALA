import React from 'react';
import { brandConfig } from '../data/brandConfig';
import { MessageCircle, ArrowDown, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

export default function Hero({ onExploreClick }) {
  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
      {/* Background soft ambient tint */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#DEDEC3]/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-48 left-0 w-80 h-80 bg-[#C6A169]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Brand Text & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1 text-left">
            
            {/* Local Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE2D6]/80 text-[#5D3B23] text-xs font-semibold tracking-wider uppercase mb-5 w-fit border border-[#D5C8B7]/60">
              <MapPin className="w-3.5 h-3.5 text-[#B58548]" />
              <span>Showroom en Mar del Plata · Av. Pedro Luro 3902</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1B1917] font-medium tracking-tight leading-[1.12] mb-6">
              Muebles de madera maciza para vivir tus espacios.
            </h1>

            {/* Supporting Copy in Argentine Spanish */}
            <p className="text-base sm:text-lg text-[#57534E] font-normal leading-relaxed mb-8 max-w-xl">
              Diseños nobles, terminaciones naturales y la calidez del trabajo artesanal en Mar del Plata. Descubrí piezas pensadas para acompañar tu casa toda la vida.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-10">
              <button
                type="button"
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#1B1917] hover:bg-[#B58548] text-[#FAF8F5] text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg active:scale-98 cursor-pointer"
              >
                <span>Ver muebles</span>
                <ArrowDown className="w-4 h-4 text-[#CAA169]" />
              </button>

              <a
                href={brandConfig.getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-sm font-semibold tracking-wide transition-all duration-300 shadow-md hover:shadow-lg active:scale-98"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Consultar por WhatsApp</span>
              </a>
            </div>

            {/* Value bullets */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#EAE4DC] text-xs text-[#57534E]">
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-[#1B1917] text-sm flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B58548] shrink-0" />
                  100% Macizo
                </span>
                <span className="text-[11px] text-[#78716C]">Maderas nobles seleccionadas</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-[#1B1917] text-sm flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B58548] shrink-0" />
                  A Medida
                </span>
                <span className="text-[11px] text-[#78716C]">Adaptable a tu ambiente</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-[#1B1917] text-sm flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B58548] shrink-0" />
                  Showroom
                </span>
                <span className="text-[11px] text-[#78716C]">Vení a tocar las texturas</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Photography Showcase */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Showroom Image Card */}
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-[#E8E1D5] aspect-4/5 md:aspect-5/6">
                <img
                  src="/images/mesas1.jpg"
                  alt="Mesa de comedor de madera maciza en el showroom de Lscala Muebles"
                  className="w-full h-full object-cover object-center transform hover:scale-103 transition-transform duration-700 ease-out"
                  fetchPriority="high"
                  loading="eager"
                />
                
                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Overlay Showroom Tag */}
                <div className="absolute bottom-5 left-5 right-5 text-white flex items-end justify-between">
                  <div>
                    <span className="inline-block px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md text-[11px] font-medium tracking-wider uppercase text-white mb-1.5">
                      Showroom Lscala
                    </span>
                    <p className="font-serif text-lg md:text-xl font-medium drop-shadow-sm">
                      Mesa de Comedor en Madera Maciza
                    </p>
                    <p className="text-xs text-white/80">
                      Ensamble artesanal con espiga pasante vista
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Mini Inset Card (Wood Grain & Detail) */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white p-3 rounded-2xl shadow-xl border border-[#EAE4DC] items-center gap-3.5 max-w-xs animate-fade-in">
                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-[#E8E1D5]">
                  <img
                    src="/images/mesas7.jpg"
                    alt="Detalle de ensamble de madera maciza"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="text-left pr-2">
                  <p className="text-xs font-semibold text-[#1B1917]">Ensamble Tradicional</p>
                  <p className="text-[11px] text-[#78716C] leading-snug">
                    Uniones con cuña y espiga para máxima solidez.
                  </p>
                </div>
              </div>

              {/* Floating Top Right Tag */}
              <div className="absolute -top-3 -right-3 sm:top-4 sm:right-4 bg-[#1B1917]/90 text-white backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-white/10 text-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span className="font-medium">Showroom Abierto</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
