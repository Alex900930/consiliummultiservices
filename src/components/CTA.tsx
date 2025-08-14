import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, Clock, Calculator, Shield, Users } from "lucide-react";
import { openWhatsAppForAppointment, openWhatsAppForConsultation } from "@/lib/whatsapp-utils";

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
          Si no controlas tus finanzas, ellas te controlan a ti. 
            <span className="text-primary block">¡Agende su consulta gratuita hoy!</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto">
            Nuestro equipo de contadores profesionales está listo para ayudarle a mantener 
            sus finanzas claras y sus impuestos al día.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto my-12">
            <div className="text-center space-y-2">
              <Calculator className="w-8 h-8 text-primary mx-auto" />
              <div className="text-sm text-gray-300">Evaluación completa</div>
              <div className="font-semibold">De sus necesidades contables</div>
            </div>
            <div className="text-center space-y-2">
              <Shield className="w-8 h-8 text-primary mx-auto" />
              <div className="text-sm text-gray-300">Sin compromisos</div>
              <div className="font-semibold">Evaluación honesta</div>
            </div>
            <div className="text-center space-y-2">
              <Users className="w-8 h-8 text-primary mx-auto" />
              <div className="text-sm text-gray-300">Equipo certificado</div>
              <div className="font-semibold">15+ años de experiencia</div>
            </div>
          </div>

          <div className="space-y-4 lg:space-y-0 lg:space-x-6 lg:flex lg:justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:bg-primary-dark text-primary-foreground font-bold px-10 py-4 text-lg shadow-golden transform hover:scale-105 transition-all duration-300"
              onClick={openWhatsAppForAppointment}
            >
              ¡Agende su cita hoy!
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-primary font-semibold px-8 py-4 text-lg backdrop-blur-sm"
              onClick={openWhatsAppForConsultation}
            >
              Llamar ahora: +1 786 599-0462
            </Button>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-300 text-sm mb-4">
              Únase a más de 3,800+ clientes que ya confían en Consilium Multiservices
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-xs">⭐⭐⭐⭐⭐ 4.9/5 Rating</div>
              <div className="text-xs">• 500+ Servicios exitosos</div>
              <div className="text-xs">• Respuesta en 24hrs</div>
            </div>
          </div>

          {/* Additional Services Highlight */}
          <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Nuestro Compromiso con el Cliente</h3>
            <p className="text-lg text-gray-200 mb-8">
              Nuestro equipo está dedicado a ayudarle a mantener sus finanzas organizadas 
              y cumplir con todas las obligaciones fiscales. Llámenos ahora y hable directamente 
              con nuestro equipo de contadores para una consulta personalizada.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Manténgase informado</h4>
                  <p className="text-sm text-gray-300">Reciba actualizaciones periódicas sobre el estado de sus finanzas</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Comunicación constante</h4>
                  <p className="text-sm text-gray-300">No dejamos ninguna llamada, mensaje o correo sin responder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;