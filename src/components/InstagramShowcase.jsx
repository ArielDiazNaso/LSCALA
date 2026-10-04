import React from 'react';
import { brandConfig } from '../data/brandConfig';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

function InstagramIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function InstagramShowcase({ onSelectProductById }) {
  const instagramMoments = [
    {
      image: '/images/banquetas.jpg',
      caption: 'La nueva banqueta para tu barra. Madera maciza, curvas trabajadas y apoyapiés integrados.',
      productId: 'banqueta-alta-barra',
      tag: 'Novedad'
    },
    {
      image: '/images/mesas6.jpg',
      caption: 'Mesa redonda orgánica con patas esculpidas y bordes redondeados.',
      productId: 'mesa-redonda-organica',
      tag: 'Comedor'
    },
    {
      image: '/images/comodas2.jpg',
      caption: 'Detalles que enamoran: laterales en varillado curvo y puerta central corrediza.',
      productId: 'vajillero-varillado-curvo',
      tag: 'Vajillero'
    },
    {
      image: '/images/sillones2.jpg',
      caption: 'Sillón individual nórdico en madera maciza y tapicería en lino color piedra.',
      productId: 'sillon-nordico-madera-lino',
      tag: 'Living'
    },
    {
      image: '/images/mesadeluz3.jpg',
      caption: 'Mesa de luz nórdica con puerta volcable y nicho abierto.',
      productId: 'mesa-de-luz-puerta-abatible',
      tag: 'Dormitorio'
    },
    {
      image: '/images/sillas6.jpg',
      caption: 'En nuestro showroom de Av. Pedro Luro: opciones de asiento tapizado o 100% madera maciza.',
      productId: 'sillon-comedor-curvo-lino',
      tag: 'Showroom'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-[#F4EFEA] border-y border-[#EAE4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 text-left">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#B58548] mb-2">
              <InstagramIcon className="w-4 h-4" />
              <span>Inspiración & Redes</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#1B1917] tracking-tight">
              Directo desde nuestro día a día
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#78716C] mt-2 md:mt-0 max-w-md">
            Compartimos piezas recién salidas del taller, nuevos ingresos en el showroom y combinaciones para tu casa.
          </p>
        </div>

        {/* Gallery Grid (6 real Instagram snapshots) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {instagramMoments.map((item, index) => (
            <div
              key={index}
              onClick={() => onSelectProductById(item.productId)}
              className="group relative rounded-2xl overflow-hidden aspect-4/5 bg-stone-300 shadow-2xs hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                loading="lazy"
              />

              {/* Tag pill */}
              <div className="absolute top-2.5 left-2.5">
                <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-xs text-white text-[10px] font-medium tracking-wide">
                  {item.tag}
                </span>
              </div>

              {/* Hover overlay with caption */}
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-3 text-left">
                <p className="text-white text-[11px] line-clamp-3 leading-snug mb-2 font-normal">
                  {item.caption}
                </p>
                <span className="text-[10px] font-semibold text-[#DEC195] uppercase tracking-wider flex items-center gap-1">
                  Ver pieza <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to WhatsApp / Social */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <span className="text-xs text-[#57534E]">
            ¿Viste alguna foto que te gustó en nuestras redes?
          </span>
          <a
            href={brandConfig.getWhatsAppLink("Hola! Vi una publicación en sus redes y quería consultar por ese mueble.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#128C7E] hover:text-[#0C6257] underline underline-offset-4"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Consultanos directo con la captura por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
