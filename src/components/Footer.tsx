import { Phone, Mail, MapPin, Clock } from "lucide-react";
import consiliumLogo from "@/assets/consilium-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Servicios Contables", href: "#servicios" },
    { name: "Equipo", href: "#equipo" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "Contacto", href: "#contacto" },
  ];

  const services = [
    { name: "Bookkeeping Mensual", href: "#servicios" },
    { name: "Cuentas por Cobrar y Pagar", href: "#servicios" },
    { name: "Payroll Básico", href: "#servicios" },
    { name: "Presentación de Taxes", href: "#servicios" },
    { name: "Consultoría y Asesoría", href: "#servicios" },
    { name: "Servicios Premium", href: "#servicios" },
  ];

  return (
    <footer id="contacto" className="bg-gradient">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <img src={consiliumLogo} alt="Consilium Multiservices LLC" className="h-12 w-12" />
              <div className="text-lg font-bold">
                CONSILIUM<br />MULTISERVICES LLC
              </div>
            </div>
            <p className=" leading-relaxed">
              Especialistas en servicios de bookkeeping, contabilidad y asesoría para contratistas, 
              pequeños negocios y emprendedores.
            </p>
            <div className="text-primary font-semibold italic">
              "Su confianza es nuestro compromiso"
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary">Contáctenos</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">Teléfonos:</div>
                  <div className=" space-y-1">
                    <div>+1 786 599-0462</div>
                    <div>+1 806 421-3785</div>
                    <div>+1 786 843-1428</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <div className="font-medium">Email:</div>
                  <a href="mailto:info@consiliumgrpg.com" className=" hover:text-primary transition-colors">
                    info@consiliumgrpg.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">Ubicación:</div>
                  <div className="">
                    Miami - Florida, 33166, US
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">Horarios:</div>
                  <div className="">
                    Lun - Vie: 9:00 AM - 6:00 PM<br />
                    Sáb: 10:00 AM - 2:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className=" hover:text-primary transition-colors hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary">Servicios Contables</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="hover:text-primary transition-colors hover:underline"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <button className="bg-gradient-primary hover:bg-primary-dark text-primary-foreground font-semibold px-6 py-3 rounded-lg shadow-golden hover:scale-105 transition-all duration-300 w-full">
                ¡Agende su cita hoy!
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-500 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className=" text-sm">
              © {currentYear} Consilium Multiservices LLC. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/politica-privacidad" className=" hover:text-primary transition-colors">
                Políticas de Privacidad
              </a>
              <a href="/aviso-legal" className=" hover:text-primary transition-colors">
                Aviso Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;