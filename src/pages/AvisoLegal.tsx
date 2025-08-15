import React from 'react';
import { useTranslation, Trans } from 'react-i18next'; // 1. Importar

const AvisoLegal = () => {
  const { t } = useTranslation(); // 2. Usar el hook

  return (
    <>
      {/* ====== 1. HERO SECTION - SOLO IMAGEN ====== */}
      <section className="h-[50vh] lg:h-[90vh]">
        <img
          src="/yainie-consiliumTax.png"
          alt={t('legal-notice.heroAlt')} // Traducido
          className="w-full h-full object-cover object-center"
        />
      </section>

      {/* ====== 2. SECCIÓN DE CONTENIDO LEGAL ====== */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            <header className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {t('legal-notice.title')} {/* Traducido */}
              </h1>
            </header>

            {/* 3. Reemplazar todos los textos fijos */}
            <div className="prose prose-lg max-w-none text-gray-700 space-y-8">

              {/* --- Descargo de Responsabilidad Importante --- */}
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <p className="font-semibold text-yellow-800">
                  {t('legal-notice.disclaimer')}
                </p>
              </div>

              <div>
                <p>{t('legal-notice.readCarefully')}</p>
              </div>

              {/* --- Titular del sitio web --- */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">{t('legal-notice.owner.title')}</h2>
                <p>
                  <Trans i18nKey="legal-notice.owner.p1">
                    El presente sitio web [www.consiliumgrpg.com] es operado por Consilium Multiservices LLC... <a href="mailto:info@consiliumgrpg.com" className="text-primary hover:underline">info@consiliumgrpg.com</a>.
                  </Trans>
                </p>
              </div>

              {/* --- Propiedad intelectual --- */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">{t('legal-notice.ip.title')}</h2>
                <p>{t('legal-notice.ip.p1')}</p>
              </div>

              {/* --- Acceso y uso del sitio web --- */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">{t('legal-notice.usage.title')}</h2>
                <p>{t('legal-notice.usage.p1')}</p>
              </div>

              {/* --- Exclusión de responsabilidad --- */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">{t('legal-notice.liability.title')}</h2>
                <p>{t('legal-notice.liability.p1')}</p>
              </div>

              {/* --- Normativa aplicable y jurisdicción --- */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">{t('legal-notice.jurisdiction.title')}</h2>
                <p>{t('legal-notice.jurisdiction.p1')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AvisoLegal;