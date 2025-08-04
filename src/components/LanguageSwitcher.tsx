import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from 'react-country-flag';
import { Button } from '@/components/ui/button';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  // Inicializamos el estado con el idioma actual de i18n, por si acaso no es 'es'
  const [currentLang, setCurrentLang] = useState(i18n.language.split('-')[0]);

  const toggleLanguage = () => {
    const newLang = currentLang === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
    setCurrentLang(newLang);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center space-x-2 p-2 hover:bg-gray-100 transition-colors"
      title={currentLang === 'es' ? 'Change to English' : 'Cambiar a Español'}
    >
      <div className="flex items-center justify-center" style={{ fontSize: '1.5em' }}>
        {currentLang === 'es' ? (
          // Bandera de Estados Unidos para cambiar a Inglés
          <ReactCountryFlag
            countryCode="US"
            svg
            style={{
              width: '1.5em',
              height: '1.5em',
            }}
            title="USA"
          />
        ) : (
          // Bandera de Cuba para cambiar a Español
          <ReactCountryFlag
            countryCode="CU"
            svg
            style={{
              width: '1.5em',
              height: '1.5em',
            }}
            title="Cuba"
          />
        )}
      </div>

      <span className="font-medium text-sm">
        {currentLang === 'es' ? 'EN' : 'ES'}
      </span>
    </Button>
  );
};

export default LanguageSwitcher;