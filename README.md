# Lscala Muebles · Showroom Digital (Mar del Plata)

Sitio web oficial y showroom digital de **Lscala Muebles** (Av. Pedro Luro 3902, Mar del Plata, Argentina). Diseñado con enfoque **mobile-first**, estética editorial de alta gama y optimizado para la conversión directa hacia **WhatsApp**.

---

## 🎯 Objetivo de Negocio y Experiencia

El sitio opera como un **showroom digital / catálogo interactivo de pre-calificación**. En lugar de un carrito de compras tradicional, la experiencia guía al cliente hacia la conversación humana de venta:

**Instagram / Búsqueda Local → Showroom Web → Descubrir Muebles → Ver Detalles & Medidas → WhatsApp con Asesor**

- Cada ficha de producto genera un enlace directo a WhatsApp con mensaje pre-cargado personalizado según el modelo.
- Foco absoluto en la **fotografía real** de las piezas exhibidas en el showroom de Mar del Plata.
- Sección dedicada de **Fabricación a Medida** para clientes con planos o proyectos especiales de arquitectura.

---

## 📸 Fotografías & Categorías Reales

Todos los productos utilizan las imágenes originales del showroom y taller:

1. **Mesas de Comedor**: Mesas escandinavas con base de caballete y ensamble de espiga pasante, mesas redondas con base en cruz y patas esculpidas, mesas familiares con travesaños.
2. **Sillas & Banquetas**: Sillones de comedor con apoyabrazos curvos (tapizados en lino y en madera maciza), sillas nórdicas y banquetas altas para islas de cocina.
3. **Cómodas & Vajilleros**: Vajilleros con puertas diamantadas en espiga, vajilleros con varillado curvo, cómodas de 8 cajones y chifoniers de 6 cajones con uñero.
4. **Mesas de Luz**: Mesas de noche con puertas abatibles volcables, modelos de 2 cajones con estante y estructuras arquitectónicas en U.
5. **Sillones & Divanes**: Diván cama macizo con carro cama inferior extraíble y sillón individual nórdico en lino.
6. **Cocinas a Medida**: Amoblamiento integral con bajomesada, torre de hornos, vitrinas con iluminación LED e islas desayunadoras.

---

## 🛠️ Stack Tecnológico

- **Framework**: React 19 + Vite 8
- **Estilos**: Tailwind CSS v4 (con paleta personalizada y tipografía editorial)
- **Tipografías**: *Cormorant Garamond* (títulos editoriales) + *Plus Jakarta Sans* (interfaz y lectura ágil)
- **Iconografía**: Lucide React
- **Rendimiento**: Carga diferida (`loading="lazy"`), compresión gzip optimizada y renderizado responsivo.

---

## ⚙️ Configuración y Personalización

Toda la información del negocio se administra de forma centralizada en dos archivos:

- **`src/data/brandConfig.js`**: Dirección, teléfonos, número de WhatsApp para wa.me, horarios de atención y generadores de mensajes pre-cargados.
- **`src/data/products.js`**: Lista de productos, categorías, descripciones, especificaciones y rutas de imágenes.

---

## 🚀 Comandos de Ejecución

Para iniciar el entorno de desarrollo local:
```bash
npm run dev
```

Para compilar la versión de producción optimizada:
```bash
npm run build
```

Para previsualizar la compilación:
```bash
npm run preview
```
