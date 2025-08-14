import { useState } from "react";
// ¡IMPORTANTE! Importamos HashLink y le damos el alias "Link" para usarlo en todo el componente.
// Ahora, cada vez que escribamos <Link>, estaremos usando el poderoso HashLink.
import { HashLink as Link } from 'react-router-hash-link'; 
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useTranslation } from 'react-i18next';
import consiliumLogo from "@/assets/consilium-logo.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { openWhatsAppForAppointment } from '@/lib/whatsapp-utils';

// Función para crear los IDs de ancla (sin cambios)
const createAnchorId = (title) => title.toLowerCase().replace(/ /g, '-').replace(/[()]/g, '');

const servicesForMenu = [
  { name: "nav.services.taxes", href: `/servicios#${createAnchorId("TAXES")}` },
  { name: "nav.services.accounting", href: `/servicios#${createAnchorId("SERVICIOS CONTABLES")}` },
  { name: "nav.services.business", href: `/servicios#${createAnchorId("APERTURA DE EMPRESAS (LLC Y CORPORACIONES)")}` },
  { name: "nav.services.insurance", href: `/servicios#${createAnchorId("SEGUROS DE VIDA Y SALUD")}` },
  { name: "nav.services.notary", href: `/servicios#${createAnchorId("NOTARY PUBLIC")}` }
];

const navItems = [
  { name: "nav.inicio", href: "/" },
  { name: "nav.servicios", href: "/servicios", submenu: servicesForMenu },
/*   { name: "nav.nosotros", href: "/nosotros" }, */
  { name: "nav.contacto", href: "/contacto" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex-shrink-0">
              <img src={consiliumLogo} alt="Consilium Multiservices LLC Logo" className="h-14 sm:h-16 w-auto" />
            </Link>

            {/* ====== NAVEGACIÓN DE ESCRITORIO CORREGIDA ====== */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                // LA CLAVE: 'relative group' en el contenedor principal del link
                <div key={item.name} className="relative group">
                  <Link to={item.href} className="text-foreground hover:text-primary transition-colors duration-200 font-medium flex items-center space-x-1 py-2">
                    <span>{t(item.name)}</span>
                    {item.submenu && <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />}
                  </Link>
                  
                  {item.submenu && (
                    // ¡CLASES COMPLETAS Y CORRECTAS AQUÍ!
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <Link key={subItem.name} to={subItem.href} smooth className="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors duration-200">
                            {t(subItem.name)}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <a href="tel:18064213785" className="flex items-center space-x-2 text-primary font-semibold hover:text-primary/80">
                <Phone size={20} />
                <span>{t('nav.callUs')}</span>
              </a>
              <LanguageSwitcher />
              <Button 
                className="bg-gradient-primary hover:bg-primary-dark text-primary-foreground font-semibold px-6 py-2 shadow-golden"
                onClick={openWhatsAppForAppointment}
              >
                {t('nav.scheduleAppointment')}
              </Button>
            </div>
            
            <div className="lg:hidden flex items-center space-x-3 sm:space-x-4">
              <LanguageSwitcher />
              <a href="tel:18064213785" className="text-foreground hover:text-primary">
                <Phone size={24} />
              </a>
              <button onClick={() => setIsMenuOpen(true)} className="text-foreground">
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* PANEL DE MENÚ MÓVIL (SIN CAMBIOS, PERO USARÁ <Link> QUE AHORA ES HashLink) */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-background z-50 flex flex-col p-4">
          <div className="flex items-center justify-between pb-4 border-b border-border">
            <Link to="/" onClick={closeMenu}>
              <img src={consiliumLogo} alt="Consilium Multiservices LLC Logo" className="h-14 w-auto" />
            </Link>
            <button onClick={closeMenu} className="text-foreground">
              <X size={30} />
            </button>
          </div>
          <nav className="flex-grow flex flex-col items-center justify-center space-y-6">
            {navItems.map((item) => (
              <Link key={item.name} to={item.href} onClick={closeMenu} className="text-2xl font-medium text-foreground hover:text-primary transition-colors">
                {t(item.name)}
              </Link>
            ))}
          </nav>
          <div className="pt-6 border-t border-border">
            <Button 
              size="lg" 
              className="w-full bg-gradient-primary hover:bg-primary-dark text-primary-foreground font-semibold shadow-golden"
              onClick={() => {
                openWhatsAppForAppointment();
                closeMenu();
              }}
            >
              {t('nav.scheduleAppointment')}
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;