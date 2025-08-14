// AvisoLegal.js

import React from 'react';

const AvisoLegal = () => {
  return (
    <>
      {/* ====== 1. HERO SECTION - SOLO IMAGEN ====== */}
      {/* Estructura visual consistente con las otras páginas. */}
      <section className="h-[50vh] lg:h-[60vh]">
        <img
          src="/yainie-consiliumSERVICES.png" // Imagen de marca
          alt="Aviso Legal de Consilium Multiservices"
          className="w-full h-full object-cover object-center"
        />
      </section>

      {/* ====== 2. SECCIÓN DE CONTENIDO LEGAL ====== */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            <header className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Aviso Legal
              </h1>
            </header>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-8">

              {/* --- Descargo de Responsabilidad Importante --- */}
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <p className="font-semibold text-yellow-800">
                  Consilium Multiservices LLC no es un bufete de abogados ni sus representantes son abogados. No ofrecemos asesoría legal ni representación legal ante autoridades o tribunales. Nuestros servicios se limitan a la preparación y asistencia en el llenado de formularios migratorios y trámites administrativos permitidos por la ley. Para asesoría legal, siempre recomendamos consultar con un abogado de inmigración debidamente autorizado.
                </p>
              </div>

              <div>
                <p>
                  Se recomienda leer detenidamente el contenido que sigue, a fin de comprender el alcance del presente documento:
                </p>
              </div>

              {/* --- Titular del sitio web --- */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">Titular del sitio web</h2>
                <p>
                  El presente sitio web [www.consiliumgrpg.com] es operado por Consilium Multiservices LLC, entidad legalmente constituida en el Estado de Florida, EE.UU, con domicilio en 309 S Royal Poinciana Blvd, Miami, Fl, 33166, y correo electrónico de contacto: <a href="mailto:info@consiliumgrpg.com" className="text-primary hover:underline">info@consiliumgrpg.com</a>.
                </p>
              </div>

              {/* --- Propiedad intelectual --- */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">Propiedad intelectual</h2>
                <p>
                  Todos los contenidos publicados en este sitio —incluyendo, entre otros, textos, imágenes, logotipos, gráficos, documentos descargables y diseños— son propiedad exclusiva de Consilium Multiservices LLC, o se encuentran debidamente licenciados por terceros. Queda prohibida su reproducción, distribución o transformación sin autorización previa y expresa del titular.
                </p>
              </div>

              {/* --- Acceso y uso del sitio web --- */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">Acceso y uso del sitio web</h2>
                <p>
                  El usuario se compromete a utilizar este sitio de forma lícita y conforme a la normativa vigente. El uso indebido del contenido o la explotación comercial no autorizada podrán ser objeto de acciones legales. El acceso al sitio no implica relación contractual entre el usuario y el titular, salvo cuando se establezca explícitamente mediante otros medios.
                </p>
              </div>

              {/* --- Exclusión de responsabilidad --- */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">Exclusión de responsabilidad</h2>
                <p>
                  Consilium Multiservices LLC no garantiza la continuidad o ausencia de errores en el sitio web, ni se responsabiliza por posibles daños derivados del uso del contenido o por la presencia de enlaces a sitios externos. La información ofrecida tiene fines informativos y puede ser modificada sin previo aviso.
                </p>
              </div>

              {/* --- Normativa aplicable y jurisdicción --- */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">Normativa aplicable y jurisdicción</h2>
                <p>
                  Este Aviso Legal se rige por la legislación aplicable en EEUU. En caso de conflicto o disputa derivada del uso del sitio web, las partes se someterán a la jurisdicción de los tribunales competentes en el Estado de Florida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AvisoLegal;