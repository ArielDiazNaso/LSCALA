import React from 'react';
import { brandConfig } from '../data/brandConfig';
import { showroomHighlights } from '../data/products';
import {
  TreePine,
  Hammer,
  Ruler,
  MessageCircle,
  MapPin,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const iconMap = {
  TreePine,
  Hammer,
  Ruler,
  MessageCircle
};

export default function ShowroomStory() {
  return (
    <section id="showroom" className="py-16 md:py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-12 md:mb-16">
          <span className="text-xs font-semibold tracking-widest text-[#B58548] uppercase block mb-2">
            La Experiencia Lscala
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#1B1917] tracking-tight leading-tight mb-4">
            Un showroom pensado para apreciar la nobleza de la madera.
          </h2>
          <p className="text-base text-[#57534E] leading-relaxed">
            Creemos que elegir un mueble para tu casa requiere ver la textura, sentir el lustre al tacto y comprobar la solidez de cada unión. Por eso nuestro espacio en Mar del Plata está abierto para recibirte.
          </p>
        </div>

        {/* 4 Pillars of Craftsmanship */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {showroomHighlights.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-[#EAE4DC] hover:border-[#DEC195] transition-all duration-300 shadow-2xs hover:shadow-md flex flex-col text-left"
              >
                <div className="w-11 h-11 rounded-xl bg-[#FAF8F5] border border-[#DEC195]/40 flex items-center justify-center text-[#B58548] mb-5">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#1B1917] mb-2.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Visual Showroom Atmosphere Strip */}
        <div className="rounded-3xl bg-[#F4EFEA] border border-[#EAE4DC] p-6 sm:p-8 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Real Showroom Snapshot 1 */}
            <div className="lg:col-span-4 rounded-2xl overflow-hidden aspect-4/5 shadow-md bg-stone-200">
              <img
                src="/images/comodas1.jpg"
                alt="Vajillero de madera maciza en el showroom de Lscala"
                className="w-full h-full object-cover hover:scale-104 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            {/* Real Showroom Snapshot 2 */}
            <div className="lg:col-span-4 rounded-2xl overflow-hidden aspect-4/5 shadow-md bg-stone-200">
              <img
                src="/images/sillas5.jpg"
                alt="Sillón de comedor en madera y lino en el showroom"
                className="w-full h-full object-cover hover:scale-104 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            {/* Invitation Card */}
            <div className="lg:col-span-4 flex flex-col justify-center text-left bg-white p-6 sm:p-8 rounded-2xl border border-[#EAE4DC] shadow-sm">
              <span className="text-xs font-semibold tracking-wider text-[#B58548] uppercase mb-2">
                Vení a conocernos
              </span>
              <h3 className="font-serif text-2xl font-semibold text-[#1B1917] mb-3">
                Av. Pedro Luro 3902
              </h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed mb-6">
                Te esperamos en nuestro salón de exposición en Mar del Plata. Podés ver combinaciones de comedores, probar la comodidad de las sillas y charlar sobre medidas para tu proyecto.
              </p>
              
              <div className="space-y-3">
                <a
                  href={brandConfig.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1B1917] hover:bg-[#B58548] text-white text-xs font-semibold tracking-wider uppercase transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[#DEC195]" />
                  <span>Cómo llegar en Google Maps</span>
                </a>

                <a
                  href={brandConfig.getShowroomVisitWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366] text-[#128C7E] hover:text-white text-xs font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Avisarnos antes de pasar</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
