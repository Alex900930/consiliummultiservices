import { Phone, Mail, MapPin, Clock } from "lucide-react";
import consiliumLogo from "@/assets/consilium-logo.png";
import { openWhatsAppForAppointment } from '@/lib/whatsapp-utils';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "footer.home", href: "#inicio" },
   /*  { name: "footer.about", href: "#nosotros" }, */
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
    <footer id="contacto" className="bg-gradient">
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
            <p className=" leading-relaxed">
              {t('footer.specialists')}
            </p>
            <div className="text-primary font-semibold italic">
              "{t('footer.trust')}"
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary">{t('footer.contactUs')}</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">{t('footer.phones')}</div>
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
                  <div className="font-medium">{t('footer.email')}:</div>
                  <a href="mailto:info@consiliumgrpg.com" className=" hover:text-primary transition-colors">
                    info@consiliumgrpg.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">{t('footer.location')}</div>
                  <div className="">
                    Miami - Florida, 33166, US
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">{t('footer.schedule')}</div>
                  <div className="">
                    {t('footer.scheduleWeekdays')}<br />
                    {t('footer.scheduleSaturday')}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className=" hover:text-primary transition-colors hover:underline"
                  >
                    {t(link.name)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary">{t('footer.services')}</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="hover:text-primary transition-colors hover:underline"
                  >
                    {t(service.name)}
                  </a>
                </li>
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
        <div className="border-t border-gray-500 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className=" text-sm">
              © {currentYear} Consilium Multiservices LLC. {t('footer.rights')}.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/politicaPrivacidad" className=" hover:text-primary transition-colors">
                {t('footer.privacyPolicy')}
              </a>
              <a href="/avisoLegal" className=" hover:text-primary transition-colors">
                {t('footer.legalNotice')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;