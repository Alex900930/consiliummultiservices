import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

// --- ARRAY DE DATOS DE SERVICIOS RESTAURADO ---
const servicesData = [
  {
    title: "TAXES",
    ctaText: "Solicita información",
    ctaLink: "/contacto",
    content: [
      "Preparación de declaraciones anuales para individuos y pequeñas empresas.",
      "Optimización de deducciones y créditos fiscales.",
      "Asesoramiento en cumplimiento de regulaciones fiscales estatales y federales.",
      "Resolución de auditorías y ajustes fiscales.",
      "Con nuestro apoyo, tus finanzas estarán en regla y maximizarás tus beneficios."
    ]
  },
  {
    title: "SERVICIOS CONTABLES",
    ctaText: "Solicita información",
    ctaLink: "/contacto",
    content: [
      "Ofrecemos servicios contables integrales para negocios, incluyendo: Bookkeeping mensual, conciliaciones bancarias y de tarjetas, clasificación de transacciones y reportes financieros (P&L, Balance Sheet, Cash Flow).",
      "Gestionamos cuentas por cobrar y pagar, nómina básica con presentación de formularios fiscales, y declaración de impuestos individuales, empresariales, de ventas y payroll.",
      "Brindamos consultoría en QuickBooks/Xero, limpieza contable, preparación para auditorías y análisis financiero. Además, contamos con servicios premium como setup de POS, facturación electrónica, reportes para inversionistas y CFO virtual."
    ]
  },
  {
    title: "APERTURA DE EMPRESAS (LLC Y CORPORACIONES)",
    ctaText: "Solicita información",
    ctaLink: "/contacto",
    content: [
      "Nuestro equipo te ayuda a dar el primer paso hacia tu negocio propio. Ofrecemos servicios completos de apertura de empresas y corporaciones, guiándote en cada etapa del proceso legal y administrativo.",
      "Nuestro compromiso es apoyar a emprendedores como tú a iniciar con bases sólidas y confianza.",
      "Gestionamos el EIN, redactamos documentos esenciales y todo lo necesario para que puedas abrir tu cuenta bancaria comercial sin complicaciones. ¡Emprende hoy con nuestro respaldo profesional!"
    ]
  },
  {
    title: "SEGUROS DE VIDA Y SALUD",
    ctaText: "Solicita información",
    ctaLink: "/contacto",
    content: [
      "Salud: Cobertura médica esencial y planes complementarios.",
      "Vida: Asegura el bienestar de tus seres queridos en caso de imprevistos.",
      "Vehículos: Cobertura confiable para accidentes, daños y más.",
      "Propiedades: Protección integral para tu hogar y bienes.",
      "Estamos contigo desde la selección del seguro hasta la gestión de reclamaciones."
    ]
  },
  {
    title: "NOTARY PUBLIC",
    ctaText: "Solicita información",
    ctaLink: "/contacto",
    content: [
      "Autenticación y certificación de documentos legales.",
      "Firma y validación de contratos, declaraciones juradas y acuerdos.",
      "Matrimonios: Realización de ceremonias legales con un enfoque personalizado.",
      "Divorcios: Formalización de divorcios simples.",
      "Notarización de poderes, testamentos y más. Garantizamos que tus documentos cumplan con todos los requisitos legales."
    ]
  }
];

const createAnchorId = (title) => title.toLowerCase().replace(/ /g, '-').replace(/[()]/g, '');

const ServiciosPage = () => {
  return (
    <>
      {/* ====== 1. HERO SECTION - AHORA CON DOS VERSIONES ====== */}

      {/* --- VERSIÓN DE ESCRITORIO (Visible solo en pantallas 'lg' y superiores) --- */}
      <section className="relative hidden lg:block">
        <div className="absolute inset-0 z-0">
          <img
            src="/yainie-consilium.png"
            alt="Yainier Consillium - CEO de Consilium Multiservices"
            className="w-full h-full object-cover object-left"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex items-center justify-end text-right min-h-[90vh]">
            <div className="max-w-96 backdrop-blur-sm p-12 rounded-lg shadow-2xl">
              <h1 className="text-5xl font-bold leading-tight text-gray-900">
                Soluciones Profesionales a su Medida
              </h1>
              {/* <p className="mt-6 text-lg text-gray-700">
                Explore nuestra gama completa de servicios diseñados para proteger y hacer crecer su patrimonio con la máxima eficiencia y profesionalismo.
              </p> */}
              <div className="flex gap-4 mt-8 justify-end">
                <Button asChild size="lg" className="bg-gradient-primary hover:bg-primary-dark text-primary-foreground font-semibold shadow-golden">
                  <a href="tel:18064213785">Llámenos</a>
                </Button>
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold shadow-md">
                  <a href="https://wa.me/18064213785" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- VERSIÓN MÓVIL (Visible solo en pantallas menores a 'lg') --- */}
      <section className="lg:hidden">
        <div className="h-[50vh]">
          <img
            src="/yainie-consilium.png"
            alt="Yainier Consillium - CEO de Consilium Multiservices"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="bg-gray-50 p-8 text-center">
          <h1 className="text-4xl font-bold leading-tight text-gray-900">
            Soluciones Profesionales a su Medida
          </h1>
          <p className="mt-4 text-base text-gray-600">
            Explore nuestra gama de servicios para proteger y hacer crecer su patrimonio.
          </p>
          <div className="flex flex-col gap-4 mt-6">
            <Button asChild size="lg" className="bg-gradient-primary hover:bg-primary-dark text-primary-foreground font-semibold shadow-golden">
              <a href="tel:18064213785">Llámenos</a>
            </Button>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold shadow-md">
              <a href="https://wa.me/18064213785" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </Button>
          </div>
        </div>
      </section>

      {/* ====== 2. SECCIONES DE SERVICIOS INDIVIDUALES (Sin cambios) ====== */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {servicesData.map((service, index) => (
              <div key={index} id={createAnchorId(service.title)} // <-- AÑADIDO AQUÍ
              className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-lg border scroll-mt-24" // scroll-mt-24 añade un margen superior al hacer scroll
            >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{service.title}</h2>
                  <Button asChild className="bg-gradient-primary hover:bg-primary-dark text-primary-foreground font-semibold shadow-golden flex-shrink-0">
                    <Link to={service.ctaLink}>{service.ctaText}</Link>
                  </Button>
                </div>
                <hr className="my-6" />
                <div className="prose max-w-none text-gray-600">
                  {service.content.length > 1 ? (
                    <ul className="space-y-3">
                      {service.content.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>{service.content[0]}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiciosPage;