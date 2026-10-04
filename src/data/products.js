/**
 * Catálogo del Showroom Digital de Lscala Muebles
 * Fotografías reales capturadas directamente en el showroom y taller de Mar del Plata
 */

export const categories = [
  { id: 'todos', name: 'Todo el Showroom', count: 18 },
  { id: 'mesas', name: 'Mesas', count: 5, icon: 'Table' },
  { id: 'sillas', name: 'Sillas & Banquetas', count: 6, icon: 'Armchair' },
  { id: 'guardado', name: 'Cómodas & Vajilleros', count: 5, icon: 'Cabinet' },
  { id: 'mesasdeluz', name: 'Mesas de Luz', count: 4, icon: 'Lamp' },
  { id: 'sillones', name: 'Sillones & Divanes', count: 2, icon: 'Sofa' },
  { id: 'cocinas', name: 'Cocinas a Medida', count: 1, icon: 'CookingPot' },
];

export const products = [
  // --- MESAS ---
  {
    id: 'mesa-caballete-espiga',
    name: 'Mesa Comedor Escandinava con Base Caballete',
    category: 'mesas',
    categoryLabel: 'Mesas de Comedor',
    room: 'Comedor',
    featured: true,
    badge: 'Destacado Showroom',
    images: ['/images/mesas1.jpg', '/images/mesas7.jpg'],
    shortDescription: 'Mesa de comedor en madera maciza seleccionada con pata inclinada y ensamble tradicional visto.',
    fullDescription: 'Pieza protagónica de nuestro showroom. Construida íntegramente en madera maciza con terminación al natural suave al tacto. Se destaca por su estructura de caballete en ángulo con ensamble visible de espiga pasante y cuña de fijación, una técnica de carpintería tradicional que garantiza estabilidad absoluta de por vida.',
    details: [
      'Madera maciza seleccionada con lustre natural satinado',
      'Ensamble de espiga pasante y cuña a la vista',
      'Estructura de patas en ángulo tipo caballete',
      'Disponible en medidas estándar y fabricable a medida',
      'Ideal para 6 a 10 comensales'
    ],
    dimensionsNote: 'Consultá por largo y ancho según las medidas de tu ambiente.'
  },
  {
    id: 'mesa-redonda-nordica-cruz',
    name: 'Mesa Redonda Nórdica con Base en Cruz',
    category: 'mesas',
    categoryLabel: 'Mesas de Comedor',
    room: 'Comedor',
    featured: true,
    badge: 'Línea Nórdica',
    images: ['/images/mesas2.jpg'],
    shortDescription: 'Mesa circular de madera maciza con base central en cruz para optimizar la comodidad de las sillas.',
    fullDescription: 'Diseñada para propiciar el encuentro y la conversación fluida. Su tapa circular en madera maciza luce un biselado perimetral suave y descansa sobre una robusta base cruciforme central que permite acomodar las sillas sin que las patas interfieran.',
    details: [
      'Tapa circular maciza con veta continuada',
      'Base central en cruz de alta estabilidad',
      'Borde con suave terminación biselada',
      'Capacidad sugerida: 4 a 6 personas cómodas',
      'Protección hidrorrepelente para uso diario'
    ],
    dimensionsNote: 'Diámetro personalizable según tu espacio disponible.'
  },
  {
    id: 'mesa-rectangular-travesano',
    name: 'Mesa Rectangular Robusta con Travesaño',
    category: 'mesas',
    categoryLabel: 'Mesas de Comedor',
    room: 'Comedor',
    featured: false,
    badge: 'Madera Maciza',
    images: ['/images/mesas3.jpg', '/images/mesas4.jpg'],
    shortDescription: 'Gran mesa de comedor familiar con viga de unión inferior y patas robustas en madera maciza.',
    fullDescription: 'Una mesa pensada para ser el corazón del hogar. Su diseño clásico renovado combina robustez estructural con una calidez inconfundible. Incluye un travesaño longitudinal inferior que refuerza el conjunto y aporta personalidad estética.',
    details: [
      'Construcción pesada en madera maciza de primera calidad',
      'Travesaño central inferior para máxima rigidez',
      'Tapa de generoso espesor con cantos trabajados',
      'Excelente comportamiento para uso familiar intenso',
      'Se puede combinar con sillas o bancos corridos'
    ],
    dimensionsNote: 'Consultar opciones de largo (desde 1.60m hasta 2.60m).'
  },
  {
    id: 'mesa-base-trapezoidal',
    name: 'Mesa de Comedor con Base Trapezoidal',
    category: 'mesas',
    categoryLabel: 'Mesas de Comedor',
    room: 'Comedor',
    featured: false,
    badge: 'Diseño de Autor',
    images: ['/images/mesas5.jpg'],
    shortDescription: 'Mesa escultórica con patas trapezoidales caladas en madera maciza y viga de ensamble.',
    fullDescription: 'Fusión de geometría contemporánea y calidez artesanal. Los laterales de apoyo presentan un pórtico trapezoidal con uniones a 45 grados y un travesaño que articula ambas piezas generando una presencia imponente en cualquier comedor.',
    details: [
      'Bases trapezoidales con diseño geométrico calado',
      'Madera maciza lustrada con protección poliuretánica mate',
      'Generosa superficie útil de apoyo',
      'Estructura que no entorpece las cabeceras de la mesa'
    ],
    dimensionsNote: 'Hecha a pedido en el taller de Mar del Plata.'
  },
  {
    id: 'mesa-redonda-organica',
    name: 'Mesa Redonda Orgánica con Patas Esculpidas',
    category: 'mesas',
    categoryLabel: 'Mesas de Comedor',
    room: 'Comedor',
    featured: false,
    badge: 'Línea Orgánica',
    images: ['/images/mesas6.jpg'],
    shortDescription: 'Mesa circular de perfil orgánico con patas suavemente cónicas unidas en arco.',
    fullDescription: 'Un diseño sutil y liviano visualmente pero de gran solidez física. Las patas cónicas ascienden curvándose para abrazar la base de la tapa redonda, creando una silueta armónica de inspiración mid-century escandinava.',
    details: [
      'Borde perimetral redondeado suave al contacto',
      'Patas estilizadas torneadas con unión en arco',
      'Ideal para departamentos y comedores modernos',
      'Acabado sedoso al tacto'
    ],
    dimensionsNote: 'Consultar diámetros disponibles.'
  },

  // --- SILLAS Y BANQUETAS ---
  {
    id: 'sillon-comedor-curvo-lino',
    name: 'Sillón de Comedor Curvo (Tapizado en Lino)',
    category: 'sillas',
    categoryLabel: 'Sillas & Sillones de Comedor',
    room: 'Comedor',
    featured: true,
    badge: 'Más Elegido',
    images: ['/images/sillas5.jpg', '/images/sillas6.jpg'],
    shortDescription: 'Sillón ergonómico con apoyabrazos continuos en madera maciza curvada y asiento en lino natural.',
    fullDescription: 'El balance perfecto entre una silla de comedor y un sillón envolvente. Sus apoyabrazos forman una línea continua que abraza la espalda ofreciendo una postura relajada durante sobremesas prolongadas. El asiento está relleno con espuma de alta densidad y tapizado en lino texturado neutro antimanchas.',
    details: [
      'Estructura integral en madera maciza con curvas pulidas a mano',
      'Asiento mullido tapizado en lino de textura rústica elegante',
      'Apoyabrazos continuos que calzan debajo de la mayoría de las mesas',
      'Regatones protectores para el piso'
    ],
    dimensionsNote: 'Tapizados disponibles en tonos crudo, lino piedra y gris cálido.'
  },
  {
    id: 'silla-comedor-curva-maciza',
    name: 'Silla de Comedor Curva Maciza (100% Madera)',
    category: 'sillas',
    categoryLabel: 'Sillas de Comedor',
    room: 'Comedor',
    featured: false,
    badge: '100% Madera',
    images: ['/images/sillas3.jpg', '/images/sillas6.jpg'],
    shortDescription: 'Versión artesanal con asiento anatómico íntegramente de madera maciza y respaldo curvo.',
    fullDescription: 'Para quienes priorizan la pureza y nobleza de la madera sin tapizados textiles. Cada asiento es rebajado anatómicamente para una comodidad sorprendente y luce la riqueza de las vetas naturales.',
    details: [
      'Madera maciza de principio a fin, fácil limpieza y mantenimiento',
      'Asiento conformado con curvatura anatómica',
      'Respaldo de madera maciza curvada al vapor',
      'Estructura de caja y espiga encolada y prensada'
    ],
    dimensionsNote: 'Disponibles por unidad o en juego de 4, 6 y 8 sillas.'
  },
  {
    id: 'banqueta-alta-barra',
    name: 'Banqueta Alta de Barra con Apoyabrazos',
    category: 'sillas',
    categoryLabel: 'Banquetas de Barra',
    room: 'Cocina',
    featured: true,
    badge: 'Lanzamiento Showroom',
    images: ['/images/banquetas.jpg'],
    shortDescription: 'Banqueta alta de madera maciza para barras e islas de cocina, con respaldo y apoyapiés.',
    fullDescription: 'Nuestra propuesta para islas de cocina y barras desayunadoras. Combina la comodidad de un sillón con la altura perfecta para compartir una copa o un desayuno. Incluye travesaños apoyapiés a doble altura para máximo confort.',
    details: [
      'Altura ideal para barras e islas de cocina estándar',
      'Respaldo y apoyabrazos envolventes para descanso prolongado',
      'Asiento de madera maciza con leve forma cóncava',
      'Apoyapiés frontal y laterales reforzados'
    ],
    dimensionsNote: 'Altura de asiento adaptable a la medida de tu mesada o barra.'
  },
  {
    id: 'sillon-cabecero-clasico',
    name: 'Sillón Cabecero de Comedor con Tarugos Vistos',
    category: 'sillas',
    categoryLabel: 'Sillas Cabeceras',
    room: 'Comedor',
    featured: false,
    badge: 'Detalle Artesanal',
    images: ['/images/sillas1.jpg'],
    shortDescription: 'Silla con apoyabrazos, respaldo de madera con ensambles en tarugos vistos y asiento acolchado.',
    fullDescription: 'Diseñada para presidir cabeceras de comedor o para escritorios. Su construcción resalta la mano de obra del artesano con tarugos de madera visibles en las uniones que enfatizan la nobleza del trabajo a mano.',
    details: [
      'Tarugos y ensambles visibles de estilo carpintero tradicional',
      'Respaldo alto con suave inclinación ergonómica',
      'Asiento acolchado tapizado en tela gris jaspeada',
      'Apoyabrazos rectos trabajados a escuadra'
    ],
    dimensionsNote: 'Consultanos por juegos completos con sillas sin brazos a tono.'
  },
  {
    id: 'silla-nordica-respaldo-curvo',
    name: 'Silla Nórdica Respaldo Curvo',
    category: 'sillas',
    categoryLabel: 'Sillas de Comedor',
    room: 'Comedor',
    featured: false,
    badge: 'Línea Nórdica',
    images: ['/images/sillas2.jpg'],
    shortDescription: 'Silla ligera de líneas limpias, patas cónicas y asiento tapizado en tono gris azulado.',
    fullDescription: 'Una opción esbelta y moderna que aporta luminosidad y frescura al comedor. Sus proporciones livianas no saturan los ambientes y su asiento acolchado ofrece excelente soporte.',
    details: [
      'Patas estilizadas de sección cónica en madera maciza',
      'Respaldo curvo de bajo perfil visual',
      'Tapizado con textura cálida y agradable al tacto',
      'Estructura sólida y muy liviana para mover'
    ],
    dimensionsNote: 'Disponible en juego con nuestras mesas redondas y rectangulares.'
  },
  {
    id: 'silla-respaldo-arco',
    name: 'Silla Respaldo Arco de Madera Maciza',
    category: 'sillas',
    categoryLabel: 'Sillas de Comedor',
    room: 'Comedor',
    featured: false,
    badge: 'Tradición',
    images: ['/images/sillas4.jpg'],
    shortDescription: 'Silla tradicional de comedor con copete superior en arco y asiento macizo lustrado.',
    fullDescription: 'Un diseño sobrio y atemporal que rinde tributo a la mueblería argentina de maderas nobles. Su respaldo arqueado abraza la espalda y el asiento macizo resalta contrastes de tonos y vetas.',
    details: [
      'Copete superior curvado en madera maciza',
      'Asiento lustrado con laca de alta resistencia',
      'Refuerzos en H en patas inferiores',
      'Alta durabilidad comprobada'
    ],
    dimensionsNote: 'Consultar terminaciones y lustre.'
  },

  // --- CÓMODAS Y VAJILLEROS ---
  {
    id: 'vajillero-puertas-espiga',
    name: 'Vajillero Aparador con Puertas en Espiga Diamantada',
    category: 'guardado',
    categoryLabel: 'Vajilleros & Aparadores',
    room: 'Living',
    featured: true,
    badge: 'Pieza de Autor',
    images: ['/images/comodas1.jpg'],
    shortDescription: 'Aparador de 4 puertas con marquetería de vetas diagonales en diamante y nicho superior abierto.',
    fullDescription: 'Una de las piezas más admiradas de nuestra galería. Las cuatro puertas frontales forman un patrón geométrico en diamante que juega con el reflejo de la luz sobre las fibras de la madera. En la parte superior cuenta con un nicho pasante ideal para bandejas, consolas o libros de arte.',
    details: [
      'Frentes de puertas con trabajo de vetas cruzadas en diamante',
      'Nicho superior pasante abierto para decoración y multimedia',
      'Tiradores cilíndricos verticales en madera maciza',
      'Espacio interior compartimentado con estantes regulables',
      'Patas elevadas que facilitan la limpieza del piso'
    ],
    dimensionsNote: 'Gran porte (aprox 1.80m a 2.00m de largo). Consultanos por fabricación en medidas personalizadas.'
  },
  {
    id: 'vajillero-varillado-curvo',
    name: 'Vajillero Cómoda con Laterales en Varillado Curvo',
    category: 'guardado',
    categoryLabel: 'Vajilleros & Aparadores',
    room: 'Living',
    featured: true,
    badge: 'Tendencia',
    images: ['/images/comodas2.jpg'],
    shortDescription: 'Mueble bajo con esquinas curvas en varillado artesanal, cajoneras y puerta corrediza central.',
    fullDescription: 'La sofisticación del varillado curvo llevada al mueble de living y comedor. Sus esquinas redondeadas suavizan la circulación en el ambiente, mientras que la combinación de cajones y puerta central deslizante ofrece guardado versátil y silencioso.',
    details: [
      'Laterales redondeados con detalle de varillado macizo individual',
      'Puerta central corrediza sobre guía embutida suave',
      'Cajoneras laterales con guías telescópicas reforzadas',
      'Tapa maciza con borde suavizado',
      'Tiradores integrados en la misma madera'
    ],
    dimensionsNote: 'Fabricable a pedido en el largo adecuado para tu pared de living o TV.'
  },
  {
    id: 'comoda-8-cajones',
    name: 'Cómoda Doble Frente de 8 Cajones',
    category: 'guardado',
    categoryLabel: 'Cómodas de Dormitorio',
    room: 'Dormitorio',
    featured: false,
    badge: 'Gran Capacidad',
    images: ['/images/comodas3.jpg'],
    shortDescription: 'Cómoda principal de dormitorio con 8 amplios cajones y tiradores lineales de madera.',
    fullDescription: 'Espacio de guardado superior sin sacrificar diseño. Distribución de 4 niveles dobles que permiten organizar ropa blanca, prendas personales y accesorios. Frentes de cajones limpios con tiradores horizontales de madera maciza.',
    details: [
      '8 cajones profundos con correderas telescópicas',
      'Interiores de cajones pulidos y protegidos',
      'Tiradores lineales de madera maciza empotrados',
      'Estructura perimetral maciza de gran estabilidad'
    ],
    dimensionsNote: 'Disponible en medidas estándar para dormitorios principales.'
  },
  {
    id: 'chifonier-6-cajones',
    name: 'Chifonier Vertical de 6 Cajones con Uñero Biselado',
    category: 'guardado',
    categoryLabel: 'Chifoniers',
    room: 'Dormitorio',
    featured: false,
    badge: 'Ahorro de Espacio',
    images: ['/images/comodas4.jpg'],
    shortDescription: 'Mueble vertical esbelto de 6 cajones, perfecto para optimizar espacio en dormitorios.',
    fullDescription: 'Ideal para ambientes donde los metros cuadrados cuentan. Su formato en torre aprovecha la altura sin recargar el paso. Cada frente de cajón cuenta con un uñero biselado continuo para una apertura limpia sin herrajes sobresalientes.',
    details: [
      '6 cajones verticales con uñero de apertura integrado',
      'Huella en piso reducida con gran capacidad vertical',
      'Tapa superior ideal para apoyar luminarias o plantas',
      'Patas estilizadas que despejan el zócalo'
    ],
    dimensionsNote: 'Excelente para departamentos y esquinas de dormitorio.'
  },
  {
    id: 'comoda-baja-3-cajones',
    name: 'Cómoda Baja de 3 Cajones / Mueble Auxiliar',
    category: 'guardado',
    categoryLabel: 'Cómodas Bajas',
    room: 'Living',
    featured: false,
    badge: 'Versátil',
    images: ['/images/comodas5.jpg'],
    shortDescription: 'Mueble auxiliar compacto con 3 cajones profundos y ensamble de carpintero a la vista.',
    fullDescription: 'Pieza multifunción que se adapta como recibidor, mesa de arrime en el living o cajonera auxiliar de dormitorio. Su terminación deja apreciar los ensambles artesanales de las esquinas y la veta continua de la madera maciza.',
    details: [
      '3 cajones anchos de apertura suave',
      'Tiradores rectangulares aplicados en madera maciza',
      'Ensamble de unión en inglete y refuerzos internos',
      'Altura perfecta como mueble de apoyo o recibidor'
    ],
    dimensionsNote: 'Consultanos por medidas especiales para pasillos o halls.'
  },

  // --- MESAS DE LUZ ---
  {
    id: 'mesa-de-luz-puerta-abatible',
    name: 'Mesa de Luz Nórdica con Nicho y Puerta Abatible',
    category: 'mesasdeluz',
    categoryLabel: 'Mesas de Luz',
    room: 'Dormitorio',
    featured: true,
    badge: 'Diseño Funcional',
    images: ['/images/mesadeluz2.jpg', '/images/mesadeluz3.jpg'],
    shortDescription: 'Mesa de noche con hornacina abierta y compuerta volcable hacia abajo con bisagras reforzadas.',
    fullDescription: 'Una reinterpretación moderna de la clásica mesa de noche. Combina un nicho superior accesible para dejar el celular, libros o anteojos, con un generoso compartimento inferior oculto tras una puerta volcable con bisagras metálicas tipo retén.',
    details: [
      'Nicho superior pasante accesible desde la cama',
      'Puerta volcable abatible hacia abajo con bisagras reforzadas',
      'Patas esbeltas de sección cuadrada en madera maciza',
      'Tapa superior con suave reborde perimetral',
      'Terminación mate al tacto'
    ],
    dimensionsNote: 'Se fabrica por unidad o en pares simétricos para sommier.'
  },
  {
    id: 'mesa-de-luz-2-cajones-estante',
    name: 'Mesa de Luz con 2 Cajones Flotantes y Estante',
    category: 'mesasdeluz',
    categoryLabel: 'Mesas de Luz',
    room: 'Dormitorio',
    featured: false,
    badge: 'Doble Cajón',
    images: ['/images/mesadeluz1.jpg'],
    shortDescription: 'Mesa de luz con 2 cajones con uñero rehundido y estante inferior de apoyo en madera maciza.',
    fullDescription: 'Elegancia clásica y funcionalidad total. Sus dos cajones frontales permiten guardar todo fuera de la vista manteniendo la superficie despejada. El estante inferior añade un plano extra de apoyo para canastos o mantas.',
    details: [
      '2 cajones con frente rehundido y uñero ergonómico',
      'Estante bajo macizo de alta resistencia',
      'Tapa superior moldurada',
      'Robusta estructura en madera seleccionada'
    ],
    dimensionsNote: 'Medidas proporcionadas para sommiers estándar de 50 a 70 cm de alto.'
  },
  {
    id: 'mesa-de-luz-portico-u',
    name: 'Mesa de Luz Estructura Pórtico en U',
    category: 'mesasdeluz',
    categoryLabel: 'Mesas de Luz',
    room: 'Dormitorio',
    featured: false,
    badge: 'Línea Arquitectónica',
    images: ['/images/mesadeluz4.jpg'],
    shortDescription: 'Diseño arquitectónico con patas continuas en U, estante intermedio y cajón suspendido.',
    fullDescription: 'Líneas puras y geometría equilibrada. Los laterales forman un pórtico rectangular continuo en madera maciza que enmarca el cuerpo suspendido con un cajón y nicho abierto.',
    details: [
      'Estructura de pórtico continuo en madera maciza',
      'Cajón central suspendido con corredera suave',
      'Doble nivel de apoyo libre',
      'Estilo nórdico contemporáneo'
    ],
    dimensionsNote: 'Consultá por terminación en diferentes lustres.'
  },
  {
    id: 'mesa-de-luz-compacta-2-cajones',
    name: 'Mesa de Luz Compacta 2 Cajones',
    category: 'mesasdeluz',
    categoryLabel: 'Mesas de Luz',
    room: 'Dormitorio',
    featured: false,
    badge: 'Compacta',
    images: ['/images/mesadeluz5.jpg'],
    shortDescription: 'Mesa de noche de proporciones contenidas con 2 cajones al frente y patas cuadradas.',
    fullDescription: 'La solución perfecta cuando el espacio junto al respaldo es acotado. Mantiene toda la calidad constructiva en un volumen compacto que no entorpece el paso.',
    details: [
      'Formato angosto ideal para espacios reducidos',
      '2 cajones con frente biselado',
      'Patas cuadradas continuas a escuadra',
      'Superficie tratada con hidrolaca protectora'
    ],
    dimensionsNote: 'Ideal para dormitorios de visitas o cuartos de medidas compactas.'
  },

  // --- SILLONES Y DIVANES ---
  {
    id: 'divan-cama-macizo-carro',
    name: 'Diván Cama Macizo con Carro Cama Extraíble',
    category: 'sillones',
    categoryLabel: 'Sillones & Divanes',
    room: 'Living',
    featured: true,
    badge: '2 en 1 Funcional',
    images: ['/images/sillones1.jpg'],
    shortDescription: 'Diván sillón para living o huéspedes con respaldo macizo, almohadones y cama inferior con rueditas.',
    fullDescription: 'Un clásico indispensable resuelto con la solidez de la madera maciza. Durante el día funciona como un generoso sillón de estar o lectura, y de noche se transforma en dos plazas independientes gracias a su carro cama inferior deslizante.',
    details: [
      'Estructura maciza indeformable con respaldo y laterales de madera',
      'Carro cama inferior independiente con ruedas de suave deslizamiento',
      'Incluye almohadones acolchados en color crudo / lino natural',
      'Apto colchón estándar de 1 plaza (80 x 190 cm)'
    ],
    dimensionsNote: 'Consultar por opciones de tapizados y complementos de living.'
  },
  {
    id: 'sillon-nordico-madera-lino',
    name: 'Sillón Individual Nórdico en Madera y Lino',
    category: 'sillones',
    categoryLabel: 'Sillones de 1 Cuerpo',
    room: 'Living',
    featured: false,
    badge: 'Confort Nórdico',
    images: ['/images/sillones2.jpg'],
    shortDescription: 'Sillón de 1 cuerpo con estructura vista en madera maciza pulida y tapicería desenfundable en lino.',
    fullDescription: 'Pensado como pieza de acento en el living, sala de lectura o dormitorio. Sus apoyabrazos de generosa superficie y ángulo de inclinación ergonómico invitan al descanso. Los almohadones son reversibles y desenfundables para fácil lavado.',
    details: [
      'Madera maciza pulida y encerada con aristas redondeadas',
      'Almohadones de asiento y respaldo en placa de alta resiliencia',
      'Tapizado en tela lino de trama gruesa color piedra',
      'Fácil desenfundado para limpieza'
    ],
    dimensionsNote: 'Disponible en juego con mesas bajas de centro y arrime.'
  },

  // --- COCINAS A MEDIDA ---
  {
    id: 'cocina-integral-madera-isla',
    name: 'Amoblamiento Integral de Cocina e Isla a Medida',
    category: 'cocinas',
    categoryLabel: 'Cocinas & Muebles a Medida',
    room: 'Cocina',
    featured: true,
    badge: 'Proyecto a Medida',
    images: ['/images/cocina1.jpg', '/images/cocina2.jpg'],
    shortDescription: 'Proyecto integral de bajo mesada, torre de horno, isla desayunadora y alacenas con vitrinas LED.',
    fullDescription: 'Exhibido en nuestro showroom de Mar del Plata como muestra de lo que nuestro taller puede desarrollar para tu hogar. Muebles de cocina diseñados a medida del plano, con bajo mesadas en madera maciza lustrada, torre embutida para horno y microondas, isla desayunadora con banquetas y alacenas superiores con frentes de vidrio e iluminación LED cálida integrada.',
    details: [
      'Diseño personalizado sobre plano de arquitectura o relevamiento en obra',
      'Bajo mesadas con cajones olleros y guías de cierre suave',
      'Torre de hornos y despensero a medida',
      'Vitrinas vidriadas con iluminación LED cálida oculta',
      'Isla desayunadora con banquetas a juego'
    ],
    dimensionsNote: 'Se presupuesta y cotiza según los metros lineales y requerimientos de cada cocina. Consultanos por WhatsApp con tus medidas.'
  }
];

export const showroomHighlights = [
  {
    title: 'Madera Maciza Auténtica',
    description: 'Trabajamos maderas nobles con vetas naturales vivas. Sin enchapados plásticos ni materiales que se degradan con el paso del tiempo.',
    icon: 'TreePine'
  },
  {
    title: 'Ensamble de Taller Tradicional',
    description: 'Cajas, espigas pasantes, cuñas y tarugos vistos. Técnicas que garantizan solidez estructural para que el mueble dure generaciones.',
    icon: 'Hammer'
  },
  {
    title: 'Fabricación a Medida',
    description: '¿Tu comedor pide 2.20m o tenés un espacio especial? Como fabricantes en Mar del Plata, adaptamos dimensiones y terminaciones a tu proyecto.',
    icon: 'Ruler'
  },
  {
    title: 'Atención Personalizada en WhatsApp',
    description: 'Hablás directamente con personas que conocen los muebles, el taller y el stock real. Te enviamos fotos adicionales, videos y cotización.',
    icon: 'MessageCircle'
  }
];
