// PoliticasDePrivacidad.js

import React from 'react';

const PoliticasDePrivacidad = () => {
  return (
    <>
      {/* ====== 1. HERO SECTION - SOLO IMAGEN ====== */}
      {/* Mantenemos la consistencia visual con una imagen de cabecera limpia. */}
      <section className="h-[50vh] lg:h-[90vh]">
        <img
          src="/yainie-consiliumSERVICES.png" // Usando la imagen de marca consistente
          alt="Políticas de Privacidad de Consilium Multiservices"
          className="w-full h-full object-cover object-center"
        />
      </section>

      {/* ====== 2. SECCIÓN DE CONTENIDO DE LAS POLÍTICAS ====== */}
      {/* El contenido se presenta en un formato limpio y legible de una sola columna. */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          {/* Contenedor para centrar y limitar el ancho del texto para mejor legibilidad */}
          <div className="max-w-4xl mx-auto">
            
            <header className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Políticas de Privacidad
              </h1>
            </header>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
              {/* --- Introducción --- */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">📘 Introducción</h2>
                <p>
                  Consilium Multiservices LLC reconoce la importancia de proteger la privacidad y seguridad de los datos personales de sus usuarios y clientes. La presente Política de Privacidad tiene por objeto informar, de manera clara y transparente, sobre la naturaleza de los datos que recopilamos, las finalidades de su tratamiento, y los derechos que asisten a los titulares de dichos datos. Por favor, lea detenidamente:
                </p>
              </div>

              {/* --- Datos que recopilamos --- */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">📊 Datos que recopilamos</h2>
                <p>
                  En el marco de la interacción con nuestro sitio web, podemos recopilar algunas de las siguientes categorías de información:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li><strong>Datos personales identificativos:</strong> nombre completo, lugar de domicilio, número telefónico y/o celular y dirección de correo electrónico.</li>
                  <li><strong>Datos técnicos:</strong> dirección IP, tipo de navegador utilizado, ubicación geográfica estimada, y páginas visitadas dentro del sitio web.</li>
                </ul>
              </div>

              {/* --- Finalidades del tratamiento --- */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">🛠️ Finalidades del tratamiento de datos</h2>
                <p>
                  La información recopilada se procesa con el fin de:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Prestar, administrar y optimizar nuestros servicios digitales y presenciales.</li>
                  <li>Gestionar solicitudes, trámites y comunicaciones vinculadas a los servicios ofrecidos.</li>
                  <li>Atender consultas, brindar asistencia técnica y mantener una comunicación efectiva.</li>
                  <li>Detectar, investigar y prevenir actividades fraudulentas, ilícitas o que pudieran comprometer la seguridad de la plataforma.</li>
                </ul>
              </div>

              {/* --- Derechos del titular --- */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">🎛 Derechos del titular de los datos</h2>
                 <p>
                  El usuario podrá, en todo momento y de manera gratuita:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Abstenerse de proporcionar determinados datos personales, con la salvedad de que dicha decisión podría limitar el acceso a ciertas funcionalidades.</li>
                  <li>Solicitar el acceso, rectificación, actualización o supresión de sus datos personales, conforme lo establecido por la normativa aplicable en materia de protección de datos.</li>
                </ul>
              </div>

              {/* --- Medidas de seguridad --- */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">🔐 Medidas de seguridad</h2>
                <p>
                  Consilium Multiservices LLC implementa medidas técnicas, organizativas y administrativas apropiadas para garantizar la confidencialidad, integridad y disponibilidad de la información personal, y prevenir su acceso no autorizado, alteración o pérdida.
                </p>
              </div>

              {/* --- Uso de Cookies --- */}
              <div>
                  <h2 className="text-2xl font-semibold text-gray-800">🍪 Uso de cookies</h2>
                  <p>
                    Este sitio web utiliza cookies y tecnologías análogas con el propósito de mejorar la experiencia de navegación y ofrecer contenidos personalizados. El usuario podrá configurar su navegador para rechazar o eliminar estas tecnologías, según sus preferencias.
                  </p>
              </div>

              {/* --- Enlaces a sitios externos --- */}
               <div>
                  <h2 className="text-2xl font-semibold text-gray-800">🔗 Enlaces a sitios externos</h2>
                  <p>
                    El sitio web puede contener enlaces a plataformas o recursos externos que no están bajo nuestra gestión (como Instagram y Facebook). Consilium Multiservices LLC no se responsabiliza por el tratamiento de dichos datos efectuado por estos sitios ni por sus respectivas políticas de privacidad.
                  </p>
              </div>

              {/* --- Modificaciones --- */}
              <div>
                  <h2 className="text-2xl font-semibold text-gray-800">🔄 Modificaciones a la política</h2>
                  <p>
                    La presente política podrá ser modificada periódicamente. Las actualizaciones serán publicadas en esta misma sección, indicando la fecha de entrada en vigor correspondiente, de manera que puedas revisarlas cuando quieras.
                  </p>
              </div>

               {/* --- Contacto --- */}
              <div>
                  <h2 className="text-2xl font-semibold text-gray-800">📬 Contacto</h2>
                  <p>
                    Para realizar cualquier consulta puedes comunicarte con nosotros a través del siguiente medio <a href="mailto:info@consiliumgrpg.com" className="text-primary hover:underline">info@consiliumgrpg.com</a> para ejercer derechos o solicitar mayor información sobre esta Política de Privacidad.
                  </p>
              </div>
            </div>

            <footer className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-center text-sm text-gray-500">
                    Última actualización: 21 de julio de 2025
                </p>
            </footer>
          </div>
        </div>
      </section>
    </>
  );
};

export default PoliticasDePrivacidad;