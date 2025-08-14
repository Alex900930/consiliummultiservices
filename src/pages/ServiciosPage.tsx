import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import { openWhatsAppForServices } from '@/lib/whatsapp-utils';

// --- ARRAY DE DATOS DE SERVICIOS SINCRONIZADO CON LA NUEVA INFORMACIÓN ---
const servicesData = [
    {
    title: "Bookkeeping y Contabilidad Diaria",
    ctaText: "Solicita información",
    ctaLink: "/contacto",
    content: [
      "Registro de ventas, compras, ingresos y gastos.",
      "Conciliaciones bancarias y de tarjetas.",
      "Clasificación contable precisa de cada transacción.",
      "Gestión de cuentas por cobrar y pagar."
    ]
  },
  {
    title: "Estados Financieros Profesionales",
    ctaText: "Obtén tus reportes",
    ctaLink: "/contacto",
    content: [
      "Balance General.",
      "Estado de Resultados.",
      "Flujo de Efectivo.",
      "Análisis y reportes personalizados."
    ]
  },
    {
    title: "Payroll (Nómina)",
    ctaText: "Solicita información",
    ctaLink: "/contacto",
    content: [
      "Cálculo y procesamiento de nómina.",
      "Impuestos y formularios de nómina (941, W-2, 1099).",
      "Administración de retenciones y beneficios."
    ]
  },
  {
    title: "Impuestos (Taxes)",
    ctaText: "Solicita información",
    ctaLink: "/contacto",
    content: [
      "Impuestos de negocios e individuales.",
      "Planificación fiscal estratégica.",
      "Impuestos de ventas (Sales Tax).",
      "Correcciones y enmiendas (Amended Returns)."
    ]
  },
    {
    title: "Consultoría Financiera y Empresarial",
    ctaText: "Agenda una consulta",
    ctaLink: "/contacto",
    content: [
      "Asesoría en estructura legal (LLC, S-Corp, C-Corp).",
      "Planificación de flujo de caja.",
      "Presupuestos y proyecciones.",
      "Reportes para préstamos y financiamiento."
    ]
  },
  {
    title: "Servicios Especializados",
    ctaText: "Cuéntanos tu necesidad",
    ctaLink: "/contacto",
    content: [
      "Contabilidad para contratistas y construcción.",
      "E-commerce (Amazon, Shopify, eBay).",
      "Operaciones internacionales y multimoneda.",
      "Preparación y acompañamiento en auditorías."
    ]
  },
   // --- SERVICIOS ANTERIORES QUE AÚN PUEDEN SER RELEVANTES ---
  {
    title: "APERTURA DE EMPRESAS (LLC Y CORPORACIONES)",
    ctaText: "Solicita información",
    ctaLink: "/contacto",
    content: [
      "Te guiamos en cada etapa del proceso legal y administrativo para abrir tu empresa.",
      "Gestionamos el EIN, redactamos documentos esenciales y todo lo necesario para que inicies con bases sólidas.",
      "Nuestro compromiso es apoyar a emprendedores a abrir su cuenta bancaria comercial sin complicaciones."
    ]
  },
  {
    title: "SEGUROS DE VIDA Y SALUD",
    ctaText: "Solicita información",
    ctaLink: "/contacto",
    content: [
      "Salud: Cobertura médica esencial y planes complementarios.",
      "Vida: Asegura el bienestar de tus seres queridos en caso de imprevistos.",
      "Vehículos y Propiedades: Cobertura confiable para accidentes, daños y protección integral para tu hogar.",
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
      "Realización de ceremonias de matrimonio y formalización de divorcios simples.",
      "Notarización de poderes, testamentos y más, garantizando cumplimiento legal."
    ]
  }
];


// Función para crear IDs de ancla (debe ser idéntica a la del componente del carrusel)
const createAnchorId = (title) => {
    // Reemplaza paréntesis, puntos y caracteres especiales, luego convierte a minúsculas y une con guiones
    return title
        .toLowerCase()
        .replace(/\s*\(.*?\)\s*/g, ' ') // Elimina contenido entre paréntesis
        .replace(/[.,]/g, '')           // Elimina puntos y comas
        .trim()                         // Elimina espacios al inicio/final
        .replace(/\s+/g, '-');          // Reemplaza espacios con guiones
};


const ServiciosPage = () => {
  return (
    <>
      {/* ====== 1. HERO SECTION (Sin cambios) ====== */}
      {/* --- VERSIÓN DE ESCRITORIO --- */}
      <section className="relative hidden lg:block">
        <div className="absolute inset-0 z-0">
          <img
            src="/yainie-consiliumSERVICES.png"
            alt="Yainier Consillium - CEO de Consilium Multiservices"
            className="w-full h-full object-cover object-left"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex items-center justify-end text-right min-h-[90vh]">
            {/* <div className="max-w-96 backdrop-blur-sm p-12 rounded-lg shadow-2xl">
              <h1 className="text-5xl font-bold leading-tight text-gray-900">
                Soluciones Profesionales a tu Medida
              </h1>
              <div className="flex gap-4 mt-8 justify-end">
                <Button asChild size="lg" className="bg-gradient-primary hover:bg-primary-dark text-primary-foreground font-semibold shadow-golden">
                  <a href="tel:18064213785">Llámenos</a>
                </Button>
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold shadow-md">
                  <a href="https://wa.me/18064213785" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                </Button>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* --- VERSIÓN MÓVIL --- */}
      <section className="lg:hidden">
        <div className="h-[50vh]">
          <img
            src="/yainie-consiliumSERVICES.jpg"
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

      {/* ====== 2. SECCIONES DE SERVICIOS INDIVIDUALES (Actualizado con la nueva data) ====== */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {servicesData.map((service, index) => (
              <div key={index} id={createAnchorId(service.title)} // <-- El ID se genera dinámicamente
              className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-lg border scroll-mt-24" // scroll-mt-24 para el anclaje correcto
            >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{service.title}</h2>
                  <Button 
                    className="bg-gradient-primary hover:bg-primary-dark text-primary-foreground font-semibold shadow-golden flex-shrink-0"
                    onClick={openWhatsAppForServices}
                  >
                    {service.ctaText}
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