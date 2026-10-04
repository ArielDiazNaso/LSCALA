import React, { useState } from 'react';
import { brandConfig } from '../data/brandConfig';
import { MessageCircle, ArrowDown, Sparkles, MapPin, CheckCircle2, ChevronRight, Star, ShieldCheck } from 'lucide-react';

export default function Hero({ onExploreClick }) {
  const heroShowcaseImages = [
    {
      src: '/images/mesas1.jpg',
      title: 'Mesa Comedor Escandinava',
      detail: 'Base caballete con espiga pasante vista en madera maciza',
      tag: 'Diseño Protagónico'
    },
    {
      src: '/images/comodas1.jpg',
      title: 'Vajillero Aparador con Diamante',
      detail: 'Marquetería de vetas cruzadas y puertas de autor',
      tag: 'Pieza de Autor'
    },
    {
      src: '/images/sillones2.jpg',
      title: 'Sillón Nórdico en Madera & Lino',
      detail: 'Curvaturas orgánicas y tapizado premium texturado',
      tag: 'Confort Macizo'
    }
  ];

  const [activeHeroIdx, setActiveHeroIdx] = useState(0);
  const activeItem = heroShowcaseImages[activeHeroIdx];

  return (
    <section className="relative pt-24 pb-14 md:pt-32 md:pb-24 overflow-hidden bg-wood-grain">
      {/* Background soft ambient glowing flares */}
      <div className="absolute top-0 right-10 w-[30rem] h-[30rem] bg-[#C6A169]/20 rounded-full blur-[120px] pointer-events-none -z-10 animate-glow" />
      <div className="absolute top-64 -left-20 w-[24rem] h-[24rem] bg-[#B58548]/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Brand Thesis & Conversion CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1 text-left">
            
            {/* Live Showroom & Trust Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md text-[#5D3B23] text-xs font-semibold tracking-wider uppercase mb-5 w-fit border border-[#D5C8B7]/80 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B58548] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B58548]" />
              </span>
              <span>Showroom en Mar del Plata · Av. Pedro Luro 3902</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.75rem] text-[#1B1917] font-medium tracking-tight leading-[1.08] mb-6">
              Muebles de madera maciza <span className="italic font-normal text-[#B58548]">para toda la vida</span>.
            </h1>

            {/* Supporting Copy in Argentine Spanish */}
            <p className="text-base sm:text-lg text-[#57534E] font-normal leading-relaxed mb-8 max-w-xl">
              Diseño contemporáneo y carpintería tradicional en Mar del Plata. Trabajamos maderas nobles con terminaciones naturales para transformar tus ambientes en lugares cálidos e inolvidables.
            </p>

            {/* High Impact CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-10">
              <button
                type="button"
                onClick={onExploreClick}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#1B1917] hover:bg-[#B58548] text-[#FAF8F5] text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-xl active:scale-98 cursor-pointer"
              >
                <span>Explorar Catálogo</span>
                <ArrowDown className="w-4 h-4 text-[#CAA169] group-hover:translate-y-0.5 transition-transform" />
              </button>

              <a
                href={brandConfig.getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-sm font-semibold tracking-wide transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#25D366]/20 active:scale-98"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Consultar por WhatsApp</span>
              </a>
            </div>

            {/* Value Pillars with tactile badges */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#EAE4DC] text-xs text-[#57534E]">
              <div className="flex flex-col gap-1 p-2 rounded-xl hover:bg-white/60 transition-colors">
                <span className="font-semibold text-[#1B1917] text-sm flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B58548] shrink-0" />
                  100% Macizo
                </span>
                <span className="text-[11px] text-[#78716C]">Maderas nobles sin enchapados débiles</span>
              </div>
              <div className="flex flex-col gap-1 p-2 rounded-xl hover:bg-white/60 transition-colors">
                <span className="font-semibold text-[#1B1917] text-sm flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B58548] shrink-0" />
                  A Medida
                </span>
                <span className="text-[11px] text-[#78716C]">Planos y ajustes a tu espacio exacto</span>
              </div>
              <div className="flex flex-col gap-1 p-2 rounded-xl hover:bg-white/60 transition-colors">
                <span className="font-semibold text-[#1B1917] text-sm flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B58548] shrink-0" />
                  Taller Local
                </span>
                <span className="text-[11px] text-[#78716C]">Fabricación propia en Mar del Plata</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Photography Showcase with Tabs */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative halo */}
              <div className="absolute -inset-2 bg-linear-to-tr from-[#B58548]/30 via-transparent to-[#4D6D60]/20 rounded-3xl blur-xl opacity-70 pointer-events-none" />

              {/* Main Showroom Image Card */}
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-[#E8E1D5] aspect-4/5 md:aspect-5/6 border border-white/60">
                <img
                  key={activeItem.src}
                  src={activeItem.src}
                  alt={`${activeItem.title} en el showroom de Lscala Muebles`}
                  className="w-full h-full object-cover object-center transform hover:scale-104 transition-transform duration-700 ease-out"
                  fetchPriority="high"
                  loading="eager"
                />
                
                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

                {/* Overlay Showroom Tag and Switcher */}
                <div className="absolute bottom-5 left-5 right-5 text-white flex flex-col gap-3">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-md bg-[#B58548]/90 backdrop-blur-md text-[11px] font-semibold tracking-wider uppercase text-white mb-2 shadow-xs">
                      {activeItem.tag}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl font-medium drop-shadow-sm leading-snug">
                      {activeItem.title}
                    </h3>
                    <p className="text-xs text-white/85 mt-0.5">
                      {activeItem.detail}
                    </p>
                  </div>

                  {/* Interactive Miniature Selector */}
                  <div className="flex items-center gap-2 pt-2 border-t border-white/20">
                    <span className="text-[10px] uppercase tracking-wider text-white/70 mr-1 hidden sm:inline">
                      Ver ambiente:
                    </span>
                    {heroShowcaseImages.map((item, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveHeroIdx(idx)}
                        className={`h-10 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                          activeHeroIdx === idx
                            ? 'border-white scale-105 shadow-md w-14'
                            : 'border-white/30 opacity-60 hover:opacity-90 w-10'
                        }`}
                        title={item.title}
                      >
                        <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Mini Inset Card (Wood Grain & Detail) */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-[#EAE4DC] items-center gap-3.5 max-w-xs animate-float">
                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-[#E8E1D5] shadow-xs">
                  <img
                    src="/images/mesas7.jpg"
                    alt="Detalle de ensamble de madera maciza"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="text-left pr-2">
                  <p className="text-xs font-bold text-[#1B1917] flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-[#B58548] fill-[#B58548]" />
                    Ensamble Tradicional
                  </p>
                  <p className="text-[11px] text-[#78716C] leading-snug mt-0.5">
                    Uniones con cuña y espiga pasante para solidez indeformable.
                  </p>
                </div>
              </div>

              {/* Floating Top Right Tag */}
              <div className="absolute -top-3 -right-3 sm:top-4 sm:right-4 bg-[#1B1917]/95 text-white backdrop-blur-md px-3.5 py-2 rounded-xl shadow-xl border border-white/20 text-xs flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
                <span className="font-semibold tracking-wide">Showroom Abierto Hoy</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
