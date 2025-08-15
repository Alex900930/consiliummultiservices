import React from 'react';
import { useTranslation, Trans } from 'react-i18next'; // 1. Importar useTranslation y Trans

const PoliticasDePrivacidad = () => {
  const { t } = useTranslation(); // 2. Usar el hook

  return (
    <>
      {/* ====== 1. HERO SECTION - SOLO IMAGEN ====== */}
      <section className="h-[50vh] lg:h-[90vh]">
        <img
          src="/yainie-consiliumTax.png"
          alt={t('privacy-policy.heroAlt')} // Traducido
          className="w-full h-full object-cover object-center"
        />
      </section>

      {/* ====== 2. SECCIÓN DE CONTENIDO DE LAS POLÍTICAS ====== */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            <header className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {t('privacy-policy.title')} {/* Traducido */}
              </h1>
            </header>

            {/* 3. Reemplazar todos los textos fijos */}
            <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
              {/* --- Introducción --- */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">{t('privacy-policy.introduction.title')}</h2>
                <p>{t('privacy-policy.introduction.p1')}</p>
              </div>

              {/* --- Datos que recopilamos --- */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">{t('privacy-policy.data.title')}</h2>
                <p>{t('privacy-policy.data.p1')}</p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  {/* `dangerouslySetInnerHTML` se usa aquí porque la traducción contiene etiquetas <strong> */}
                  <li dangerouslySetInnerHTML={{ __html: t('privacy-policy.data.li1') }} />
                  <li dangerouslySetInnerHTML={{ __html: t('privacy-policy.data.li2') }} />
                </ul>
              </div>

              {/* --- Finalidades del tratamiento --- */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">{t('privacy-policy.purpose.title')}</h2>
                <p>{t('privacy-policy.purpose.p1')}</p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>{t('privacy-policy.purpose.li1')}</li>
                  <li>{t('privacy-policy.purpose.li2')}</li>
                  <li>{t('privacy-policy.purpose.li3')}</li>
                  <li>{t('privacy-policy.purpose.li4')}</li>
                </ul>
              </div>

              {/* --- Derechos del titular --- */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">{t('privacy-policy.rights.title')}</h2>
                <p>{t('privacy-policy.rights.p1')}</p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>{t('privacy-policy.rights.li1')}</li>
                  <li>{t('privacy-policy.rights.li2')}</li>
                </ul>
              </div>

              {/* --- Medidas de seguridad --- */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">{t('privacy-policy.security.title')}</h2>
                <p>{t('privacy-policy.security.p1')}</p>
              </div>

              {/* --- Uso de Cookies --- */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">{t('privacy-policy.cookies.title')}</h2>
                <p>{t('privacy-policy.cookies.p1')}</p>
              </div>

              {/* --- Enlaces a sitios externos --- */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">{t('privacy-policy.links.title')}</h2>
                <p>{t('privacy-policy.links.p1')}</p>
              </div>

              {/* --- Modificaciones --- */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">{t('privacy-policy.modifications.title')}</h2>
                <p>{t('privacy-policy.modifications.p1')}</p>
              </div>

              {/* --- Contacto --- */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">{t('privacy-policy.contact.title')}</h2>
                <p>
                  {/* Usamos el componente Trans para manejar el enlace <a> anidado */}
                  <Trans i18nKey="privacy-policy.contact.p1">
                    Para realizar cualquier consulta puedes comunicarte con nosotros a través del siguiente medio <a href="mailto:info@consiliumgrpg.com" className="text-primary hover:underline">info@consiliumgrpg.com</a> para ejercer derechos o solicitar mayor información sobre esta Política de Privacidad.
                  </Trans>
                </p>
              </div>
            </div>

            <footer className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-center text-sm text-gray-500">
                {t('privacy-policy.lastUpdated')} {/* Traducido */}
              </p>
            </footer>
          </div>
        </div>
      </section>
    </>
  );
};

export default PoliticasDePrivacidad;