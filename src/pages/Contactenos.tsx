import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Asegúrate de que la ruta a tu componente Input es correcta
import { Phone, Mail, MapPin } from 'lucide-react';

// URL directa a la ubicación de la empresa en Google Maps
const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=CONSILIUM+MULTISERVICES+LLC,309+S+Royal+Poinciana+Blvd,Miami,FL+33166";

const Contactenos = () => {
  return (
    <>
      {/* ====== 1. HERO SECTION - SOLO IMAGEN (Sin cambios) ====== */}
      <section className="h-[50vh] lg:h-[60vh]">
        <img
          src="/yainie-consiliumSERVICES.png"
          alt="Contacto con Consilium Multiservices"
          className="w-full h-full object-cover object-center"
        />
      </section>

      {/* ====== 2. SECCIÓN DE CONTENIDO Y FORMULARIO (Columna izquierda actualizada) ====== */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 items-start gap-12 lg:gap-16">
            
            {/* --- Columna Izquierda: Imagen del Mapa e Información --- */}
            <div className="space-y-6 pt-2">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Visítanos o Contáctanos
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Encuéntranos en Miami o completa el formulario. Estamos listos para ofrecerte la solución que tu futuro necesita.
              </p>
              
              {/* --- Imagen Clicable del Mapa --- */}
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="block group">
                <img
                  src="/images/google-maps-location.jpg" // ¡IMPORTANTE! Reemplaza esto con tu captura de pantalla
                  alt="Ubicación de Consilium Multiservices en Google Maps"
                  className="rounded-xl shadow-lg border border-gray-200 transition-transform duration-300 group-hover:scale-105"
                />
              </a>

              {/* --- Información de Contacto Actualizada --- */}
              <div className="space-y-5 pt-4">
                <a href="tel:+17865990462" className="flex items-center gap-4 text-gray-800 hover:text-primary transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                  <span className="text-lg font-medium">+1 (786) 599-0462</span>
                </a>
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 text-gray-800 hover:text-primary transition-colors">
                  <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-lg font-medium">309 S Royal Poinciana Blvd, Miami, FL 33166, Estados Unidos</span>
                </a>
              </div>
            </div>

            {/* --- Columna Derecha: Formulario de Contacto (sin cambios) --- */}
            <div>
              <div className="bg-white rounded-xl p-8 shadow-xl border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Solicita tu Consulta Gratuita</h2>
                <form className="space-y-5">
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
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contactenos;