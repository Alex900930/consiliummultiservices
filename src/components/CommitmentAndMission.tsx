import { Shield, Clock, MessageSquare, GitBranch, Target, Eye } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button'; // <-- 1. IMPORTA EL BOTÓN

const CommitmentAndMission = () => {
  const { t } = useTranslation();

  // --- DATOS PARA MISIÓN Y VISIÓN ---
  const missionVisionData = [
    {
      icon: Target,
      title: t('commitment.mission.title'),
      description: t('commitment.mission.description')
    },
    {
      icon: Eye,
      title: t('commitment.vision.title'),
      description: t('commitment.vision.description')
    }
  ];

  // --- DATOS DE NUESTROS COMPROMISOS ---
  const commitments = [
    {
      icon: Shield,
      title: t('commitment.transparency.title'),
      description: t('commitment.transparency.description')
    },
    {
      icon: Clock,
      title: t('commitment.proactivity.title'),
      description: t('commitment.proactivity.description')
    },
    {
      icon: MessageSquare,
      title: t('commitment.communication.title'),
      description: t('commitment.communication.description')
    },
    {
      icon: GitBranch,
      title: t('commitment.solutions.title'),
      description: t('commitment.solutions.description')
    }
  ];
  
  return (
    <>
      {/* ====== SECCIÓN: MISIÓN Y VISIÓN ====== */}
      <section id="mision-vision" className="py-20 lg:py-28 bg-gradient">
        <div className="container mx-auto px-4 flex flex-col justify-center items-center">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {missionVisionData.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-primary text-white rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold ">{item.title}</h2>
                <p className="mt-4 text-base max-w-lg leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="pt-10">
                <Button 
                  asChild 
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-primary hover:bg-primary-dark text-primary-foreground font-semibold shadow-golden"
                >
                  <a href="/#contacto">
                    {t('commitment.ctaButton')}
                  </a>
                </Button>
              </div>
        </div>
      </section>

      {/* ====== SECCIÓN DE COMPROMISO ====== */}
      <section id="compromiso" className="relative py-20 lg:py-28 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="w-full">
              <img
                src="/yainie-consilium-confianza.png"
                alt="Yainier Consillium, CEO de Consilium Multiservices"
                className="rounded-xl shadow-2xl object-cover w-full h-full"
              />
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  {t('commitment.title')}
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {t('commitment.subtitle')}
                </p>
              </div>
              <div className="space-y-6 pt-4">
                {commitments.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* --- INICIO DEL NUEVO BOTÓN CTA --- */}
              {/* 2. AÑADE ESTE BLOQUE COMPLETO */}
              <div className="pt-6">
                <Button 
                  asChild 
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-primary hover:bg-primary-dark text-primary-foreground font-semibold shadow-golden"
                >
                  <a href="/#contacto">
                    {t('commitment.ctaButton')}
                  </a>
                </Button>
              </div>
              {/* --- FIN DEL NUEVO BOTÓN CTA --- */}

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommitmentAndMission;