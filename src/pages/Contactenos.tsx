import React, { useState } from 'react'; // 1. Importar useState
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, MapPin } from 'lucide-react';

const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=CONSILIUM+MULTISERVICES+LLC,309+S+Royal+Poinciana+Blvd,Miami,FL+33166";

// 2. Define el número de WhatsApp de la empresa aquí (sin símbolos, solo números)
const WHATSAPP_NUMBER = "18064213785";

const Contactenos = () => {
  const { t } = useTranslation();

  // 3. Crear un estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    phone: '',
    email: '',
  });

  // 4. Función para actualizar el estado cuando el usuario escribe
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  // 5. Función que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // Construir el mensaje para WhatsApp
    const message = `
*¡Nueva Solicitud de Consulta Gratuita!*

*Nombre:* ${formData.nombre} ${formData.apellidos}
*Teléfono:* ${formData.phone}
*Correo Electrónico:* ${formData.email}

_Enviado desde el formulario de contacto del sitio web._
    `;

    // Codificar el mensaje para que sea seguro en una URL
    const encodedMessage = encodeURIComponent(message.trim());

    // Crear el enlace final de WhatsApp
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* ====== HERO SECTION (sin cambios) ====== */}
      <section className="h-[50vh] lg:h-[90vh]">
        <img
          src="/yainie-consiliumContactos.png"
          alt={t('contact-page.heroAlt')}
          className="w-full h-full object-cover object-center"
        />
      </section>

      {/* ====== SECCIÓN DE CONTENIDO Y FORMULARIO ====== */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 items-start gap-12 lg:gap-16">
            
            {/* --- Columna Izquierda (sin cambios) --- */}
            <div className="space-y-6 pt-2">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {t('contact-page.title')}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('contact-page.description')}
              </p>
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="block group">
                <img
                  src="/images/google-maps-location.jpg"
                  alt={t('contact-page.mapAlt')}
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
                  <span className="text-lg font-medium">{t('contact-page.address')}</span>
                </a>
              </div>
            </div>

            {/* --- Columna Derecha: Formulario de Contacto (MODIFICADO) --- */}
            <div>
              <div className="bg-white rounded-xl p-8 shadow-xl border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">{t('contact-page.form.title')}</h2>
                {/* 6. Añadir el manejador onSubmit al formulario */}
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nombre" className="sr-only">{t('contact-page.form.name')}</label>
                      <Input id="nombre" type="text" placeholder={t('contact-page.form.name')} required value={formData.nombre} onChange={handleChange} />
                    </div>
                    <div>
                      <label htmlFor="apellidos" className="sr-only">{t('contact-page.form.lastName')}</label>
                      <Input id="apellidos" type="text" placeholder={t('contact-page.form.lastName')} required value={formData.apellidos} onChange={handleChange} />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="sr-only">{t('contact-page.form.phone')}</label>
                    <Input id="phone" type="tel" placeholder={t('contact-page.form.phone')} required value={formData.phone} onChange={handleChange} />
                  </div>

                  <div>
                    <label htmlFor="email" className="sr-only">{t('contact-page.form.email')}</label>
                    <Input id="email" type="email" placeholder={t('contact-page.form.email')} required value={formData.email} onChange={handleChange} />
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full font-bold text-base bg-gradient-primary hover:bg-primary-dark text-primary-foreground shadow-golden"
                  >
                    {t('contact-page.form.submit')}
                  </Button>

                  <p className="text-xs text-gray-500 text-center pt-1">
                    {t('contact-page.form.confidential')}
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