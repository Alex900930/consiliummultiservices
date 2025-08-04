import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useTranslation } from 'react-i18next';
import consiliumLogo from "@/assets/consilium-logo.png";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { name: t('nav.inicio'), href: "#inicio" },
    { name: t('nav.nosotros'), href: "#nosotros" },
    { name: t('nav.servicios'), href: "#servicios" },
    { name: t('nav.paquetes'), href: "#paquetes" },
    { name: t('nav.contacto'), href: "#contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={consiliumLogo} alt="Consilium Multiservices LLC" className="h-16 w-36" />
            {/* <div className="text-lg font-bold text-foreground">
              CONSILIUM MULTISERVICES LLC
            </div> */}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Language Switcher & CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher />
            <Button className="bg-gradient-primary hover:bg-primary-dark text-primary-foreground font-semibold px-6 py-2 shadow-golden">
              {t('nav.cta')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-3 mt-4">
                <LanguageSwitcher />
                <Button className="bg-gradient-primary hover:bg-primary-dark text-primary-foreground font-semibold px-6 py-2 shadow-golden w-full">
                  {t('nav.cta')}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;