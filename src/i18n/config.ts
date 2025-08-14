import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      // Header
      'nav.inicio': 'Inicio',
      'nav.nosotros': 'Nosotros',
      'nav.servicios': 'Servicios',
      'nav.paquetes': 'Paquetes',
      'nav.consejos': 'Consejos',
      'nav.contacto': 'Contacto',
      'nav.cta': 'Consulta Gratis',
      'nav.callUs': 'Llámenos',
      'nav.scheduleAppointment': '¡Agende su cita hoy!',
      'nav.services.taxes': 'TAXES',
      'nav.services.accounting': 'SERVICIOS CONTABLES',
      'nav.services.business': 'APERTURA DE EMPRESAS (LLC Y CORPORACIONES)',
      'nav.services.insurance': 'SEGUROS DE VIDA Y SALUD',
      'nav.services.notary': 'NOTARY PUBLIC',
      
      // Hero
      'hero.title': 'Tu éxito financiero',
      'hero.subtitle': 'empieza aquí',
      'hero.description': 'Servicios contables y financieros profesionales en Miami. Especialistas en impuestos, contabilidad e inmigración para empresas y particulares.',
      'hero.cta': 'Consulta Gratis',
      'hero.secondary': 'Ver Servicios',
      'hero.quote': 'La contabilidad es el lenguaje del negocio, Nosotros lo hablamos por ti.',
      'hero.quoteAuthor': '— Warren Buffett',
      'hero.scheduleButton': 'Agendar Consulta Gratuita',
      'hero.contactTitle': 'Contacte a un Experto',
      'hero.contactSubtitle': 'Reciba una consulta gratuita y sin compromiso.',
      'hero.form.name': 'Nombre',
      'hero.form.lastName': 'Apellidos',
      'hero.form.phone': 'Número de Teléfono',
      'hero.form.email': 'Correo Electrónico',
      'hero.form.submit': 'Enviar para mi Consulta',
      'hero.form.confidential': 'Su información es 100% confidencial.',
      
      // About
      'about.title': 'Más que contadores,',
      'about.titleHighlight': 'tu aliado estratégico',
      'about.description': 'En Consilium Multiservices LLC combinamos experiencia, claridad y confianza para llevar tus finanzas al próximo nivel. Hablamos tu idioma y entendemos tus necesidades.',
      'about.feature1': 'Atención personalizada',
      'about.feature2': 'Bilingüe (español/inglés)',
      'about.feature3': 'Enfoque en resultados',
      'about.quote': 'Nuestro mayor servicio es tu confianza',
      'about.quoteAuthor': '- Consilium Multiservices LLC',
      'about.experience': 'Años de experiencia',
      'about.location': 'Miami',
      'about.locationSub': 'Florida, US',
      'about.support': '24/7',
      'about.supportSub': 'Soporte',
      'about.certified': 'Certificados y licenciados',
      'about.ourStory': 'Nuestra Historia',
      'about.story1': 'Consilium Multiservices nació de una simple observación: innumerables emprendedores y dueños de pequeños negocios, apasionados por lo que hacen, se sentían abrumados y perdidos en el complejo mundo de las finanzas y los impuestos.',
      'about.story2': 'Fundada sobre los pilares de la **confianza, la claridad y el compromiso personal**, nuestra misión es transformar la contabilidad de una obligación estresante a una herramienta poderosa para el crecimiento.',
      'about.knowServices': 'Conozca Nuestros Servicios',
      'about.stats.experience': 'Años de Experiencia',
      'about.stats.clients': 'Clientes Satisfechos',
      'about.stats.services': 'Servicios Exitosos',
      'about.stats.success': 'Tasa de Éxito',
      
      // Services
      'services.title': 'Servicios que',
      'services.titleHighlight': 'transforman tu negocio',
      'services.description': 'Ofrecemos soluciones integrales diseñadas para cada etapa de tu crecimiento empresarial.',
      'services.taxes.title': 'Preparación de Impuestos',
      'services.taxes.description': 'Maximiza tus devoluciones con nuestro servicio experto de preparación de impuestos.',
      'services.bookkeeping.title': 'Contabilidad',
      'services.bookkeeping.description': 'Mantén tus finanzas organizadas con nuestro servicio completo de contabilidad.',
      'services.payroll.title': 'Nómina',
      'services.payroll.description': 'Gestión completa de nómina para tu empresa con total precisión.',
      'services.consulting.title': 'Consultoría',
      'services.consulting.description': 'Estrategias financieras personalizadas para hacer crecer tu negocio.',
      'services.accounting.title': 'Servicios Contables',
      'services.accounting.description': 'Servicios contables completos adaptados a las necesidades de tu empresa.',
      'services.premium.title': 'Servicios Premium',
      'services.premium.description': 'Soluciones exclusivas para empresas que buscan el máximo nivel de servicio.',
      
      // Packages
      'packages.title': 'Paquetes diseñados para cada etapa',
      'packages.titleHighlight': 'de tu negocio',
      'packages.description': 'Desde emprendedores hasta empresas establecidas, tenemos el paquete perfecto para ti.',
      
      // Footer
      'footer.description': 'Tu socio de confianza en Miami para servicios contables, fiscales y de inmigración.',
      'footer.services': 'Servicios',
      'footer.contact': 'Contacto',
      'footer.phone': 'Teléfono',
      'footer.email': 'Email',
      'footer.address': 'Miami, Florida',
      'footer.rights': 'Todos los derechos reservados',
      'footer.specialists': 'Especialistas en servicios de bookkeeping, contabilidad y asesoría para contratistas, pequeños negocios y emprendedores.',
      'footer.trust': 'Su confianza es nuestro compromiso',
      'footer.contactUs': 'Contáctenos',
      'footer.phones': 'Teléfonos:',
      'footer.location': 'Ubicación:',
      'footer.schedule': 'Horarios:',
      'footer.scheduleWeekdays': 'Lun - Vie: 9:00 AM - 6:00 PM',
      'footer.scheduleSaturday': 'Sáb: 10:00 AM - 2:00 PM',
      'footer.quickLinks': 'Enlaces Rápidos',
      'footer.home': 'Inicio',
      'footer.accountingServices': 'Servicios Contables',
      'footer.team': 'Equipo',
      'footer.testimonials': 'Testimonios',
      'footer.contact': 'Contacto',
      'footer.monthlyBookkeeping': 'Bookkeeping Mensual',
      'footer.receivablesPayables': 'Cuentas por Cobrar y Pagar',
      'footer.basicPayroll': 'Payroll Básico',
      'footer.taxPresentation': 'Presentación de Taxes',
      'footer.consulting': 'Consultoría y Asesoría',
      'footer.premiumServices': 'Servicios Premium',
      'footer.privacyPolicy': 'Políticas de Privacidad',
      'footer.legalNotice': 'Aviso Legal',
      
      // CTA
      'cta.title': '¿Listo para simplificar',
      'cta.titleHighlight': 'tu contabilidad?',
      'cta.description': 'Agenda una consulta gratuita y descubre cómo podemos ayudarte a optimizar tus finanzas.',
      'cta.button': 'Consulta Gratis',
      'cta.phone': 'O llámanos al',

      // Services
      'services.specialize': 'Nos especializamos',
      'services.description': 'Ofrecemos un espectro completo de servicios contables y financieros para asegurar tu éxito.',
      'services.taxPreparation': 'Presentación de Taxes',
      'services.taxDescription': 'Maximizamos tus deducciones y aseguramos el cumplimiento fiscal.',
      'services.accountingServices': 'Servicios Contables',
      'services.accountingDescription': 'Desde bookkeeping mensual hasta reportes financieros.',
      'services.businessFormation': 'Apertura de Empresas',
      'services.businessDescription': 'Te guiamos para lanzar tu LLC o Corporación con una base sólida.',
      'services.insurance': 'Seguros de Vida y Salud',
      'services.insuranceDescription': 'Protege tu futuro y el de tu familia con planes personalizados.',
      'services.payroll': 'Payroll Básico',
      'services.payrollDescription': 'Gestionamos la nómina de tus empleados de manera eficiente y puntual.',
      'services.notary': 'Notary Public',
      'services.notaryDescription': 'Servicios de notariado confiables para tus documentos importantes.',
      'services.financialStatements': 'Estados Financieros Profesionales',
      'services.financialDescription': 'Análisis y preparación de estados financieros para una toma de decisiones informada.',
      'services.consulting': 'Consultoría Financiera y Empresarial',
      'services.consultingDescription': 'Asesoramiento estratégico para optimizar tus finanzas y hacer crecer tu negocio.',
      'services.specialized': 'Servicios Especializados',
      'services.specializedDescription': 'Soluciones adaptadas a tu industria.',
      'services.knowMore': 'Saber Más →',

      // Team
      'team.title': 'Conoce quiénes están detrás de',
      'team.subtitle': 'CONSILIUM Tax & Accounting',
      'team.callNow': 'Llamar Ahora',

      // Testimonials
      'testimonials.title': 'Lo que dicen nuestros clientes',
      'testimonials.subtitle': 'La confianza y el éxito de quienes trabajan con nosotros es nuestra mayor recompensa.',

      // Commitment and Mission
      'commitment.mission.title': 'Nuestra Misión',
      'commitment.mission.description': 'En Consilium Multiservices LLC, nos dedicamos a proveer servicios integrales de calidad, con el objetivo de facilitar la vida y el éxito de nuestros clientes en todo Estados Unidos. Ofrecemos asesoría experta y soluciones individuales; asegurando un proceso eficiente, transparente y accesible, que cumpla con las necesidades y expectativas en un entorno dinámico y multicultural.',
      'commitment.vision.title': 'Nuestra Visión',
      'commitment.vision.description': 'Ser una empresa de referencia en todo el país, reconocida por su excelencia y compromiso en ofrecer soluciones completas y confiables en inmigración, seguros, impuestos y notaría. Aspiramos a ser el socio estratégico de nuestros clientes en su camino hacia la estabilidad, el crecimiento y la integración plena en la sociedad, contribuyendo al bienestar de las comunidades que servimos, sin importar su ubicación a nivel nacional.',
      'commitment.title': 'Nuestro Compromiso con el Cliente',
      'commitment.subtitle': 'Más que tus contadores, somos tus socios estratégicos. Nuestra firma se construyó sobre un conjunto de promesas que cumplimos con cada cliente, sin excepción.',
      'commitment.transparency.title': 'Transparencia Total',
      'commitment.transparency.description': 'No habrá números confusos ni sorpresas. Te explicaremos cada detalle de tus finanzas en un lenguaje claro y comprensible.',
      'commitment.proactivity.title': 'Proactividad y Puntualidad',
      'commitment.proactivity.description': 'Nos anticipamos a los plazos fiscales y a las necesidades de tu negocio. Tu tranquilidad es nuestra prioridad.',
      'commitment.communication.title': 'Comunicación Directa y Accesible',
      'commitment.communication.description': 'Siempre tendrás una línea abierta con nosotros. Respondemos tus preguntas con rapidez y estamos aquí para asesorarte.',
      'commitment.solutions.title': 'Soluciones a su Medida',
      'commitment.solutions.description': 'No ofrecemos soluciones genéricas, sino estrategias contables adaptadas a tus metas específicas.',

      // Process
      'process.title': 'Manténgase Informado en Cada Etapa',
      'process.subtitle': 'Nuestro proceso está diseñado para ser completamente transparente, asegurando que usted tenga claridad y control sobre sus finanzas en todo momento.',
      'process.consultation.title': 'Consulta Inicial y Diagnóstico',
      'process.consultation.description': 'Comenzamos con una conversación profunda para entender sus necesidades, desafíos y metas. Analizamos su situación actual para establecer un punto de partida claro.',
      'process.strategy.title': 'Diseño de la Estrategia Contable',
      'process.strategy.description': 'Con base en el diagnóstico, creamos un plan de acción a su medida. Ya sea para organizar sus libros, planificar sus impuestos o abrir su empresa, definimos cada paso.',
      'process.implementation.title': 'Implementación y Ejecución',
      'process.implementation.description': 'Nuestro equipo de expertos se pone manos a la obra. Ejecutamos el plan con precisión, manteniendo sus registros al día, procesando la nómina y preparando sus declaraciones.',
      'process.reports.title': 'Reportes y Seguimiento Continuo',
      'process.reports.description': 'Le mantenemos informado con reportes financieros claros y reuniones periódicas. Monitoreamos su progreso y ajustamos la estrategia para asegurar su crecimiento continuo.',

      // Clients Nationwide
      'clients.title': 'Brindamos Servicios a Nivel Nacional',
      'clients.subtitle': 'No importa en qué estado se encuentre, nuestra firma está equipada con la tecnología y la experiencia para ofrecerle servicios contables y financieros de primer nivel de forma remota, segura y eficiente.',
      'clients.cta': 'Programe una Consulta Virtual',


      //team
      'team.member.0.name': 'YAINIER SANCHEZ',
      'team.member.0.role': 'CO - CEO Consilium Tax & Accounting',
      'team.member.0.quote': 'Especialista en preparación de impuestos y servicios contables para pequeñas empresas. Su enfoque está en ayudar a emprendedores y dueños de negocios a mantener sus finanzas en orden, cumplir con sus obligaciones fiscales y optimizar sus recursos. Con compromiso y precisión, ofrece soluciones contables adaptadas a las necesidades de cada cliente.',
      
      'team.member.1.name': 'CAROLINA GONZALEZ',
      'team.member.1.role': 'CO - CEO Consilium Tax & Accounting',
      'team.member.1.quote': 'Experta en la preparación de formularios migratorios con amplia experiencia ayudando a la comunidad en procesos como: Asilo, permisos de trabajo, peticiones familiares y más. Además, cuenta con licencia como agente de seguros de vida y salud, brindando asesoría confiable y personalizada para proteger a las familias en cada etapa de su vida.',

      'team.member.2.name': 'KARINA GÓMEZ',
      'team.member.2.role': 'Asistente Administrativo',
      'team.member.2.quote': 'Mano derecha de nuestro equipo. Con amplia experiencia en atención al cliente y tareas administrativas. Karina se encarga de coordinar citas, dar seguimiento a los casos y garantizar una atención amable, eficiente y personalizada. Es un pilar clave en la conexión directa con nuestra comunidad.',
      
      //cta

      'cta-section.title.line1': 'Si no controlas tus finanzas, ellas te controlan a ti.',
      'cta-section.title.line2': '¡Agende su consulta gratuita hoy!',
      'cta-section.subtitle': 'Nuestro equipo de contadores profesionales está listo para ayudarle a mantener sus finanzas claras y sus impuestos al día.',
      'cta-section.feature1.title': 'Evaluación completa',
      'cta-section.feature1.description': 'De sus necesidades contables',
      'cta-section.feature2.title': 'Sin compromisos',
      'cta-section.feature2.description': 'Evaluación honesta',
      'cta-section.feature3.title': 'Equipo certificado',
      'cta-section.feature3.description': '15+ años de experiencia',
      'cta-section.button.appointment': '¡Agende su cita hoy!',
      'cta-section.button.call': 'Llamar ahora: +1 786 599-0462',
      'cta-section.socialProof.join': 'Únase a más de 3,800+ clientes que ya confían en Consilium Multiservices',
      'cta-section.socialProof.rating': '4.9/5 Rating',
      'cta-section.socialProof.services': '500+ Servicios exitosos',
      'cta-section.socialProof.response': 'Respuesta en 24hrs',

      //serviciospage

      'services-page.hero.title': 'Soluciones Profesionales a su Medida',
      'services-page.hero.subtitle': 'Explore nuestra gama de servicios para proteger y hacer crecer su patrimonio.',
      'services-page.hero.buttonCall': 'Llámenos',
      'services-page.hero.buttonWhatsapp': 'WhatsApp',

      // Lista de Servicios
      // Servicio 0
      'services-page.list.0.title': 'Bookkeeping y Contabilidad Diaria',
      'services-page.list.0.cta': 'Solicita información',
      'services-page.list.0.content.0': 'Registro de ventas, compras, ingresos y gastos.',
      'services-page.list.0.content.1': 'Conciliaciones bancarias y de tarjetas.',
      'services-page.list.0.content.2': 'Clasificación contable precisa de cada transacción.',
      'services-page.list.0.content.3': 'Gestión de cuentas por cobrar y pagar.',
      // Servicio 1
      'services-page.list.1.title': 'Estados Financieros Profesionales',
      'services-page.list.1.cta': 'Obtén tus reportes',
      'services-page.list.1.content.0': 'Balance General.',
      'services-page.list.1.content.1': 'Estado de Resultados.',
      'services-page.list.1.content.2': 'Flujo de Efectivo.',
      'services-page.list.1.content.3': 'Análisis y reportes personalizados.',
      // Servicio 2
      'services-page.list.2.title': 'Payroll (Nómina)',
      'services-page.list.2.cta': 'Solicita información',
      'services-page.list.2.content.0': 'Cálculo y procesamiento de nómina.',
      'services-page.list.2.content.1': 'Impuestos y formularios de nómina (941, W-2, 1099).',
      'services-page.list.2.content.2': 'Administración de retenciones y beneficios.',
      // Servicio 3
      'services-page.list.3.title': 'Impuestos (Taxes)',
      'services-page.list.3.cta': 'Solicita información',
      'services-page.list.3.content.0': 'Impuestos de negocios e individuales.',
      'services-page.list.3.content.1': 'Planificación fiscal estratégica.',
      'services-page.list.3.content.2': 'Impuestos de ventas (Sales Tax).',
      'services-page.list.3.content.3': 'Correcciones y enmiendas (Amended Returns).',
      // Servicio 4
      'services-page.list.4.title': 'Consultoría Financiera y Empresarial',
      'services-page.list.4.cta': 'Agenda una consulta',
      'services-page.list.4.content.0': 'Asesoría en estructura legal (LLC, S-Corp, C-Corp).',
      'services-page.list.4.content.1': 'Planificación de flujo de caja.',
      'services-page.list.4.content.2': 'Presupuestos y proyecciones.',
      'services-page.list.4.content.3': 'Reportes para préstamos y financiamiento.',
      // Servicio 5
      'services-page.list.5.title': 'Servicios Especializados',
      'services-page.list.5.cta': 'Cuéntanos tu necesidad',
      'services-page.list.5.content.0': 'Contabilidad para contratistas y construcción.',
      'services-page.list.5.content.1': 'E-commerce (Amazon, Shopify, eBay).',
      'services-page.list.5.content.2': 'Operaciones internacionales y multimoneda.',
      'services-page.list.5.content.3': 'Preparación y acompañamiento en auditorías.',
      // Servicio 6
      'services-page.list.6.title': 'APERTURA DE EMPRESAS (LLC Y CORPORACIONES)',
      'services-page.list.6.cta': 'Solicita información',
      'services-page.list.6.content.0': 'Te guiamos en cada etapa del proceso legal y administrativo para abrir tu empresa.',
      'services-page.list.6.content.1': 'Gestionamos el EIN, redactamos documentos esenciales y todo lo necesario para que inicies con bases sólidas.',
      'services-page.list.6.content.2': 'Nuestro compromiso es apoyar a emprendedores a abrir su cuenta bancaria comercial sin complicaciones.',
      // Servicio 7
      'services-page.list.7.title': 'SEGUROS DE VIDA Y SALUD',
      'services-page.list.7.cta': 'Solicita información',
      'services-page.list.7.content.0': 'Salud: Cobertura médica esencial y planes complementarios.',
      'services-page.list.7.content.1': 'Vida: Asegura el bienestar de tus seres queridos en caso de imprevistos.',
      'services-page.list.7.content.2': 'Vehículos y Propiedades: Cobertura confiable para accidentes, daños y protección integral para tu hogar.',
      'services-page.list.7.content.3': 'Estamos contigo desde la selección del seguro hasta la gestión de reclamaciones.',
      // Servicio 8
      'services-page.list.8.title': 'NOTARY PUBLIC',
      'services-page.list.8.cta': 'Solicita información',
      'services-page.list.8.content.0': 'Autenticación y certificación de documentos legales.',
      'services-page.list.8.content.1': 'Firma y validación de contratos, declaraciones juradas y acuerdos.',
      'services-page.list.8.content.2': 'Realización de ceremonias de matrimonio y formalización de divorcios simples.',
      'services-page.list.8.content.3': 'Notarización de poderes, testamentos y más, garantizando cumplimiento legal.',


      // And more translations...


    }
  },
  en: {
    translation: {
      // Header
      'nav.inicio': 'Home',
      'nav.nosotros': 'About',
      'nav.servicios': 'Services',
      'nav.paquetes': 'Packages',
      'nav.consejos': 'Advice',
      'nav.contacto': 'Contact',
      'nav.cta': 'Free Consultation',
      'nav.callUs': 'Call Us',
      'nav.scheduleAppointment': 'Schedule Your Appointment Today!',
      'nav.services.taxes': 'TAXES',
      'nav.services.accounting': 'ACCOUNTING SERVICES',
      'nav.services.business': 'BUSINESS FORMATION (LLC & CORPORATIONS)',
      'nav.services.insurance': 'LIFE & HEALTH INSURANCE',
      'nav.services.notary': 'NOTARY PUBLIC',
      
      // Hero
      'hero.title': 'Your financial success',
      'hero.subtitle': 'starts here',
      'hero.description': 'Professional accounting and financial services in Miami. Specialists in taxes, accounting, and immigration for businesses and individuals.',
      'hero.cta': 'Free Consultation',
      'hero.secondary': 'View Services',
      'hero.quote': 'Accounting is the language of business. We speak it for you.',
      'hero.quoteAuthor': '— Warren Buffett',
      'hero.scheduleButton': 'Schedule Free Consultation',
      'hero.contactTitle': 'Contact an Expert',
      'hero.contactSubtitle': 'Get a free consultation with no commitment.',
      'hero.form.name': 'Name',
      'hero.form.lastName': 'Last Name',
      'hero.form.phone': 'Phone Number',
      'hero.form.email': 'Email',
      'hero.form.submit': 'Send for my Consultation',
      'hero.form.confidential': 'Your information is 100% confidential.',
      
      // About
      'about.title': 'More than accountants,',
      'about.titleHighlight': 'your strategic ally',
      'about.description': 'At Consilium Multiservices LLC we combine experience, clarity and trust to take your finances to the next level. We speak your language and understand your needs.',
      'about.feature1': 'Personalized attention',
      'about.feature2': 'Bilingual (Spanish/English)',
      'about.feature3': 'Results-focused',
      'about.quote': 'Our greatest service is your trust',
      'about.quoteAuthor': '- Consilium Multiservices LLC',
      'about.experience': 'Years of experience',
      'about.location': 'Miami',
      'about.locationSub': 'Florida, US',
      'about.support': '24/7',
      'about.supportSub': 'Support',
      'about.certified': 'Certified and licensed',
      'about.ourStory': 'Our Story',
      'about.story1': 'Consilium Multiservices was born from a simple observation: countless entrepreneurs and small business owners, passionate about what they do, felt overwhelmed and lost in the complex world of finance and taxes.',
      'about.story2': 'Founded on the pillars of **trust, clarity and personal commitment**, our mission is to transform accounting from a stressful obligation into a powerful tool for growth.',
      'about.knowServices': 'Learn About Our Services',
      'about.stats.experience': 'Years of Experience',
      'about.stats.clients': 'Satisfied Clients',
      'about.stats.services': 'Successful Services',
      'about.stats.success': 'Success Rate',
      
      // Services
      'services.title': 'Services that',
      'services.titleHighlight': 'transform your business',
      'services.description': 'We offer comprehensive solutions designed for every stage of your business growth.',
      'services.taxes.title': 'Tax Preparation',
      'services.taxes.description': 'Maximize your returns with our expert tax preparation service.',
      'services.bookkeeping.title': 'Bookkeeping',
      'services.bookkeeping.description': 'Keep your finances organized with our complete bookkeeping service.',
      'services.payroll.title': 'Payroll',
      'services.payroll.description': 'Complete payroll management for your business with total accuracy.',
      'services.consulting.title': 'Consulting',
      'services.consulting.description': 'Personalized financial strategies to grow your business.',
      'services.accounting.title': 'Accounting Services',
      'services.accounting.description': 'Complete accounting services tailored to your business needs.',
      'services.premium.title': 'Premium Services',
      'services.premium.description': 'Exclusive solutions for businesses seeking the highest level of service.',
      
      // Packages
      'packages.title': 'Packages designed for every stage',
      'packages.titleHighlight': 'of your business',
      'packages.description': 'From entrepreneurs to established companies, we have the perfect package for you.',
      
      // Footer
      'footer.description': 'Your trusted partner in Miami for accounting, tax and immigration services.',
      'footer.services': 'Services',
      'footer.contact': 'Contact',
      'footer.phone': 'Phone',
      'footer.email': 'Email',
      'footer.address': 'Miami, Florida',
      'footer.rights': 'All rights reserved',
      'footer.specialists': 'Specialists in bookkeeping, accounting and consulting services for contractors, small businesses and entrepreneurs.',
      'footer.trust': 'Your trust is our commitment',
      'footer.contactUs': 'Contact Us',
      'footer.phones': 'Phones:',
      'footer.location': 'Location:',
      'footer.schedule': 'Schedule:',
      'footer.scheduleWeekdays': 'Mon - Fri: 9:00 AM - 6:00 PM',
      'footer.scheduleSaturday': 'Sat: 10:00 AM - 2:00 PM',
      'footer.quickLinks': 'Quick Links',
      'footer.home': 'Home',
      'footer.accountingServices': 'Accounting Services',
      'footer.team': 'Team',
      'footer.testimonials': 'Testimonials',
      'footer.contact': 'Contact',
      'footer.monthlyBookkeeping': 'Monthly Bookkeeping',
      'footer.receivablesPayables': 'Accounts Receivable & Payable',
      'footer.basicPayroll': 'Basic Payroll',
      'footer.taxPresentation': 'Tax Presentation',
      'footer.consulting': 'Consulting & Advisory',
      'footer.premiumServices': 'Premium Services',
      'footer.privacyPolicy': 'Privacy Policy',
      'footer.legalNotice': 'Legal Notice',
      
      // CTA
      'cta.title': 'Ready to simplify',
      'cta.titleHighlight': 'your accounting?',
      'cta.description': 'Schedule a free consultation and discover how we can help you optimize your finances.',
      'cta.button': 'Free Consultation',
      'cta.phone': 'Or call us at',

      // Services
      'services.specialize': 'We Specialize',
      'services.description': 'We offer a complete spectrum of accounting and financial services to ensure your success.',
      'services.taxPreparation': 'Tax Preparation',
      'services.taxDescription': 'We maximize your deductions and ensure tax compliance.',
      'services.accountingServices': 'Accounting Services',
      'services.accountingDescription': 'From monthly bookkeeping to financial reports.',
      'services.businessFormation': 'Business Formation',
      'services.businessDescription': 'We guide you to launch your LLC or Corporation with a solid foundation.',
      'services.insurance': 'Life & Health Insurance',
      'services.insuranceDescription': 'Protect your future and that of your family with personalized plans.',
      'services.payroll': 'Basic Payroll',
      'services.payrollDescription': 'We manage your employees\' payroll efficiently and punctually.',
      'services.notary': 'Notary Public',
      'services.notaryDescription': 'Reliable notary services for your important documents.',
      'services.financialStatements': 'Professional Financial Statements',
      'services.financialDescription': 'Analysis and preparation of financial statements for informed decision making.',
      'services.consulting': 'Financial and Business Consulting',
      'services.consultingDescription': 'Strategic advice to optimize your finances and grow your business.',
      'services.specialized': 'Specialized Services',
      'services.specializedDescription': 'Solutions adapted to your industry.',
      'services.knowMore': 'Learn More →',

      // Team
      'team.title': 'Meet who\'s behind',
      'team.subtitle': 'CONSILIUM Tax & Accounting',
      'team.callNow': 'Call Now',

      // Testimonials
      'testimonials.title': 'What our clients say',
      'testimonials.subtitle': 'The trust and success of those who work with us is our greatest reward.',

      // Commitment and Mission
      'commitment.mission.title': 'Our Mission',
      'commitment.mission.description': 'At Consilium Multiservices LLC, we are dedicated to providing comprehensive quality services, with the goal of facilitating the life and success of our clients throughout the United States. We offer expert advice and individual solutions; ensuring an efficient, transparent and accessible process that meets the needs and expectations in a dynamic and multicultural environment.',
      'commitment.vision.title': 'Our Vision',
      'commitment.vision.description': 'To be a reference company throughout the country, recognized for its excellence and commitment to offering complete and reliable solutions in immigration, insurance, taxes and notary. We aspire to be the strategic partner of our clients on their path to stability, growth and full integration into society, contributing to the well-being of the communities we serve, regardless of their national location.',
      'commitment.title': 'Our Commitment to the Client',
      'commitment.subtitle': 'More than your accountants, we are your strategic partners. Our firm was built on a set of promises that we fulfill with each client, without exception.',
      'commitment.transparency.title': 'Total Transparency',
      'commitment.transparency.description': 'There will be no confusing numbers or surprises. We will explain every detail of your finances in clear and understandable language.',
      'commitment.proactivity.title': 'Proactivity and Punctuality',
      'commitment.proactivity.description': 'We anticipate tax deadlines and your business needs. Your peace of mind is our priority.',
      'commitment.communication.title': 'Direct and Accessible Communication',
      'commitment.communication.description': 'You will always have an open line with us. We respond to your questions quickly and are here to advise you.',
      'commitment.solutions.title': 'Solutions Tailored to You',
      'commitment.solutions.description': 'We don\'t offer generic solutions, but accounting strategies adapted to your specific goals.',

      // Process
      'process.title': 'Stay Informed at Every Stage',
      'process.subtitle': 'Our process is designed to be completely transparent, ensuring that you have clarity and control over your finances at all times.',
      'process.consultation.title': 'Initial Consultation and Diagnosis',
      'process.consultation.description': 'We begin with a deep conversation to understand your needs, challenges and goals. We analyze your current situation to establish a clear starting point.',
      'process.strategy.title': 'Accounting Strategy Design',
      'process.strategy.description': 'Based on the diagnosis, we create a customized action plan. Whether to organize your books, plan your taxes or open your business, we define each step.',
      'process.implementation.title': 'Implementation and Execution',
      'process.implementation.description': 'Our team of experts gets to work. We execute the plan with precision, keeping your records up to date, processing payroll and preparing your returns.',
      'process.reports.title': 'Reports and Continuous Follow-up',
      'process.reports.description': 'We keep you informed with clear financial reports and periodic meetings. We monitor your progress and adjust the strategy to ensure your continuous growth.',

      // Clients Nationwide
      'clients.title': 'We Provide Services Nationwide',
      'clients.subtitle': 'No matter which state you are in, our firm is equipped with the technology and experience to offer you first-class accounting and financial services remotely, safely and efficiently.',
      'clients.cta': 'Schedule a Virtual Consultation',

      //team

      'team.member.0.name': 'YAINIER SANCHEZ',
      'team.member.0.role': 'CO - CEO Consilium Tax & Accounting',
      'team.member.0.quote': 'Specialist in tax preparation and accounting services for small businesses. His focus is on helping entrepreneurs and business owners keep their finances in order, comply with their tax obligations, and optimize their resources. With commitment and precision, he offers accounting solutions tailored to the needs of each client.',

      'team.member.1.name': 'CAROLINA GONZALEZ',
      'team.member.1.role': 'CO - CEO Consilium Tax & Accounting',
      'team.member.1.quote': 'Expert in the preparation of immigration forms with extensive experience helping the community in processes such as: Asylum, work permits, family petitions, and more. Additionally, she is licensed as a life and health insurance agent, providing reliable and personalized advice to protect families at every stage of their lives.',

      'team.member.2.name': 'KARINA GÓMEZ',
      'team.member.2.role': 'Administrative Assistant',
      'team.member.2.quote': 'The right hand of our team. With extensive experience in customer service and administrative tasks. Karina is in charge of coordinating appointments, following up on cases, and ensuring friendly, efficient, and personalized attention. She is a key pillar in the direct connection with our community.',

      //cta

      'cta-section.title.line1': "If you don't control your finances, they will control you.",
      'cta-section.title.line2': 'Schedule your free consultation today!',
      'cta-section.subtitle': 'Our team of professional accountants is ready to help you keep your finances clear and your taxes up to date.',
      'cta-section.feature1.title': 'Complete Assessment',
      'cta-section.feature1.description': 'Of your accounting needs',
      'cta-section.feature2.title': 'No Commitment',
      'cta-section.feature2.description': 'Honest evaluation',
      'cta-section.feature3.title': 'Certified Team',
      'cta-section.feature3.description': '15+ years of experience',
      'cta-section.button.appointment': 'Schedule your appointment today!',
      'cta-section.button.call': 'Call now: +1 786 599-0462',
      'cta-section.socialProof.join': 'Join over 3,800+ clients who already trust Consilium Multiservices',
      'cta-section.socialProof.rating': '4.9/5 Rating',
      'cta-section.socialProof.services': '500+ Successful Services',
      'cta-section.socialProof.response': 'Response within 24hrs',

      //servicespage

      'services-page.hero.title': 'Professional Solutions Tailored to You',
      'services-page.hero.subtitle': 'Explore our range of services to protect and grow your assets.',
      'services-page.hero.buttonCall': 'Call Us',
      'services-page.hero.buttonWhatsapp': 'WhatsApp',

      // Services List
      // Service 0
      'services-page.list.0.title': 'Bookkeeping and Daily Accounting',
      'services-page.list.0.cta': 'Request information',
      'services-page.list.0.content.0': 'Recording of sales, purchases, income, and expenses.',
      'services-page.list.0.content.1': 'Bank and card reconciliations.',
      'services-page.list.0.content.2': 'Accurate accounting classification of each transaction.',
      'services-page.list.0.content.3': 'Accounts receivable and payable management.',
      // Service 1
      'services-page.list.1.title': 'Professional Financial Statements',
      'services-page.list.1.cta': 'Get your reports',
      'services-page.list.1.content.0': 'Balance Sheet.',
      'services-page.list.1.content.1': 'Income Statement.',
      'services-page.list.1.content.2': 'Cash Flow Statement.',
      'services-page.list.1.content.3': 'Custom analysis and reports.',
      // Service 2
      'services-page.list.2.title': 'Payroll',
      'services-page.list.2.cta': 'Request information',
      'services-page.list.2.content.0': 'Payroll calculation and processing.',
      'services-page.list.2.content.1': 'Payroll taxes and forms (941, W-2, 1099).',
      'services-page.list.2.content.2': 'Withholding and benefits administration.',
      // Service 3
      'services-page.list.3.title': 'Taxes',
      'services-page.list.3.cta': 'Request information',
      'services-page.list.3.content.0': 'Business and individual taxes.',
      'services-page.list.3.content.1': 'Strategic tax planning.',
      'services-page.list.3.content.2': 'Sales Tax.',
      'services-page.list.3.content.3': 'Corrections and Amended Returns.',
      // Service 4
      'services-page.list.4.title': 'Financial and Business Consulting',
      'services-page.list.4.cta': 'Schedule a consultation',
      'services-page.list.4.content.0': 'Advice on legal structure (LLC, S-Corp, C-Corp).',
      'services-page.list.4.content.1': 'Cash flow planning.',
      'services-page.list.4.content.2': 'Budgets and projections.',
      'services-page.list.4.content.3': 'Reports for loans and financing.',
      // Service 5
      'services-page.list.5.title': 'Specialized Services',
      'services-page.list.5.cta': 'Tell us your need',
      'services-page.list.5.content.0': 'Accounting for contractors and construction.',
      'services-page.list.5.content.1': 'E-commerce (Amazon, Shopify, eBay).',
      'services-page.list.5.content.2': 'International and multi-currency operations.',
      'services-page.list.5.content.3': 'Audit preparation and support.',
      // Service 6
      'services-page.list.6.title': 'BUSINESS FORMATION (LLC & CORPORATIONS)',
      'services-page.list.6.cta': 'Request information',
      'services-page.list.6.content.0': 'We guide you through every stage of the legal and administrative process to open your company.',
      'services-page.list.6.content.1': 'We manage the EIN, draft essential documents, and everything necessary for you to start on a solid foundation.',
      'services-page.list.6.content.2': 'Our commitment is to help entrepreneurs open their business bank account without complications.',
      // Service 7
      'services-page.list.7.title': 'LIFE AND HEALTH INSURANCE',
      'services-page.list.7.cta': 'Request information',
      'services-page.list.7.content.0': 'Health: Essential medical coverage and supplementary plans.',
      'services-page.list.7.content.1': 'Life: Ensure the well-being of your loved ones in case of unforeseen events.',
      'services-page.list.7.content.2': 'Vehicles and Properties: Reliable coverage for accidents, damages, and comprehensive protection for your home.',
      'services-page.list.7.content.3': 'We are with you from insurance selection to claims management.',
      // Service 8
      'services-page.list.8.title': 'NOTARY PUBLIC',
      'services-page.list.8.cta': 'Request information',
      'services-page.list.8.content.0': 'Authentication and certification of legal documents.',
      'services-page.list.8.content.1': 'Signing and validation of contracts, affidavits, and agreements.',
      'services-page.list.8.content.2': 'Performing marriage ceremonies and formalizing simple divorces.',
      'services-page.list.8.content.3': 'Notarization of powers of attorney, wills, and more, ensuring legal compliance.',


      // And more translations...
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // default language
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;