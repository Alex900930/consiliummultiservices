import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';
import React, { useState, useEffect, useRef } from 'react'; // Importamos los hooks necesarios
import Autoplay from "embla-carousel-autoplay"; // Importamos el plugin de autoplay

// Función para crear los IDs de ancla (sin cambios)
const createAnchorId = (title) => title.toLowerCase().replace(/ /g, '-').replace(/[()]/g, '');

const Services = () => {
  const { t } = useTranslation();
  
  // Referencia para el plugin de autoplay
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  // Estado para el carrusel
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);


  const servicesData = [
    {
      title: t('services.taxPreparation'),
      description: t('services.taxDescription'),
      image: "/images/services/taxes.webp",
      anchorId: createAnchorId("TAXES")
    },
    {
      title: t('services.accountingServices'),
      description: t('services.accountingDescription'),
      image: "/images/services/contabilidad.webp",
      anchorId: createAnchorId("SERVICIOS CONTABLES")
    },
    {
      title: t('services.businessFormation'),
      description: t('services.businessDescription'),
      image: "/images/services/apertura-empresa.webp",
      anchorId: createAnchorId("APERTURA DE EMPRESAS (LLC Y CORPORACIONES)")
    },
    {
      title: t('services.insurance'),
      description: t('services.insuranceDescription'),
      image: "/images/services/seguros.webp",
      anchorId: createAnchorId("SEGUROS DE VIDA Y SALUD")
    },
    {
      title: t('services.payroll'),
      description: t('services.payrollDescription'),
      image: "/images/services/payroll.webp",
      anchorId: createAnchorId("Payroll Básico")
    },
    {
      title: t('services.notary'),
      description: t('services.notaryDescription'),
      image: "/images/services/notary.webp",
      anchorId: createAnchorId("NOTARY PUBLIC")
    },
    {
      title: t('services.financialStatements'),
      description: t('services.financialDescription'),
      image: "/images/services/estados-financieros.webp",
      anchorId: createAnchorId("ESTADOS FINANCIEROS PROFESIONALES")
    },
    {
      title: t('services.consulting'),
      description: t('services.consultingDescription'),
      image: "/images/services/consultoria.webp",
      anchorId: createAnchorId("CONSULTORIA FINANCIERA Y EMPRESARIAL")
    },
    // --- NUEVO SERVICIO AÑADIDO AQUÍ ---
    {
      title: t('services.immigration'),
      description: t('services.immigrationDescription'),
      image: "/images/services/inmigracion.webp", // Asegúrate de tener esta imagen
      anchorId: createAnchorId("INMIGRACION")
    },
    // --- FIN DEL NUEVO SERVICIO ---
    {
      title: t('services.specialized'),
      description: t('services.specializedDescription'),
      image: "/images/services/especializados.webp",
      anchorId: createAnchorId("SERVICIOS ESPECIALIZADOS")
    }
  ];
  return (
    <section id="servicios" className="py-20 lg:py-28 bg-gradient-hero text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
          {t('services.specialize')}
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            {t('services.description')}
          </p>
        </div>

        {/* --- INICIO DEL CARRUSEL DE SERVICIOS --- */}
        <Carousel
          setApi={setApi} // Conectamos el estado de la API del carrusel
          plugins={[plugin.current]} // Añadimos el plugin de autoplay
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {servicesData.map((service, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden shadow-lg h-full border-gray-700 bg-gradient">
                    <CardContent className="flex flex-col items-center justify-center p-0 h-full">
                      <img className="h-48 w-full object-cover" src={service.image} alt={service.title} />
                      <div className="p-6 text-center flex-grow flex flex-col">
                        <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                        <p className="mt-3 text-base text-gray-400 flex-grow">{service.description}</p>
                        <div className="mt-6">
                          <Link to={`/servicios#${service.anchorId}`} className="text-sm font-semibold text-primary hover:text-primary/80">
                            {t('services.knowMore')}
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
        
        {/* --- INICIO DE LOS PUNTOS DE NAVEGACIÓN (SOLO MÓVIL) --- */}
        <div className="sm:hidden flex justify-center items-center gap-2 mt-4">
            {Array.from({ length: count }).map((_, index) => (
                <button
                   aria-label='puntos de navegaion'
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                        current === index + 1 ? 'bg-primary' : 'bg-gray-500'
                    }`}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;