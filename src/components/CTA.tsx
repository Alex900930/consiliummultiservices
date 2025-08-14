import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, Shield, Users } from "lucide-react";
import { openWhatsAppForAppointment, openWhatsAppForConsultation } from "@/lib/whatsapp-utils";
import { useTranslation } from "react-i18next"; // 1. Importa el hook

const CTA = () => {
  const { t } = useTranslation(); // 2. Llama al hook

  return (
    <section className="py-20 lg:py-32 bg-gradient-hero text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-primary/30 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-primary/20 rounded-full"></div>
        <div className="absolute bottom-20 left-32 w-24 h-24 border border-primary/30 rounded-full"></div>
        <div className="absolute bottom-32 right-10 w-12 h-12 bg-primary/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* 3. Reemplaza los textos fijos con la función t() */}
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
            {t('cta-section.title.line1')}
            <span className="text-primary block">{t('cta-section.title.line2')}</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto">
            {t('cta-section.subtitle')}
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto my-12">
            <div className="text-center space-y-2">
              <Calculator className="w-8 h-8 text-primary mx-auto" />
              <div className="text-sm text-gray-300">{t('cta-section.feature1.title')}</div>
              <div className="font-semibold">{t('cta-section.feature1.description')}</div>
            </div>
            <div className="text-center space-y-2">
              <Shield className="w-8 h-8 text-primary mx-auto" />
              <div className="text-sm text-gray-300">{t('cta-section.feature2.title')}</div>
              <div className="font-semibold">{t('cta-section.feature2.description')}</div>
            </div>
            <div className="text-center space-y-2">
              <Users className="w-8 h-8 text-primary mx-auto" />
              <div className="text-sm text-gray-300">{t('cta-section.feature3.title')}</div>
              <div className="font-semibold">{t('cta-section.feature3.description')}</div>
            </div>
          </div>

          <div className="space-y-4 lg:space-y-0 lg:space-x-6 lg:flex lg:justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:bg-primary-dark text-primary-foreground font-bold px-10 py-4 text-lg shadow-golden transform hover:scale-105 transition-all duration-300"
              onClick={openWhatsAppForAppointment}
            >
              {t('cta-section.button.appointment')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-primary font-semibold px-8 py-4 text-lg backdrop-blur-sm"
              onClick={openWhatsAppForConsultation}
            >
              {t('cta-section.button.call')}
            </Button>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-300 text-sm mb-4">
              {t('cta-section.socialProof.join')}
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-xs">⭐⭐⭐⭐⭐ {t('cta-section.socialProof.rating')}</div>
              <div className="text-xs">• {t('cta-section.socialProof.services')}</div>
              <div className="text-xs">• {t('cta-section.socialProof.response')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;