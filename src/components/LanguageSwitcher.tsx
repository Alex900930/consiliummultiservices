import { useTranslation } from 'react-i18next';
import ReactCountryFlag from 'react-country-flag';
import { Button } from '@/components/ui/button';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language.split('-')[0]; // 'es' o 'en'

  const toggleLanguage = () => {
    const newLang = currentLang === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  // --- Lógica de Visualización Corregida ---
  // Determina qué bandera y texto mostrar basado en el idioma ACTUAL
  const displayConfig = {
    es: {
      countryCode: 'ES', // Código de país para España
      label: 'ES',
      title: 'Change to English', // Tooltip para la acción
    },
    en: {
      countryCode: 'US', // Código de país para Estados Unidos
      label: 'EN',
      title: 'Cambiar a Español', // Tooltip para la acción
    },
  };

  const { countryCode, label, title } = displayConfig[currentLang] || displayConfig.en;

  return (
    <Button
      variant="ghost" // Usamos 'ghost' para un estilo más limpio, como en el ejemplo
      size="icon"
      onClick={toggleLanguage}
      className="flex items-center space-x-2 p-2"
      title={title} // El tooltip ahora describe la acción que se va a realizar
    >
      <ReactCountryFlag
        countryCode={countryCode} // La bandera correcta se muestra aquí
        svg
        style={{
          width: '1.75em', // Ligeramente más grande para mejor visibilidad
          height: '1.75em',
        }}
        aria-label={label}
      />
      {/* Opcional: puedes remover el texto si prefieres solo la bandera */}
     {/* <span className="font-medium text-sm">{label}</span>  */}
    </Button>
  );
};

export default LanguageSwitcher;