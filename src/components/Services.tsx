import { Link } from 'react-router-dom';
// ¡IMPORTANTE! Importamos el nuevo componente de Carrusel
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

// Función para crear los IDs de ancla (sin cambios)
const createAnchorId = (title) => title.toLowerCase().replace(/ /g, '-').replace(/[()]/g, '');

const servicesData = [
  {
    title: "Presentación de Taxes",
    description: "Maximizamos tus deducciones y aseguramos el cumplimiento fiscal.",
    image: "/images/services/taxes.jpg",
    anchorId: createAnchorId("TAXES")
  },
  {
    title: "Servicios Contables",
    description: "Desde bookkeeping mensual hasta reportes financieros.",
    image: "/images/services/contabilidad.jpg",
    anchorId: createAnchorId("SERVICIOS CONTABLES")
  },
  {
    title: "Apertura de Empresas",
    description: "Te guiamos para lanzar tu LLC o Corporación con una base sólida.",
    image: "/images/services/apertura-empresa.jpg",
    anchorId: createAnchorId("APERTURA DE EMPRESAS (LLC Y CORPORACIONES)")
  },
  {
    title: "Seguros de Vida y Salud",
    description: "Protege tu futuro y el de tu familia con planes personalizados.",
    image: "/images/services/seguros.jpg",
    anchorId: createAnchorId("SEGUROS DE VIDA Y SALUD")
  },
  {
    title: "Payroll Básico",
    description: "Gestionamos la nómina de tus empleados de manera eficiente y puntual.",
    image: "/images/services/payroll.jpg",
    anchorId: createAnchorId("Payroll Básico")
  },
  {
    title: "Notary Public",
    description: "Servicios de notariado confiables para tus documentos importantes.",
    image: "/images/services/notary.jpg",
    anchorId: createAnchorId("NOTARY PUBLIC")
  }
];

const Services = () => {
  return (
    // ¡LA CLAVE! Fondo oscuro y texto blanco para toda la sección
    <section id="servicios" className="py-20 lg:py-28 bg-gradient-hero text-white">
      <div className="container mx-auto px-4">
        {/* Header de la sección con colores de texto ajustados */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Áreas de Práctica
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Ofrecemos un espectro completo de servicios contables y financieros para asegurar tu éxito.
          </p>
        </div>

        {/* --- CARRUSEL DE SERVICIOS --- */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {servicesData.map((service, index) => (
              // Cada item del carrusel tiene un ancho definido
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
                            Saber Más →
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
        
      </div>
    </section>
  );
};

export default Services;