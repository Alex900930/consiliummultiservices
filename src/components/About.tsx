import { Check } from "lucide-react";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  
  const features = [
    t('about.feature1'),
    t('about.feature2'),
    t('about.feature3')
  ];

  return (
    <section id="nosotros" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                {t('about.title')}
                <span className="text-primary"> {t('about.titleHighlight')}</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.description')}
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-primary-foreground" />
                  </div>
                  <span className="text-lg text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <blockquote className="text-2xl lg:text-3xl font-semibold text-foreground italic border-l-4 border-primary pl-6">
                "{t('about.quote')}"
              </blockquote>
              <cite className="text-primary font-medium mt-2 block">
                {t('about.quoteAuthor')}
              </cite>
            </div>
          </div>

          <div className="relative">
            {/* Team Image */}
            <div className="mb-8">
              <img 
                src="/lovable-uploads/176efbeb-37d5-4aea-b8e1-aff42adfb95f.png" 
                alt="Equipo Consilium Multiservices LLC"
                className="w-full h-auto rounded-2xl shadow-elegant"
              />
            </div>
            
            <div className="bg-gradient-card rounded-2xl p-8 lg:p-12 shadow-elegant">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-6xl lg:text-7xl font-bold text-primary mb-2">15+</div>
                  <div className="text-lg text-muted-foreground">{t('about.experience')}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-foreground">{t('about.location')}</div>
                    <div className="text-sm text-muted-foreground">{t('about.locationSub')}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">{t('about.support')}</div>
                    <div className="text-sm text-muted-foreground">{t('about.supportSub')}</div>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                    <span className="text-sm font-medium text-primary">{t('about.certified')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;