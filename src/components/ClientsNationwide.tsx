import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { openWhatsAppForConsultation } from '@/lib/whatsapp-utils';
import { useTranslation } from 'react-i18next';

const ClientsNationwide = () => {
  const { t } = useTranslation();
  
  return (
    // Contenedor relativo para poder posicionar el fondo detrás del contenido
    <section id="clientes-nacionales" className="relative">

      {/* --- Capa de Fondo: Imagen del Mapa + Superposición Oscura --- */}
      <div className="absolute inset-0 z-0">
        <img
          // ¡IMPORTANTE! Deberás conseguir una imagen de mapa y colocarla aquí
          src="/images/backgrounds/map-usa.webp" 
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
            {t('clients.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-300" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
            {t('clients.subtitle')}
          </p>
          <Button 
            size="lg" 
            className="mt-8 bg-gradient-primary hover:bg-primary-dark text-primary-foreground font-semibold shadow-golden text-lg"
            onClick={openWhatsAppForConsultation}
          >
            {t('clients.cta')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClientsNationwide;