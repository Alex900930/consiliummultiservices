// 1. Importa los iconos de Facebook e Instagram
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import consiliumLogo from "@/assets/consilium-logo.png";
import { openWhatsAppForAppointment } from '@/lib/whatsapp-utils';
import { useTranslation } from 'react-i18next';

// 2. Define los enlaces a las redes sociales para fácil mantenimiento
const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/ConsiliumMultiservices?mibextid=wwXIfr',
    icon: Facebook
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/consilium_multiservices?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D',
    icon: Instagram
  }
];

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "footer.home", href: "#inicio" },
    { name: "footer.accountingServices", href: "#servicios" },
    { name: "footer.team", href: "#equipo" },
    { name: "footer.testimonials", href: "#testimonios" },
    { name: "footer.contact", href: "contacto" },
  ];

  const services = [
    { name: "footer.monthlyBookkeeping", href: "#servicios" },
    { name: "footer.receivablesPayables", href: "#servicios" },
    { name: "footer.basicPayroll", href: "#servicios" },
    { name: "footer.taxPresentation", href: "#servicios" },
    { name: "footer.consulting", href: "#servicios" },
    { name: "footer.premiumServices", href: "#servicios" },
  ];

  return (
    <footer id="contacto" className="bg-gradient text-white"> {/* Aseguramos texto blanco base */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <img src={consiliumLogo} alt="Consilium Multiservices LLC" className="h-12 w-20" />
              <div className="text-lg font-bold">
                CONSILIUM<br />MULTISERVICES LLC
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {t('footer.specialists')}
            </p>
            <div className="text-primary font-semibold italic">
              "{t('footer.trust')}"
            </div>
            {/* 3. Agrega los iconos de redes sociales aquí */}
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visita nuestro ${social.name}`}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info (sin cambios) */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary">{t('footer.contactUs')}</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-white">{t('footer.phones')}</div>
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
                  <div className="font-medium text-white">{t('footer.email')}:</div>
                  <a href="mailto:info@consiliumgrpg.com" className="hover:text-primary transition-colors">
                    info@consiliumgrpg.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-white">{t('footer.location')}</div>
                  <div className="">Miami - Florida, 33166, US</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-white">{t('footer.schedule')}</div>
                  <div className="">
                    {t('footer.scheduleWeekdays')}<br />
                    {t('footer.scheduleSaturday')}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links y Services (sin cambios, solo ajuste de color) */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3 text-gray-300">
              {quickLinks.map((link, index) => (
                <li key={index}><a href={link.href} className="hover:text-primary transition-colors hover:underline">{t(link.name)}</a></li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary">{t('footer.services')}</h3>
            <ul className="space-y-3 text-gray-300">
              {services.map((service, index) => (
                <li key={index}><a href={service.href} className="hover:text-primary transition-colors hover:underline">{t(service.name)}</a></li>
              ))}
            </ul>
            <div className="pt-4">
              <button 
                className="bg-gradient-primary hover:bg-primary-dark text-primary-foreground font-semibold px-6 py-3 rounded-lg shadow-golden hover:scale-105 transition-all duration-300 w-full"
                onClick={openWhatsAppForAppointment}
              >
                {t('nav.scheduleAppointment')}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 text-gray-400">
            <div className="text-sm">
              © {currentYear} Consilium Multiservices LLC. {t('footer.rights')}.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/politicaPrivacidad" className="hover:text-primary transition-colors">
                {t('footer.privacyPolicy')}
              </a>
              <a href="/avisoLegal" className="hover:text-primary transition-colors">
                {t('footer.legalNotice')}
              </a>
            </div>
          </div>

          {/* 4. Agrega tu crédito como desarrollador aquí */}
          <div className="text-center mt-8 pt-4 border-t border-gray-800">
            <a 
              href="https://portafolioalexdev2025.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer author"
              className="text-sm text-gray-500 hover:text-primary transition-colors"
            >
              Sitio web desarrollado por Alexander Herrera Millet
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;