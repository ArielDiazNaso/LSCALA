/**
 * Configuración central de marca e información de contacto verificada de Lscala Muebles
 * Ciudad: Mar del Plata, Argentina
 */

export const brandConfig = {
  name: "Lscala Muebles",
  legalName: "L'Scala Muebles",
  tagline: "Muebles de madera maciza & diseño contemporáneo",
  location: {
    city: "Mar del Plata, Argentina",
    postalCode: "B7600",
    address: "Av. Pedro Luro 3902",
    fullAddress: "Av. Pedro Luro 3902, B7600 Mar del Plata, Provincia de Buenos Aires",
    crossStreets: "Esq. Jujuy / San Juan",
    province: "Provincia de Buenos Aires",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Av.+Pedro+Luro+3902,+B7600+Mar+del+Plata,+Provincia+de+Buenos+Aires"
  },
  contact: {
    phone: "(0223) 536-7385",
    phoneAlternative: "(0223) 475-2733",
    whatsappNumber: "5492235367385", // Formato internacional para wa.me sin signos
    whatsappDisplay: "+54 9 223 536-7385"
  },
  schedule: {
    weekdays: "Lunes a Viernes: 10:00 a 14:00 y 15:00 a 18:00 hs",
    saturdays: "Sábados: 09:00 a 13:00 hs",
    sundays: "Domingos: Cerrado"
  },
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com/lscalamuebles"
  },
  
  // Generador de enlaces de WhatsApp con mensajes preformateados en español argentino
  getWhatsAppLink(customMessage) {
    const text = customMessage || "Hola! Estoy viendo la web de Lscala Muebles y quería hacerles una consulta.";
    return `https://wa.me/${this.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
  },

  getProductWhatsAppLink(productName, productCategory) {
    const text = `Hola, vi el ${productName} (${productCategory}) en la web de Lscala y quería consultar medidas, disponibilidad y tiempo de entrega.`;
    return `https://wa.me/${this.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
  },

  getCustomFurnitureWhatsAppLink() {
    const text = "Hola Lscala Muebles, tengo un proyecto / idea para hacer un mueble a medida y quería consultarles presupuesto y asesoramiento.";
    return `https://wa.me/${this.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
  },

  getShowroomVisitWhatsAppLink() {
    const text = "Hola! Quería consultar para pasar a visitar el showroom en Av. Pedro Luro 3902.";
    return `https://wa.me/${this.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
  }
};
