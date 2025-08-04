import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const Packages = () => {
  const packages = [
    {
      name: "Básico",
      price: "$299",
      period: "/mes",
      description: "Perfecto para emprendedores y pequeños negocios",
      features: [
        "Bookkeeping mensual completo",
        "Reportes financieros básicos",
        "Conciliación bancaria",
        "Soporte por email",
        "1 consulta mensual incluida"
      ],
      cta: "Comenzar ahora",
      popular: false
    },
    {
      name: "Estándar",
      price: "$599",
      period: "/mes", 
      description: "La opción más elegida por nuestros clientes",
      features: [
        "Todo lo del plan Básico",
        "Procesamiento de payroll",
        "Gestión de Sales Tax",
        "Reportes detallados",
        "Soporte telefónico prioritario",
        "2 consultas mensuales incluidas",
        "Configuración inicial gratis"
      ],
      cta: "Plan más popular",
      popular: true
    },
    {
      name: "Premium",
      price: "$999",
      period: "/mes",
      description: "Para empresas en crecimiento que necesitan más",
      features: [
        "Todo lo del plan Estándar",
        "CFO Virtual dedicado",
        "Asesoría fiscal avanzada",
        "Representación ante IRS",
        "Reportes premium personalizados",
        "Soporte 24/7",
        "Consultas ilimitadas",
        "Revisión trimestral estratégica"
      ],
      cta: "Hablar con experto",
      popular: false
    }
  ];

  return (
    <section id="paquetes" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Paquetes diseñados para <span className="text-primary">tu crecimiento</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Escoge el plan que mejor se adapta a tu negocio. Todos incluyen consulta gratuita.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-elegant ${
                pkg.popular 
                  ? 'ring-2 ring-primary shadow-golden bg-gradient-card' 
                  : 'bg-gradient-card border-0'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-primary text-primary-foreground text-center py-2 text-sm font-semibold">
                  <Star className="inline w-4 h-4 mr-1" />
                  MÁS POPULAR
                </div>
              )}
              
              <CardHeader className={`text-center ${pkg.popular ? 'pt-12' : 'pt-8'}`}>
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {pkg.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl lg:text-5xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-lg text-muted-foreground">{pkg.period}</span>
                </div>
                <CardDescription className="text-muted-foreground">
                  {pkg.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full py-3 font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gradient-primary hover:bg-primary-dark text-primary-foreground shadow-golden hover:scale-105'
                      : 'bg-secondary hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  {pkg.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 space-y-6">
          <div className="bg-gradient-card rounded-2xl p-8 max-w-4xl mx-auto shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¿No estás seguro qué plan elegir?
            </h3>
            <p className="text-muted-foreground mb-6">
              Agenda una consulta gratuita de 30 minutos y te ayudamos a encontrar la solución perfecta para tu negocio.
            </p>
            <Button className="bg-gradient-primary hover:bg-primary-dark text-primary-foreground font-bold px-8 py-3 shadow-golden hover:scale-105 transition-all duration-300">
              Agendar consulta gratuita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;