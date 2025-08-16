import { UserCheck, ClipboardList, Cog, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button'; // <-- 1. IMPORTA EL BOTÓN

const Process = () => {
  const { t } = useTranslation();

  const processSteps = [
    {
      icon: UserCheck,
      title: t('process.consultation.title'),
      description: t('process.consultation.description')
    },
    {
      icon: ClipboardList,
      title: t('process.strategy.title'),
      description: t('process.strategy.description')
    },
    {
      icon: Cog,
      title: t('process.implementation.title'),
      description: t('process.implementation.description')
    },
    {
      icon: TrendingUp,
      title: t('process.reports.title'),
      description: t('process.reports.description')
    }
  ];

  return (
    <section id="proceso" className="py-20 lg:py-28 bg-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            {t('process.title')}
          </h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            {t('process.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon; 
            return (
              <div key={index} className="bg-gray-50/70 p-8 rounded-xl border border-gray-200/80 hover:shadow-lg hover:border-gray-300 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground shadow-md">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                  </div>
                </div>
                <p className="text-gray-800 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* --- INICIO DEL NUEVO BOTÓN CTA --- */}
        {/* 2. AÑADE ESTE BLOQUE COMPLETO */}
        <div className="mt-16 text-center">
          <Button 
            asChild 
            size="lg" 
            className="w-full sm:w-auto bg-gradient-primary hover:bg-primary-dark text-primary-foreground font-semibold shadow-golden"
          >
            <a href="/#contacto">
              {t('process.ctaButton')}
            </a>
          </Button>
        </div>
        {/* --- FIN DEL NUEVO BOTÓN CTA --- */}

      </div>
    </section>
  );
};

export default Process;