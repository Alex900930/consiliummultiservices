import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone } from "lucide-react";
import { openWhatsAppForAppointment } from '@/lib/whatsapp-utils';

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-end justify-center overflow-hidden">
        {/* 1. Background (Video y Fallback de Imagen) */}
        <div className="absolute inset-0 z-0">
          {/* Video para Desktop: limpio y sin overlays oscuros */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
            style={{ pointerEvents: 'none' }}
          >
            {/* Nombre del video corregido */}
            <source src="/videoBackground.mp4" type="video/mp4" />
            Tu navegador no soporta el tag de video.
          </video>
          
          {/* Imagen estática para tablet y móvil */}
          <img
            src="/Imagen1.png"
            alt="Servicios profesionales de contabilidad"
            className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 md:hidden"
          />
          
          {/* Gradiente sutil solo en la parte inferior para legibilidad del texto */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        </div>

        {/* 2. Contenido Principal */}
        <div className="relative z-10 container mx-auto px-4 mb-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-end">
            
            {/* Columna Izquierda: Mensaje y CTA */}
            <div className="text-white space-y-6 text-center md:text-left ">
             {/*  <h1 
                className="text-5xl md:text-7xl font-bold leading-tight"
                style={{ textShadow: '0 4px 15px rgba(0, 0, 0, 0.7)' }}
              >
               La contabilidad es el lenguaje del negocio. <span className="text-primary">Nosotros lo hablamos por ti</span>
              </h1> */}

              <blockquote 
                className="text-lg text-gray-200 italic border-l-4 border-primary pl-6 max-w-2xl mx-auto md:mx-0  md:block"
                style={{ textShadow: '0 2px 5px rgba(0, 0, 0, 0.5)' }}
              >
                "La contabilidad es el lenguaje del negocio, Nosotros lo hablamos por ti."

                 <p 
                className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto md:mx-0"
                style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)' }}
              >
                — <span className="font-semibold">Warrent Buffet</span>
              </p> 
              </blockquote>

               <div className="pt-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:bg-primary-dark text-primary-foreground font-bold px-10 py-6 text-xl shadow-golden transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                  onClick={openWhatsAppForAppointment}
                >
                  Agendar Consulta Gratuita
                </Button>
              </div> 
            </div>

            {/* Columna Derecha: Formulario de Contacto - Solo visible en Desktop */}
            <div className="hidden md:flex md:justify-end">
              {/*<div className="bg-white/95 backdrop-blur-md rounded-xl p-8 shadow-2xl w-full max-w-md border border-white/20">*/}
               {/*  <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Contacte a un Experto
                  </h2>
                  <p className="text-gray-600 mt-1">
                    Reciba una consulta gratuita y sin compromiso.
                  </p>
                </div> */}

               {/*  <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nombre" className="sr-only">Nombre</label>
                      <Input id="nombre" type="text" placeholder="Nombre" required />
                    </div>
                    <div>
                      <label htmlFor="apellidos" className="sr-only">Apellidos</label>
                      <Input id="apellidos" type="text" placeholder="Apellidos" required />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="sr-only">Número de Teléfono</label>
                    <Input id="phone" type="tel" placeholder="Número de Teléfono" required />
                  </div>

                  <div>
                    <label htmlFor="email" className="sr-only">Correo Electrónico</label>
                    <Input id="email" type="email" placeholder="Correo Electrónico" required />
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full font-bold text-base bg-gradient-primary hover:bg-primary-dark text-primary-foreground shadow-golden"
                  >
                    Enviar para mi Consulta
                  </Button>

                  <p className="text-xs text-gray-500 text-center pt-1">
                    Su información es 100% confidencial.
                  </p>
                </form> */}
             {/* </div>*/}
            </div>
          </div>
        </div>
      </section>

      {/* Formulario para Tablet y Móvil - Debajo del Hero */}
      <section className="md:hidden bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Contacte a un Experto
              </h2>
              <p className="text-gray-600">
                Reciba una consulta gratuita y sin compromiso.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-xl border border-gray-200">
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nombre-mobile" className="sr-only">Nombre</label>
                    <Input id="nombre-mobile" type="text" placeholder="Nombre" required />
                  </div>
                  <div>
                    <label htmlFor="apellidos-mobile" className="sr-only">Apellidos</label>
                    <Input id="apellidos-mobile" type="text" placeholder="Apellidos" required />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone-mobile" className="sr-only">Número de Teléfono</label>
                  <Input id="phone-mobile" type="tel" placeholder="Número de Teléfono" required />
                </div>

                <div>
                  <label htmlFor="email-mobile" className="sr-only">Correo Electrónico</label>
                  <Input id="email-mobile" type="email" placeholder="Correo Electrónico" required />
                </div>
                
                {/* Botón del formulario con los colores de marca */}
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full font-bold text-base bg-gradient-primary hover:bg-primary-dark text-primary-foreground shadow-golden"
                >
                  Enviar para mi Consulta
                </Button>

                <p className="text-xs text-gray-500 text-center pt-1">
                  Su información es 100% confidencial.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;