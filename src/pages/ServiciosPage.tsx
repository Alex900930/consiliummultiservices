import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import { openWhatsAppForServices } from '@/lib/whatsapp-utils';
import { useTranslation } from 'react-i18next'; // 1. Importar

// --- DATOS ESTRUCTURALES DE LOS SERVICIOS (SIN TEXTO) ---
// Guardamos la estructura y el número de puntos de contenido de cada servicio.
const servicesStaticData = [
    { id: 0, anchor: "bookkeeping-contabilidad-diaria", contentCount: 4 },
    { id: 1, anchor: "estados-financieros-profesionales", contentCount: 4 },
    { id: 2, anchor: "payroll-nomina", contentCount: 3 },
    { id: 3, anchor: "impuestos-taxes", contentCount: 4 },
    { id: 4, anchor: "consultoria-financiera-empresarial", contentCount: 4 },
    { id: 5, anchor: "servicios-especializados", contentCount: 4 },
    { id: 6, anchor: "apertura-de-empresas", contentCount: 3 },
    { id: 7, anchor: "seguros-vida-salud", contentCount: 4 },
    { id: 8, anchor: "notary-public", contentCount: 4 }
];

const ServiciosPage = () => {
  const { t } = useTranslation(); // 2. Usar el hook

  return (
    <>
      {/* ====== 1. HERO SECTION (TRADUCIDO) ====== */}
      {/* --- VERSIÓN DE ESCRITORIO --- */}
      <section className="relative hidden lg:block">
        <div className="absolute inset-0 z-0">
          <img
            src="/yainie-consiliumSERVICES.webp"
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
            src="/yainie-consiliumSERVICES.webp"
            alt={t('services-page.hero.title')}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="bg-gray-50 p-8 text-center">
          <h1 className="text-4xl font-bold leading-tight text-gray-900">
            {t('services-page.hero.title')}
          </h1>
          <p className="mt-4 text-base text-gray-600">
            {t('services-page.hero.subtitle')}
          </p>
          <div className="flex flex-col gap-4 mt-6">
            <Button asChild size="lg" className="bg-gradient-primary hover:bg-primary-dark text-primary-foreground font-semibold shadow-golden">
              <a href="tel:18064213785">{t('services-page.hero.buttonCall')}</a>
            </Button>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold shadow-md">
              <a href="https://wa.me/18064213785" target="_blank" rel="noopener noreferrer">{t('services-page.hero.buttonWhatsapp')}</a>
            </Button>
          </div>
        </div>
      </section>

      {/* ====== 2. SECCIONES DE SERVICIOS INDIVIDUALES (TRADUCIDO) ====== */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {servicesStaticData.map((service) => (
              <div key={service.id} id={service.anchor} // <-- Usamos el ancla estática
                   className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-lg border scroll-mt-24"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  {/* Construimos la clave del título dinámicamente */}
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {t(`services-page.list.${service.id}.title`)}
                  </h2>
                  <Button 
                    className="bg-gradient-primary hover:bg-primary-dark text-primary-foreground font-semibold shadow-golden flex-shrink-0"
                    onClick={openWhatsAppForServices}
                  >
                    {/* Construimos la clave del botón dinámicamente */}
                    {t(`services-page.list.${service.id}.cta`)}
                  </Button>
                </div>
                <hr className="my-6" />
                <div className="prose max-w-none text-gray-600">
                  <ul className="space-y-3">
                    {/* Creamos un array vacío del tamaño correcto para mapear sobre él */}
                    {Array.from({ length: service.contentCount }).map((_, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        {/* Construimos la clave de cada punto de contenido dinámicamente */}
                        <span>{t(`services-page.list.${service.id}.content.${i}`)}</span>
                      </li>
                    ))}
                  </ul>
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