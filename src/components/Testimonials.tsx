import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from 'react-i18next'; // Mantenemos la importación para las traducciones
import React, { useState, useEffect, useRef } from 'react'; // Añadimos los hooks para el carrusel
import Autoplay from "embla-carousel-autoplay"; // Añadimos el plugin de autoplay

// Datos de testimonios (sin cambios)
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
  // Mantenemos el hook de traducción
  const { t } = useTranslation();

  // --- LÓGICA DEL CARRUSEL (AÑADIDA) ---
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );
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
  // --- FIN DE LA LÓGICA DEL CARRUSEL ---
  
  return (
    <section id="testimonios" className="relative py-20 lg:py-28">
      
      {/* Fondo y superposición (sin cambios) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/backgrounds/office-blur.jpg" 
          alt="Fondo de oficina profesional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/80"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header de la sección, usando la traducción (sin cambios) */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            {t('testimonials.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Carrusel de Testimonios (MODIFICADO para incluir plugins y API) */}
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          opts={{ align: "start", loop: true }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
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
        
        {/* --- PUNTOS DE NAVEGACIÓN (AÑADIDOS, SOLO PARA MÓVIL) --- */}
        <div className="sm:hidden flex justify-center items-center gap-2 mt-4">
            {Array.from({ length: count }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                        current === index + 1 ? 'bg-white' : 'bg-white/50'
                    }`}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;