import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, Clock } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-hero text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-primary/30 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-primary/20 rounded-full"></div>
        <div className="absolute bottom-20 left-32 w-24 h-24 border border-primary/30 rounded-full"></div>
        <div className="absolute bottom-32 right-10 w-12 h-12 bg-primary/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
            ¿Listo para despegar? 
            <span className="text-primary block">Agenda tu consulta gratis ahora</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto">
            Estabilizamos tus finanzas mientras tú enfocas en tu visión.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto my-12">
            <div className="text-center space-y-2">
              <Clock className="w-8 h-8 text-primary mx-auto" />
              <div className="text-sm text-gray-300">Consulta de 30 min</div>
              <div className="font-semibold">Completamente gratis</div>
            </div>
            <div className="text-center space-y-2">
              <Phone className="w-8 h-8 text-primary mx-auto" />
              <div className="text-sm text-gray-300">Llamada o videollamada</div>
              <div className="font-semibold">Tú eliges</div>
            </div>
            <div className="text-center space-y-2">
              <Mail className="w-8 h-8 text-primary mx-auto" />
              <div className="text-sm text-gray-300">Sin compromisos</div>
              <div className="font-semibold">Evaluación honesta</div>
            </div>
          </div>

          <div className="space-y-4 lg:space-y-0 lg:space-x-6 lg:flex lg:justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:bg-primary-dark text-primary-foreground font-bold px-10 py-4 text-lg shadow-golden transform hover:scale-105 transition-all duration-300"
            >
              Agendar mi consulta gratuita
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg backdrop-blur-sm"
            >
              Llamar ahora: +1 786 599-0462
            </Button>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-300 text-sm mb-4">
              Únete a más de 3,800+ empresarios que ya confían en nosotros
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-xs">⭐⭐⭐⭐⭐ 4.9/5 Rating</div>
              <div className="text-xs">• 500+ Casos exitosos</div>
              <div className="text-xs">• Respuesta en 24hrs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;