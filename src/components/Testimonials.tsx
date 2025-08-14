import { Star, Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';

// Datos de testimonios con un formato más completo
const testimonialsData = [
  {
    name: "Carlos R.",
    role: "CEO de Tech Solutions Inc.",
    content: "Consilium Multiservices transformó nuestra gestión financiera. Su atención al detalle en el bookkeeping y los taxes nos ha ahorrado miles. ¡Imprescindibles!",
    rating: 5,
  },
  {
    name: "Sofía L.",
    role: "Dueña de The Local Bistro",
    content: "Como dueña de un pequeño negocio, el payroll era mi mayor dolor de cabeza. El equipo lo hizo simple, rápido y sin errores. Ahora puedo enfocarme en mis clientes.",
    rating: 5,
  },
  {
    name: "Miguel A.",
    role: "Contratista Independiente",
    content: "La apertura de mi LLC fue un proceso increíblemente fácil gracias a ellos. Me guiaron en cada paso, desde el EIN hasta la apertura de la cuenta bancaria. 100% recomendados.",
    rating: 5,
  },
  {
    name: "Elena V.",
    role: "Fundadora de Creative Minds",
    content: "Su asesoría fiscal ha sido clave para nuestro crecimiento. Entienden las necesidades de las startups y ofrecen soluciones reales y efectivas.",
    rating: 5,
  },
];

const Testimonials = () => {
  const { t } = useTranslation();
  
  return (
    // ¡LA CLAVE! Contenedor relativo para superponer contenido sobre el fondo
    <section id="testimonios" className="relative py-20 lg:py-28">
      
      {/* --- Capa de Fondo --- */}
      <div className="absolute inset-0 z-0">
        <img
          // ¡IMPORTANTE! Usa una imagen de fondo profesional y con desenfoque
          src="/images/backgrounds/office-blur.jpg" 
          alt="Fondo de oficina profesional"
          className="w-full h-full object-cover"
        />
        {/* Superposición oscura para legibilidad del texto */}
        <div className="absolute inset-0 bg-gray-900/80"></div>
      </div>

      {/* --- Capa de Contenido --- */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            {t('testimonials.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Carrusel de Testimonios */}
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  {/* Tarjeta con efecto "Glassmorphism" */}
                  <Card className="h-full bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl">
                    <CardContent className="p-8 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center space-x-1 mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <blockquote className="text-lg italic leading-relaxed">
                          "{testimonial.content}"
                        </blockquote>
                      </div>
                      <div className="mt-8 pt-6 border-t border-white/20">
                        <p className="font-semibold text-white">{testimonial.name}</p>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
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

export default Testimonials;