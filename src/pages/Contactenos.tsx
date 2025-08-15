import React from 'react';
import { useTranslation } from 'react-i18next'; // 1. Importar hook
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, MapPin } from 'lucide-react';

const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=CONSILIUM+MULTISERVICES+LLC,309+S+Royal+Poinciana+Blvd,Miami,FL+33166";

const Contactenos = () => {
  const { t } = useTranslation(); // 2. Inicializar hook

  return (
    <>
      {/* ====== 1. HERO SECTION - SOLO IMAGEN ====== */}
      <section className="h-[50vh] lg:h-[90vh]">
        <img
          src="/yainie-consiliumContactos.png"
          alt={t('contact-page.heroAlt')} // Traducido
          className="w-full h-full object-cover object-center"
        />
      </section>

      {/* ====== 2. SECCIÓN DE CONTENIDO Y FORMULARIO ====== */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 items-start gap-12 lg:gap-16">
            
            {/* --- Columna Izquierda: Imagen del Mapa e Información --- */}
            <div className="space-y-6 pt-2">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {t('contact-page.title')} {/* Traducido */}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('contact-page.description')} {/* Traducido */}
              </p>
              
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="block group">
                <img
                  src="/images/google-maps-location.jpg"
                  alt={t('contact-page.mapAlt')} // Traducido
                  className="rounded-xl shadow-lg border border-gray-200 transition-transform duration-300 group-hover:scale-105"
                />
              </a>

              <div className="space-y-5 pt-4">
                <a href="tel:+17865990462" className="flex items-center gap-4 text-gray-800 hover:text-primary transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                  <span className="text-lg font-medium">+1 (786) 599-0462</span>
                </a>
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 text-gray-800 hover:text-primary transition-colors">
                  <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-lg font-medium">{t('contact-page.address')}</span> {/* Traducido */}
                </a>
              </div>
            </div>

            {/* --- Columna Derecha: Formulario de Contacto --- */}
            <div>
              <div className="bg-white rounded-xl p-8 shadow-xl border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">{t('contact-page.form.title')}</h2> {/* Traducido */}
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nombre" className="sr-only">{t('contact-page.form.name')}</label>
                      <Input id="nombre" type="text" placeholder={t('contact-page.form.name')} required /> {/* Traducido */}
                    </div>
                    <div>
                      <label htmlFor="apellidos" className="sr-only">{t('contact-page.form.lastName')}</label>
                      <Input id="apellidos" type="text" placeholder={t('contact-page.form.lastName')} required /> {/* Traducido */}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="sr-only">{t('contact-page.form.phone')}</label>
                    <Input id="phone" type="tel" placeholder={t('contact-page.form.phone')} required /> {/* Traducido */}
                  </div>

                  <div>
                    <label htmlFor="email" className="sr-only">{t('contact-page.form.email')}</label>
                    <Input id="email" type="email" placeholder={t('contact-page.form.email')} required /> {/* Traducido */}
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full font-bold text-base bg-gradient-primary hover:bg-primary-dark text-primary-foreground shadow-golden"
                  >
                    {t('contact-page.form.submit')} {/* Traducido */}
                  </Button>

                  <p className="text-xs text-gray-500 text-center pt-1">
                    {t('contact-page.form.confidential')} {/* Traducido */}
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