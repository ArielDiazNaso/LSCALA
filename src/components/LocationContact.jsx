import React from 'react';
import { brandConfig } from '../data/brandConfig';
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  ExternalLink,
  Navigation,
  CalendarCheck
} from 'lucide-react';

export default function LocationContact() {
  return (
    <section id="contacto" className="py-16 md:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-12">
          <span className="text-xs font-semibold tracking-widest text-[#B58548] uppercase block mb-2">
            Contacto & Showroom
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#1B1917] tracking-tight mb-4">
            Estamos en Mar del Plata para asesorarte.
          </h2>
          <p className="text-base text-[#57534E] leading-relaxed">
            Podés escribirnos por WhatsApp para consultar medidas, stock y presupuestos, o pasar directamente por nuestro salón de ventas en Av. Pedro Luro.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Card: Direct WhatsApp & Call (7 cols on lg) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-[#EAE4DC] shadow-sm flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25D366]/10 text-[#128C7E] text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  Atención Inmediata
                </span>
                <span className="text-xs text-[#78716C]">Respuesta rápida en el día</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1B1917] mb-4">
                ¿Querés consultar por un mueble o presupuesto a medida?
              </h3>

              <p className="text-sm text-[#57534E] leading-relaxed mb-8">
                Escribinos por WhatsApp. Te enviamos fotos adicionales, videos desde el showroom, disponibilidad inmediata y tiempos de fabricación si lo querés en medidas especiales.
              </p>

              {/* Contact actions */}
              <div className="space-y-3.5 mb-8">
                <a
                  href={brandConfig.getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-[#25D366] hover:bg-[#20BD5A] text-white transition-all shadow-md hover:shadow-lg active:scale-99"
                >
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-6 h-6 fill-current" />
                    <div className="text-left">
                      <p className="text-sm font-bold">Escribir por WhatsApp</p>
                      <p className="text-xs text-white/90">{brandConfig.contact.whatsappDisplay}</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider bg-white/20 px-3 py-1.5 rounded-lg">
                    Chatear ahora
                  </span>
                </a>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={`tel:${brandConfig.contact.phone.replace(/[^0-9]/g, '')}`}
                    className="flex items-center gap-3 p-3.5 rounded-xl border border-[#EAE4DC] hover:border-[#DEC195] bg-[#FAF8F5] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#B58548] shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-[#1B1917]">Llamada Telefónica</p>
                      <p className="text-xs text-[#78716C]">{brandConfig.contact.phone}</p>
                    </div>
                  </a>

                  <a
                    href={`tel:${brandConfig.contact.phoneAlternative.replace(/[^0-9]/g, '')}`}
                    className="flex items-center gap-3 p-3.5 rounded-xl border border-[#EAE4DC] hover:border-[#DEC195] bg-[#FAF8F5] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#B58548] shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-[#1B1917]">Teléfono Alternativo</p>
                      <p className="text-xs text-[#78716C]">{brandConfig.contact.phoneAlternative}</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#F4EFEA] text-xs text-[#78716C] flex flex-wrap items-center justify-between gap-2">
              <span>Fabricación & Showroom propio · Mar del Plata</span>
              <span>Envíos coordinados en la ciudad y zona de la costa</span>
            </div>
          </div>

          {/* Right Card: Location, Address & Hours (5 cols on lg) */}
          <div className="lg:col-span-5 bg-[#F4EFEA] rounded-3xl p-6 sm:p-8 border border-[#EAE4DC] flex flex-col justify-between text-left">
            <div className="space-y-6">
              
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#B58548] block mb-2">
                  Ubicación Showroom
                </span>
                <h3 className="font-serif text-2xl font-semibold text-[#1B1917] flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#B58548]" />
                  <span>{brandConfig.location.address}</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] mt-1">
                  {brandConfig.location.city}
                </p>
              </div>

              {/* Hours Card */}
              <div className="bg-white p-5 rounded-2xl border border-[#EAE4DC] space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1B1917]">
                  <Clock className="w-4 h-4 text-[#B58548]" />
                  <span>Horarios de Atención</span>
                </div>
                
                <div className="space-y-2 text-xs text-[#57534E]">
                  <div className="flex justify-between py-1 border-b border-[#FAF8F5]">
                    <span className="font-medium text-[#1B1917]">Lunes a Viernes</span>
                    <span className="text-[#78716C]">10:00 a 14:00 y 15:00 a 18:00 hs</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#FAF8F5]">
                    <span className="font-medium text-[#1B1917]">Sábados</span>
                    <span className="text-[#78716C]">09:00 a 13:00 hs</span>
                  </div>
                  <div className="flex justify-between py-1">
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
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1B1917] hover:bg-[#B58548] text-white text-xs font-semibold tracking-wider uppercase transition-colors"
                >
                  <Navigation className="w-4 h-4 text-[#DEC195]" />
                  <span>Abrir ubicación en Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>

            </div>

            {/* Note on parking / access */}
            <div className="mt-6 pt-4 border-t border-[#EAE4DC] text-[11px] text-[#78716C]">
              Fácil estacionamiento en la zona. Te esperamos con gusto para asesorarte personalmente.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
