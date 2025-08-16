import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone } from "lucide-react";
import { openWhatsAppForAppointment } from '@/lib/whatsapp-utils';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  
  // 👇 --- AQUÍ ESTÁ LA CORRECCIÓN --- 👇
  // Reemplazamos el ID antiguo por el correcto que me proporcionaste.
  const youtubeVideoId = '9qvHqEXKCsQ';

  return (
    <>
      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-end justify-center overflow-hidden">
        {/* 1. Background (Video y Fallback de Imagen) */}
        <div className="absolute inset-0 z-0">

          {/* NUEVO Video de YouTube para Desktop */}
          <div className="video-background-container hidden md:block">
            <iframe
              // La variable con el ID correcto se usa aquí dos veces
              src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}?autoplay=1&mute=1&loop=1&playlist=${youtubeVideoId}&controls=0&showinfo=0&modestbranding=1&rel=0`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
          
          {/* Imagen estática para tablet y móvil (Esto no se cambia) */}
          <img
            src="/Imagen1.webp"
            alt="Servicios profesionales de contabilidad"
            className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 md:hidden"
          />
          
          {/* Gradiente sutil (Esto no se cambia) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        </div>

        {/* 2. Contenido Principal (El resto del componente queda igual) */}
        <div className="relative z-10 container mx-auto px-4 mb-20">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-end">
            
            {/* Columna Izquierda: Mensaje y CTA */}
            <div className="text-white space-y-6 text-center md:text-left ">
              <blockquote 
                className="text-lg text-gray-200 italic border-l-4 border-primary pl-6 max-w-2xl mx-auto md:mx-0  md:block"
                style={{ textShadow: '0 2px 5px rgba(0, 0, 0, 0.5)' }}
              >
                "{t('hero.quote')}"
                 <p 
                className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto md:mx-0"
                style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)' }}
              >
                <span className="font-semibold">{t('hero.quoteAuthor')}</span>
              </p> 
              </blockquote>
               <div className="pt-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:bg-primary-dark text-primary-foreground font-bold px-10 py-6 text-xl shadow-golden transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                  onClick={openWhatsAppForAppointment}
                >
                  {t('hero.scheduleButton')}
                </Button>
              </div> 
            </div>

            {/* Columna Derecha: Formulario de Contacto - Solo visible en Desktop */}
            <div className="hidden md:flex md:justify-end">
              {/* Contenido del formulario... */}
            </div>
          </div>
        </div>
      </section>

      {/* Formulario para Tablet y Móvil - Debajo del Hero */}
      <section className="hidden bg-white py-16">
        {/* Contenido del formulario... */}
      </section>
    </>
  );
};

export default Hero;