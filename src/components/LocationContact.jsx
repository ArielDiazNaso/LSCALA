import React from 'react';
import { brandConfig } from '../data/brandConfig';
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  ExternalLink,
  Navigation,
  CalendarCheck,
  CheckCircle2,
  Compass
} from 'lucide-react';

export default function LocationContact() {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-12 md:mb-16">
          <span className="text-xs font-semibold tracking-widest text-[#B58548] uppercase block mb-2">
            Contacto Directo & Salón de Ventas
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#1B1917] tracking-tight mb-4">
            Estamos en Mar del Plata para asesorarte.
          </h2>
          <p className="text-base text-[#57534E] leading-relaxed">
            Podés escribirnos por WhatsApp para consultar medidas, stock y presupuestos personalizados, o pasar directamente por nuestro salón de ventas en Av. Pedro Luro.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Card: Direct WhatsApp & Call (7 cols on lg) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-[#EAE4DC] shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#25D366]/12 text-[#128C7E] text-xs font-bold tracking-wide">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
                  Atención Inmediata por WhatsApp
                </span>
                <span className="text-xs text-[#78716C] font-medium">Respuesta rápida en el día</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1B1917] mb-4">
                ¿Querés consultar por un mueble o presupuesto a medida?
              </h3>

              <p className="text-sm text-[#57534E] leading-relaxed mb-8">
                Escribinos directo. Te enviamos fotos adicionales, videos en vivo desde el showroom de las vetas reales, disponibilidad de stock para retiro o tiempos de entrega para fabricación personalizada.
              </p>

              {/* Contact actions */}
              <div className="space-y-4 mb-8">
                <a
                  href={brandConfig.getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#25D366] hover:bg-[#20BD5A] text-white transition-all shadow-md hover:shadow-xl hover:shadow-[#25D366]/25 active:scale-99"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-6 h-6 fill-current" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm sm:text-base font-bold">Escribir por WhatsApp</p>
                      <p className="text-xs text-white/90">{brandConfig.contact.whatsappDisplay}</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider bg-white/25 px-4 py-2 rounded-xl backdrop-blur-xs">
                    Chatear ahora
                  </span>
                </a>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <a
                    href={`tel:${brandConfig.contact.phone.replace(/[^0-9]/g, '')}`}
                    className="flex items-center gap-3 p-4 rounded-2xl border border-[#EAE4DC] hover:border-[#DEC195] bg-[#FAF8F5] hover:bg-white transition-all shadow-2xs hover:shadow-xs"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#DEC195]/40 flex items-center justify-center shrink-0 text-[#B58548]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1B1917]">Llamada Telefónica</p>
                      <p className="text-xs text-[#78716C]">{brandConfig.contact.phone}</p>
                    </div>
                  </a>

                  <a
                    href={`tel:${brandConfig.contact.phoneAlternative.replace(/[^0-9]/g, '')}`}
                    className="flex items-center gap-3 p-4 rounded-2xl border border-[#EAE4DC] hover:border-[#DEC195] bg-[#FAF8F5] hover:bg-white transition-all shadow-2xs hover:shadow-xs"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#DEC195]/40 flex items-center justify-center shrink-0 text-[#B58548]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1B1917]">Teléfono Secundario</p>
                      <p className="text-xs text-[#78716C]">{brandConfig.contact.phoneAlternative}</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#F4EFEA] text-xs text-[#78716C] flex flex-wrap items-center justify-between gap-3">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#B58548]" />
                Showroom y carpintería en Mar del Plata
              </span>
              <span className="text-[#A8A29E]">Fletes y envíos coordinados en la Costa Atlántica</span>
            </div>
          </div>

          {/* Right Card: Location, Address & Hours (5 cols on lg) */}
          <div className="lg:col-span-5 bg-[#F4EFEA] rounded-3xl p-6 sm:p-8 md:p-9 border border-[#EAE4DC] shadow-sm flex flex-col justify-between text-left">
            <div className="space-y-6">
              
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#B58548] block mb-2">
                  Ubicación Showroom
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1B1917] flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-[#B58548] shrink-0" />
                  <span>{brandConfig.location.address}</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] mt-1.5 pl-8 font-medium">
                  {brandConfig.location.postalCode} {brandConfig.location.city}, {brandConfig.location.province}
                </p>
                <p className="text-xs text-[#78716C] mt-0.5 pl-8">
                  {brandConfig.location.crossStreets}
                </p>
              </div>

              {/* Hours Card */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#EAE4DC] shadow-2xs space-y-3.5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1B1917]">
                  <Clock className="w-4 h-4 text-[#B58548]" />
                  <span>Horarios de Atención al Público</span>
                </div>
                
                <div className="space-y-2 text-xs text-[#57534E]">
                  <div className="flex justify-between py-1.5 border-b border-[#FAF8F5]">
                    <span className="font-medium text-[#1B1917]">Lunes a Viernes</span>
                    <span className="text-[#78716C] font-semibold">10:00 a 14:00 y 15:00 a 18:00 hs</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#FAF8F5]">
                    <span className="font-medium text-[#1B1917]">Sábados</span>
                    <span className="text-[#78716C] font-semibold">09:00 a 13:00 hs</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="font-medium text-[#1B1917]">Domingos</span>
                    <span className="text-[#78716C]">Cerrado</span>
                  </div>
                </div>
              </div>

              {/* Map CTA */}
              <div>
                <a
                  href={brandConfig.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-[#1B1917] hover:bg-[#B58548] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-sm hover:shadow-md cursor-pointer"
                >
                  <Navigation className="w-4 h-4 text-[#DEC195]" />
                  <span>Abrir ubicación en Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60 ml-1" />
                </a>
              </div>

            </div>

            {/* Note on parking / access */}
            <div className="mt-6 pt-4 border-t border-[#EAE4DC] text-xs text-[#78716C]">
              Estacionamiento ágil y cómodo sobre la avenida. Pasá a conocer el salón cuando gustes.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
