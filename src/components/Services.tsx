import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';
import bookkeepingIcon from "@/assets/icons/bookkeeping.png";
import accountsIcon from "@/assets/icons/accounts.png";
import payrollIcon from "@/assets/icons/payroll.png";
import taxesIcon from "@/assets/icons/taxes.png";
import consultingIcon from "@/assets/icons/consulting.png";
import premiumIcon from "@/assets/icons/premium.png";

const Services = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: bookkeepingIcon,
      title: t('services.bookkeeping.title'),
      description: t('services.bookkeeping.description'),
      features: ["Conciliación bancaria", "Estados financieros", "Reportes mensuales", "Análisis de flujo de caja"]
    },
    {
      icon: accountsIcon,
      title: t('services.accounting.title'),
      description: t('services.accounting.description'),
      features: ["Cuentas por cobrar", "Cuentas por pagar", "Facturación", "Seguimiento de pagos"]
    },
    {
      icon: payrollIcon,
      title: t('services.payroll.title'),
      description: t('services.payroll.description'),
      features: ["Procesamiento de nómina", "Cálculo de impuestos", "Depósitos directos", "Reportes de empleados"]
    },
    {
      icon: taxesIcon,
      title: t('services.taxes.title'),
      description: t('services.taxes.description'),
      features: ["Form 1040", "Form 1065", "Form 1120-S", "Sales Tax"]
    },
    {
      icon: consultingIcon,
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      features: ["Configuración inicial", "Optimización de procesos", "Asesoría estratégica", "Planificación fiscal"]
    },
    {
      icon: premiumIcon,
      title: t('services.premium.title'),
      description: t('services.premium.description'),
      features: ["CFO Virtual", "Representación ante IRS", "Reportes premium", "Auditorías internas"]
    }
  ];

  return (
    <section id="servicios" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('services.title')} <span className="text-primary">{t('services.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('services.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-gradient-card border-0">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 p-3 bg-primary/10 rounded-2xl group-hover:bg-gradient-primary group-hover:scale-110 transition-all duration-300">
                  <img src={service.icon} alt={service.title} className="w-full h-full object-contain" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            ¿No encuentras lo que necesitas? Contáctanos para servicios personalizados.
          </p>
          <button className="bg-gradient-primary hover:bg-primary-dark text-primary-foreground font-semibold px-8 py-3 rounded-lg shadow-golden hover:scale-105 transition-all duration-300">
            Consulta personalizada gratuita
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;