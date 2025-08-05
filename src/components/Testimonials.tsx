import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "María G.",
      location: "Miami, FL",
      content: "¡Ya tengo mis impuestos al día! Son un excelente equipo, gracias por ayudarme con mi bookkeeping. Ahora puedo enfocarme en hacer crecer mi negocio sin preocuparme por la contabilidad.",
      rating: 5
    },
    {
      name: "Carlos R.",
      location: "Orlando, FL",
      content: "Ha sido una bendición haberlos encontrado porque he estado muy estresado por no tener mis finanzas organizadas, pero ustedes me hacen sentir tranquilo. Siempre me llaman y me hacen saber cómo va mi proceso. ¡Tengo confianza total!",
      rating: 5
    },
    {
      name: "Ana L.",
      location: "Tampa, FL",
      content: "Consilium, quiero darles las gracias por haber hecho tan buen trabajo al ayudarme con mi payroll y taxes. Ha cambiado mi vida y la de mi familia, ustedes sí que son verdaderos profesionales.",
      rating: 5
    },
    {
      name: "Roberto M.",
      location: "Jacksonville, FL",
      content: "Excelente servicio de contabilidad. Me ayudaron a organizar mis cuentas por cobrar y pagar de manera profesional. Ahora tengo control total de mis finanzas empresariales.",
      rating: 5
    },
    {
      name: "Patricia S.",
      location: "Fort Lauderdale, FL",
      content: "Los servicios premium de Consilium han sido fundamentales para mi negocio. Su asesoría financiera y reportes para inversionistas me han ayudado a crecer exponencialmente.",
      rating: 5
    },
    {
      name: "Miguel A.",
      location: "West Palm Beach, FL",
      content: "Como contratista, necesitaba alguien que entendiera mi negocio. Consilium no solo maneja mi contabilidad, sino que me asesora en decisiones financieras importantes. ¡Altamente recomendados!",
      rating: 5
    }
  ];

  return (
    <section id="testimonios" className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Quote className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Testimonios de Clientes</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Lo que dicen nuestros
            <span className="text-primary block lg:inline"> clientes</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Nuestros clientes confían en nosotros para mantener sus finanzas organizadas y sus impuestos al día
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <div className="bg-gradient-card rounded-2xl p-8 lg:p-12 shadow-elegant max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              ¿Listo para organizar sus finanzas?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Únase a miles de clientes satisfechos que confían en Consilium Multiservices 
              para mantener sus finanzas claras y sus impuestos al día.
            </p>
            <button className="bg-gradient-primary hover:bg-primary-dark text-primary-foreground font-bold px-8 py-4 rounded-xl text-lg shadow-golden transform hover:scale-105 transition-all duration-300">
              ¡Agende su consulta gratuita hoy!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 