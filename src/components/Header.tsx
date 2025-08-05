import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useTranslation } from 'react-i18next';
import consiliumLogo from "@/assets/consilium-logo.png"; // Asegúrate de que la ruta del logo es correcta
import LanguageSwitcher from "./LanguageSwitcher";

// --- DATOS DE NAVEGACIÓN ENFOCADOS EN CONTABILIDAD ---

// 1. Definimos la lista de servicios principales para el menú desplegable.
const accountingServices = [
  { name: "Bookkeeping Mensual", href: "#bookkeeping" },
  { name: "Cuentas por Cobrar y Pagar", href: "#cuentas" },
  { name: "Payroll Básico", href: "#payroll" },
  { name: "Presentación de Taxes", href: "#taxes" },
  { name: "Consultoría y Asesoría", href: "#consultoria" },
  { name: "Servicios Premium", href: "#premium" }
];

// 2. Definimos los elementos principales del menú.
const navItems = [
  { name: "Inicio", href: "#inicio" },
  { 
    name: "Servicios", // Un nombre más corto y directo
    href: "#servicios",
    submenu: accountingServices // Asignamos los servicios definidos arriba
  },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Contacto", href: "#contacto" },
];


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation(); // Mantenemos t para futuros usos o si los nombres cambian

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#inicio" className="flex-shrink-0">
              <img src={consiliumLogo} alt="Consilium Multiservices LLC Logo" className="h-14 sm:h-16 w-auto" />
            </a>

            {/* ====== NAVEGACIÓN DE ESCRITORIO ====== */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <a href={item.href} className="text-foreground hover:text-primary transition-colors duration-200 font-medium flex items-center space-x-1">
                    <span>{t(item.name)}</span>
                    {item.submenu && <ChevronDown className="w-4 h-4" />}
                  </a>
                  
                  {/* El menú desplegable ahora usa la lista de servicios de contabilidad */}
                  {item.submenu && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <a key={subItem.name} href={subItem.href} className="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary">
                            {t(subItem.name)}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="hidden lg:flex items-center space-x-4">
              <a href="tel:TU-NUMERO-DE-TELEFONO" className="flex items-center space-x-2 text-primary font-semibold hover:text-primary/80">
                <Phone size={20} />
                <span>Llámenos</span>
              </a>
              <LanguageSwitcher />
              <Button asChild className="bg-gradient-primary hover:bg-primary-dark text-primary-foreground font-semibold px-6 py-2 shadow-golden">
                <a href="#contacto">¡Agende su cita hoy!</a>
              </Button>
            </div>
            
            {/* ====== CONTROLES MÓVILES ====== */}
            <div className="lg:hidden flex items-center space-x-3 sm:space-x-4">
              <LanguageSwitcher />
              <a href="tel:TU-NUMERO-DE-TELEFONO" className="text-foreground hover:text-primary">
                <Phone size={24} />
              </a>
              <button onClick={() => setIsMenuOpen(true)} className="text-foreground">
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ====== PANEL DE MENÚ MÓVIL (OVERLAY) ====== */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-background z-50 flex flex-col p-4">
          <div className="flex items-center justify-between pb-4 border-b border-border">
            <a href="#inicio" onClick={() => setIsMenuOpen(false)}>
              <img src={consiliumLogo} alt="Consilium Multiservices LLC Logo" className="h-14 w-auto" />
            </a>
            <button onClick={() => setIsMenuOpen(false)} className="text-foreground">
              <X size={30} />
            </button>
          </div>

          <nav className="flex-grow flex flex-col items-center justify-center space-y-6">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
              >
                {t(item.name)}
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-border">
            <Button asChild size="lg" className="w-full bg-gradient-primary hover:bg-primary-dark text-primary-foreground font-semibold shadow-golden">
              <a href="#contacto" onClick={() => setIsMenuOpen(false)}>¡Agende su cita hoy!</a>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;