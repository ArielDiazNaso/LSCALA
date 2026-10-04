import React from 'react';
import { brandConfig } from '../data/brandConfig';
import { MessageCircle, Ruler, Compass, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function CustomFurnitureBanner() {
  return (
    <section id="a-medida" className="py-16 md:py-24 bg-[#1B1917] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#B58548]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#4D6D60]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Story & Steps */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-[#DEC195] text-xs font-semibold tracking-wider uppercase mb-5 w-fit border border-white/10">
              <Ruler className="w-3.5 h-3.5 text-[#B58548]" />
              <span>Carpintería & Fabricación Propia</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-tight mb-5">
              ¿Tenés un espacio con medidas especiales?
            </h2>

            <p className="text-base text-stone-300 font-normal leading-relaxed mb-8 max-w-xl">
              En Lscala somos fabricantes. Si buscás una mesa para 12 personas, un vajillero que calce justo entre dos columnas o el amoblamiento integral de tu cocina, en nuestro taller de Mar del Plata lo hacemos realidad.
            </p>

            {/* Steps */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-[#B58548]/20 border border-[#B58548]/40 flex items-center justify-center shrink-0 text-xs font-bold text-[#DEC195]">
                  1
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Nos compartís tu idea o plano</h4>
                  <p className="text-xs text-stone-400">
                    Mandanos un croquis, foto de inspiración o las medidas aproximadas de tu espacio.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-[#B58548]/20 border border-[#B58548]/40 flex items-center justify-center shrink-0 text-xs font-bold text-[#DEC195]">
                  2
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Elegimos madera, vetas y terminación</h4>
                  <p className="text-xs text-stone-400">
                    Te asesoramos sobre la mejor madera maciza y el tipo de lustre adecuado para el uso.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-[#B58548]/20 border border-[#B58548]/40 flex items-center justify-center shrink-0 text-xs font-bold text-[#DEC195]">
                  3
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Fabricamos y entregamos en Mar del Plata</h4>
                  <p className="text-xs text-stone-400">
                    Construcción con ensambles macizos tradicionales y entrega coordinada sin sorpresas.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct CTA */}
            <div>
              <a
                href={brandConfig.getCustomFurnitureWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all active:scale-98"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Consultar por un proyecto a medida</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Visual Dual-Card Showcase */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-3/4 bg-stone-800 shadow-xl border border-white/10 group">
                  <img
                    src="/images/cocina1.jpg"
                    alt="Cocina a medida fabricada por Lscala Muebles"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-left">
                  <p className="text-xs font-semibold text-[#DEC195]">Cocinas Integrales</p>
                  <p className="text-[11px] text-stone-400">Vitrinas LED e islas con bajo mesada</p>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-left">
                  <p className="text-xs font-semibold text-[#DEC195]">Muebles de Guardado</p>
                  <p className="text-[11px] text-stone-400">Aparadores con varillado y vajilleros</p>
                </div>
                <div className="rounded-2xl overflow-hidden aspect-3/4 bg-stone-800 shadow-xl border border-white/10 group">
                  <img
                    src="/images/comodas2.jpg"
                    alt="Vajillero artesanal con varillado curvo"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
