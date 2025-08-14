import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { openWhatsAppForConsultation } from '@/lib/whatsapp-utils';

const ClientsNationwide = () => {
  return (
    // Contenedor relativo para poder posicionar el fondo detrás del contenido
    <section id="clientes-nacionales" className="relative">

      {/* --- Capa de Fondo: Imagen del Mapa + Superposición Oscura --- */}
      <div className="absolute inset-0 z-0">
        <img
          // ¡IMPORTANTE! Deberás conseguir una imagen de mapa y colocarla aquí
          src="/images/backgrounds/map-usa.jpg" 
          alt="Mapa de Estados Unidos representando servicio a nivel nacional"
          className="w-full h-full object-cover"
        />
        {/* La superposición oscura es clave para la legibilidad */}
        <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm"></div>
      </div>

      {/* --- Capa de Contenido --- */}
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
            Brindamos Servicios a Nivel Nacional
          </h2>
          <p className="mt-4 text-lg text-gray-300" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
            No importa en qué estado se encuentre, nuestra firma está equipada con la tecnología y la experiencia para ofrecerle servicios contables y financieros de primer nivel de forma remota, segura y eficiente.
          </p>
          <Button 
            size="lg" 
            className="mt-8 bg-gradient-primary hover:bg-primary-dark text-primary-foreground font-semibold shadow-golden text-lg"
            onClick={openWhatsAppForConsultation}
          >
            Programe una Consulta Virtual
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClientsNationwide;