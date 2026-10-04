import React from 'react';
import { brandConfig } from '../data/brandConfig';
import { MessageCircle, Ruler, Compass, Sparkles, CheckCircle2, ArrowRight, ShieldAlert, Award, Hammer } from 'lucide-react';

export default function CustomFurnitureBanner() {
  return (
    <section id="a-medida" className="py-20 md:py-28 bg-[#181615] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute -top-32 -right-32 w-[32rem] h-[32rem] bg-[#B58548]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[32rem] h-[32rem] bg-[#4D6D60]/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative wood grain subtle texture */}
      <div className="absolute inset-0 bg-wood-grain opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story & Steps */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#DEC195] text-xs font-semibold tracking-wider uppercase mb-6 w-fit border border-white/10 backdrop-blur-md shadow-xs">
              <Hammer className="w-3.5 h-3.5 text-[#B58548]" />
              <span>Carpintería & Fabricación Propia</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15] mb-5">
              ¿Tenés un espacio con <span className="italic text-[#DEC195]">medidas especiales</span>?
            </h2>

            <p className="text-base text-stone-300 font-normal leading-relaxed mb-8 max-w-xl">
              En Lscala somos fabricantes directos. Si buscás una mesa para 12 personas, un vajillero que calce exacto en tu living o el amoblamiento integral de tu cocina, en nuestro taller de Mar del Plata lo proyectamos y construimos con maderas nobles seleccionadas.
            </p>

            {/* Steps in clean editorial cards */}
            <div className="space-y-3.5 mb-9">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4 hover:bg-white/8 transition-colors">
                <div className="w-8 h-8 rounded-xl bg-[#B58548]/25 border border-[#B58548]/50 flex items-center justify-center shrink-0 text-xs font-bold text-[#DEC195]">
                  1
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Nos compartís tu idea, croquis o medidas</h4>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Podés enviarnos una foto de inspiración o las dimensiones tentativas del ambiente por WhatsApp.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4 hover:bg-white/8 transition-colors">
                <div className="w-8 h-8 rounded-xl bg-[#B58548]/25 border border-[#B58548]/50 flex items-center justify-center shrink-0 text-xs font-bold text-[#DEC195]">
                  2
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Elegimos madera, tonos de veta y lustre</h4>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Te asesoramos sobre la densidad de la madera maciza y el tipo de protección hidrófuga adecuada.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4 hover:bg-white/8 transition-colors">
                <div className="w-8 h-8 rounded-xl bg-[#B58548]/25 border border-[#B58548]/50 flex items-center justify-center shrink-0 text-xs font-bold text-[#DEC195]">
                  3
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Fabricamos y entregamos en Mar del Plata y zona</h4>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Construcción con ensambles de espiga tradicional, lijado artesanal y flete coordinado a tu domicilio.
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
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-sm font-semibold tracking-wide shadow-lg hover:shadow-2xl hover:shadow-[#25D366]/20 transition-all active:scale-98"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Consultar por un proyecto a medida</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Visual Dual-Card Showcase */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              
              <div className="space-y-4">
                <div className="relative rounded-3xl overflow-hidden aspect-3/4 bg-stone-900 shadow-2xl border border-white/10 group">
                  <img
                    src="/images/cocina1.jpg"
                    alt="Cocina a medida fabricada por Lscala Muebles"
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <span className="text-[10px] uppercase font-bold text-[#DEC195] tracking-wider block">Showroom</span>
                    <p className="text-xs font-semibold text-white">Amoblamiento de Cocina</p>
                  </div>
                </div>
                <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10 text-left">
                  <p className="text-xs font-semibold text-[#DEC195]">Cocinas Integrales</p>
                  <p className="text-[11px] text-stone-400 mt-0.5">Vitrinas LED e islas con bajo mesada a medida</p>
                </div>
              </div>

              <div className="space-y-4 pt-6 sm:pt-8">
                <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10 text-left">
                  <p className="text-xs font-semibold text-[#DEC195]">Muebles de Guardado</p>
                  <p className="text-[11px] text-stone-400 mt-0.5">Aparadores con varillado curvo y vajilleros</p>
                </div>
                <div className="relative rounded-3xl overflow-hidden aspect-3/4 bg-stone-900 shadow-2xl border border-white/10 group">
                  <img
                    src="/images/comodas2.jpg"
                    alt="Vajillero artesanal con varillado curvo"
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <span className="text-[10px] uppercase font-bold text-[#DEC195] tracking-wider block">Trabajo a Mano</span>
                    <p className="text-xs font-semibold text-white">Varillado Macizo Curvo</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
