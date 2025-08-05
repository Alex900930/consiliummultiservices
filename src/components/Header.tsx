import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useTranslation } from 'react-i18next';
import consiliumLogo from "@/assets/consilium-logo.png";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { 
      name: "Servicios Contables", 
      href: "#servicios",
      submenu: [
        { name: "Bookkeeping Mensual", href: "#bookkeeping" },
        { name: "Cuentas por Cobrar y Pagar", href: "#cuentas" },
        { name: "Payroll Básico", href: "#payroll" },
        { name: "Presentación de Taxes", href: "#taxes" },
        { name: "Consultoría y Asesoría", href: "#consultoria" },
        { name: "Servicios Premium", href: "#premium" }
      ]
    },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Equipo", href: "#equipo" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={consiliumLogo} alt="Consilium Multiservices LLC" className="h-16 w-36" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium flex items-center space-x-1"
                >
                  <span>{item.name}</span>
                  {item.submenu && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
                
                {/* Dropdown for Services */}
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Phone & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-primary font-semibold">
              <Phone size={20} />
              <span>Llamenos</span>
            </div>
            <LanguageSwitcher />
            <Button className="bg-gradient-primary hover:bg-primary-dark text-primary-foreground font-semibold px-6 py-2 shadow-golden">
              ¡Agende su cita hoy!
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
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium block"
                    onClick={() => !item.submenu && setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                  
                  {/* Mobile Submenu */}
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="text-gray-600 hover:text-primary transition-colors duration-200 block text-sm"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          • {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="flex flex-col space-y-3 mt-4 pt-4 border-t border-border">
                <div className="flex items-center space-x-2 text-primary font-semibold">
                  <Phone size={20} />
                  <span>Llamenos</span>
                </div>
                <LanguageSwitcher />
                <Button className="bg-gradient-primary hover:bg-primary-dark text-primary-foreground font-semibold px-6 py-2 shadow-golden w-full">
                  ¡Agende su cita hoy!
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