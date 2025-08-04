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
      
      // Hero
      'hero.title': 'Tu éxito financiero',
      'hero.subtitle': 'empieza aquí',
      'hero.description': 'Servicios contables y financieros profesionales en Miami. Especialistas en impuestos, contabilidad e inmigración para empresas y particulares.',
      'hero.cta': 'Consulta Gratis',
      'hero.secondary': 'Ver Servicios',
      
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
      
      // CTA
      'cta.title': '¿Listo para simplificar',
      'cta.titleHighlight': 'tu contabilidad?',
      'cta.description': 'Agenda una consulta gratuita y descubre cómo podemos ayudarte a optimizar tus finanzas.',
      'cta.button': 'Consulta Gratis',
      'cta.phone': 'O llámanos al',

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
      
      // Hero
      'hero.title': 'Your financial success',
      'hero.subtitle': 'starts here',
      'hero.description': 'Professional accounting and financial services in Miami. Specialists in taxes, accounting, and immigration for businesses and individuals.',
      'hero.cta': 'Free Consultation',
      'hero.secondary': 'View Services',
      
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
      
      // CTA
      'cta.title': 'Ready to simplify',
      'cta.titleHighlight': 'your accounting?',
      'cta.description': 'Schedule a free consultation and discover how we can help you optimize your finances.',
      'cta.button': 'Free Consultation',
      'cta.phone': 'Or call us at',

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